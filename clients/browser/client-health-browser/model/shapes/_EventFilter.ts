import { _eventArnList } from "./_eventArnList";
import { __eventTypeList } from "./__eventTypeList";
import { _serviceList } from "./_serviceList";
import { _regionList } from "./_regionList";
import { _availabilityZones } from "./_availabilityZones";
import { _dateTimeRangeList } from "./_dateTimeRangeList";
import { _entityArnList } from "./_entityArnList";
import { _entityValueList } from "./_entityValueList";
import { __eventTypeCategoryList } from "./__eventTypeCategoryList";
import { _tagFilter } from "./_tagFilter";
import { _eventStatusCodeList } from "./_eventStatusCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventArns: {
      shape: _eventArnList
    },
    eventTypeCodes: {
      shape: __eventTypeList
    },
    services: {
      shape: _serviceList
    },
    regions: {
      shape: _regionList
    },
    availabilityZones: {
      shape: _availabilityZones
    },
    startTimes: {
      shape: _dateTimeRangeList
    },
    endTimes: {
      shape: _dateTimeRangeList
    },
    lastUpdatedTimes: {
      shape: _dateTimeRangeList
    },
    entityArns: {
      shape: _entityArnList
    },
    entityValues: {
      shape: _entityValueList
    },
    eventTypeCategories: {
      shape: __eventTypeCategoryList
    },
    tags: {
      shape: _tagFilter
    },
    eventStatusCodes: {
      shape: _eventStatusCodeList
    }
  }
};
