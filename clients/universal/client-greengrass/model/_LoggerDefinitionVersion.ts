import { ___listOfLogger } from "./___listOfLogger";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggerDefinitionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Loggers: {
      shape: ___listOfLogger
    }
  }
};
