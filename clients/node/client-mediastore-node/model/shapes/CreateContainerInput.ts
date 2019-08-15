import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateContainerInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
