import { _SslProtocolsList } from "./_SslProtocolsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginSslProtocols: _Structure_ = {
  type: "structure",
  required: ["Quantity", "Items"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _SslProtocolsList
    }
  }
};
