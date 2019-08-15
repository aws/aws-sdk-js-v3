import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateCpuOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CoreCount: {
      shape: {
        type: "integer"
      },
      locationName: "coreCount"
    },
    ThreadsPerCore: {
      shape: {
        type: "integer"
      },
      locationName: "threadsPerCore"
    }
  }
};
