import { PublishInput } from "./PublishInput";
import { PublishOutput } from "./PublishOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const Publish: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Publish",
  http: {
    method: "POST",
    requestUri: "/topics/{topic}"
  },
  input: {
    shape: PublishInput
  },
  output: {
    shape: PublishOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: MethodNotAllowedException
    }
  ]
};
