import { UpdateUploadInput } from "./UpdateUploadInput";
import { UpdateUploadOutput } from "./UpdateUploadOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUploadInput
  },
  output: {
    shape: UpdateUploadOutput
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
