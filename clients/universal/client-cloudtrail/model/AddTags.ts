import { AddTagsInput } from "./AddTagsInput";
import { AddTagsOutput } from "./AddTagsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { TagsLimitExceededException } from "./TagsLimitExceededException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsInput
  },
  output: {
    shape: AddTagsOutput
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
      shape: TagsLimitExceededException
    },
    {
      shape: InvalidTrailNameException
    },
    {
      shape: InvalidTagParameterException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: NotOrganizationMasterAccountException
    }
  ]
};
