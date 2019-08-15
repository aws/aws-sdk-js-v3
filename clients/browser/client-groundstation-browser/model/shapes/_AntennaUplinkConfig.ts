import { _UplinkSpectrumConfig } from "./_UplinkSpectrumConfig";
import { _Eirp } from "./_Eirp";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AntennaUplinkConfig: _Structure_ = {
  type: "structure",
  required: ["spectrumConfig", "targetEirp"],
  members: {
    spectrumConfig: {
      shape: _UplinkSpectrumConfig
    },
    targetEirp: {
      shape: _Eirp
    }
  }
};
