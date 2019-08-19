import { CreateDatasetInput } from "../shapes/CreateDatasetInput";
import { CreateDatasetOutput } from "../shapes/CreateDatasetOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
