import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { TooManyUpdates } from "./TooManyUpdates";
export type DeleteAssociationExceptionsUnion =
  | AssociationDoesNotExist
  | InternalServerError
  | InvalidDocument
  | InvalidInstanceId
  | TooManyUpdates;
