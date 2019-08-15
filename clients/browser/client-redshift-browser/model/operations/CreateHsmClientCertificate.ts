import { CreateHsmClientCertificateInput } from "../shapes/CreateHsmClientCertificateInput";
import { CreateHsmClientCertificateOutput } from "../shapes/CreateHsmClientCertificateOutput";
import { HsmClientCertificateAlreadyExistsFault } from "../shapes/HsmClientCertificateAlreadyExistsFault";
import { HsmClientCertificateQuotaExceededFault } from "../shapes/HsmClientCertificateQuotaExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
