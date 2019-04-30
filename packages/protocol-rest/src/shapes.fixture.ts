import { Member } from "@aws-sdk/types";

export const bodyBlobMember: Member = {
  shape: { type: "blob" }
};

export const bodyBlobStreamingMember: Member = {
  shape: {
    type: "blob",
    streaming: true
  }
};

export const bodyBooleanMember: Member = {
  shape: { type: "boolean" }
};

export const bodyFloatMember: Member = {
  shape: { type: "float" }
};

export const bodyIntegerMember: Member = {
  shape: { type: "integer" }
};

export const bodyListMember: Member = {
  shape: {
    type: "list",
    member: {
      shape: { type: "string" }
    }
  }
};

export const bodyMapMember: Member = {
  shape: {
    type: "map",
    key: {
      shape: { type: "string" }
    },
    value: {
      shape: { type: "string" }
    }
  }
};

export const bodyStringMember: Member = {
  shape: { type: "string" }
};

export const bodyStructureMember: Member = {
  shape: {
    type: "structure",
    required: [],
    members: {
      data: {
        shape: { type: "string" }
      }
    }
  }
};

export const bodyTimestampMember: Member = {
  shape: {
    type: "timestamp",
    timestampFormat: "iso8601"
  }
};

export const headerJsonMember: Member = {
  shape: {
    type: "string",
    jsonValue: true
  },
  location: "header",
  locationName: "x-amz-json"
};

export const headerMapMember: Member = {
  shape: {
    type: "map",
    key: { shape: { type: "string" } },
    value: {
      shape: { type: "string" }
    }
  },
  location: "headers"
};

export const headerMapCustomLocationMember: Member = {
  shape: {
    type: "map",
    key: { shape: { type: "string" } },
    value: {
      shape: { type: "string" }
    }
  },
  location: "headers",
  locationName: "x-amz-map-"
};
