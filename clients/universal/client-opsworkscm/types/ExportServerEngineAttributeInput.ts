import { _EngineAttribute } from "./_EngineAttribute";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportServerEngineAttributeInput shape
 */
export interface ExportServerEngineAttributeInput {
  /**
   * <p>The name of the export attribute. Currently, the supported export attribute is <code>Userdata</code>. This exports a user data script that includes parameters and values provided in the <code>InputAttributes</code> list.</p>
   */
  ExportAttributeName: string;

  /**
   * <p>The name of the server from which you are exporting the attribute.</p>
   */
  ServerName: string;

  /**
   * <p>The list of engine attributes. The list type is <code>EngineAttribute</code>. An <code>EngineAttribute</code> list item is a pair that includes an attribute name and its value. For the <code>Userdata</code> ExportAttributeName, the following are supported engine attribute names.</p> <ul> <li> <p> <b>RunList</b> In Chef, a list of roles or recipes that are run in the specified order. In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>OrganizationName</b> In Chef, an organization name. AWS OpsWorks for Chef Automate always creates the organization <code>default</code>. In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>NodeEnvironment</b> In Chef, a node environment (for example, development, staging, or one-box). In Puppet, this parameter is ignored.</p> </li> <li> <p> <b>NodeClientVersion</b> In Chef, the version of the Chef engine (three numbers separated by dots, such as 13.8.5). If this attribute is empty, OpsWorks for Chef Automate uses the most current version. In Puppet, this parameter is ignored.</p> </li> </ul>
   */
  InputAttributes?: Array<_EngineAttribute> | Iterable<_EngineAttribute>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
