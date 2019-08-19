import { _Tags } from "./_Tags";
import { ___listOfInputWhitelistRuleCidr } from "./___listOfInputWhitelistRuleCidr";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInputSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
