import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation. </p>
 */
export interface GetUpgradeStatusOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> </p>
   */
  UpgradeStep?: "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE" | string;

  /**
   * <p> One of 4 statuses that a step can go through returned as part of the <code> <a>GetUpgradeStatusResponse</a> </code> object. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>
   */
  StepStatus?:
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "SUCCEEDED_WITH_ISSUES"
    | "FAILED"
    | string;

  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
