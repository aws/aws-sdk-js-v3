import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SslConfiguration: _Structure_ = {
  type: "structure",
  required: ["Certificate", "PrivateKey"],
  members: {
    Certificate: {
      shape: {
        type: "string"
      }
    },
    PrivateKey: {
      shape: {
        type: "string"
      }
    },
    Chain: {
      shape: {
        type: "string"
      }
    }
  }
};
