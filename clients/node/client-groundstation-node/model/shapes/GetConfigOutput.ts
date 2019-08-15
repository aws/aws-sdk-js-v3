import { _ConfigTypeData } from "./_ConfigTypeData";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigOutput: _Structure_ = {
  type: "structure",
  required: ["configArn", "configData", "configId", "name"],
  members: {
    configArn: {
      shape: {
        type: "string"
      }
    },
    configData: {
      shape: _ConfigTypeData
    },
    configId: {
      shape: {
        type: "string"
      }
    },
    configType: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagsMap
    }
  }
};
