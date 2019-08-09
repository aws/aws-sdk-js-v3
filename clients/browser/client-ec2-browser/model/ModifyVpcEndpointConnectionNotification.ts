import { ModifyVpcEndpointConnectionNotificationInput } from "./ModifyVpcEndpointConnectionNotificationInput";
import { ModifyVpcEndpointConnectionNotificationOutput } from "./ModifyVpcEndpointConnectionNotificationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpcEndpointConnectionNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcEndpointConnectionNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcEndpointConnectionNotificationInput
  },
  output: {
    shape: ModifyVpcEndpointConnectionNotificationOutput
  },
  errors: []
};
