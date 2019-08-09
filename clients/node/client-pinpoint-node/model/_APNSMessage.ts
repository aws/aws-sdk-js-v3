import { _MapOf__string } from "./_MapOf__string";
import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _APNSMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    Badge: {
      shape: {
        type: "integer"
      }
    },
    Body: {
      shape: {
        type: "string"
      }
    },
    Category: {
      shape: {
        type: "string"
      }
    },
    CollapseId: {
      shape: {
        type: "string"
      }
    },
    Data: {
      shape: _MapOf__string
    },
    MediaUrl: {
      shape: {
        type: "string"
      }
    },
    PreferredAuthenticationMethod: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "string"
      }
    },
    RawContent: {
      shape: {
        type: "string"
      }
    },
    SilentPush: {
      shape: {
        type: "boolean"
      }
    },
    Sound: {
      shape: {
        type: "string"
      }
    },
    Substitutions: {
      shape: _MapOfListOf__string
    },
    ThreadId: {
      shape: {
        type: "string"
      }
    },
    TimeToLive: {
      shape: {
        type: "integer"
      }
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
