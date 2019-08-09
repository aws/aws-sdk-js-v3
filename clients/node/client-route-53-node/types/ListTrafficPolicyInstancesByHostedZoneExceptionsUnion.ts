import { InvalidInput } from "./InvalidInput";
import { NoSuchTrafficPolicyInstance } from "./NoSuchTrafficPolicyInstance";
import { NoSuchHostedZone } from "./NoSuchHostedZone";
export type ListTrafficPolicyInstancesByHostedZoneExceptionsUnion =
  | InvalidInput
  | NoSuchTrafficPolicyInstance
  | NoSuchHostedZone;
