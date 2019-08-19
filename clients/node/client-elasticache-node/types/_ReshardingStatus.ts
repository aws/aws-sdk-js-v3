import { _SlotMigration, _UnmarshalledSlotMigration } from "./_SlotMigration";

/**
 * <p>The status of an online resharding operation.</p>
 */
export interface _ReshardingStatus {
  /**
   * <p>Represents the progress of an online resharding operation.</p>
   */
  SlotMigration?: _SlotMigration;
}

export interface _UnmarshalledReshardingStatus extends _ReshardingStatus {
  /**
   * <p>Represents the progress of an online resharding operation.</p>
   */
  SlotMigration?: _UnmarshalledSlotMigration;
}
