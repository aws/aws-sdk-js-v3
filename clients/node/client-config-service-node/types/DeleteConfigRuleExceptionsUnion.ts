import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { ResourceInUseException } from "./ResourceInUseException";
export type DeleteConfigRuleExceptionsUnion =
  | NoSuchConfigRuleException
  | ResourceInUseException;
