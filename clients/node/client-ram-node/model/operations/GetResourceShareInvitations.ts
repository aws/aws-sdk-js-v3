import { GetResourceShareInvitationsInput } from "../shapes/GetResourceShareInvitationsInput";
import { GetResourceShareInvitationsOutput } from "../shapes/GetResourceShareInvitationsOutput";
import { ResourceShareInvitationArnNotFoundException } from "../shapes/ResourceShareInvitationArnNotFoundException";
import { InvalidMaxResultsException } from "../shapes/InvalidMaxResultsException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourceShareInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourceShareInvitations",
  http: {
    method: "POST",
    requestUri: "/getresourceshareinvitations"
  },
  input: {
    shape: GetResourceShareInvitationsInput
  },
  output: {
    shape: GetResourceShareInvitationsOutput
  },
  errors: [
    {
      shape: ResourceShareInvitationArnNotFoundException
    },
    {
      shape: InvalidMaxResultsException
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
