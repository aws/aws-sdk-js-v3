import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { Ec2RequestFailedException } from "./Ec2RequestFailedException";
export type ListCompatibleImagesExceptionsUnion =
  | InvalidNextTokenException
  | Ec2RequestFailedException;
