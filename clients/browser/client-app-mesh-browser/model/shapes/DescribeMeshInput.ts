import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMeshInput: _Structure_ = {
  type: "structure",
  required: ["meshName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
    }
  }
};
