import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionAtRest: _Structure_ = {
  type: "structure",
  required: ["DataVolumeKMSKeyId"],
  members: {
    DataVolumeKMSKeyId: {
      shape: {
        type: "string"
      },
      locationName: "dataVolumeKMSKeyId"
    }
  }
};
