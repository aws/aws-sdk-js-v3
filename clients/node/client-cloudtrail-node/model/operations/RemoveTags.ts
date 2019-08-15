import { RemoveTagsInput } from "../shapes/RemoveTagsInput";
import { RemoveTagsOutput } from "../shapes/RemoveTagsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "../shapes/CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "../shapes/ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { InvalidTagParameterException } from "../shapes/InvalidTagParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsInput
  },
  output: {
    shape: RemoveTagsOutput
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
