import { GetResourceShareAssociationsInput } from "../shapes/GetResourceShareAssociationsInput";
import { GetResourceShareAssociationsOutput } from "../shapes/GetResourceShareAssociationsOutput";
import { UnknownResourceException } from "../shapes/UnknownResourceException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
