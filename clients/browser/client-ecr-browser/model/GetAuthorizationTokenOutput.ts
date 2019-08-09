import { _AuthorizationDataList } from "./_AuthorizationDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAuthorizationTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizationData: {
      shape: _AuthorizationDataList
    }
  }
};
