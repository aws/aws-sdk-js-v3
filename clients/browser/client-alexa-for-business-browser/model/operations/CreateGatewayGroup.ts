import { CreateGatewayGroupInput } from "../shapes/CreateGatewayGroupInput";
import { CreateGatewayGroupOutput } from "../shapes/CreateGatewayGroupOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGatewayGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGatewayGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGatewayGroupInput
  },
  output: {
    shape: CreateGatewayGroupOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
