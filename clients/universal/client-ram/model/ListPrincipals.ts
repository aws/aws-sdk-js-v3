import { ListPrincipalsInput } from "./ListPrincipalsInput";
import { ListPrincipalsOutput } from "./ListPrincipalsOutput";
import { MalformedArnException } from "./MalformedArnException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
