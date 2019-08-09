import { _DnsIpAddrs } from "./_DnsIpAddrs";
import { _DirectoryVpcSettingsDescription } from "./_DirectoryVpcSettingsDescription";
import { _DirectoryConnectSettingsDescription } from "./_DirectoryConnectSettingsDescription";
import { _RadiusSettings } from "./_RadiusSettings";
import { _OwnerDirectoryDescription } from "./_OwnerDirectoryDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    ShortName: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "string"
      }
    },
    Edition: {
      shape: {
        type: "string"
      }
    },
    Alias: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DnsIpAddrs: {
      shape: _DnsIpAddrs
    },
    Stage: {
      shape: {
        type: "string"
      }
    },
    ShareStatus: {
      shape: {
        type: "string"
      }
    },
    ShareMethod: {
      shape: {
        type: "string"
      }
    },
    ShareNotes: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    LaunchTime: {
      shape: {
        type: "timestamp"
      }
    },
    StageLastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    VpcSettings: {
      shape: _DirectoryVpcSettingsDescription
    },
    ConnectSettings: {
      shape: _DirectoryConnectSettingsDescription
    },
    RadiusSettings: {
      shape: _RadiusSettings
    },
    RadiusStatus: {
      shape: {
        type: "string"
      }
    },
    StageReason: {
      shape: {
        type: "string"
      }
    },
    SsoEnabled: {
      shape: {
        type: "boolean"
      }
    },
    DesiredNumberOfDomainControllers: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    OwnerDirectoryDescription: {
      shape: _OwnerDirectoryDescription
    }
  }
};
