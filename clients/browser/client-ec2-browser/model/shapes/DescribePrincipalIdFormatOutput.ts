import { _PrincipalIdFormatList } from "./_PrincipalIdFormatList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePrincipalIdFormatOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Principals: {
      shape: _PrincipalIdFormatList,
      locationName: "principalSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
