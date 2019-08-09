import { NotFoundException } from "./NotFoundException";
import { InvalidSecretsManagerResourceException } from "./InvalidSecretsManagerResourceException";
export type GetNetworkProfileExceptionsUnion =
  | NotFoundException
  | InvalidSecretsManagerResourceException;
