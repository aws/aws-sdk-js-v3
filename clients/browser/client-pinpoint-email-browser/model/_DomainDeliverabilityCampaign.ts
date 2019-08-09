import { _IpList } from "./_IpList";
import { _Esps } from "./_Esps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainDeliverabilityCampaign: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CampaignId: {
      shape: {
        type: "string"
      }
    },
    ImageUrl: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    FromAddress: {
      shape: {
        type: "string"
      }
    },
    SendingIps: {
      shape: _IpList
    },
    FirstSeenDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastSeenDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    InboxCount: {
      shape: {
        type: "integer"
      }
    },
    SpamCount: {
      shape: {
        type: "integer"
      }
    },
    ReadRate: {
      shape: {
        type: "float"
      }
    },
    DeleteRate: {
      shape: {
        type: "float"
      }
    },
    ReadDeleteRate: {
      shape: {
        type: "float"
      }
    },
    ProjectedVolume: {
      shape: {
        type: "integer"
      }
    },
    Esps: {
      shape: _Esps
    }
  }
};
