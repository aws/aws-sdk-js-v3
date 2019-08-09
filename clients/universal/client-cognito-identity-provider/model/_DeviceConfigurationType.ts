import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceConfigurationType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChallengeRequiredOnNewDevice: {
      shape: {
        type: "boolean"
      }
    },
    DeviceOnlyRememberedOnUserPrompt: {
      shape: {
        type: "boolean"
      }
    }
  }
};
