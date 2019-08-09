import { _MapOf__string } from "./_MapOf__string";
import { _MapOf__double } from "./_MapOf__double";
import { _Session } from "./_Session";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: ["EventType", "Timestamp"],
  members: {
    AppPackageName: {
      shape: {
        type: "string"
      }
    },
    AppTitle: {
      shape: {
        type: "string"
      }
    },
    AppVersionCode: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapOf__string
    },
    ClientSdkVersion: {
      shape: {
        type: "string"
      }
    },
    EventType: {
      shape: {
        type: "string"
      }
    },
    Metrics: {
      shape: _MapOf__double
    },
    SdkName: {
      shape: {
        type: "string"
      }
    },
    Session: {
      shape: _Session
    },
    Timestamp: {
      shape: {
        type: "string"
      }
    }
  }
};
