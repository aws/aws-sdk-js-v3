import { InvalidInput } from "./InvalidInput";
import { TooManyTrafficPolicies } from "./TooManyTrafficPolicies";
import { TrafficPolicyAlreadyExists } from "./TrafficPolicyAlreadyExists";
import { InvalidTrafficPolicyDocument } from "./InvalidTrafficPolicyDocument";
export type CreateTrafficPolicyExceptionsUnion =
  | InvalidInput
  | TooManyTrafficPolicies
  | TrafficPolicyAlreadyExists
  | InvalidTrafficPolicyDocument;
