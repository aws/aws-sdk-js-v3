import { CreateSMBFileShareInput } from "./CreateSMBFileShareInput";
import { CreateSMBFileShareOutput } from "./CreateSMBFileShareOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSMBFileShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSMBFileShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSMBFileShareInput
  },
  output: {
    shape: CreateSMBFileShareOutput
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
