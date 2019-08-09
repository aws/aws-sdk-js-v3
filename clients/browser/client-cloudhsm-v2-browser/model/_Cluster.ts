import { _Hsms } from "./_Hsms";
import { _ExternalSubnetMapping } from "./_ExternalSubnetMapping";
import { _Certificates } from "./_Certificates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPolicy: {
      shape: {
        type: "string"
      }
    },
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Hsms: {
      shape: _Hsms
    },
    HsmType: {
      shape: {
        type: "string"
      }
    },
    PreCoPassword: {
      shape: {
        type: "string",
        min: 7
      }
    },
    SecurityGroup: {
      shape: {
        type: "string"
      }
    },
    SourceBackupId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    StateMessage: {
      shape: {
        type: "string"
      }
    },
    SubnetMapping: {
      shape: _ExternalSubnetMapping
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    Certificates: {
      shape: _Certificates
    }
  }
};
