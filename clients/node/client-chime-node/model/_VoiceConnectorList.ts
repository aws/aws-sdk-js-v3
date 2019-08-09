import { List as _List_ } from "@aws-sdk/types";
import { _VoiceConnector } from "./_VoiceConnector";

export const _VoiceConnectorList: _List_ = {
  type: "list",
  member: {
    shape: _VoiceConnector
  }
};
