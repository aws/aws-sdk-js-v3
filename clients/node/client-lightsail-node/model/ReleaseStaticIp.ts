import { ReleaseStaticIpInput } from "./ReleaseStaticIpInput";
import { ReleaseStaticIpOutput } from "./ReleaseStaticIpOutput";
import { ServiceException } from "./ServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { NotFoundException } from "./NotFoundException";
import { OperationFailureException } from "./OperationFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountSetupInProgressException } from "./AccountSetupInProgressException";
import { UnauthenticatedException } from "./UnauthenticatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ReleaseStaticIp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReleaseStaticIp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReleaseStaticIpInput
  },
  output: {
    shape: ReleaseStaticIpOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: NotFoundException
    },
    {
      shape: OperationFailureException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: AccountSetupInProgressException
    },
    {
      shape: UnauthenticatedException
    }
  ]
};
