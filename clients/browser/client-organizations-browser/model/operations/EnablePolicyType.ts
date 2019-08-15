import { EnablePolicyTypeInput } from "../shapes/EnablePolicyTypeInput";
import { EnablePolicyTypeOutput } from "../shapes/EnablePolicyTypeOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ConstraintViolationException } from "../shapes/ConstraintViolationException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyTypeAlreadyEnabledException } from "../shapes/PolicyTypeAlreadyEnabledException";
import { RootNotFoundException } from "../shapes/RootNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PolicyTypeNotAvailableForOrganizationException } from "../shapes/PolicyTypeNotAvailableForOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnablePolicyType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnablePolicyType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnablePolicyTypeInput
  },
  output: {
    shape: EnablePolicyTypeOutput
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
      shape: ConstraintViolationException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyTypeAlreadyEnabledException
    },
    {
      shape: RootNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PolicyTypeNotAvailableForOrganizationException
    }
  ]
};
