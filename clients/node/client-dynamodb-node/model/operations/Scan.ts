import { ScanInput } from "../shapes/ScanInput";
import { ScanOutput } from "../shapes/ScanOutput";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestLimitExceeded } from "../shapes/RequestLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Scan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Scan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ScanInput
  },
  output: {
    shape: ScanOutput
  },
  errors: [
    {
      shape: ProvisionedThroughputExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RequestLimitExceeded
    },
    {
      shape: InternalServerError
    }
  ]
};
