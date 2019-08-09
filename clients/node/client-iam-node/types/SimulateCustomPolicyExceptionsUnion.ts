import { InvalidInputException } from "./InvalidInputException";
import { PolicyEvaluationException } from "./PolicyEvaluationException";
export type SimulateCustomPolicyExceptionsUnion =
  | InvalidInputException
  | PolicyEvaluationException;
