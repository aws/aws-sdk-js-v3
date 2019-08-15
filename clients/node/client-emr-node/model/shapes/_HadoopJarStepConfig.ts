import { _KeyValueList } from "./_KeyValueList";
import { _XmlStringList } from "./_XmlStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HadoopJarStepConfig: _Structure_ = {
  type: "structure",
  required: ["Jar"],
  members: {
    Properties: {
      shape: _KeyValueList
    },
    Jar: {
      shape: {
        type: "string"
      }
    },
    MainClass: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _XmlStringList
    }
  }
};
