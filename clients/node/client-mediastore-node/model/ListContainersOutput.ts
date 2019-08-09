import { _ContainerList } from "./_ContainerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListContainersOutput: _Structure_ = {
  type: "structure",
  required: ["Containers"],
  members: {
    Containers: {
      shape: _ContainerList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
