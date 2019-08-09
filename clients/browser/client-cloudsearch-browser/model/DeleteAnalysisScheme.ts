import { DeleteAnalysisSchemeInput } from "./DeleteAnalysisSchemeInput";
import { DeleteAnalysisSchemeOutput } from "./DeleteAnalysisSchemeOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAnalysisScheme: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAnalysisScheme",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAnalysisSchemeInput
  },
  output: {
    shape: DeleteAnalysisSchemeOutput,
    resultWrapper: "DeleteAnalysisSchemeResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
