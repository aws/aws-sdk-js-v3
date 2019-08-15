import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScriptBootstrapActionConfig: _Structure_ = {
  type: "structure",
  required: ["Path"],
  members: {
    Path: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _XmlStringList
    }
  }
};
