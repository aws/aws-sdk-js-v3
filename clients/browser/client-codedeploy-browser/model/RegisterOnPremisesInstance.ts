import { RegisterOnPremisesInstanceInput } from "./RegisterOnPremisesInstanceInput";
import { RegisterOnPremisesInstanceOutput } from "./RegisterOnPremisesInstanceOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterOnPremisesInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterOnPremisesInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterOnPremisesInstanceInput
  },
  output: {
    shape: RegisterOnPremisesInstanceOutput
  },
  errors: [
    {
      shape: InstanceNameAlreadyRegisteredException
    },
    {
      shape: IamArnRequiredException
    },
    {
      shape: IamSessionArnAlreadyRegisteredException
    },
    {
      shape: IamUserArnAlreadyRegisteredException
    },
    {
      shape: InstanceNameRequiredException
    },
    {
      shape: IamUserArnRequiredException
    },
    {
      shape: InvalidInstanceNameException
    },
    {
      shape: InvalidIamSessionArnException
    },
    {
      shape: InvalidIamUserArnException
    },
    {
      shape: MultipleIamArnsProvidedException
    }
  ]
};
