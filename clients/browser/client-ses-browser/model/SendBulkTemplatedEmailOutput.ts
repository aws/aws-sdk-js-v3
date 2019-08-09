import { _BulkEmailDestinationStatusList } from "./_BulkEmailDestinationStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendBulkTemplatedEmailOutput: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: _BulkEmailDestinationStatusList
    }
  }
};
