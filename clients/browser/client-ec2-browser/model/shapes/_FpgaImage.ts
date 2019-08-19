import { _PciId } from "./_PciId";
import { _FpgaImageState } from "./_FpgaImageState";
import { _ProductCodeList } from "./_ProductCodeList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FpgaImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FpgaImageId: {
      shape: {
        type: "string"
      },
      locationName: "fpgaImageId"
    },
    FpgaImageGlobalId: {
      shape: {
        type: "string"
      },
      locationName: "fpgaImageGlobalId"
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
    ShellVersion: {
      shape: {
        type: "string"
      },
      locationName: "shellVersion"
    },
    PciId: {
      shape: _PciId,
      locationName: "pciId"
    },
    State: {
      shape: _FpgaImageState,
      locationName: "state"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    UpdateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "updateTime"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    OwnerAlias: {
      shape: {
        type: "string"
      },
      locationName: "ownerAlias"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    Tags: {
      shape: _TagList,
      locationName: "tags"
    },
    Public: {
      shape: {
        type: "boolean"
      },
      locationName: "public"
    },
    DataRetentionSupport: {
      shape: {
        type: "boolean"
      },
      locationName: "dataRetentionSupport"
    }
  }
};
