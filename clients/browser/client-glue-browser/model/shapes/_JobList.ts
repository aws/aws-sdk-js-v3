import { List as _List_ } from "@aws-sdk/types";
import { _Job } from "./_Job";

export const _JobList: _List_ = {
  type: "list",
  member: {
    shape: _Job
  }
};
