import { CreateUploadInput } from "../shapes/CreateUploadInput";
import { CreateUploadOutput } from "../shapes/CreateUploadOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
