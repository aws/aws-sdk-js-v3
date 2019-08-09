import { GetUploadInput } from "./GetUploadInput";
import { GetUploadOutput } from "./GetUploadOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUpload",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUploadInput
  },
  output: {
    shape: GetUploadOutput
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
