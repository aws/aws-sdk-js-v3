import {
  _SystemInstanceSummary,
  _UnmarshalledSystemInstanceSummary
} from "./_SystemInstanceSummary";
import {
  _DefinitionDocument,
  _UnmarshalledDefinitionDocument
} from "./_DefinitionDocument";
import {
  _MetricsConfiguration,
  _UnmarshalledMetricsConfiguration
} from "./_MetricsConfiguration";
import {
  _DependencyRevision,
  _UnmarshalledDependencyRevision
} from "./_DependencyRevision";

/**
 * <p>An object that contains a system instance definition and summary information.</p>
 */
export interface _SystemInstanceDescription {
  /**
   * <p>An object that contains summary information about a system instance.</p>
   */
  summary?: _SystemInstanceSummary;

  /**
   * <p>A document that defines an entity. </p>
   */
  definition?: _DefinitionDocument;

  /**
   * <p>The Amazon Simple Storage Service bucket where information about a system instance is stored.</p>
   */
  s3BucketName?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: _MetricsConfiguration;

  /**
   * <p>The version of the user's namespace against which the system instance was validated.</p>
   */
  validatedNamespaceVersion?: number;

  /**
   * <p>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</p>
   */
  validatedDependencyRevisions?:
    | Array<_DependencyRevision>
    | Iterable<_DependencyRevision>;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other AWS services that the flow uses.</p>
   */
  flowActionsRoleArn?: string;
}

export interface _UnmarshalledSystemInstanceDescription
  extends _SystemInstanceDescription {
  /**
   * <p>An object that contains summary information about a system instance.</p>
   */
  summary?: _UnmarshalledSystemInstanceSummary;

  /**
   * <p>A document that defines an entity. </p>
   */
  definition?: _UnmarshalledDefinitionDocument;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: _UnmarshalledMetricsConfiguration;

  /**
   * <p>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</p>
   */
  validatedDependencyRevisions?: Array<_UnmarshalledDependencyRevision>;
}
