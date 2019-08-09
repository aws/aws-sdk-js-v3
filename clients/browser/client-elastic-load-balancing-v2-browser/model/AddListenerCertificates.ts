import { AddListenerCertificatesInput } from "./AddListenerCertificatesInput";
import { AddListenerCertificatesOutput } from "./AddListenerCertificatesOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddListenerCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddListenerCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddListenerCertificatesInput
  },
  output: {
    shape: AddListenerCertificatesOutput,
    resultWrapper: "AddListenerCertificatesResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: TooManyCertificatesException
    },
    {
      shape: CertificateNotFoundException
    }
  ]
};
