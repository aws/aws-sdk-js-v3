import { _InstanceCountList } from "./_InstanceCountList";
import { _PriceScheduleList } from "./_PriceScheduleList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstancesListing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "createDate"
    },
    InstanceCounts: {
      shape: _InstanceCountList,
      locationName: "instanceCounts"
    },
    PriceSchedules: {
      shape: _PriceScheduleList,
      locationName: "priceSchedules"
    },
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    },
    ReservedInstancesListingId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesListingId"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    UpdateDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "updateDate"
    }
  }
};
