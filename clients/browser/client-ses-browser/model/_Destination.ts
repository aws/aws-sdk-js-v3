import { _AddressList } from "./_AddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ToAddresses: {
      shape: _AddressList
    },
    CcAddresses: {
      shape: _AddressList
    },
    BccAddresses: {
      shape: _AddressList
    }
  }
};
