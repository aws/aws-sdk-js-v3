import { StartSmartHomeApplianceDiscoveryInput } from "./StartSmartHomeApplianceDiscoveryInput";
import { StartSmartHomeApplianceDiscoveryOutput } from "./StartSmartHomeApplianceDiscoveryOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSmartHomeApplianceDiscovery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSmartHomeApplianceDiscovery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartSmartHomeApplianceDiscoveryInput
  },
  output: {
    shape: StartSmartHomeApplianceDiscoveryOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
