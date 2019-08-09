import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type DescribePoliciesExceptionsUnion =
  | InvalidNextToken
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
