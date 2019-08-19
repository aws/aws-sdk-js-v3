import { GetTagsInput } from "../shapes/GetTagsInput";
import { GetTagsOutput } from "../shapes/GetTagsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTagsInput
  },
  output: {
    shape: GetTagsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: EntityNotFoundException
    }
  ]
};
