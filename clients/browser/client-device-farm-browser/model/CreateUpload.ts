import { CreateUploadInput } from "./CreateUploadInput";
import { CreateUploadOutput } from "./CreateUploadOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUploadInput
  },
  output: {
    shape: CreateUploadOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
