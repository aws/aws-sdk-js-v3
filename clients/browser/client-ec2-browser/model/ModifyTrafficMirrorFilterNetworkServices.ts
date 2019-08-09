import { ModifyTrafficMirrorFilterNetworkServicesInput } from "./ModifyTrafficMirrorFilterNetworkServicesInput";
import { ModifyTrafficMirrorFilterNetworkServicesOutput } from "./ModifyTrafficMirrorFilterNetworkServicesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyTrafficMirrorFilterNetworkServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTrafficMirrorFilterNetworkServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTrafficMirrorFilterNetworkServicesInput
  },
  output: {
    shape: ModifyTrafficMirrorFilterNetworkServicesOutput
  },
  errors: []
};
