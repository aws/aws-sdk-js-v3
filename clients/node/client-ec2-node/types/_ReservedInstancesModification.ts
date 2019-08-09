import {
  _ReservedInstancesModificationResult,
  _UnmarshalledReservedInstancesModificationResult
} from "./_ReservedInstancesModificationResult";
import {
  _ReservedInstancesId,
  _UnmarshalledReservedInstancesId
} from "./_ReservedInstancesId";

/**
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface _ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date | string | number;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?:
    | Array<_ReservedInstancesModificationResult>
    | Iterable<_ReservedInstancesModificationResult>;

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?:
    | Array<_ReservedInstancesId>
    | Iterable<_ReservedInstancesId>;

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date | string | number;
}

export interface _UnmarshalledReservedInstancesModification
  extends _ReservedInstancesModification {
  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: Array<_UnmarshalledReservedInstancesModificationResult>;

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: Array<_UnmarshalledReservedInstancesId>;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}
