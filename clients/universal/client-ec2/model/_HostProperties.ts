import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Cores: {
      shape: {
        type: "integer"
      },
      locationName: "cores"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    Sockets: {
      shape: {
        type: "integer"
      },
      locationName: "sockets"
    },
    TotalVCpus: {
      shape: {
        type: "integer"
      },
      locationName: "totalVCpus"
    }
  }
};
