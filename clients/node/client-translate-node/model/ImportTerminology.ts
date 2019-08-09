import { ImportTerminologyInput } from "./ImportTerminologyInput";
import { ImportTerminologyOutput } from "./ImportTerminologyOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
