import { _WebsiteAuthorizationProvidersSummaryList } from "./_WebsiteAuthorizationProvidersSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWebsiteAuthorizationProvidersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebsiteAuthorizationProviders: {
      shape: _WebsiteAuthorizationProvidersSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
