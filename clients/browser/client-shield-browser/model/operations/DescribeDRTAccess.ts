import { DescribeDRTAccessInput } from "../shapes/DescribeDRTAccessInput";
import { DescribeDRTAccessOutput } from "../shapes/DescribeDRTAccessOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
