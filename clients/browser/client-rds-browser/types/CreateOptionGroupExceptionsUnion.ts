import { OptionGroupAlreadyExistsFault } from "./OptionGroupAlreadyExistsFault";
import { OptionGroupQuotaExceededFault } from "./OptionGroupQuotaExceededFault";
export type CreateOptionGroupExceptionsUnion =
  | OptionGroupAlreadyExistsFault
  | OptionGroupQuotaExceededFault;
