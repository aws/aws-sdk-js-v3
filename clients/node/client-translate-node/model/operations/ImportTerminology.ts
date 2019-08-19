import { ImportTerminologyInput } from "../shapes/ImportTerminologyInput";
import { ImportTerminologyOutput } from "../shapes/ImportTerminologyOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportTerminology: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportTerminology",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportTerminologyInput
  },
  output: {
    shape: ImportTerminologyOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerException
    }
  ]
};
