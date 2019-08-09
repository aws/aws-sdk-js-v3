import { EnableAllFeaturesInput } from "./EnableAllFeaturesInput";
import { EnableAllFeaturesOutput } from "./EnableAllFeaturesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeConstraintViolationException } from "./HandshakeConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableAllFeatures: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableAllFeatures",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableAllFeaturesInput
  },
  output: {
    shape: EnableAllFeaturesOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: HandshakeConstraintViolationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
