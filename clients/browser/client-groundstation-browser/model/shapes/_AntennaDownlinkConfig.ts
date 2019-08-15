import { _SpectrumConfig } from "./_SpectrumConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AntennaDownlinkConfig: _Structure_ = {
  type: "structure",
  required: ["spectrumConfig"],
  members: {
    spectrumConfig: {
      shape: _SpectrumConfig
    }
  }
};
