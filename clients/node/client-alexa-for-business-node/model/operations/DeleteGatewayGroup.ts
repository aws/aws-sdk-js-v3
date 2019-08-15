import { DeleteGatewayGroupInput } from "../shapes/DeleteGatewayGroupInput";
import { DeleteGatewayGroupOutput } from "../shapes/DeleteGatewayGroupOutput";
import { ResourceAssociatedException } from "../shapes/ResourceAssociatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGatewayGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGatewayGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGatewayGroupInput
  },
  output: {
    shape: DeleteGatewayGroupOutput
  },
  errors: [
    {
      shape: ResourceAssociatedException
    }
  ]
};
