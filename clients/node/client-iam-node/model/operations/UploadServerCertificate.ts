import { UploadServerCertificateInput } from "../shapes/UploadServerCertificateInput";
import { UploadServerCertificateOutput } from "../shapes/UploadServerCertificateOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { MalformedCertificateException } from "../shapes/MalformedCertificateException";
import { KeyPairMismatchException } from "../shapes/KeyPairMismatchException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UploadServerCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadServerCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UploadServerCertificateInput
  },
  output: {
    shape: UploadServerCertificateOutput,
    resultWrapper: "UploadServerCertificateResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: MalformedCertificateException
    },
    {
      shape: KeyPairMismatchException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
