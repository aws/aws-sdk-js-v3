import { DefineAnalysisSchemeInput } from "./DefineAnalysisSchemeInput";
import { DefineAnalysisSchemeOutput } from "./DefineAnalysisSchemeOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
