import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Tls: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthorityArnList: {
      shape: ___listOf__string,
      locationName: "certificateAuthorityArnList"
    }
  }
};
