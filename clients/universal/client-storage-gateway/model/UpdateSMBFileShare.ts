import { UpdateSMBFileShareInput } from "./UpdateSMBFileShareInput";
import { UpdateSMBFileShareOutput } from "./UpdateSMBFileShareOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSMBFileShare: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSMBFileShare",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSMBFileShareInput
  },
  output: {
    shape: UpdateSMBFileShareOutput
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
