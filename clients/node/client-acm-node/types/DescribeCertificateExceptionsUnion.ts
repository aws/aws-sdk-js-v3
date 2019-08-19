import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
export type DescribeCertificateExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException;
