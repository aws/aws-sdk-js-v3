import { EnableAllFeaturesInput } from "../shapes/EnableAllFeaturesInput";
import { EnableAllFeaturesOutput } from "../shapes/EnableAllFeaturesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { HandshakeConstraintViolationException } from "../shapes/HandshakeConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
