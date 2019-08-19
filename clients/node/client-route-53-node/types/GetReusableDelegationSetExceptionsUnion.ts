import { NoSuchDelegationSet } from "./NoSuchDelegationSet";
import { DelegationSetNotReusable } from "./DelegationSetNotReusable";
import { InvalidInput } from "./InvalidInput";
export type GetReusableDelegationSetExceptionsUnion =
  | NoSuchDelegationSet
  | DelegationSetNotReusable
  | InvalidInput;
