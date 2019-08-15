import { _ModelPackageStatusItemList } from "./_ModelPackageStatusItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelPackageStatusDetails: _Structure_ = {
  type: "structure",
  required: ["ValidationStatuses"],
  members: {
    ValidationStatuses: {
      shape: _ModelPackageStatusItemList
    },
    ImageScanStatuses: {
      shape: _ModelPackageStatusItemList
    }
  }
};
