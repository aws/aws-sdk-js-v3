import { DeleteDeviceInput } from "./DeleteDeviceInput";
import { DeleteDeviceOutput } from "./DeleteDeviceOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeviceInput
  },
  output: {
    shape: DeleteDeviceOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidCertificateAuthorityException
    }
  ]
};
