import { ScanInput } from "./ScanInput";
import { ScanOutput } from "./ScanOutput";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
