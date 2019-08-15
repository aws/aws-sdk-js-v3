import { CreateLocationS3Input } from "../shapes/CreateLocationS3Input";
import { CreateLocationS3Output } from "../shapes/CreateLocationS3Output";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLocationS3: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLocationS3",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLocationS3Input
  },
  output: {
    shape: CreateLocationS3Output
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
