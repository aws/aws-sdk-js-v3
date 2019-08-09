import { AddTagsToResourceInput } from "./AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./AddTagsToResourceOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddTagsToResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToResourceInput
  },
  output: {
    shape: AddTagsToResourceOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TagLimitExceededException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
