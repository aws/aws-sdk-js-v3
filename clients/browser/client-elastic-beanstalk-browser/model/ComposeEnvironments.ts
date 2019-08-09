import { ComposeEnvironmentsInput } from "./ComposeEnvironmentsInput";
import { ComposeEnvironmentsOutput } from "./ComposeEnvironmentsOutput";
import { TooManyEnvironmentsException } from "./TooManyEnvironmentsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
