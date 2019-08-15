import { _NameserverList } from "./_NameserverList";
import { _ContactDetail } from "./_ContactDetail";
import { _DomainStatusList } from "./_DomainStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainDetailOutput: _Structure_ = {
  type: "structure",
  required: [
    "DomainName",
    "Nameservers",
    "AdminContact",
    "RegistrantContact",
    "TechContact"
  ],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    Nameservers: {
      shape: _NameserverList
    },
    AutoRenew: {
      shape: {
        type: "boolean"
      }
    },
    AdminContact: {
      shape: _ContactDetail
    },
    RegistrantContact: {
      shape: _ContactDetail
    },
    TechContact: {
      shape: _ContactDetail
    },
    AdminPrivacy: {
      shape: {
        type: "boolean"
      }
    },
    RegistrantPrivacy: {
      shape: {
        type: "boolean"
      }
    },
    TechPrivacy: {
      shape: {
        type: "boolean"
      }
    },
    RegistrarName: {
      shape: {
        type: "string"
      }
    },
    WhoIsServer: {
      shape: {
        type: "string"
      }
    },
    RegistrarUrl: {
      shape: {
        type: "string"
      }
    },
    AbuseContactEmail: {
      shape: {
        type: "string"
      }
    },
    AbuseContactPhone: {
      shape: {
        type: "string"
      }
    },
    RegistryDomainId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ExpirationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Reseller: {
      shape: {
        type: "string"
      }
    },
    DnsSec: {
      shape: {
        type: "string"
      }
    },
    StatusList: {
      shape: _DomainStatusList
    }
  }
};
