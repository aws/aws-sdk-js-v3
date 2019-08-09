import { CreateDatasetGroupInput } from "./CreateDatasetGroupInput";
import { CreateDatasetGroupOutput } from "./CreateDatasetGroupOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDatasetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDatasetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDatasetGroupInput
  },
  output: {
    shape: CreateDatasetGroupOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
