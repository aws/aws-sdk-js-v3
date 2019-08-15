import { StopContactInput } from "../shapes/StopContactInput";
import { StopContactOutput } from "../shapes/StopContactOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ContactNotFoundException } from "../shapes/ContactNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
