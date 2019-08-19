/**
 * <p> The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. </p>
 */
export interface _Assignment {
  /**
   * <p> A unique identifier for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * <p> The ID of the HIT.</p>
   */
  HITId?: string;

  /**
   * <p> The status of the assignment.</p>
   */
  AssignmentStatus?: "Submitted" | "Approved" | "Rejected" | string;

  /**
   * <p> If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.</p>
   */
  AutoApprovalTime?: Date | string | number;

  /**
   * <p> The date and time the Worker accepted the assignment.</p>
   */
  AcceptTime?: Date | string | number;

  /**
   * <p> If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.</p>
   */
  SubmitTime?: Date | string | number;

  /**
   * <p> If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.</p>
   */
  ApprovalTime?: Date | string | number;

  /**
   * <p> If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.</p>
   */
  RejectionTime?: Date | string | number;

  /**
   * <p> The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.</p>
   */
  Deadline?: Date | string | number;

  /**
   * <p> The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.</p>
   */
  Answer?: string;

  /**
   * <p> The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.</p>
   */
  RequesterFeedback?: string;
}

export interface _UnmarshalledAssignment extends _Assignment {
  /**
   * <p> If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.</p>
   */
  AutoApprovalTime?: Date;

  /**
   * <p> The date and time the Worker accepted the assignment.</p>
   */
  AcceptTime?: Date;

  /**
   * <p> If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.</p>
   */
  SubmitTime?: Date;

  /**
   * <p> If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.</p>
   */
  ApprovalTime?: Date;

  /**
   * <p> If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.</p>
   */
  RejectionTime?: Date;

  /**
   * <p> The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.</p>
   */
  Deadline?: Date;
}
