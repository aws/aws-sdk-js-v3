import { GetMediaForFragmentListInput } from "./GetMediaForFragmentListInput";
import { GetMediaForFragmentListOutput } from "./GetMediaForFragmentListOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
