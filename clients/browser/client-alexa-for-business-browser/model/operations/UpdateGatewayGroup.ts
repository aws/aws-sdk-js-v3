import { UpdateGatewayGroupInput } from "../shapes/UpdateGatewayGroupInput";
import { UpdateGatewayGroupOutput } from "../shapes/UpdateGatewayGroupOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGatewayGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGatewayGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGatewayGroupInput
  },
  output: {
    shape: UpdateGatewayGroupOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    }
  ]
};
