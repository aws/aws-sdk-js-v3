import { DeleteUploadInput } from "./DeleteUploadInput";
import { DeleteUploadOutput } from "./DeleteUploadOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
