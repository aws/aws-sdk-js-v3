import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { ClusterLimitExceededException } from "./ClusterLimitExceededException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
export type UpdateJobExceptionsUnion =
  | InvalidResourceException
  | InvalidJobStateException
  | KMSRequestFailedException
  | InvalidInputCombinationException
  | ClusterLimitExceededException
  | Ec2RequestFailedException;
