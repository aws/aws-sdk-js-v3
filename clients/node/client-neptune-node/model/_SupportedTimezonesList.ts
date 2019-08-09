import { List as _List_ } from "@aws-sdk/types";
import { _Timezone } from "./_Timezone";

export const _SupportedTimezonesList: _List_ = {
  type: "list",
  member: {
    shape: _Timezone,
    locationName: "Timezone"
  }
};
