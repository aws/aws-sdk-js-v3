import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachTypedLinkInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "TypedLinkSpecifier"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    TypedLinkSpecifier: {
      shape: _TypedLinkSpecifier
    }
  }
};
