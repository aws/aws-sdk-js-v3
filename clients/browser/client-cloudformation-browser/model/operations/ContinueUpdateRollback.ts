import { ContinueUpdateRollbackInput } from "../shapes/ContinueUpdateRollbackInput";
import { ContinueUpdateRollbackOutput } from "../shapes/ContinueUpdateRollbackOutput";
import { TokenAlreadyExistsException } from "../shapes/TokenAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
