import { _DecodeConfig } from "./_DecodeConfig";
import { _DemodulationConfig } from "./_DemodulationConfig";
import { _SpectrumConfig } from "./_SpectrumConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AntennaDownlinkDemodDecodeConfig: _Structure_ = {
  type: "structure",
  required: ["decodeConfig", "demodulationConfig", "spectrumConfig"],
  members: {
    decodeConfig: {
      shape: _DecodeConfig
    },
    demodulationConfig: {
      shape: _DemodulationConfig
    },
    spectrumConfig: {
      shape: _SpectrumConfig
    }
  }
};
