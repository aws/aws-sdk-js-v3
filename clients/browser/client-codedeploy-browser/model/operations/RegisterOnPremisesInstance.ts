import { RegisterOnPremisesInstanceInput } from "../shapes/RegisterOnPremisesInstanceInput";
import { RegisterOnPremisesInstanceOutput } from "../shapes/RegisterOnPremisesInstanceOutput";
import { InstanceNameAlreadyRegisteredException } from "../shapes/InstanceNameAlreadyRegisteredException";
import { IamArnRequiredException } from "../shapes/IamArnRequiredException";
import { IamSessionArnAlreadyRegisteredException } from "../shapes/IamSessionArnAlreadyRegisteredException";
import { IamUserArnAlreadyRegisteredException } from "../shapes/IamUserArnAlreadyRegisteredException";
import { InstanceNameRequiredException } from "../shapes/InstanceNameRequiredException";
import { IamUserArnRequiredException } from "../shapes/IamUserArnRequiredException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { InvalidIamSessionArnException } from "../shapes/InvalidIamSessionArnException";
import { InvalidIamUserArnException } from "../shapes/InvalidIamUserArnException";
import { MultipleIamArnsProvidedException } from "../shapes/MultipleIamArnsProvidedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
