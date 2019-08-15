import { _InstanceGroupTypeList } from "./_InstanceGroupTypeList";
import { _InstanceStateList } from "./_InstanceStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstancesInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupTypes: {
      shape: _InstanceGroupTypeList
    },
    InstanceFleetId: {
      shape: {
        type: "string"
      }
    },
    InstanceFleetType: {
      shape: {
        type: "string"
      }
    },
    InstanceStates: {
      shape: _InstanceStateList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
