import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchInput: _Structure_ = {
  type: "structure",
  required: ["query"],
  members: {
    cursor: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "cursor"
    },
    expr: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "expr"
    },
    facet: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "facet"
    },
    filterQuery: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "fq"
    },
    highlight: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "highlight"
    },
    partial: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "partial"
    },
    query: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "q"
    },
    queryOptions: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "q.options"
    },
    queryParser: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "q.parser"
    },
    return: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "return"
    },
    size: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "size"
    },
    sort: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "sort"
    },
    start: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "start"
    },
    stats: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "stats"
    }
  }
};
