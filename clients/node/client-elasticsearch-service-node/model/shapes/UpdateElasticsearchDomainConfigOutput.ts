import { _ElasticsearchDomainConfig } from "./_ElasticsearchDomainConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateElasticsearchDomainConfigOutput: _Structure_ = {
  type: "structure",
  required: ["DomainConfig"],
  members: {
    DomainConfig: {
      shape: _ElasticsearchDomainConfig
    }
  }
};
