import { ResolveCaseInput } from "./ResolveCaseInput";
import { ResolveCaseOutput } from "./ResolveCaseOutput";
import { InternalServerError } from "./InternalServerError";
import { CaseIdNotFound } from "./CaseIdNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResolveCase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResolveCase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResolveCaseInput
  },
  output: {
    shape: ResolveCaseOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: CaseIdNotFound
    }
  ]
};
