import { List as _List_ } from "@aws-sdk/types";
import { _CACertificate } from "./_CACertificate";

export const _CACertificates: _List_ = {
  type: "list",
  member: {
    shape: _CACertificate
  }
};
