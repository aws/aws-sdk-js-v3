import {
  _InspectorServiceAttributes,
  _UnmarshalledInspectorServiceAttributes
} from "./_InspectorServiceAttributes";
import {
  _AssetAttributes,
  _UnmarshalledAssetAttributes
} from "./_AssetAttributes";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.</p>
 */
export interface _Finding {
  /**
   * <p>The ARN that specifies the finding.</p>
   */
  arn: string;

  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion?: number;

  /**
   * <p>The data element is set to "Inspector".</p>
   */
  service?: string;

  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   */
  serviceAttributes?: _InspectorServiceAttributes;

  /**
   * <p>The type of the host from which the finding is generated.</p>
   */
  assetType?: "ec2-instance" | string;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  assetAttributes?: _AssetAttributes;

  /**
   * <p>The ID of the finding.</p>
   */
  id?: string;

  /**
   * <p>The name of the finding.</p>
   */
  title?: string;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The recommendation for the finding.</p>
   */
  recommendation?: string;

  /**
   * <p>The finding severity. Values can be set to High, Medium, Low, and Informational.</p>
   */
  severity?: "Low" | "Medium" | "High" | "Informational" | "Undefined" | string;

  /**
   * <p>The numeric value of the finding severity.</p>
   */
  numericSeverity?: number;

  /**
   * <p>This data element is currently not used.</p>
   */
  confidence?: number;

  /**
   * <p>This data element is currently not used.</p>
   */
  indicatorOfCompromise?: boolean;

  /**
   * <p>The system-defined attributes for the finding.</p>
   */
  attributes: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   */
  userAttributes: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The time when the finding was generated.</p>
   */
  createdAt: Date | string | number;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   */
  updatedAt: Date | string | number;
}

export interface _UnmarshalledFinding extends _Finding {
  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   */
  serviceAttributes?: _UnmarshalledInspectorServiceAttributes;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  assetAttributes?: _UnmarshalledAssetAttributes;

  /**
   * <p>The system-defined attributes for the finding.</p>
   */
  attributes: Array<_UnmarshalledAttribute>;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   */
  userAttributes: Array<_UnmarshalledAttribute>;

  /**
   * <p>The time when the finding was generated.</p>
   */
  createdAt: Date;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   */
  updatedAt: Date;
}
