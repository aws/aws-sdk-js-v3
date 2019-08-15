import { Map as _Map_ } from "@aws-sdk/types";
import { _ErrorDetail } from "./_ErrorDetail";

export const _ErrorByName: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _ErrorDetail
  }
};
