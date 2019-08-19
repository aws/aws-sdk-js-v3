import { GetResourceSharesInput } from "../shapes/GetResourceSharesInput";
import { GetResourceSharesOutput } from "../shapes/GetResourceSharesOutput";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourceShares: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceShares",
  http: {
    method: "POST",
    requestUri: "/getresourceshares"
  },
  input: {
    shape: GetResourceSharesInput
  },
  output: {
    shape: GetResourceSharesOutput
  },
  errors: [
    {
      shape: UnknownResourceException
    },
    {
      shape: MalformedArnException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
