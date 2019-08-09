import { DeleteFileShareInput } from "./DeleteFileShareInput";
import { DeleteFileShareOutput } from "./DeleteFileShareOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFileShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFileShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFileShareInput
  },
  output: {
    shape: DeleteFileShareOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
