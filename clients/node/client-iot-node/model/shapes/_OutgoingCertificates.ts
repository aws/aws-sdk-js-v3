import { List as _List_ } from "@aws-sdk/types";
import { _OutgoingCertificate } from "./_OutgoingCertificate";

export const _OutgoingCertificates: _List_ = {
  type: "list",
  member: {
    shape: _OutgoingCertificate
  }
};
