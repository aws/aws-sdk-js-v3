import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerEBSVolumeInfo: _Structure_ = {
  type: "structure",
  required: ["VolumeSizeGB", "KafkaBrokerNodeId"],
  members: {
    KafkaBrokerNodeId: {
      shape: {
        type: "string"
      },
      locationName: "kafkaBrokerNodeId"
    },
    VolumeSizeGB: {
      shape: {
        type: "integer"
      },
      locationName: "volumeSizeGB"
    }
  }
};
