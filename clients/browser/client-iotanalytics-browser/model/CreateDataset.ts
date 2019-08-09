import { CreateDatasetInput } from "./CreateDatasetInput";
import { CreateDatasetOutput } from "./CreateDatasetOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataset",
  http: {
    method: "POST",
    requestUri: "/datasets"
  },
  input: {
    shape: CreateDatasetInput
  },
  output: {
    shape: CreateDatasetOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    }
  ]
};
