import { CreateClassifierInput } from "./CreateClassifierInput";
import { CreateClassifierOutput } from "./CreateClassifierOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClassifierInput
  },
  output: {
    shape: CreateClassifierOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
