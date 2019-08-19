import { _UnmarshalledProvisioningArtifactParameter } from "./_ProvisioningArtifactParameter";
import { _UnmarshalledConstraintSummary } from "./_ConstraintSummary";
import { _UnmarshalledUsageInstruction } from "./_UsageInstruction";
import { _UnmarshalledTagOptionSummary } from "./_TagOptionSummary";
import { _UnmarshalledProvisioningArtifactPreferences } from "./_ProvisioningArtifactPreferences";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProvisioningParametersOutput shape
 */
export interface DescribeProvisioningParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the parameters used to provision the product.</p>
   */
  ProvisioningArtifactParameters?: Array<
    _UnmarshalledProvisioningArtifactParameter
  >;

  /**
   * <p>Information about the constraints used to provision the product.</p>
   */
  ConstraintSummaries?: Array<_UnmarshalledConstraintSummary>;

  /**
   * <p>Any additional metadata specifically related to the provisioning of the product. For example, see the <code>Version</code> field of the CloudFormation template.</p>
   */
  UsageInstructions?: Array<_UnmarshalledUsageInstruction>;

  /**
   * <p>Information about the TagOptions associated with the resource.</p>
   */
  TagOptions?: Array<_UnmarshalledTagOptionSummary>;

  /**
   * <p>An object that contains information about preferences, such as regions and accounts, for the provisioning artifact.</p>
   */
  ProvisioningArtifactPreferences?: _UnmarshalledProvisioningArtifactPreferences;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
