import { _EmergencyContactList } from "./_EmergencyContactList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEmergencyContactSettingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EmergencyContactList: {
      shape: _EmergencyContactList
    }
  }
};
