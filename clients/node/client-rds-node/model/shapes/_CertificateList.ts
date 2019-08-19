import { List as _List_ } from "@aws-sdk/types";
import { _Certificate } from "./_Certificate";

export const _CertificateList: _List_ = {
  type: "list",
  member: {
    shape: _Certificate,
    locationName: "Certificate"
  }
};
