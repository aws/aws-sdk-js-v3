import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UnsupportedStreamMediaTypeException } from "./UnsupportedStreamMediaTypeException";
import { NoDataRetentionException } from "./NoDataRetentionException";
import { MissingCodecPrivateDataException } from "./MissingCodecPrivateDataException";
import { InvalidCodecPrivateDataException } from "./InvalidCodecPrivateDataException";
export type GetDASHStreamingSessionURLExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ClientLimitExceededException
  | NotAuthorizedException
  | UnsupportedStreamMediaTypeException
  | NoDataRetentionException
  | MissingCodecPrivateDataException
  | InvalidCodecPrivateDataException;
