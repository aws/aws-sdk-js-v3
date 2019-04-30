import { InvalidMessageContents } from "./InvalidMessageContents";
import { UnsupportedOperation } from "./UnsupportedOperation";
export type SendMessageExceptionsUnion =
  | InvalidMessageContents
  | UnsupportedOperation;
