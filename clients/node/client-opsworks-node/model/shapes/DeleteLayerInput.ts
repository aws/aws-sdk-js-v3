import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLayerInput: _Structure_ = {
  type: "structure",
  required: ["LayerId"],
  members: {
    LayerId: {
      shape: {
        type: "string"
      }
    }
  }
};
