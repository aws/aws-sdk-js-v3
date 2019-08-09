import { ContinueUpdateRollbackInput } from "./ContinueUpdateRollbackInput";
import { ContinueUpdateRollbackOutput } from "./ContinueUpdateRollbackOutput";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ContinueUpdateRollback: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ContinueUpdateRollback",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ContinueUpdateRollbackInput
  },
  output: {
    shape: ContinueUpdateRollbackOutput,
    resultWrapper: "ContinueUpdateRollbackResult"
  },
  errors: [
    {
      shape: TokenAlreadyExistsException
    }
  ]
};
