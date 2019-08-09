import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnablePolicyTypeInput: _Structure_ = {
  type: "structure",
  required: ["RootId", "PolicyType"],
  members: {
    RootId: {
      shape: {
        type: "string"
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    }
  }
};
