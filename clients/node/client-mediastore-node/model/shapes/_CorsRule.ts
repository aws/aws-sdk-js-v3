import { _AllowedOrigins } from "./_AllowedOrigins";
import { _AllowedMethods } from "./_AllowedMethods";
import { _AllowedHeaders } from "./_AllowedHeaders";
import { _ExposeHeaders } from "./_ExposeHeaders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CorsRule: _Structure_ = {
  type: "structure",
  required: ["AllowedOrigins", "AllowedHeaders"],
  members: {
    AllowedOrigins: {
      shape: _AllowedOrigins
    },
    AllowedMethods: {
      shape: _AllowedMethods
    },
    AllowedHeaders: {
      shape: _AllowedHeaders
    },
    MaxAgeSeconds: {
      shape: {
        type: "integer"
      }
    },
    ExposeHeaders: {
      shape: _ExposeHeaders
    }
  }
};
