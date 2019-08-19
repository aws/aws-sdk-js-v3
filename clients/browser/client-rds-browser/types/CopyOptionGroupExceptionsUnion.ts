import { OptionGroupAlreadyExistsFault } from "./OptionGroupAlreadyExistsFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { OptionGroupQuotaExceededFault } from "./OptionGroupQuotaExceededFault";
export type CopyOptionGroupExceptionsUnion =
  | OptionGroupAlreadyExistsFault
  | OptionGroupNotFoundFault
  | OptionGroupQuotaExceededFault;
