import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { InvalidInput } from "./InvalidInput";
import { TooManyTrafficPolicyVersionsForCurrentPolicy } from "./TooManyTrafficPolicyVersionsForCurrentPolicy";
import { ConcurrentModification } from "./ConcurrentModification";
import { InvalidTrafficPolicyDocument } from "./InvalidTrafficPolicyDocument";
export type CreateTrafficPolicyVersionExceptionsUnion =
  | NoSuchTrafficPolicy
  | InvalidInput
  | TooManyTrafficPolicyVersionsForCurrentPolicy
  | ConcurrentModification
  | InvalidTrafficPolicyDocument;
