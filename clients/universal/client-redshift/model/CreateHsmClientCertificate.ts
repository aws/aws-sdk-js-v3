import { CreateHsmClientCertificateInput } from "./CreateHsmClientCertificateInput";
import { CreateHsmClientCertificateOutput } from "./CreateHsmClientCertificateOutput";
import { HsmClientCertificateAlreadyExistsFault } from "./HsmClientCertificateAlreadyExistsFault";
import { HsmClientCertificateQuotaExceededFault } from "./HsmClientCertificateQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateHsmClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHsmClientCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateHsmClientCertificateInput
  },
  output: {
    shape: CreateHsmClientCertificateOutput,
    resultWrapper: "CreateHsmClientCertificateResult"
  },
  errors: [
    {
      shape: HsmClientCertificateAlreadyExistsFault
    },
    {
      shape: HsmClientCertificateQuotaExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
