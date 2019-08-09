import { DuplicateAccessPointNameException } from "./DuplicateAccessPointNameException";
import { TooManyAccessPointsException } from "./TooManyAccessPointsException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
import { InvalidSchemeException } from "./InvalidSchemeException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type CreateLoadBalancerExceptionsUnion =
  | DuplicateAccessPointNameException
  | TooManyAccessPointsException
  | CertificateNotFoundException
  | InvalidConfigurationRequestException
  | SubnetNotFoundException
  | InvalidSubnetException
  | InvalidSecurityGroupException
  | InvalidSchemeException
  | TooManyTagsException
  | DuplicateTagKeysException
  | UnsupportedProtocolException
  | OperationNotPermittedException;
