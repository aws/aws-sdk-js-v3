import { _PatchSourceProductList } from "./_PatchSourceProductList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchSource: _Structure_ = {
  type: "structure",
  required: ["Name", "Products", "Configuration"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Products: {
      shape: _PatchSourceProductList
    },
    Configuration: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
