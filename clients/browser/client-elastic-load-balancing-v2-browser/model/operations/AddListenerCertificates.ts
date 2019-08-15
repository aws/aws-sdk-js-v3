import { AddListenerCertificatesInput } from "../shapes/AddListenerCertificatesInput";
import { AddListenerCertificatesOutput } from "../shapes/AddListenerCertificatesOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { TooManyCertificatesException } from "../shapes/TooManyCertificatesException";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
