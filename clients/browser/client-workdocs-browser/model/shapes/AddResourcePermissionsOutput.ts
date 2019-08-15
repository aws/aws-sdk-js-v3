import { _ShareResultsList } from "./_ShareResultsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddResourcePermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ShareResults: {
      shape: _ShareResultsList
    }
  }
};
