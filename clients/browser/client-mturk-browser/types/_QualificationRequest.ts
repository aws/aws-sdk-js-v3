/**
 * <p> The QualificationRequest data structure represents a request a Worker has made for a Qualification. </p>
 */
export interface _QualificationRequest {
  /**
   * <p>The ID of the Qualification request, a unique identifier generated when the request was submitted. </p>
   */
  QualificationRequestId?: string;

  /**
   * <p> The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation. </p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The ID of the Worker requesting the Qualification.</p>
   */
  WorkerId?: string;

  /**
   * <p> The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.</p>
   */
  Test?: string;

  /**
   * <p> The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty. </p>
   */
  Answer?: string;

  /**
   * <p>The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test. </p>
   */
  SubmitTime?: Date | string | number;
}

export interface _UnmarshalledQualificationRequest
  extends _QualificationRequest {
  /**
   * <p>The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test. </p>
   */
  SubmitTime?: Date;
}
