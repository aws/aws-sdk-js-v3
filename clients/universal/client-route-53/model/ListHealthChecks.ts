import { ListHealthChecksInput } from "./ListHealthChecksInput";
import { ListHealthChecksOutput } from "./ListHealthChecksOutput";
import { InvalidInput } from "./InvalidInput";
import { IncompatibleVersion } from "./IncompatibleVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListHealthChecks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHealthChecks",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/healthcheck"
  },
  input: {
    shape: ListHealthChecksInput
  },
  output: {
    shape: ListHealthChecksOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: IncompatibleVersion
    }
  ]
};
