import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
 */
export interface _AdvancedOptionsStatus {
  /**
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   */
  Options: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledAdvancedOptionsStatus
  extends _AdvancedOptionsStatus {
  /**
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   */
  Options: { [key: string]: string };

  /**
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
