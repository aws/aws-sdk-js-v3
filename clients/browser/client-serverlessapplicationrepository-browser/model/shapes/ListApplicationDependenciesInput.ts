import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationDependenciesInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxItems"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "semanticVersion"
    }
  }
};
