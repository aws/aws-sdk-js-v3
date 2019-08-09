import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
export type UpdateClusterExceptionsUnion =
  | InvalidResourceException
  | InvalidJobStateException
  | KMSRequestFailedException
  | InvalidInputCombinationException
  | Ec2RequestFailedException;
