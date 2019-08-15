import { CreateServiceActionInput } from "../shapes/CreateServiceActionInput";
import { CreateServiceActionOutput } from "../shapes/CreateServiceActionOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServiceActionInput
  },
  output: {
    shape: CreateServiceActionOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    }
  ]
};
