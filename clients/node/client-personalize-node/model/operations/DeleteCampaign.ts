import { DeleteCampaignInput } from "../shapes/DeleteCampaignInput";
import { DeleteCampaignOutput } from "../shapes/DeleteCampaignOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCampaign",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCampaignInput
  },
  output: {
    shape: DeleteCampaignOutput
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
