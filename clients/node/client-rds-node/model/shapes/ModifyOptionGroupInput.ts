import { _OptionConfigurationList } from "./_OptionConfigurationList";
import { _OptionNamesList } from "./_OptionNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyOptionGroupInput: _Structure_ = {
  type: "structure",
  required: ["OptionGroupName"],
  members: {
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    OptionsToInclude: {
      shape: _OptionConfigurationList
    },
    OptionsToRemove: {
      shape: _OptionNamesList
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
