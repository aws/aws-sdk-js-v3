import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Address: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AddressId: {
      shape: {
        type: "string",
        min: 40
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Company: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Street1: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Street2: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Street3: {
      shape: {
        type: "string",
        min: 1
      }
    },
    City: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StateOrProvince: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrefectureOrDistrict: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Landmark: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Country: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PostalCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PhoneNumber: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IsRestricted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
