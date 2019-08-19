import { UpdateEventConfigurationsInput } from "../shapes/UpdateEventConfigurationsInput";
import { UpdateEventConfigurationsOutput } from "../shapes/UpdateEventConfigurationsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
