import { _ResourceAttribute } from "./_ResourceAttribute";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutResourceAttributesInput shape
 */
export interface PutResourceAttributesInput {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string;

  /**
   * <p>Unique identifier that references the migration task.</p>
   */
  MigrationTaskName: string;

  /**
   * <p>Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service (ADS)'s repository.</p> <note> <p>Takes the object array of <code>ResourceAttribute</code> where the <code>Type</code> field is reserved for the following values: <code>IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER</code> where the identifying value can be a string up to 256 characters.</p> </note> <important> <ul> <li> <p>If any "VM" related value is set for a <code>ResourceAttribute</code> object, it is required that <code>VM_MANAGER_ID</code>, as a minimum, is always set. If <code>VM_MANAGER_ID</code> is not set, then all "VM" fields will be discarded and "VM" fields will not be used for matching the migration task to a server in Application Discovery Service (ADS)'s repository. See the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples">Example</a> section below for a use case of specifying "VM" related values.</p> </li> <li> <p> If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the <code>ResourceAttributeList</code> parameter to maximize the chances of matching.</p> </li> </ul> </important>
   */
  ResourceAttributeList:
    | Array<_ResourceAttribute>
    | Iterable<_ResourceAttribute>;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

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
