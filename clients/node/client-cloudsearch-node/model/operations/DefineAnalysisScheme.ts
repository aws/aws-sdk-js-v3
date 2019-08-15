import { DefineAnalysisSchemeInput } from "../shapes/DefineAnalysisSchemeInput";
import { DefineAnalysisSchemeOutput } from "../shapes/DefineAnalysisSchemeOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DefineAnalysisScheme: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DefineAnalysisScheme",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DefineAnalysisSchemeInput
  },
  output: {
    shape: DefineAnalysisSchemeOutput,
    resultWrapper: "DefineAnalysisSchemeResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
