import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DescribeVoicesExceptionsUnion =
  | InvalidNextTokenException
  | ServiceFailureException;
