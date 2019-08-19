import { List as _List_ } from "@aws-sdk/types";
import { _RestoreJobsListMember } from "./_RestoreJobsListMember";

export const _RestoreJobsList: _List_ = {
  type: "list",
  member: {
    shape: _RestoreJobsListMember
  }
};
