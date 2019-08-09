import { UpdateNFSFileShareInput } from "./UpdateNFSFileShareInput";
import { UpdateNFSFileShareOutput } from "./UpdateNFSFileShareOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateNFSFileShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNFSFileShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNFSFileShareInput
  },
  output: {
    shape: UpdateNFSFileShareOutput
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
