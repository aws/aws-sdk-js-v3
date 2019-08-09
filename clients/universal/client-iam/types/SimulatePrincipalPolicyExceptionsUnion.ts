import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyEvaluationException } from "./PolicyEvaluationException";
export type SimulatePrincipalPolicyExceptionsUnion =
  | NoSuchEntityException
  | InvalidInputException
  | PolicyEvaluationException;
