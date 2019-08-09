import { StopContactInput } from "./StopContactInput";
import { StopContactOutput } from "./StopContactOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ContactNotFoundException } from "./ContactNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopContact",
  http: {
    method: "POST",
    requestUri: "/contact/stop"
  },
  input: {
    shape: StopContactInput
  },
  output: {
    shape: StopContactOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ContactNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
