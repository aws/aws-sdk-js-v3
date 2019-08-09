import { PutParameterInput } from "./PutParameterInput";
import { PutParameterOutput } from "./PutParameterOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidKeyId } from "./InvalidKeyId";
import { ParameterLimitExceeded } from "./ParameterLimitExceeded";
import { TooManyUpdates } from "./TooManyUpdates";
import { ParameterAlreadyExists } from "./ParameterAlreadyExists";
import { HierarchyLevelLimitExceededException } from "./HierarchyLevelLimitExceededException";
import { HierarchyTypeMismatchException } from "./HierarchyTypeMismatchException";
import { InvalidAllowedPatternException } from "./InvalidAllowedPatternException";
import { ParameterMaxVersionLimitExceeded } from "./ParameterMaxVersionLimitExceeded";
import { ParameterPatternMismatchException } from "./ParameterPatternMismatchException";
import { UnsupportedParameterType } from "./UnsupportedParameterType";
import { PoliciesLimitExceededException } from "./PoliciesLimitExceededException";
import { InvalidPolicyTypeException } from "./InvalidPolicyTypeException";
import { InvalidPolicyAttributeException } from "./InvalidPolicyAttributeException";
import { IncompatiblePolicyException } from "./IncompatiblePolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
