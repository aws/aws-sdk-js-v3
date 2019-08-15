import { List as _List_ } from "@aws-sdk/types";
import { _UpdateTarget } from "./_UpdateTarget";

export const _EligibleTracksToUpdateList: _List_ = {
  type: "list",
  member: {
    shape: _UpdateTarget,
    locationName: "UpdateTarget"
  }
};
