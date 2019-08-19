import { _EC2InstanceDetails } from "./_EC2InstanceDetails";
import { _RDSInstanceDetails } from "./_RDSInstanceDetails";
import { _RedshiftInstanceDetails } from "./_RedshiftInstanceDetails";
import { _ElastiCacheInstanceDetails } from "./_ElastiCacheInstanceDetails";
import { _ESInstanceDetails } from "./_ESInstanceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2InstanceDetails: {
      shape: _EC2InstanceDetails
    },
    RDSInstanceDetails: {
      shape: _RDSInstanceDetails
    },
    RedshiftInstanceDetails: {
      shape: _RedshiftInstanceDetails
    },
    ElastiCacheInstanceDetails: {
      shape: _ElastiCacheInstanceDetails
    },
    ESInstanceDetails: {
      shape: _ESInstanceDetails
    }
  }
};
