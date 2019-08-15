import { _StringList } from "./_StringList";
import { _ContainerInstanceFieldList } from "./_ContainerInstanceFieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContainerInstancesInput: _Structure_ = {
  type: "structure",
  required: ["containerInstances"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    containerInstances: {
      shape: _StringList
    },
    include: {
      shape: _ContainerInstanceFieldList
    }
  }
};
