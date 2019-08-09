import { List as _List_ } from "@aws-sdk/types";
import { _ElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";

export const _ElasticsearchDomainStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ElasticsearchDomainStatus
  }
};
