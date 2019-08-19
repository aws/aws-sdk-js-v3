import { ImportClientVpnClientCertificateRevocationListInput } from "../shapes/ImportClientVpnClientCertificateRevocationListInput";
import { ImportClientVpnClientCertificateRevocationListOutput } from "../shapes/ImportClientVpnClientCertificateRevocationListOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportClientVpnClientCertificateRevocationList: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportClientVpnClientCertificateRevocationList",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportClientVpnClientCertificateRevocationListInput
  },
  output: {
    shape: ImportClientVpnClientCertificateRevocationListOutput
  },
  errors: []
};
