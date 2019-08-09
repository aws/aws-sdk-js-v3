import { ActivityLimitExceeded } from "./ActivityLimitExceeded";
import { InvalidName } from "./InvalidName";
import { TooManyTags } from "./TooManyTags";
export type CreateActivityExceptionsUnion =
  | ActivityLimitExceeded
  | InvalidName
  | TooManyTags;
