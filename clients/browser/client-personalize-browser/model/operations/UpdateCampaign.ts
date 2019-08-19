import { UpdateCampaignInput } from "../shapes/UpdateCampaignInput";
import { UpdateCampaignOutput } from "../shapes/UpdateCampaignOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCampaign",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCampaignInput
  },
  output: {
    shape: UpdateCampaignOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
