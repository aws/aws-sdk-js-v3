import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCreditSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    CpuCredits: {
      shape: {
        type: "string"
      },
      locationName: "cpuCredits"
    }
  }
};
