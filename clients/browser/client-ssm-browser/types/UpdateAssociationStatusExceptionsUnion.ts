import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidDocument } from "./InvalidDocument";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { StatusUnchanged } from "./StatusUnchanged";
import { TooManyUpdates } from "./TooManyUpdates";
export type UpdateAssociationStatusExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidDocument
  | AssociationDoesNotExist
  | StatusUnchanged
  | TooManyUpdates;
