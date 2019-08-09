import { _PatchPropertiesList } from "./_PatchPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchPropertiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Properties: {
      shape: _PatchPropertiesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
