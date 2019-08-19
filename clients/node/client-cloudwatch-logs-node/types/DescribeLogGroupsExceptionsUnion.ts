import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DescribeLogGroupsExceptionsUnion =
  | InvalidParameterException
  | ServiceUnavailableException;
