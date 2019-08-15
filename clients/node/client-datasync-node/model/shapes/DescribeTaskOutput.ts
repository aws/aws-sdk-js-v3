import { _SourceNetworkInterfaceArns } from "./_SourceNetworkInterfaceArns";
import { _DestinationNetworkInterfaceArns } from "./_DestinationNetworkInterfaceArns";
import { _Options } from "./_Options";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentTaskExecutionArn: {
      shape: {
        type: "string"
      }
    },
    SourceLocationArn: {
      shape: {
        type: "string"
      }
    },
    DestinationLocationArn: {
      shape: {
        type: "string"
      }
    },
    CloudWatchLogGroupArn: {
      shape: {
        type: "string"
      }
    },
    SourceNetworkInterfaceArns: {
      shape: _SourceNetworkInterfaceArns
    },
    DestinationNetworkInterfaceArns: {
      shape: _DestinationNetworkInterfaceArns
    },
    Options: {
      shape: _Options
    },
    Excludes: {
      shape: _FilterList
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorDetail: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
