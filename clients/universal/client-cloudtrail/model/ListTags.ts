import { ListTagsInput } from "./ListTagsInput";
import { ListTagsOutput } from "./ListTagsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidTokenException } from "./InvalidTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
