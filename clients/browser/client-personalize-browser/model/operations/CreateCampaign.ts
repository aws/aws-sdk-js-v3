import { CreateCampaignInput } from "../shapes/CreateCampaignInput";
import { CreateCampaignOutput } from "../shapes/CreateCampaignOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCampaign",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCampaignInput
  },
  output: {
    shape: CreateCampaignOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
