import { List as _List_ } from "@aws-sdk/types";
import { _EbsBlockDevice } from "./_EbsBlockDevice";

export const _EbsBlockDeviceList: _List_ = {
  type: "list",
  member: {
    shape: _EbsBlockDevice
  }
};
