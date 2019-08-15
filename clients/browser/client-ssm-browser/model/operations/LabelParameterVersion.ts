import { LabelParameterVersionInput } from "../shapes/LabelParameterVersionInput";
import { LabelParameterVersionOutput } from "../shapes/LabelParameterVersionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { ParameterNotFound } from "../shapes/ParameterNotFound";
import { ParameterVersionNotFound } from "../shapes/ParameterVersionNotFound";
import { ParameterVersionLabelLimitExceeded } from "../shapes/ParameterVersionLabelLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
