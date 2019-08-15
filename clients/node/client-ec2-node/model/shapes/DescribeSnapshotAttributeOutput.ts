import { _CreateVolumePermissionList } from "./_CreateVolumePermissionList";
import { _ProductCodeList } from "./_ProductCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateVolumePermissions: {
      shape: _CreateVolumePermissionList,
      locationName: "createVolumePermission"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    }
  }
};
