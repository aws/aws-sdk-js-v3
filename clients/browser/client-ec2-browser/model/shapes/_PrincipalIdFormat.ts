import { _IdFormatList } from "./_IdFormatList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrincipalIdFormat: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Statuses: {
      shape: _IdFormatList,
      locationName: "statusSet"
    }
  }
};
