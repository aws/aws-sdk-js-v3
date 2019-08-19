import { InvalidResourceException } from "./InvalidResourceException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
export type CreateClusterExceptionsUnion =
  | InvalidResourceException
  | KMSRequestFailedException
  | InvalidInputCombinationException
  | Ec2RequestFailedException;
