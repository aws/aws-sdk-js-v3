import { ExportClientVpnClientCertificateRevocationListInput } from "../shapes/ExportClientVpnClientCertificateRevocationListInput";
import { ExportClientVpnClientCertificateRevocationListOutput } from "../shapes/ExportClientVpnClientCertificateRevocationListOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportClientVpnClientCertificateRevocationList: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportClientVpnClientCertificateRevocationList",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportClientVpnClientCertificateRevocationListInput
  },
  output: {
    shape: ExportClientVpnClientCertificateRevocationListOutput
  },
  errors: []
};
