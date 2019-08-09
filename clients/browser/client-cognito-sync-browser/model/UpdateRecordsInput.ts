import { _RecordPatchList } from "./_RecordPatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRecordsInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "IdentityId", "DatasetName", "SyncSessionToken"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityId"
    },
    DatasetName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DatasetName"
    },
    DeviceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RecordPatches: {
      shape: _RecordPatchList
    },
    SyncSessionToken: {
      shape: {
        type: "string"
      }
    },
    ClientContext: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-Client-Context"
    }
  }
};
