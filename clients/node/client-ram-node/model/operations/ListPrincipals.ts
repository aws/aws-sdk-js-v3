import { ListPrincipalsInput } from "../shapes/ListPrincipalsInput";
import { ListPrincipalsOutput } from "../shapes/ListPrincipalsOutput";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPrincipals: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPrincipals",
  http: {
    method: "POST",
    requestUri: "/listprincipals"
  },
  input: {
    shape: ListPrincipalsInput
  },
  output: {
    shape: ListPrincipalsOutput
  },
  errors: [
    {
      shape: MalformedArnException
    },
    {
      shape: UnknownResourceException
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
