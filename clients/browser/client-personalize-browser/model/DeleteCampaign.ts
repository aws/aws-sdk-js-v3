import { DeleteCampaignInput } from "./DeleteCampaignInput";
import { DeleteCampaignOutput } from "./DeleteCampaignOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
