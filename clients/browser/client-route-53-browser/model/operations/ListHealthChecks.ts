import { ListHealthChecksInput } from "../shapes/ListHealthChecksInput";
import { ListHealthChecksOutput } from "../shapes/ListHealthChecksOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { IncompatibleVersion } from "../shapes/IncompatibleVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
