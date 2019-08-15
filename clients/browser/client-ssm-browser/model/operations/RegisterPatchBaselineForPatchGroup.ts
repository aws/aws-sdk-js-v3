import { RegisterPatchBaselineForPatchGroupInput } from "../shapes/RegisterPatchBaselineForPatchGroupInput";
import { RegisterPatchBaselineForPatchGroupOutput } from "../shapes/RegisterPatchBaselineForPatchGroupOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
