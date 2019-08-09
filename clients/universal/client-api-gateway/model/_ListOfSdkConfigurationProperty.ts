import { List as _List_ } from "@aws-sdk/types";
import { _SdkConfigurationProperty } from "./_SdkConfigurationProperty";

export const _ListOfSdkConfigurationProperty: _List_ = {
  type: "list",
  member: {
    shape: _SdkConfigurationProperty
  }
};
