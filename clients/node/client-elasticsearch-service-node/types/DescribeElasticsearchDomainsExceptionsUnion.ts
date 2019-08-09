import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ValidationException } from "./ValidationException";
export type DescribeElasticsearchDomainsExceptionsUnion =
  | BaseException
  | InternalException
  | ValidationException;
