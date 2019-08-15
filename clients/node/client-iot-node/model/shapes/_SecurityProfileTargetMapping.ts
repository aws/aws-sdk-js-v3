import { _SecurityProfileIdentifier } from "./_SecurityProfileIdentifier";
import { _SecurityProfileTarget } from "./_SecurityProfileTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityProfileTargetMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileIdentifier: {
      shape: _SecurityProfileIdentifier
    },
    target: {
      shape: _SecurityProfileTarget
    }
  }
};
