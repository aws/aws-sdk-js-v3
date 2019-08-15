import { ListGatewayGroupsInput } from "../shapes/ListGatewayGroupsInput";
import { ListGatewayGroupsOutput } from "../shapes/ListGatewayGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGatewayGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGatewayGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGatewayGroupsInput
  },
  output: {
    shape: ListGatewayGroupsOutput
  },
  errors: []
};
