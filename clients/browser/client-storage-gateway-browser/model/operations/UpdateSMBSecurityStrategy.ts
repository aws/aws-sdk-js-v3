import { UpdateSMBSecurityStrategyInput } from "../shapes/UpdateSMBSecurityStrategyInput";
import { UpdateSMBSecurityStrategyOutput } from "../shapes/UpdateSMBSecurityStrategyOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
