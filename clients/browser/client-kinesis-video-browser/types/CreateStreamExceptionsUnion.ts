import { AccountStreamLimitExceededException } from "./AccountStreamLimitExceededException";
import { DeviceStreamLimitExceededException } from "./DeviceStreamLimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidDeviceException } from "./InvalidDeviceException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { TagsPerResourceExceededLimitException } from "./TagsPerResourceExceededLimitException";
export type CreateStreamExceptionsUnion =
  | AccountStreamLimitExceededException
  | DeviceStreamLimitExceededException
  | ResourceInUseException
  | InvalidDeviceException
  | InvalidArgumentException
  | ClientLimitExceededException
  | TagsPerResourceExceededLimitException;
