import { InvalidOptionGroupStateFault } from "./InvalidOptionGroupStateFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
export type ModifyOptionGroupExceptionsUnion =
  | InvalidOptionGroupStateFault
  | OptionGroupNotFoundFault;
