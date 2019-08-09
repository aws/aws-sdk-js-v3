import { DeleteVpcEndpointConnectionNotificationsInput } from "./DeleteVpcEndpointConnectionNotificationsInput";
import { DeleteVpcEndpointConnectionNotificationsOutput } from "./DeleteVpcEndpointConnectionNotificationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVpcEndpointConnectionNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcEndpointConnectionNotifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcEndpointConnectionNotificationsInput
  },
  output: {
    shape: DeleteVpcEndpointConnectionNotificationsOutput
  },
  errors: []
};
