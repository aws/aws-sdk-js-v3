import { _SslProtocols } from "./_SslProtocols";
import { _Ciphers } from "./_Ciphers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SslPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SslProtocols: {
      shape: _SslProtocols
    },
    Ciphers: {
      shape: _Ciphers
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
