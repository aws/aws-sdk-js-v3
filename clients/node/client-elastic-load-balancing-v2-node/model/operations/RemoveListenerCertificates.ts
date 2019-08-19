import { RemoveListenerCertificatesInput } from "../shapes/RemoveListenerCertificatesInput";
import { RemoveListenerCertificatesOutput } from "../shapes/RemoveListenerCertificatesOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveListenerCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveListenerCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveListenerCertificatesInput
  },
  output: {
    shape: RemoveListenerCertificatesOutput,
    resultWrapper: "RemoveListenerCertificatesResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
