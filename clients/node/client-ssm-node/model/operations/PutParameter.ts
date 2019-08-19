import { PutParameterInput } from "../shapes/PutParameterInput";
import { PutParameterOutput } from "../shapes/PutParameterOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidKeyId } from "../shapes/InvalidKeyId";
import { ParameterLimitExceeded } from "../shapes/ParameterLimitExceeded";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { ParameterAlreadyExists } from "../shapes/ParameterAlreadyExists";
import { HierarchyLevelLimitExceededException } from "../shapes/HierarchyLevelLimitExceededException";
import { HierarchyTypeMismatchException } from "../shapes/HierarchyTypeMismatchException";
import { InvalidAllowedPatternException } from "../shapes/InvalidAllowedPatternException";
import { ParameterMaxVersionLimitExceeded } from "../shapes/ParameterMaxVersionLimitExceeded";
import { ParameterPatternMismatchException } from "../shapes/ParameterPatternMismatchException";
import { UnsupportedParameterType } from "../shapes/UnsupportedParameterType";
import { PoliciesLimitExceededException } from "../shapes/PoliciesLimitExceededException";
import { InvalidPolicyTypeException } from "../shapes/InvalidPolicyTypeException";
import { InvalidPolicyAttributeException } from "../shapes/InvalidPolicyAttributeException";
import { IncompatiblePolicyException } from "../shapes/IncompatiblePolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutParameterInput
  },
  output: {
    shape: PutParameterOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidKeyId
    },
    {
      shape: ParameterLimitExceeded
    },
    {
      shape: TooManyUpdates
    },
    {
      shape: ParameterAlreadyExists
    },
    {
      shape: HierarchyLevelLimitExceededException
    },
    {
      shape: HierarchyTypeMismatchException
    },
    {
      shape: InvalidAllowedPatternException
    },
    {
      shape: ParameterMaxVersionLimitExceeded
    },
    {
      shape: ParameterPatternMismatchException
    },
    {
      shape: UnsupportedParameterType
    },
    {
      shape: PoliciesLimitExceededException
    },
    {
      shape: InvalidPolicyTypeException
    },
    {
      shape: InvalidPolicyAttributeException
    },
    {
      shape: IncompatiblePolicyException
    }
  ]
};
