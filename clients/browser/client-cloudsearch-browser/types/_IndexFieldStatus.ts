import { _IndexField, _UnmarshalledIndexField } from "./_IndexField";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The value of an <code>IndexField</code> and its current status.</p>
 */
export interface _IndexFieldStatus {
  /**
   * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
   */
  Options: _IndexField;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledIndexFieldStatus extends _IndexFieldStatus {
  /**
   * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
   */
  Options: _UnmarshalledIndexField;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
