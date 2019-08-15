import { _StorageConnectorList } from "./_StorageConnectorList";
import { _StackAttributes } from "./_StackAttributes";
import { _UserSettingList } from "./_UserSettingList";
import { _ApplicationSettings } from "./_ApplicationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStackInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    Description: {
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
    StorageConnectors: {
      shape: _StorageConnectorList
    },
    DeleteStorageConnectors: {
      shape: {
        type: "boolean"
      }
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
    AttributesToDelete: {
      shape: _StackAttributes
    },
    UserSettings: {
      shape: _UserSettingList
    },
    ApplicationSettings: {
      shape: _ApplicationSettings
    }
  }
};
