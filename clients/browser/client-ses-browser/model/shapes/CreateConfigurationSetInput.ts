import { _ConfigurationSet } from "./_ConfigurationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationSetInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSet"],
  members: {
    ConfigurationSet: {
      shape: _ConfigurationSet
    }
  }
};
