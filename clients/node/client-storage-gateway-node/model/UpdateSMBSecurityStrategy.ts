import { UpdateSMBSecurityStrategyInput } from "./UpdateSMBSecurityStrategyInput";
import { UpdateSMBSecurityStrategyOutput } from "./UpdateSMBSecurityStrategyOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSMBSecurityStrategy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSMBSecurityStrategy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSMBSecurityStrategyInput
  },
  output: {
    shape: UpdateSMBSecurityStrategyOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
