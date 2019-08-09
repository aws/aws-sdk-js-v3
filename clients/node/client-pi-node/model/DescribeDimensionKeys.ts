import { DescribeDimensionKeysInput } from "./DescribeDimensionKeysInput";
import { DescribeDimensionKeysOutput } from "./DescribeDimensionKeysOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceError } from "./InternalServiceError";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
