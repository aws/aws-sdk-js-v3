import { InstanceNameAlreadyRegisteredException } from "./InstanceNameAlreadyRegisteredException";
import { IamArnRequiredException } from "./IamArnRequiredException";
import { IamSessionArnAlreadyRegisteredException } from "./IamSessionArnAlreadyRegisteredException";
import { IamUserArnAlreadyRegisteredException } from "./IamUserArnAlreadyRegisteredException";
import { InstanceNameRequiredException } from "./InstanceNameRequiredException";
import { IamUserArnRequiredException } from "./IamUserArnRequiredException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { InvalidIamSessionArnException } from "./InvalidIamSessionArnException";
import { InvalidIamUserArnException } from "./InvalidIamUserArnException";
import { MultipleIamArnsProvidedException } from "./MultipleIamArnsProvidedException";
export type RegisterOnPremisesInstanceExceptionsUnion =
  | InstanceNameAlreadyRegisteredException
  | IamArnRequiredException
  | IamSessionArnAlreadyRegisteredException
  | IamUserArnAlreadyRegisteredException
  | InstanceNameRequiredException
  | IamUserArnRequiredException
  | InvalidInstanceNameException
  | InvalidIamSessionArnException
  | InvalidIamUserArnException
  | MultipleIamArnsProvidedException;
