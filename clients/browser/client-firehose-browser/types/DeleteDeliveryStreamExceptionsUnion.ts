import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteDeliveryStreamExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException;
