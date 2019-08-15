import { _LoadPermissionList } from "./_LoadPermissionList";
import { _ProductCodeList } from "./_ProductCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FpgaImageAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FpgaImageId: {
      shape: {
        type: "string"
      },
      locationName: "fpgaImageId"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    LoadPermissions: {
      shape: _LoadPermissionList,
      locationName: "loadPermissions"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    }
  }
};
