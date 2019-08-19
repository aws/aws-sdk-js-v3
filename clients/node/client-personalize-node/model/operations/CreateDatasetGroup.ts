import { CreateDatasetGroupInput } from "../shapes/CreateDatasetGroupInput";
import { CreateDatasetGroupOutput } from "../shapes/CreateDatasetGroupOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
