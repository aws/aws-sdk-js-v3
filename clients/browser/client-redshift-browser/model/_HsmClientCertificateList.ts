import { List as _List_ } from "@aws-sdk/types";
import { _HsmClientCertificate } from "./_HsmClientCertificate";

export const _HsmClientCertificateList: _List_ = {
  type: "list",
  member: {
    shape: _HsmClientCertificate,
    locationName: "HsmClientCertificate"
  }
};
