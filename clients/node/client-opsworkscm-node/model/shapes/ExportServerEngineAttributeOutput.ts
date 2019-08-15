import { _EngineAttribute } from "./_EngineAttribute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportServerEngineAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineAttribute: {
      shape: _EngineAttribute
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
