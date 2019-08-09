import { List as _List_ } from "@aws-sdk/types";
import { _CommandInvocation } from "./_CommandInvocation";

export const _CommandInvocationList: _List_ = {
  type: "list",
  member: {
    shape: _CommandInvocation
  }
};
