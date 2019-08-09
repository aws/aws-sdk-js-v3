import { _RecordData } from "./_RecordData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestDNSAnswerOutput: _Structure_ = {
  type: "structure",
  required: [
    "Nameserver",
    "RecordName",
    "RecordType",
    "RecordData",
    "ResponseCode",
    "Protocol"
  ],
  members: {
    Nameserver: {
      shape: {
        type: "string"
      }
    },
    RecordName: {
      shape: {
        type: "string"
      }
    },
    RecordType: {
      shape: {
        type: "string"
      }
    },
    RecordData: {
      shape: _RecordData
    },
    ResponseCode: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    }
  }
};
