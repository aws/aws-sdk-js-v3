import { AuthException } from "./AuthException";
import { InvalidArgsException } from "./InvalidArgsException";
import { ServiceException } from "./ServiceException";
import { ThrottlingException } from "./ThrottlingException";
import { EC2InstanceNotFoundException } from "./EC2InstanceNotFoundException";
export type SendSSHPublicKeyExceptionsUnion =
  | AuthException
  | InvalidArgsException
  | ServiceException
  | ThrottlingException
  | EC2InstanceNotFoundException;
