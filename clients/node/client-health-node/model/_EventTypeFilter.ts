import { _EventTypeCodeList } from "./_EventTypeCodeList";
import { _serviceList } from "./_serviceList";
import { _EventTypeCategoryList } from "./_EventTypeCategoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventTypeFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventTypeCodes: {
      shape: _EventTypeCodeList
    },
    services: {
      shape: _serviceList
    },
    eventTypeCategories: {
      shape: _EventTypeCategoryList
    }
  }
};
