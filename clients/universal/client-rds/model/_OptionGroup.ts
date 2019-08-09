import { _OptionsList } from "./_OptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    OptionGroupDescription: {
      shape: {
        type: "string"
      }
    },
    EngineName: {
      shape: {
        type: "string"
      }
    },
    MajorEngineVersion: {
      shape: {
        type: "string"
      }
    },
    Options: {
      shape: _OptionsList
    },
    AllowsVpcAndNonVpcInstanceMemberships: {
      shape: {
        type: "boolean"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    OptionGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
