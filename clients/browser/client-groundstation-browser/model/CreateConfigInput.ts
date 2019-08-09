import { _ConfigTypeData } from "./_ConfigTypeData";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigInput: _Structure_ = {
  type: "structure",
  required: ["configData", "name"],
  members: {
    configData: {
      shape: _ConfigTypeData
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagsMap
    }
  }
};
