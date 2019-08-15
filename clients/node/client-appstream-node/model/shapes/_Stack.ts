import { _StorageConnectorList } from "./_StorageConnectorList";
import { _StackErrors } from "./_StackErrors";
import { _UserSettingList } from "./_UserSettingList";
import { _ApplicationSettingsResponse } from "./_ApplicationSettingsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stack: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    StorageConnectors: {
      shape: _StorageConnectorList
    },
    RedirectURL: {
      shape: {
        type: "string"
      }
    },
    FeedbackURL: {
      shape: {
        type: "string"
      }
    },
    StackErrors: {
      shape: _StackErrors
    },
    UserSettings: {
      shape: _UserSettingList
    },
    ApplicationSettings: {
      shape: _ApplicationSettingsResponse
    }
  }
};
