import { CreateLocationS3Input } from "./CreateLocationS3Input";
import { CreateLocationS3Output } from "./CreateLocationS3Output";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
