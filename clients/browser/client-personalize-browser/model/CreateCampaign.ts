import { CreateCampaignInput } from "./CreateCampaignInput";
import { CreateCampaignOutput } from "./CreateCampaignOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
