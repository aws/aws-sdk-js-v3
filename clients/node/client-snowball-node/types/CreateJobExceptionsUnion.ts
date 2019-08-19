import { InvalidResourceException } from "./InvalidResourceException";
import { KMSRequestFailedException } from "./KMSRequestFailedException";
import { InvalidInputCombinationException } from "./InvalidInputCombinationException";
import { ClusterLimitExceededException } from "./ClusterLimitExceededException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
export type CreateJobExceptionsUnion =
  | InvalidResourceException
  | KMSRequestFailedException
  | InvalidInputCombinationException
  | ClusterLimitExceededException
  | Ec2RequestFailedException;
