import { DeleteUploadInput } from "../shapes/DeleteUploadInput";
import { DeleteUploadOutput } from "../shapes/DeleteUploadOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUploadInput
  },
  output: {
    shape: DeleteUploadOutput
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
