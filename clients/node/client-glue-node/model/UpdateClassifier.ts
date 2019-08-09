import { UpdateClassifierInput } from "./UpdateClassifierInput";
import { UpdateClassifierOutput } from "./UpdateClassifierOutput";
import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
