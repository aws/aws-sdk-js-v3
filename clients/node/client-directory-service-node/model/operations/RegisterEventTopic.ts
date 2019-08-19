import { RegisterEventTopicInput } from "../shapes/RegisterEventTopicInput";
import { RegisterEventTopicOutput } from "../shapes/RegisterEventTopicOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterEventTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterEventTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterEventTopicInput
  },
  output: {
    shape: RegisterEventTopicOutput
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
