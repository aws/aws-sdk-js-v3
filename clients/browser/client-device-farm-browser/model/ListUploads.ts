import { ListUploadsInput } from "./ListUploadsInput";
import { ListUploadsOutput } from "./ListUploadsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUploads: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUploads",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUploadsInput
  },
  output: {
    shape: ListUploadsOutput
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
