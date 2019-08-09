import { CreateGatewayGroupInput } from "./CreateGatewayGroupInput";
import { CreateGatewayGroupOutput } from "./CreateGatewayGroupOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
