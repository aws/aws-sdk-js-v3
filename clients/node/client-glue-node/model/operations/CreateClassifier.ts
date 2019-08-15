import { CreateClassifierInput } from "../shapes/CreateClassifierInput";
import { CreateClassifierOutput } from "../shapes/CreateClassifierOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
