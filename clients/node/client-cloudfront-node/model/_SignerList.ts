import { List as _List_ } from "@aws-sdk/types";
import { _Signer } from "./_Signer";

export const _SignerList: _List_ = {
  type: "list",
  member: {
    shape: _Signer,
    locationName: "Signer"
  }
};
