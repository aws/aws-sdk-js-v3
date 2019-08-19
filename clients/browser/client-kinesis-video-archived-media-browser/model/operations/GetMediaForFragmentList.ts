import { GetMediaForFragmentListInput } from "../shapes/GetMediaForFragmentListInput";
import { GetMediaForFragmentListOutput } from "../shapes/GetMediaForFragmentListOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMediaForFragmentList: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMediaForFragmentList",
  http: {
    method: "POST",
    requestUri: "/getMediaForFragmentList"
  },
  input: {
    shape: GetMediaForFragmentListInput
  },
  output: {
    shape: GetMediaForFragmentListOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ClientLimitExceededException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
