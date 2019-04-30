import { _MapOf__string } from "./_MapOf__string";
import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultPushNotificationMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    Body: {
      shape: {
        type: "string"
      }
    },
    Data: {
      shape: _MapOf__string
    },
    SilentPush: {
      shape: {
        type: "boolean"
      }
    },
    Substitutions: {
      shape: _MapOfListOf__string
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    }
  }
};
