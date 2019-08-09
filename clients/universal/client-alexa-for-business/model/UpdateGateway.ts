import { UpdateGatewayInput } from "./UpdateGatewayInput";
import { UpdateGatewayOutput } from "./UpdateGatewayOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGatewayInput
  },
  output: {
    shape: UpdateGatewayOutput
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
