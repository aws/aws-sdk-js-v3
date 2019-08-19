import { PublishInput } from "../shapes/PublishInput";
import { PublishOutput } from "../shapes/PublishOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
