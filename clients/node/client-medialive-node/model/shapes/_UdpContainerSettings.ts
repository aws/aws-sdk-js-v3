import { _M2tsSettings } from "./_M2tsSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UdpContainerSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    M2tsSettings: {
      shape: _M2tsSettings,
      locationName: "m2tsSettings"
    }
  }
};
