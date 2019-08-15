import { List as _List_ } from "@aws-sdk/types";
import { _ThirdPartyJob } from "./_ThirdPartyJob";

export const _ThirdPartyJobList: _List_ = {
  type: "list",
  member: {
    shape: _ThirdPartyJob
  }
};
