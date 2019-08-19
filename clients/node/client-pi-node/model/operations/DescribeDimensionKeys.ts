import { DescribeDimensionKeysInput } from "../shapes/DescribeDimensionKeysInput";
import { DescribeDimensionKeysOutput } from "../shapes/DescribeDimensionKeysOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDimensionKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDimensionKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDimensionKeysInput
  },
  output: {
    shape: DescribeDimensionKeysOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
