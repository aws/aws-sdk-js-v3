import { InvalidAssociation } from "./InvalidAssociation";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
export type StartAssociationsOnceExceptionsUnion =
  | InvalidAssociation
  | AssociationDoesNotExist;
