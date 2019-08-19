import { UpdateClassifierInput } from "../shapes/UpdateClassifierInput";
import { UpdateClassifierOutput } from "../shapes/UpdateClassifierOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateClassifierInput
  },
  output: {
    shape: UpdateClassifierOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: VersionMismatchException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
