import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCommandInvocationInput: _Structure_ = {
  type: "structure",
  required: ["CommandId", "InstanceId"],
  members: {
    CommandId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    PluginName: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
