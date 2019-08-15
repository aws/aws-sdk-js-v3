import { _WebsiteCaSummaryList } from "./_WebsiteCaSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWebsiteCertificateAuthoritiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebsiteCertificateAuthorities: {
      shape: _WebsiteCaSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
