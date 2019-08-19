import { ListTagsInput } from "../shapes/ListTagsInput";
import { ListTagsOutput } from "../shapes/ListTagsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "../shapes/CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "../shapes/ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidTokenException } from "../shapes/InvalidTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsInput
  },
  output: {
    shape: ListTagsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: CloudTrailARNInvalidException
    },
    {
      shape: ResourceTypeNotSupportedException
    },
    {
      shape: InvalidTrailNameException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: InvalidTokenException
    }
  ]
};
