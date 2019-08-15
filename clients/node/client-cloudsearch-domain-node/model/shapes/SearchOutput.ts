import { _SearchStatus } from "./_SearchStatus";
import { _Hits } from "./_Hits";
import { _Facets } from "./_Facets";
import { _Stats } from "./_Stats";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: _SearchStatus
    },
    hits: {
      shape: _Hits
    },
    facets: {
      shape: _Facets
    },
    stats: {
      shape: _Stats
    }
  }
};
