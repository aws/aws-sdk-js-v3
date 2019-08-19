/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface _ProvisioningArtifactProperties {
  /**
   * <p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p> <p> <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code> </p>
   */
  Info: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p> </li> </ul>
   */
  Type?:
    | "CLOUD_FORMATION_TEMPLATE"
    | "MARKETPLACE_AMI"
    | "MARKETPLACE_CAR"
    | string;

  /**
   * <p>If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.</p>
   */
  DisableTemplateValidation?: boolean;
}

export interface _UnmarshalledProvisioningArtifactProperties
  extends _ProvisioningArtifactProperties {
  /**
   * <p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p> <p> <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code> </p>
   */
  Info: { [key: string]: string };
}
