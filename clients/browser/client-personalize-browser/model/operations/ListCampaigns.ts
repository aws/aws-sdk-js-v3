import { ListCampaignsInput } from "../shapes/ListCampaignsInput";
import { ListCampaignsOutput } from "../shapes/ListCampaignsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCampaigns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCampaigns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCampaignsInput
  },
  output: {
    shape: ListCampaignsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
