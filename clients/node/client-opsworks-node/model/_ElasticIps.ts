import { List as _List_ } from "@aws-sdk/types";
import { _ElasticIp } from "./_ElasticIp";

export const _ElasticIps: _List_ = {
  type: "list",
  member: {
    shape: _ElasticIp
  }
};
