import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLayerVersionByArnInput: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "Arn"
    }
  }
};
