import { List as _List_ } from "@aws-sdk/types";
import { _OptionConfiguration } from "./_OptionConfiguration";

export const _OptionConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _OptionConfiguration,
    locationName: "OptionConfiguration"
  }
};
