import { List as _List_ } from "@aws-sdk/types";
import { _SigningJob } from "./_SigningJob";

export const _SigningJobs: _List_ = {
  type: "list",
  member: {
    shape: _SigningJob
  }
};
