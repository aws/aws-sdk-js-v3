import { DescribeCampaignInput } from "./DescribeCampaignInput";
import { DescribeCampaignOutput } from "./DescribeCampaignOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCampaign",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCampaignInput
  },
  output: {
    shape: DescribeCampaignOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
