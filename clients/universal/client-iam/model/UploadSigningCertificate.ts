import { UploadSigningCertificateInput } from "./UploadSigningCertificateInput";
import { UploadSigningCertificateOutput } from "./UploadSigningCertificateOutput";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { InvalidCertificateException } from "./InvalidCertificateException";
import { DuplicateCertificateException } from "./DuplicateCertificateException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadSigningCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadSigningCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UploadSigningCertificateInput
  },
  output: {
    shape: UploadSigningCertificateOutput,
    resultWrapper: "UploadSigningCertificateResult"
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
      shape: InvalidCertificateException
    },
    {
      shape: DuplicateCertificateException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
