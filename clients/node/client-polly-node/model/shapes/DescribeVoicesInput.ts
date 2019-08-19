import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVoicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Engine"
    },
    LanguageCode: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "LanguageCode"
    },
    IncludeAdditionalLanguageCodes: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "IncludeAdditionalLanguageCodes"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};
