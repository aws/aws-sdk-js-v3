import { _UserMetadataList } from "./_UserMetadataList";
import { _GroupMetadataList } from "./_GroupMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Participants: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _UserMetadataList
    },
    Groups: {
      shape: _GroupMetadataList
    }
  }
};
