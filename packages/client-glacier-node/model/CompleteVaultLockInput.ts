import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompleteVaultLockInput: _Structure_ = {
  type: "structure",
  required: ["accountId", "vaultName", "lockId"],
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
    lockId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "lockId"
    }
  }
};
