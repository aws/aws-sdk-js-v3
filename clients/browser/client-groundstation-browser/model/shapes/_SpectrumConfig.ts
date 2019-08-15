import { _FrequencyBandwidth } from "./_FrequencyBandwidth";
import { _Frequency } from "./_Frequency";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpectrumConfig: _Structure_ = {
  type: "structure",
  required: ["bandwidth", "centerFrequency"],
  members: {
    bandwidth: {
      shape: _FrequencyBandwidth
    },
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
