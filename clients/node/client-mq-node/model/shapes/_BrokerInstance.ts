import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConsoleURL: {
      shape: {
        type: "string"
      },
      locationName: "consoleURL"
    },
    Endpoints: {
      shape: ___listOf__string,
      locationName: "endpoints"
    },
    IpAddress: {
      shape: {
        type: "string"
      },
      locationName: "ipAddress"
    }
  }
};
