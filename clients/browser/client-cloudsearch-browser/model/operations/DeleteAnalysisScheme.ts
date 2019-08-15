import { DeleteAnalysisSchemeInput } from "../shapes/DeleteAnalysisSchemeInput";
import { DeleteAnalysisSchemeOutput } from "../shapes/DeleteAnalysisSchemeOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
