import { _HttpHeaderList } from "./_HttpHeaderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContextDataType: _Structure_ = {
  type: "structure",
  required: ["IpAddress", "ServerName", "ServerPath", "HttpHeaders"],
  members: {
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string"
      }
    },
    ServerPath: {
      shape: {
        type: "string"
      }
    },
    HttpHeaders: {
      shape: _HttpHeaderList
    },
    EncodedData: {
      shape: {
        type: "string"
      }
    }
  }
};
