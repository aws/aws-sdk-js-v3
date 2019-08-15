import { _ShortSkillIdList } from "./_ShortSkillIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInvitationConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContactEmail: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrivateSkillIds: {
      shape: _ShortSkillIdList
    }
  }
};
