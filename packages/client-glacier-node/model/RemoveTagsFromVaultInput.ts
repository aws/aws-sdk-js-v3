import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromVaultInput: _Structure_ = {
  type: "structure",
  required: ["accountId", "vaultName"],
  members: {
    accountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    vaultName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "vaultName"
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
