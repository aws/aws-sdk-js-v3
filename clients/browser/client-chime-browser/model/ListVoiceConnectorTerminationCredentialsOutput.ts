import { _SensitiveStringList } from "./_SensitiveStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVoiceConnectorTerminationCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Usernames: {
      shape: _SensitiveStringList
    }
  }
};
