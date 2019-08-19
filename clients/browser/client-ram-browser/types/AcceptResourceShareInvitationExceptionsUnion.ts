import { MalformedArnException } from "./MalformedArnException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceShareInvitationArnNotFoundException } from "./ResourceShareInvitationArnNotFoundException";
import { ResourceShareInvitationAlreadyAcceptedException } from "./ResourceShareInvitationAlreadyAcceptedException";
import { ResourceShareInvitationAlreadyRejectedException } from "./ResourceShareInvitationAlreadyRejectedException";
import { ResourceShareInvitationExpiredException } from "./ResourceShareInvitationExpiredException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type AcceptResourceShareInvitationExceptionsUnion =
  | MalformedArnException
  | OperationNotPermittedException
  | ResourceShareInvitationArnNotFoundException
  | ResourceShareInvitationAlreadyAcceptedException
  | ResourceShareInvitationAlreadyRejectedException
  | ResourceShareInvitationExpiredException
  | ServerInternalException
  | ServiceUnavailableException;
