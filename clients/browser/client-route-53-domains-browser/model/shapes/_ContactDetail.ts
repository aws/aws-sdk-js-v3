import { _ExtraParamList } from "./_ExtraParamList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContactDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FirstName: {
      shape: {
        type: "string"
      }
    },
    LastName: {
      shape: {
        type: "string"
      }
    },
    ContactType: {
      shape: {
        type: "string"
      }
    },
    OrganizationName: {
      shape: {
        type: "string"
      }
    },
    AddressLine1: {
      shape: {
        type: "string"
      }
    },
    AddressLine2: {
      shape: {
        type: "string"
      }
    },
    City: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    CountryCode: {
      shape: {
        type: "string"
      }
    },
    ZipCode: {
      shape: {
        type: "string"
      }
    },
    PhoneNumber: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string"
      }
    },
    Fax: {
      shape: {
        type: "string"
      }
    },
    ExtraParams: {
      shape: _ExtraParamList
    }
  },
  sensitive: true
};
