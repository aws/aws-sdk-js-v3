import { _AwsCloudMapServiceDiscovery } from "./_AwsCloudMapServiceDiscovery";
import { _DnsServiceDiscovery } from "./_DnsServiceDiscovery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceDiscovery: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    awsCloudMap: {
      shape: _AwsCloudMapServiceDiscovery
    },
    dns: {
      shape: _DnsServiceDiscovery
    }
  }
};
