import { NoSuchDelegationSet } from "./NoSuchDelegationSet";
import { DelegationSetInUse } from "./DelegationSetInUse";
import { DelegationSetNotReusable } from "./DelegationSetNotReusable";
import { InvalidInput } from "./InvalidInput";
export type DeleteReusableDelegationSetExceptionsUnion =
  | NoSuchDelegationSet
  | DelegationSetInUse
  | DelegationSetNotReusable
  | InvalidInput;
