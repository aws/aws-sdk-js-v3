/**
 * <p/>
 */
export interface _InventorySchedule {
  /**
   * <p>Specifies how frequently inventory results are produced.</p>
   */
  Frequency: "Daily" | "Weekly" | string;
}

export type _UnmarshalledInventorySchedule = _InventorySchedule;
