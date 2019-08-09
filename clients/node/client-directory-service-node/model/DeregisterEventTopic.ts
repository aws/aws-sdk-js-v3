import { DeregisterEventTopicInput } from "./DeregisterEventTopicInput";
import { DeregisterEventTopicOutput } from "./DeregisterEventTopicOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterEventTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterEventTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterEventTopicInput
  },
  output: {
    shape: DeregisterEventTopicOutput
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
