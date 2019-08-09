import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnableToDetectSchemaException } from "./UnableToDetectSchemaException";
import { ResourceProvisionedThroughputExceededException } from "./ResourceProvisionedThroughputExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DiscoverInputSchemaExceptionsUnion =
  | InvalidArgumentException
  | UnableToDetectSchemaException
  | ResourceProvisionedThroughputExceededException
  | ServiceUnavailableException;
