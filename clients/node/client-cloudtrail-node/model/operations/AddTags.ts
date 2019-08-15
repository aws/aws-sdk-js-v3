import { AddTagsInput } from "../shapes/AddTagsInput";
import { AddTagsOutput } from "../shapes/AddTagsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "../shapes/CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "../shapes/ResourceTypeNotSupportedException";
import { TagsLimitExceededException } from "../shapes/TagsLimitExceededException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidTagParameterException } from "../shapes/InvalidTagParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
