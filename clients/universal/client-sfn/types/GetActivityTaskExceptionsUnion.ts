import { ActivityDoesNotExist } from "./ActivityDoesNotExist";
import { ActivityWorkerLimitExceeded } from "./ActivityWorkerLimitExceeded";
import { InvalidArn } from "./InvalidArn";
export type GetActivityTaskExceptionsUnion =
  | ActivityDoesNotExist
  | ActivityWorkerLimitExceeded
  | InvalidArn;
