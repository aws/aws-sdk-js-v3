import { _BlockDeviceMappingRequestList } from "./_BlockDeviceMappingRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateImageInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "Name"],
  members: {
    BlockDeviceMappings: {
      shape: _BlockDeviceMappingRequestList,
      locationName: "blockDeviceMapping"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    NoReboot: {
      shape: {
        type: "boolean"
      },
      locationName: "noReboot"
    }
  }
};
