import { ExportClientVpnClientConfigurationInput } from "./ExportClientVpnClientConfigurationInput";
import { ExportClientVpnClientConfigurationOutput } from "./ExportClientVpnClientConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ExportClientVpnClientConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportClientVpnClientConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportClientVpnClientConfigurationInput
  },
  output: {
    shape: ExportClientVpnClientConfigurationOutput
  },
  errors: []
};
