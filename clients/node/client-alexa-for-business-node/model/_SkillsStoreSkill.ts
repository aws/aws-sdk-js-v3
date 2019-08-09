import { _SampleUtterances } from "./_SampleUtterances";
import { _SkillDetails } from "./_SkillDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SkillsStoreSkill: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillId: {
      shape: {
        type: "string"
      }
    },
    SkillName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShortDescription: {
      shape: {
        type: "string"
      }
    },
    IconUrl: {
      shape: {
        type: "string"
      }
    },
    SampleUtterances: {
      shape: _SampleUtterances
    },
    SkillDetails: {
      shape: _SkillDetails
    },
    SupportsLinking: {
      shape: {
        type: "boolean"
      }
    }
  }
};
