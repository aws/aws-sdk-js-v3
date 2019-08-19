import { _TagSet } from "./_TagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectTaggingOutput: _Structure_ = {
  type: "structure",
  required: ["TagSet"],
  members: {
    VersionId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-version-id"
    },
    TagSet: {
      shape: _TagSet
    }
  }
};
