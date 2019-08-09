import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAccountAuditConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deleteScheduledAudits: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "deleteScheduledAudits"
    }
  }
};
