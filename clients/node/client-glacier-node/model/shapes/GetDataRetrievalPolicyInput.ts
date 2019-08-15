import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataRetrievalPolicyInput: _Structure_ = {
  type: "structure",
  required: ["accountId"],
  members: {
    accountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    }
  }
};
