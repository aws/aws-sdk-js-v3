import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateEncryption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Algorithm: {
      shape: {
        type: "string"
      },
      locationName: "algorithm"
    },
    ConstantInitializationVector: {
      shape: {
        type: "string"
      },
      locationName: "constantInitializationVector"
    },
    DeviceId: {
      shape: {
        type: "string"
      },
      locationName: "deviceId"
    },
    KeyType: {
      shape: {
        type: "string"
      },
      locationName: "keyType"
    },
    Region: {
      shape: {
        type: "string"
      },
      locationName: "region"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    },
    SecretArn: {
      shape: {
        type: "string"
      },
      locationName: "secretArn"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    }
  }
};
