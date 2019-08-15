import { _OnPremConfig } from "./_OnPremConfig";
import { _NfsMountOptions } from "./_NfsMountOptions";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLocationNfsInput: _Structure_ = {
  type: "structure",
  required: ["Subdirectory", "ServerHostname", "OnPremConfig"],
  members: {
    Subdirectory: {
      shape: {
        type: "string"
      }
    },
    ServerHostname: {
      shape: {
        type: "string"
      }
    },
    OnPremConfig: {
      shape: _OnPremConfig
    },
    MountOptions: {
      shape: _NfsMountOptions
    },
    Tags: {
      shape: _TagList
    }
  }
};
