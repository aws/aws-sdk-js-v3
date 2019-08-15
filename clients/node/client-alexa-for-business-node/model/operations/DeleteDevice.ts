import { DeleteDeviceInput } from "../shapes/DeleteDeviceInput";
import { DeleteDeviceOutput } from "../shapes/DeleteDeviceOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "../shapes/InvalidCertificateAuthorityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
