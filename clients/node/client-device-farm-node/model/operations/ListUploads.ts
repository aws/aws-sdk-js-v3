import { ListUploadsInput } from "../shapes/ListUploadsInput";
import { ListUploadsOutput } from "../shapes/ListUploadsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
