import { CreateDetectorModelInput } from "./CreateDetectorModelInput";
import { CreateDetectorModelOutput } from "./CreateDetectorModelOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDetectorModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDetectorModel",
  http: {
    method: "POST",
    requestUri: "/detector-models"
  },
  input: {
    shape: CreateDetectorModelInput
  },
  output: {
    shape: CreateDetectorModelOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
