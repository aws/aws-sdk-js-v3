import { ImportSourceCredentialsInput } from "./ImportSourceCredentialsInput";
import { ImportSourceCredentialsOutput } from "./ImportSourceCredentialsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AccountLimitExceededException } from "./AccountLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportSourceCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportSourceCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportSourceCredentialsInput
  },
  output: {
    shape: ImportSourceCredentialsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AccountLimitExceededException
    }
  ]
};
