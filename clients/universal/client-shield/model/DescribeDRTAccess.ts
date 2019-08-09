import { DescribeDRTAccessInput } from "./DescribeDRTAccessInput";
import { DescribeDRTAccessOutput } from "./DescribeDRTAccessOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDRTAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDRTAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDRTAccessInput
  },
  output: {
    shape: DescribeDRTAccessOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
