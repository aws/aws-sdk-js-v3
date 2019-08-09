import { EnablePolicyTypeInput } from "./EnablePolicyTypeInput";
import { EnablePolicyTypeOutput } from "./EnablePolicyTypeOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyTypeAlreadyEnabledException } from "./PolicyTypeAlreadyEnabledException";
import { RootNotFoundException } from "./RootNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PolicyTypeNotAvailableForOrganizationException } from "./PolicyTypeNotAvailableForOrganizationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
