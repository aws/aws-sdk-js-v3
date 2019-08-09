import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoggerDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["LoggerDefinitionId"],
  members: {
    LoggerDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "LoggerDefinitionId"
    }
  }
};
