import { List as _List_ } from "@aws-sdk/types";
import { _ValidStorageOptions } from "./_ValidStorageOptions";

export const _ValidStorageOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _ValidStorageOptions,
    locationName: "ValidStorageOptions"
  }
};
