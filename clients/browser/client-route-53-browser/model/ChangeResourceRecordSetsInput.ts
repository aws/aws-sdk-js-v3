import { _ChangeBatch } from "./_ChangeBatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ChangeResourceRecordSetsInput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneId", "ChangeBatch"],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    ChangeBatch: {
      shape: _ChangeBatch
    }
  }
};
