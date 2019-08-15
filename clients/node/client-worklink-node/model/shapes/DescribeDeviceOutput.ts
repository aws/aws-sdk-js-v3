import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeviceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    Model: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Manufacturer: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperatingSystem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperatingSystemVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PatchLevel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FirstAccessedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastAccessedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
