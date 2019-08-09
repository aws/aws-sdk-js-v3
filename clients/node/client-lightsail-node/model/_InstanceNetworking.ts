import { _MonthlyTransfer } from "./_MonthlyTransfer";
import { _InstancePortInfoList } from "./_InstancePortInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceNetworking: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    monthlyTransfer: {
      shape: _MonthlyTransfer
    },
    ports: {
      shape: _InstancePortInfoList
    }
  }
};
