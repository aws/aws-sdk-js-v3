import { _QualificationRequirement } from "./_QualificationRequirement";
import { _ReviewPolicy } from "./_ReviewPolicy";
import { _HITLayoutParameter } from "./_HITLayoutParameter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHITInput shape
 */
export interface CreateHITInput {
  /**
   * <p> The number of times the HIT can be accepted and completed before the HIT becomes unavailable. </p>
   */
  MaxAssignments?: number;

  /**
   * <p> The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * <p> An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. </p>
   */
  LifetimeInSeconds: number;

  /**
   * <p> The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. </p>
   */
  AssignmentDurationInSeconds: number;

  /**
   * <p> The amount of money the Requester will pay a Worker for successfully completing the HIT. </p>
   */
  Reward: string;

  /**
   * <p> The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. </p>
   */
  Title: string;

  /**
   * <p> One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. </p>
   */
  Keywords?: string;

  /**
   * <p> A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. </p>
   */
  Description: string;

  /**
   * <p> The data the person completing the HIT uses to produce the results. </p> <p> Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. </p> <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>
   */
  Question?: string;

  /**
   * <p> An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. </p> <p> The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. </p> <p> The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. </p>
   */
  RequesterAnnotation?: string;

  /**
   * <p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>
   */
  QualificationRequirements?:
    | Array<_QualificationRequirement>
    | Iterable<_QualificationRequirement>;

  /**
   * <p> A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. </p> <note> <p> Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs. </p> </note>
   */
  UniqueRequestToken?: string;

  /**
   * <p> The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>
   */
  AssignmentReviewPolicy?: _ReviewPolicy;

  /**
   * <p> The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. </p>
   */
  HITReviewPolicy?: _ReviewPolicy;

  /**
   * <p> The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. </p> <p> Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. </p>
   */
  HITLayoutId?: string;

  /**
   * <p> If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. </p>
   */
  HITLayoutParameters?:
    | Array<_HITLayoutParameter>
    | Iterable<_HITLayoutParameter>;

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
