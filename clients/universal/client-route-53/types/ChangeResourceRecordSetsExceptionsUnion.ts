import { NoSuchHostedZone } from "./NoSuchHostedZone";
import { NoSuchHealthCheck } from "./NoSuchHealthCheck";
import { InvalidChangeBatch } from "./InvalidChangeBatch";
import { InvalidInput } from "./InvalidInput";
import { PriorRequestNotComplete } from "./PriorRequestNotComplete";
export type ChangeResourceRecordSetsExceptionsUnion =
  | NoSuchHostedZone
  | NoSuchHealthCheck
  | InvalidChangeBatch
  | InvalidInput
  | PriorRequestNotComplete;
