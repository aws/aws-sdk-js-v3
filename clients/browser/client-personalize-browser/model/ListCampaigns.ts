import { ListCampaignsInput } from "./ListCampaignsInput";
import { ListCampaignsOutput } from "./ListCampaignsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
