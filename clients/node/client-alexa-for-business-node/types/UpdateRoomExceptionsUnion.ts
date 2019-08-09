import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
export type UpdateRoomExceptionsUnion = NotFoundException | NameInUseException;
