import { _ObjectLockConfiguration } from "./_ObjectLockConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectLockConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObjectLockConfiguration: {
      shape: _ObjectLockConfiguration
    }
  },
  payload: "ObjectLockConfiguration"
};
