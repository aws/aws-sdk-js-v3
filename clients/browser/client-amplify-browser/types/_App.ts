import { _CustomRule, _UnmarshalledCustomRule } from "./_CustomRule";
import {
  _ProductionBranch,
  _UnmarshalledProductionBranch
} from "./_ProductionBranch";
import {
  _AutoBranchCreationConfig,
  _UnmarshalledAutoBranchCreationConfig
} from "./_AutoBranchCreationConfig";

/**
 * <p> Amplify App represents different branches of a repository for building, deploying, and hosting. </p>
 */
export interface _App {
  /**
   * <p> Unique Id for the Amplify App. </p>
   */
  appId: string;

  /**
   * <p> ARN for the Amplify App. </p>
   */
  appArn: string;

  /**
   * <p> Name for the Amplify App. </p>
   */
  name: string;

  /**
   * <p> Tag for Amplify App. </p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Description for the Amplify App. </p>
   */
  description: string;

  /**
   * <p> Repository for the Amplify App. </p>
   */
  repository: string;

  /**
   * <p> Platform for the Amplify App. </p>
   */
  platform: "WEB" | string;

  /**
   * <p> Create date / time for the Amplify App. </p>
   */
  createTime: Date | string | number;

  /**
   * <p> Update date / time for the Amplify App. </p>
   */
  updateTime: Date | string | number;

  /**
   * <p> IAM service role ARN for the Amplify App. </p>
   */
  iamServiceRoleArn?: string;

  /**
   * <p> Environment Variables for the Amplify App. </p>
   */
  environmentVariables: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Default domain for the Amplify App. </p>
   */
  defaultDomain: string;

  /**
   * <p> Enables auto-building of branches for the Amplify App. </p>
   */
  enableBranchAutoBuild: boolean;

  /**
   * <p> Enables Basic Authorization for branches for the Amplify App. </p>
   */
  enableBasicAuth: boolean;

  /**
   * <p> Basic Authorization credentials for branches for the Amplify App. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Custom redirect / rewrite rules for the Amplify App. </p>
   */
  customRules?: Array<_CustomRule> | Iterable<_CustomRule>;

  /**
   * <p> Structure with Production Branch information. </p>
   */
  productionBranch?: _ProductionBranch;

  /**
   * <p> BuildSpec content for Amplify App. </p>
   */
  buildSpec?: string;

  /**
   * <p> Enables automated branch creation for the Amplify App. </p>
   */
  enableAutoBranchCreation?: boolean;

  /**
   * <p> Automated branch creation glob patterns for the Amplify App. </p>
   */
  autoBranchCreationPatterns?: Array<string> | Iterable<string>;

  /**
   * <p> Automated branch creation config for the Amplify App. </p>
   */
  autoBranchCreationConfig?: _AutoBranchCreationConfig;
}

export interface _UnmarshalledApp extends _App {
  /**
   * <p> Tag for Amplify App. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> Create date / time for the Amplify App. </p>
   */
  createTime: Date;

  /**
   * <p> Update date / time for the Amplify App. </p>
   */
  updateTime: Date;

  /**
   * <p> Environment Variables for the Amplify App. </p>
   */
  environmentVariables: { [key: string]: string };

  /**
   * <p> Custom redirect / rewrite rules for the Amplify App. </p>
   */
  customRules?: Array<_UnmarshalledCustomRule>;

  /**
   * <p> Structure with Production Branch information. </p>
   */
  productionBranch?: _UnmarshalledProductionBranch;

  /**
   * <p> Automated branch creation glob patterns for the Amplify App. </p>
   */
  autoBranchCreationPatterns?: Array<string>;

  /**
   * <p> Automated branch creation config for the Amplify App. </p>
   */
  autoBranchCreationConfig?: _UnmarshalledAutoBranchCreationConfig;
}
