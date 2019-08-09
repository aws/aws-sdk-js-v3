import { LabelParameterVersionInput } from "./LabelParameterVersionInput";
import { LabelParameterVersionOutput } from "./LabelParameterVersionOutput";
import { InternalServerError } from "./InternalServerError";
import { TooManyUpdates } from "./TooManyUpdates";
import { ParameterNotFound } from "./ParameterNotFound";
import { ParameterVersionNotFound } from "./ParameterVersionNotFound";
import { ParameterVersionLabelLimitExceeded } from "./ParameterVersionLabelLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const LabelParameterVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LabelParameterVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: LabelParameterVersionInput
  },
  output: {
    shape: LabelParameterVersionOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: TooManyUpdates
    },
    {
      shape: ParameterNotFound
    },
    {
      shape: ParameterVersionNotFound
    },
    {
      shape: ParameterVersionLabelLimitExceeded
    }
  ]
};
