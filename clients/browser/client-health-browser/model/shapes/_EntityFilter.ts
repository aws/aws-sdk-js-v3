import { _eventArnList } from "./_eventArnList";
import { _entityArnList } from "./_entityArnList";
import { _entityValueList } from "./_entityValueList";
import { _dateTimeRangeList } from "./_dateTimeRangeList";
import { _tagFilter } from "./_tagFilter";
import { _entityStatusCodeList } from "./_entityStatusCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityFilter: _Structure_ = {
  type: "structure",
  required: ["eventArns"],
  members: {
    eventArns: {
      shape: _eventArnList
    },
    entityArns: {
      shape: _entityArnList
    },
    entityValues: {
      shape: _entityValueList
    },
    lastUpdatedTimes: {
      shape: _dateTimeRangeList
    },
    tags: {
      shape: _tagFilter
    },
    statusCodes: {
      shape: _entityStatusCodeList
    }
  }
};
