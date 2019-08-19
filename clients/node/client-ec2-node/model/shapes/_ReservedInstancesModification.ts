import { _ReservedInstancesModificationResultList } from "./_ReservedInstancesModificationResultList";
import { _ReservedIntancesIds } from "./_ReservedIntancesIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstancesModification: _Structure_ = {
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
    EffectiveDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "effectiveDate"
    },
    ModificationResults: {
      shape: _ReservedInstancesModificationResultList,
      locationName: "modificationResultSet"
    },
    ReservedInstancesIds: {
      shape: _ReservedIntancesIds,
      locationName: "reservedInstancesSet"
    },
    ReservedInstancesModificationId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesModificationId"
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
    UpdateDate: {
      shape: {
        type: "timestamp"
      },
      locationName: "updateDate"
    }
  }
};
