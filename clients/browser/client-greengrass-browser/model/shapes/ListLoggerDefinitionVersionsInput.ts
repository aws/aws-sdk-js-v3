import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLoggerDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["LoggerDefinitionId"],
  members: {
    LoggerDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "LoggerDefinitionId"
    },
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
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
