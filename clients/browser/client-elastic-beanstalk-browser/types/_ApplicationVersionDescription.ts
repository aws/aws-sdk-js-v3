import {
  _SourceBuildInformation,
  _UnmarshalledSourceBuildInformation
} from "./_SourceBuildInformation";
import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>Describes the properties of an application version.</p>
 */
export interface _ApplicationVersionDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the application version.</p>
   */
  ApplicationVersionArn?: string;

  /**
   * <p>The name of the application to which the application version belongs.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The description of the application version.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the application version.</p>
   */
  VersionLabel?: string;

  /**
   * <p>If the version's source code was retrieved from AWS CodeCommit, the location of the source code for the application version.</p>
   */
  SourceBuildInformation?: _SourceBuildInformation;

  /**
   * <p>Reference to the artifact from the AWS CodeBuild build.</p>
   */
  BuildArn?: string;

  /**
   * <p>The storage location of the application version's source bundle in Amazon S3.</p>
   */
  SourceBundle?: _S3Location;

  /**
   * <p>The creation date of the application version.</p>
   */
  DateCreated?: Date | string | number;

  /**
   * <p>The last modified date of the application version.</p>
   */
  DateUpdated?: Date | string | number;

  /**
   * <p>The processing status of the application version. Reflects the state of the application version during its creation. Many of the values are only applicable if you specified <code>True</code> for the <code>Process</code> parameter of the <code>CreateApplicationVersion</code> action. The following list describes the possible values.</p> <ul> <li> <p> <code>Unprocessed</code> – Application version wasn't pre-processed or validated. Elastic Beanstalk will validate configuration files during deployment of the application version to an environment.</p> </li> <li> <p> <code>Processing</code> – Elastic Beanstalk is currently processing the application version.</p> </li> <li> <p> <code>Building</code> – Application version is currently undergoing an AWS CodeBuild build.</p> </li> <li> <p> <code>Processed</code> – Elastic Beanstalk was successfully pre-processed and validated.</p> </li> <li> <p> <code>Failed</code> – Either the AWS CodeBuild build failed or configuration files didn't pass validation. This application version isn't usable.</p> </li> </ul>
   */
  Status?:
    | "Processed"
    | "Unprocessed"
    | "Failed"
    | "Processing"
    | "Building"
    | string;
}

export interface _UnmarshalledApplicationVersionDescription
  extends _ApplicationVersionDescription {
  /**
   * <p>If the version's source code was retrieved from AWS CodeCommit, the location of the source code for the application version.</p>
   */
  SourceBuildInformation?: _UnmarshalledSourceBuildInformation;

  /**
   * <p>The storage location of the application version's source bundle in Amazon S3.</p>
   */
  SourceBundle?: _UnmarshalledS3Location;

  /**
   * <p>The creation date of the application version.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The last modified date of the application version.</p>
   */
  DateUpdated?: Date;
}
