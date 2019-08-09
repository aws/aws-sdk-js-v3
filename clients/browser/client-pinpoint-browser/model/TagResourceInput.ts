import { _TagsModel } from "./_TagsModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagsModel"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource-arn"
    },
    TagsModel: {
      shape: _TagsModel
    }
  },
  payload: "TagsModel"
};
