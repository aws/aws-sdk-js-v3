import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { InvalidOptionGroupStateFault } from "./InvalidOptionGroupStateFault";
export type DeleteOptionGroupExceptionsUnion =
  | OptionGroupNotFoundFault
  | InvalidOptionGroupStateFault;
