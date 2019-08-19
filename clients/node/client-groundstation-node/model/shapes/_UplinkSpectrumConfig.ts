import { _Frequency } from "./_Frequency";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UplinkSpectrumConfig: _Structure_ = {
  type: "structure",
  required: ["centerFrequency"],
  members: {
    centerFrequency: {
      shape: _Frequency
    },
    polarization: {
      shape: {
        type: "string"
      }
    }
  }
};
