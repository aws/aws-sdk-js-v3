import { ___listOf__string } from "./___listOf__string";
import { _Tags } from "./_Tags";
import { ___listOfInputWhitelistRule } from "./___listOfInputWhitelistRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Inputs: {
      shape: ___listOf__string,
      locationName: "inputs"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    WhitelistRules: {
      shape: ___listOfInputWhitelistRule,
      locationName: "whitelistRules"
    }
  }
};
