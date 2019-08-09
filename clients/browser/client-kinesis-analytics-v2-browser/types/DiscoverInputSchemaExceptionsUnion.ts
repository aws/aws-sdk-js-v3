import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnableToDetectSchemaException } from "./UnableToDetectSchemaException";
import { ResourceProvisionedThroughputExceededException } from "./ResourceProvisionedThroughputExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DiscoverInputSchemaExceptionsUnion =
  | InvalidArgumentException
  | UnableToDetectSchemaException
  | ResourceProvisionedThroughputExceededException
  | ServiceUnavailableException
  | InvalidRequestException;
