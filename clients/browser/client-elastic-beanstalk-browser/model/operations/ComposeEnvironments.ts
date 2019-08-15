import { ComposeEnvironmentsInput } from "../shapes/ComposeEnvironmentsInput";
import { ComposeEnvironmentsOutput } from "../shapes/ComposeEnvironmentsOutput";
import { TooManyEnvironmentsException } from "../shapes/TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ComposeEnvironments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ComposeEnvironments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ComposeEnvironmentsInput
  },
  output: {
    shape: ComposeEnvironmentsOutput,
    resultWrapper: "ComposeEnvironmentsResult"
  },
  errors: [
    {
      shape: TooManyEnvironmentsException
    },
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
