import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ASN1Subject: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Country: {
      shape: {
        type: "string"
      }
    },
    Organization: {
      shape: {
        type: "string"
      }
    },
    OrganizationalUnit: {
      shape: {
        type: "string"
      }
    },
    DistinguishedNameQualifier: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    CommonName: {
      shape: {
        type: "string"
      }
    },
    SerialNumber: {
      shape: {
        type: "string"
      }
    },
    Locality: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Surname: {
      shape: {
        type: "string"
      }
    },
    GivenName: {
      shape: {
        type: "string"
      }
    },
    Initials: {
      shape: {
        type: "string"
      }
    },
    Pseudonym: {
      shape: {
        type: "string"
      }
    },
    GenerationQualifier: {
      shape: {
        type: "string"
      }
    }
  }
};
