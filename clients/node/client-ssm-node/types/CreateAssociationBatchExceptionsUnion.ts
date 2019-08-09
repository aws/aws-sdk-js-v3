import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidParameters } from "./InvalidParameters";
import { DuplicateInstanceId } from "./DuplicateInstanceId";
import { AssociationLimitExceeded } from "./AssociationLimitExceeded";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidSchedule } from "./InvalidSchedule";
export type CreateAssociationBatchExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidDocumentVersion
  | InvalidInstanceId
  | InvalidParameters
  | DuplicateInstanceId
  | AssociationLimitExceeded
  | UnsupportedPlatformType
  | InvalidOutputLocation
  | InvalidTarget
  | InvalidSchedule;
