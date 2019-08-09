import { UploadServerCertificateInput } from "./UploadServerCertificateInput";
import { UploadServerCertificateOutput } from "./UploadServerCertificateOutput";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { KeyPairMismatchException } from "./KeyPairMismatchException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
