import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCompatibleElasticsearchVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      },
      location: "querystring",
      locationName: "domainName"
    }
  }
};
