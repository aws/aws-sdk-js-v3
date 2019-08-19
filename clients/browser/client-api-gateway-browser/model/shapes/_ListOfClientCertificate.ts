import { List as _List_ } from "@aws-sdk/types";
import { _ClientCertificate } from "./_ClientCertificate";

export const _ListOfClientCertificate: _List_ = {
  type: "list",
  member: {
    shape: _ClientCertificate
  }
};
