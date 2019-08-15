import { _Tags } from "./_Tags";
import { ___listOfInputWhitelistRuleCidr } from "./___listOfInputWhitelistRuleCidr";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInputSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["InputSecurityGroupId"],
  members: {
    InputSecurityGroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "inputSecurityGroupId"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    WhitelistRules: {
      shape: ___listOfInputWhitelistRuleCidr,
      locationName: "whitelistRules"
    }
  }
};
