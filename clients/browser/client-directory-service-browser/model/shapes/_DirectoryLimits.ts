import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryLimits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudOnlyDirectoriesLimit: {
      shape: {
        type: "integer"
      }
    },
    CloudOnlyDirectoriesCurrentCount: {
      shape: {
        type: "integer"
      }
    },
    CloudOnlyDirectoriesLimitReached: {
      shape: {
        type: "boolean"
      }
    },
    CloudOnlyMicrosoftADLimit: {
      shape: {
        type: "integer"
      }
    },
    CloudOnlyMicrosoftADCurrentCount: {
      shape: {
        type: "integer"
      }
    },
    CloudOnlyMicrosoftADLimitReached: {
      shape: {
        type: "boolean"
      }
    },
    ConnectedDirectoriesLimit: {
      shape: {
        type: "integer"
      }
    },
    ConnectedDirectoriesCurrentCount: {
      shape: {
        type: "integer"
      }
    },
    ConnectedDirectoriesLimitReached: {
      shape: {
        type: "boolean"
      }
    }
  }
};
