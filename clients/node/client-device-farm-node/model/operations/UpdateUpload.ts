import { UpdateUploadInput } from "../shapes/UpdateUploadInput";
import { UpdateUploadOutput } from "../shapes/UpdateUploadOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
