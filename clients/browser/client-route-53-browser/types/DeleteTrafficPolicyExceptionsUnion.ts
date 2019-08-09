import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { InvalidInput } from "./InvalidInput";
import { TrafficPolicyInUse } from "./TrafficPolicyInUse";
import { ConcurrentModification } from "./ConcurrentModification";
export type DeleteTrafficPolicyExceptionsUnion =
  | NoSuchTrafficPolicy
  | InvalidInput
  | TrafficPolicyInUse
  | ConcurrentModification;
