import { List as _List_ } from "@aws-sdk/types";
import { _SigningCertificate } from "./_SigningCertificate";

export const _certificateListType: _List_ = {
  type: "list",
  member: {
    shape: _SigningCertificate
  }
};
