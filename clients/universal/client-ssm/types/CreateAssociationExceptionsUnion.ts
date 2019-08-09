import { AssociationAlreadyExists } from "./AssociationAlreadyExists";
import { AssociationLimitExceeded } from "./AssociationLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidParameters } from "./InvalidParameters";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidSchedule } from "./InvalidSchedule";
export type CreateAssociationExceptionsUnion =
  | AssociationAlreadyExists
  | AssociationLimitExceeded
  | InternalServerError
  | InvalidDocument
  | InvalidDocumentVersion
  | InvalidInstanceId
  | UnsupportedPlatformType
  | InvalidOutputLocation
  | InvalidParameters
  | InvalidTarget
  | InvalidSchedule;
