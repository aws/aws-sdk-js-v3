import { DeregisterEventTopicInput } from "../shapes/DeregisterEventTopicInput";
import { DeregisterEventTopicOutput } from "../shapes/DeregisterEventTopicOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
