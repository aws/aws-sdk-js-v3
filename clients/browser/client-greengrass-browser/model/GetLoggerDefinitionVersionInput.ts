import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoggerDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["LoggerDefinitionVersionId", "LoggerDefinitionId"],
  members: {
    LoggerDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "LoggerDefinitionId"
    },
    LoggerDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "LoggerDefinitionVersionId"
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
