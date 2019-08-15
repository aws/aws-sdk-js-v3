import { _SlotMigration } from "./_SlotMigration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReshardingStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SlotMigration: {
      shape: _SlotMigration
    }
  }
};
