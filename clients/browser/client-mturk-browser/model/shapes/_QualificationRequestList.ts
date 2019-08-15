import { List as _List_ } from "@aws-sdk/types";
import { _QualificationRequest } from "./_QualificationRequest";

export const _QualificationRequestList: _List_ = {
  type: "list",
  member: {
    shape: _QualificationRequest
  }
};
