import { RemoveTagsFromResourceInput } from "../shapes/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../shapes/RemoveTagsFromResourceOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromResourceInput
  },
  output: {
    shape: RemoveTagsFromResourceOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
