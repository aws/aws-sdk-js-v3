import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReusableDelegationSetInput: _Structure_ = {
  type: "structure",
  required: ["CallerReference"],
  members: {
    CallerReference: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HostedZoneId: {
      shape: {
        type: "string"
      }
    }
  }
};
