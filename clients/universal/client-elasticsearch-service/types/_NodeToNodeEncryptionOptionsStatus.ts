import {
  _NodeToNodeEncryptionOptions,
  _UnmarshalledNodeToNodeEncryptionOptions
} from "./_NodeToNodeEncryptionOptions";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 */
export interface _NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Options: _NodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledNodeToNodeEncryptionOptionsStatus
  extends _NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledNodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
