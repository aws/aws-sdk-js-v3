import { RemoveTagsInput } from "./RemoveTagsInput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CloudTrailARNInvalidException } from "./CloudTrailARNInvalidException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
