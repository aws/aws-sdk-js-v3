import { _DnsProperties } from "./_DnsProperties";
import { _HttpProperties } from "./_HttpProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NamespaceProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DnsProperties: {
      shape: _DnsProperties
    },
    HttpProperties: {
      shape: _HttpProperties
    }
  }
};
