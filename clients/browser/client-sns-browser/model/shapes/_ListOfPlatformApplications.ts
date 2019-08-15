import { List as _List_ } from "@aws-sdk/types";
import { _PlatformApplication } from "./_PlatformApplication";

export const _ListOfPlatformApplications: _List_ = {
  type: "list",
  member: {
    shape: _PlatformApplication
  }
};
