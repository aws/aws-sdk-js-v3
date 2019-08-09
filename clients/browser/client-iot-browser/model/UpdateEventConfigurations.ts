import { UpdateEventConfigurationsInput } from "./UpdateEventConfigurationsInput";
import { UpdateEventConfigurationsOutput } from "./UpdateEventConfigurationsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEventConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEventConfigurations",
  http: {
    method: "PATCH",
    requestUri: "/event-configurations"
  },
  input: {
    shape: UpdateEventConfigurationsInput
  },
  output: {
    shape: UpdateEventConfigurationsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
