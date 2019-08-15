import { _EmailAddressList } from "./_EmailAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ToAddresses: {
      shape: _EmailAddressList
    },
    CcAddresses: {
      shape: _EmailAddressList
    },
    BccAddresses: {
      shape: _EmailAddressList
    }
  }
};
