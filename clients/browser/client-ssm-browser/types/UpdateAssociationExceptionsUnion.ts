import { InternalServerError } from "./InternalServerError";
import { InvalidSchedule } from "./InvalidSchedule";
import { InvalidParameters } from "./InvalidParameters";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidUpdate } from "./InvalidUpdate";
import { TooManyUpdates } from "./TooManyUpdates";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidAssociationVersion } from "./InvalidAssociationVersion";
import { AssociationVersionLimitExceeded } from "./AssociationVersionLimitExceeded";
export type UpdateAssociationExceptionsUnion =
  | InternalServerError
  | InvalidSchedule
  | InvalidParameters
  | InvalidOutputLocation
  | InvalidDocumentVersion
  | AssociationDoesNotExist
  | InvalidUpdate
  | TooManyUpdates
  | InvalidDocument
  | InvalidTarget
  | InvalidAssociationVersion
  | AssociationVersionLimitExceeded;
