import { _ResourceDataContainer } from "./_ResourceDataContainer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resource: _Structure_ = {
  type: "structure",
  required: ["ResourceDataContainer", "Id", "Name"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    ResourceDataContainer: {
      shape: _ResourceDataContainer
    }
  }
};
