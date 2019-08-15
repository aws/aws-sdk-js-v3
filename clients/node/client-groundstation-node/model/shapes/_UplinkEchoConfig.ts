import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UplinkEchoConfig: _Structure_ = {
  type: "structure",
  required: ["antennaUplinkConfigArn", "enabled"],
  members: {
    antennaUplinkConfigArn: {
      shape: {
        type: "string"
      }
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
