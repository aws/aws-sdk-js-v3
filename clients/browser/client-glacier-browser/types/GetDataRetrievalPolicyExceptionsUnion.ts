import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetDataRetrievalPolicyExceptionsUnion =
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException;
