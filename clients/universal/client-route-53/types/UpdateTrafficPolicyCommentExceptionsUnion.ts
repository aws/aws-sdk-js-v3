import { InvalidInput } from "./InvalidInput";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { ConcurrentModification } from "./ConcurrentModification";
export type UpdateTrafficPolicyCommentExceptionsUnion =
  | InvalidInput
  | NoSuchTrafficPolicy
  | ConcurrentModification;
