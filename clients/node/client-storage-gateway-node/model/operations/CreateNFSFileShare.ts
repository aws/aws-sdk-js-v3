import { CreateNFSFileShareInput } from "../shapes/CreateNFSFileShareInput";
import { CreateNFSFileShareOutput } from "../shapes/CreateNFSFileShareOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNFSFileShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNFSFileShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNFSFileShareInput
  },
  output: {
    shape: CreateNFSFileShareOutput
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
