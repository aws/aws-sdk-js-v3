import { RegisterEventTopicInput } from "./RegisterEventTopicInput";
import { RegisterEventTopicOutput } from "./RegisterEventTopicOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
