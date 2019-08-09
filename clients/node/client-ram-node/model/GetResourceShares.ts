import { GetResourceSharesInput } from "./GetResourceSharesInput";
import { GetResourceSharesOutput } from "./GetResourceSharesOutput";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
