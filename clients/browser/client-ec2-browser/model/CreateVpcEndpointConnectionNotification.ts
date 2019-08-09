import { CreateVpcEndpointConnectionNotificationInput } from "./CreateVpcEndpointConnectionNotificationInput";
import { CreateVpcEndpointConnectionNotificationOutput } from "./CreateVpcEndpointConnectionNotificationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVpcEndpointConnectionNotification: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcEndpointConnectionNotification",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcEndpointConnectionNotificationInput
  },
  output: {
    shape: CreateVpcEndpointConnectionNotificationOutput
  },
  errors: []
};
