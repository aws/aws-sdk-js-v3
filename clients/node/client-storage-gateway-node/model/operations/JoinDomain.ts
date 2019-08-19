import { JoinDomainInput } from "../shapes/JoinDomainInput";
import { JoinDomainOutput } from "../shapes/JoinDomainOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const JoinDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "JoinDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: JoinDomainInput
  },
  output: {
    shape: JoinDomainOutput
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
