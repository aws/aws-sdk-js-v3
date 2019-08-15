import { UploadSigningCertificateInput } from "../shapes/UploadSigningCertificateInput";
import { UploadSigningCertificateOutput } from "../shapes/UploadSigningCertificateOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { MalformedCertificateException } from "../shapes/MalformedCertificateException";
import { InvalidCertificateException } from "../shapes/InvalidCertificateException";
import { DuplicateCertificateException } from "../shapes/DuplicateCertificateException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
