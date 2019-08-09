import { RegisterPatchBaselineForPatchGroupInput } from "./RegisterPatchBaselineForPatchGroupInput";
import { RegisterPatchBaselineForPatchGroupOutput } from "./RegisterPatchBaselineForPatchGroupOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { DoesNotExistException } from "./DoesNotExistException";
import { InvalidResourceId } from "./InvalidResourceId";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterPatchBaselineForPatchGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterPatchBaselineForPatchGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterPatchBaselineForPatchGroupInput
  },
  output: {
    shape: RegisterPatchBaselineForPatchGroupOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: DoesNotExistException
    },
    {
      shape: InvalidResourceId
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
