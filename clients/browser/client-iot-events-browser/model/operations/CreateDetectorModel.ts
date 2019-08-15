import { CreateDetectorModelInput } from "../shapes/CreateDetectorModelInput";
import { CreateDetectorModelOutput } from "../shapes/CreateDetectorModelOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
