import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DvbSdtSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputSdt: {
      shape: {
        type: "string"
      },
      locationName: "outputSdt"
    },
    SdtInterval: {
      shape: {
        type: "integer",
        min: 25
      },
      locationName: "sdtInterval"
    },
    ServiceName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "serviceName"
    },
    ServiceProviderName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "serviceProviderName"
    }
  }
};
