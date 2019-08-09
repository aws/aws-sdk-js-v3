import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";
import {
  _GitHubLocation,
  _UnmarshalledGitHubLocation
} from "./_GitHubLocation";
import { _RawString, _UnmarshalledRawString } from "./_RawString";
import {
  _AppSpecContent,
  _UnmarshalledAppSpecContent
} from "./_AppSpecContent";

/**
 * <p>Information about the location of an application revision.</p>
 */
export interface _RevisionLocation {
  /**
   * <p>The type of application revision:</p> <ul> <li> <p>S3: An application revision stored in Amazon S3.</p> </li> <li> <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments only).</p> </li> <li> <p>String: A YAML-formatted or JSON-formatted string (AWS Lambda deployments only).</p> </li> </ul>
   */
  revisionType?: "S3" | "GitHub" | "String" | "AppSpecContent" | string;

  /**
   * <p>Information about the location of a revision stored in Amazon S3. </p>
   */
  s3Location?: _S3Location;

  /**
   * <p>Information about the location of application artifacts stored in GitHub.</p>
   */
  gitHubLocation?: _GitHubLocation;

  /**
   * <p>Information about the location of an AWS Lambda deployment revision stored as a RawString.</p>
   */
  string?: _RawString;

  /**
   * <p> The content of an AppSpec file for an AWS Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML and stored as a RawString. </p>
   */
  appSpecContent?: _AppSpecContent;
}

export interface _UnmarshalledRevisionLocation extends _RevisionLocation {
  /**
   * <p>Information about the location of a revision stored in Amazon S3. </p>
   */
  s3Location?: _UnmarshalledS3Location;

  /**
   * <p>Information about the location of application artifacts stored in GitHub.</p>
   */
  gitHubLocation?: _UnmarshalledGitHubLocation;

  /**
   * <p>Information about the location of an AWS Lambda deployment revision stored as a RawString.</p>
   */
  string?: _UnmarshalledRawString;

  /**
   * <p> The content of an AppSpec file for an AWS Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML and stored as a RawString. </p>
   */
  appSpecContent?: _UnmarshalledAppSpecContent;
}
