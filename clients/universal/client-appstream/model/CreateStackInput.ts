import { _StorageConnectorList } from "./_StorageConnectorList";
import { _UserSettingList } from "./_UserSettingList";
import { _ApplicationSettings } from "./_ApplicationSettings";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DisplayName: {
      shape: {
        type: "string"
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
    UserSettings: {
      shape: _UserSettingList
    },
    ApplicationSettings: {
      shape: _ApplicationSettings
    },
    Tags: {
      shape: _Tags
    }
  }
};
