import { _ElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateElasticsearchDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainStatus: {
      shape: _ElasticsearchDomainStatus
    }
  }
};
