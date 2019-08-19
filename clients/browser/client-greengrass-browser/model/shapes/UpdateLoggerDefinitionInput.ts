import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLoggerDefinitionInput: _Structure_ = {
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
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
