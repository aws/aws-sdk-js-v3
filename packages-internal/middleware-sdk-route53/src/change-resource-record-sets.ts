import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

import { IDENTIFIER_PREFIX_PATTERN } from "./constants";

export interface Change {
  ResourceRecordSet: {
    AliasTarget?: {
      HostedZoneId: string;
    };
  };
}

export interface ChangeBatchBearer {
  ChangeBatch: {
    Changes: Iterable<Change>;
  };
}

export function changeResourceRecordSetsMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const { ChangeBatch } = args.input;
      const Changes: Array<Change> = [];
      for (const change of ChangeBatch.Changes) {
        const { AliasTarget } = change.ResourceRecordSet;
        if (AliasTarget) {
          Changes.push({
            ...change,
            ResourceRecordSet: {
              ...change.ResourceRecordSet,
              AliasTarget: {
                ...AliasTarget,
                HostedZoneId: AliasTarget.HostedZoneId.replace(IDENTIFIER_PREFIX_PATTERN, ""),
              },
            },
          });
        } else {
          Changes.push(change);
        }
      }

      return next({
        ...args,
        input: {
          ...(args.input as any),
          ChangeBatch: {
            ...ChangeBatch,
            Changes,
          },
        },
      });
    };
}

export const changeResourceRecordSetsMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["ROUTE53_IDS", "CHANGE_RESOURCE_RECORD_SETS"],
  name: "changeResourceRecordSetsMiddleware",
  override: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getChangeResourceRecordSetsPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(changeResourceRecordSetsMiddleware(), changeResourceRecordSetsMiddlewareOptions);
  },
});
