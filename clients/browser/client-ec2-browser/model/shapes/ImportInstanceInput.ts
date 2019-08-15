import { _DiskImageList } from "./_DiskImageList";
import { _ImportInstanceLaunchSpecification } from "./_ImportInstanceLaunchSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportInstanceInput: _Structure_ = {
  type: "structure",
  required: ["Platform"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DiskImages: {
      shape: _DiskImageList,
      locationName: "diskImage"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    LaunchSpecification: {
      shape: _ImportInstanceLaunchSpecification,
      locationName: "launchSpecification"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    }
  }
};
