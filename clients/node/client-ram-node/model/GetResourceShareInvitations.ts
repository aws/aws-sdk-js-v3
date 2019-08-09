import { GetResourceShareInvitationsInput } from "./GetResourceShareInvitationsInput";
import { GetResourceShareInvitationsOutput } from "./GetResourceShareInvitationsOutput";
import { ResourceShareInvitationArnNotFoundException } from "./ResourceShareInvitationArnNotFoundException";
import { InvalidMaxResultsException } from "./InvalidMaxResultsException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
