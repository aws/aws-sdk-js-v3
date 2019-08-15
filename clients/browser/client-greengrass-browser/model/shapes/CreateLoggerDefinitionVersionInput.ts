import { ___listOfLogger } from "./___listOfLogger";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoggerDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["LoggerDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    LoggerDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "LoggerDefinitionId"
    },
    Loggers: {
      shape: ___listOfLogger
    }
  }
};
