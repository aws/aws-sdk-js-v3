import { _Encryption } from "./_Encryption";
import { _Transport } from "./_Transport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Output: _Structure_ = {
  type: "structure",
  required: ["OutputArn", "Name"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Destination: {
      shape: {
        type: "string"
      },
      locationName: "destination"
    },
    Encryption: {
      shape: _Encryption,
      locationName: "encryption"
    },
    EntitlementArn: {
      shape: {
        type: "string"
      },
      locationName: "entitlementArn"
    },
    MediaLiveInputArn: {
      shape: {
        type: "string"
      },
      locationName: "mediaLiveInputArn"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    OutputArn: {
      shape: {
        type: "string"
      },
      locationName: "outputArn"
    },
    Port: {
      shape: {
        type: "integer"
      },
      locationName: "port"
    },
    Transport: {
      shape: _Transport,
      locationName: "transport"
    }
  }
};
