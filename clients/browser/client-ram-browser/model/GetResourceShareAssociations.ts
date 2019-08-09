import { GetResourceShareAssociationsInput } from "./GetResourceShareAssociationsInput";
import { GetResourceShareAssociationsOutput } from "./GetResourceShareAssociationsOutput";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResourceShareAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceShareAssociations",
  http: {
    method: "POST",
    requestUri: "/getresourceshareassociations"
  },
  input: {
    shape: GetResourceShareAssociationsInput
  },
  output: {
    shape: GetResourceShareAssociationsOutput
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
      shape: OperationNotPermittedException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
