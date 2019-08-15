import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticsearchInstanceTypeLimitsInput: _Structure_ = {
  type: "structure",
  required: ["InstanceType", "ElasticsearchVersion"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      },
      location: "querystring",
      locationName: "domainName"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "InstanceType"
    },
    ElasticsearchVersion: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ElasticsearchVersion"
    }
  }
};
