import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidAssociationVersion } from "./InvalidAssociationVersion";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidInstanceId } from "./InvalidInstanceId";
export type DescribeAssociationExceptionsUnion =
  | AssociationDoesNotExist
  | InvalidAssociationVersion
  | InternalServerError
  | InvalidDocument
  | InvalidInstanceId;
