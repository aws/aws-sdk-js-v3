import { RemoveListenerCertificatesInput } from "./RemoveListenerCertificatesInput";
import { RemoveListenerCertificatesOutput } from "./RemoveListenerCertificatesOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
