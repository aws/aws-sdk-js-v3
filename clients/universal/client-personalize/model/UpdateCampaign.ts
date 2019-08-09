import { UpdateCampaignInput } from "./UpdateCampaignInput";
import { UpdateCampaignOutput } from "./UpdateCampaignOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
