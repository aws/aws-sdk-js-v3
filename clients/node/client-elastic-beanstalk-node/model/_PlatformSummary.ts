import { _SupportedTierList } from "./_SupportedTierList";
import { _SupportedAddonList } from "./_SupportedAddonList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlatformSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformArn: {
      shape: {
        type: "string"
      }
    },
    PlatformOwner: {
      shape: {
        type: "string"
      }
    },
    PlatformStatus: {
      shape: {
        type: "string"
      }
    },
    PlatformCategory: {
      shape: {
        type: "string"
      }
    },
    OperatingSystemName: {
      shape: {
        type: "string"
      }
    },
    OperatingSystemVersion: {
      shape: {
        type: "string"
      }
    },
    SupportedTierList: {
      shape: _SupportedTierList
    },
    SupportedAddonList: {
      shape: _SupportedAddonList
    }
  }
};
