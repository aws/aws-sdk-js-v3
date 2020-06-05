import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface ActorDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ActorDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ActorDoesNotExistException {
  export const filterSensitiveLog = (obj: ActorDoesNotExistException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActorDoesNotExistException =>
    __isa(o, "ActorDoesNotExistException");
}

/**
 * <p>Returns information about a specific approval on a pull request.</p>
 */
export interface Approval {
  __type?: "Approval";
  /**
   * <p>The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.</p>
   */
  approvalState?: ApprovalState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn?: string;
}

export namespace Approval {
  export const filterSensitiveLog = (obj: Approval): any => ({
    ...obj
  });
  export const isa = (o: any): o is Approval => __isa(o, "Approval");
}

/**
 * <p>Returns information about an approval rule.</p>
 */
export interface ApprovalRule {
  __type?: "ApprovalRule";
  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;

  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;

  /**
   * <p>The date the approval rule was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the approval rule was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.</p>
   */
  lastModifiedUser?: string;

  /**
   * <p>The approval rule template used to create the rule.</p>
   */
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule.</p>
   */
  ruleContentSha256?: string;
}

export namespace ApprovalRule {
  export const filterSensitiveLog = (obj: ApprovalRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRule => __isa(o, "ApprovalRule");
}

/**
 * <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 */
export interface ApprovalRuleContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleContentRequiredException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleContentRequiredException =>
    __isa(o, "ApprovalRuleContentRequiredException");
}

/**
 * <p>The specified approval rule does not exist.</p>
 */
export interface ApprovalRuleDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleDoesNotExistException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleDoesNotExistException =>
    __isa(o, "ApprovalRuleDoesNotExistException");
}

/**
 * <p>Returns information about an event for an approval rule.</p>
 */
export interface ApprovalRuleEventMetadata {
  __type?: "ApprovalRuleEventMetadata";
  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;

  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;
}

export namespace ApprovalRuleEventMetadata {
  export const filterSensitiveLog = (obj: ApprovalRuleEventMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleEventMetadata =>
    __isa(o, "ApprovalRuleEventMetadata");
}

/**
 * <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 */
export interface ApprovalRuleNameAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleNameAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleNameAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleNameAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleNameAlreadyExistsException =>
    __isa(o, "ApprovalRuleNameAlreadyExistsException");
}

/**
 * <p>An approval rule name is required, but was not specified.</p>
 */
export interface ApprovalRuleNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleNameRequiredException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleNameRequiredException =>
    __isa(o, "ApprovalRuleNameRequiredException");
}

/**
 * <p>Returns information about an override event for approval rules for a pull request.</p>
 */
export interface ApprovalRuleOverriddenEventMetadata {
  __type?: "ApprovalRuleOverriddenEventMetadata";
  /**
   * <p>The status of the override event.</p>
   */
  overrideStatus?: OverrideStatus | string;

  /**
   * <p>The revision ID of the pull request when the override event occurred.</p>
   */
  revisionId?: string;
}

export namespace ApprovalRuleOverriddenEventMetadata {
  export const filterSensitiveLog = (
    obj: ApprovalRuleOverriddenEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleOverriddenEventMetadata =>
    __isa(o, "ApprovalRuleOverriddenEventMetadata");
}

/**
 * <p>Returns information about an approval rule template.</p>
 */
export interface ApprovalRuleTemplate {
  __type?: "ApprovalRuleTemplate";
  /**
   * <p>The content of the approval rule template.</p>
   */
  approvalRuleTemplateContent?: string;

  /**
   * <p>The description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription?: string;

  /**
   * <p>The system-generated ID of the approval rule template.</p>
   */
  approvalRuleTemplateId?: string;

  /**
   * <p>The name of the approval rule template.</p>
   */
  approvalRuleTemplateName?: string;

  /**
   * <p>The date the approval rule template was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the approval rule template was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.</p>
   */
  lastModifiedUser?: string;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule template.</p>
   */
  ruleContentSha256?: string;
}

export namespace ApprovalRuleTemplate {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleTemplate =>
    __isa(o, "ApprovalRuleTemplate");
}

/**
 * <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 */
export interface ApprovalRuleTemplateContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleTemplateContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateContentRequiredException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleTemplateContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ApprovalRuleTemplateContentRequiredException =>
    __isa(o, "ApprovalRuleTemplateContentRequiredException");
}

/**
 * <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
 *         was created, and then try again.</p>
 */
export interface ApprovalRuleTemplateDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleTemplateDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateDoesNotExistException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleTemplateDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleTemplateDoesNotExistException =>
    __isa(o, "ApprovalRuleTemplateDoesNotExistException");
}

/**
 * <p>The approval rule template is associated with one or more repositories. You cannot delete a template that is associated with a repository. Remove
 *         all associations, and then try again.</p>
 */
export interface ApprovalRuleTemplateInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleTemplateInUseException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateInUseException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleTemplateInUseException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleTemplateInUseException =>
    __isa(o, "ApprovalRuleTemplateInUseException");
}

/**
 * <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this AWS Region for your AWS account. Approval rule template
 *             names must be unique.</p>
 */
export interface ApprovalRuleTemplateNameAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleTemplateNameAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateNameAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleTemplateNameAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ApprovalRuleTemplateNameAlreadyExistsException =>
    __isa(o, "ApprovalRuleTemplateNameAlreadyExistsException");
}

/**
 * <p>An approval rule template name is required, but was not specified.</p>
 */
export interface ApprovalRuleTemplateNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalRuleTemplateNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateNameRequiredException {
  export const filterSensitiveLog = (
    obj: ApprovalRuleTemplateNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalRuleTemplateNameRequiredException =>
    __isa(o, "ApprovalRuleTemplateNameRequiredException");
}

export enum ApprovalState {
  APPROVE = "APPROVE",
  REVOKE = "REVOKE"
}

/**
 * <p>Returns information about a change in the approval state for a pull request.</p>
 */
export interface ApprovalStateChangedEventMetadata {
  __type?: "ApprovalStateChangedEventMetadata";
  /**
   * <p>The approval status for the pull request.</p>
   */
  approvalStatus?: ApprovalState | string;

  /**
   * <p>The revision ID of the pull request when the approval state changed.</p>
   */
  revisionId?: string;
}

export namespace ApprovalStateChangedEventMetadata {
  export const filterSensitiveLog = (
    obj: ApprovalStateChangedEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalStateChangedEventMetadata =>
    __isa(o, "ApprovalStateChangedEventMetadata");
}

/**
 * <p>An approval state is required, but was not specified.</p>
 */
export interface ApprovalStateRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ApprovalStateRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalStateRequiredException {
  export const filterSensitiveLog = (
    obj: ApprovalStateRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApprovalStateRequiredException =>
    __isa(o, "ApprovalStateRequiredException");
}

export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  __type?: "AssociateApprovalRuleTemplateWithRepositoryInput";
  /**
   * <p>The name for the approval rule template. </p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository that you want to associate with the template.</p>
   */
  repositoryName: string | undefined;
}

export namespace AssociateApprovalRuleTemplateWithRepositoryInput {
  export const filterSensitiveLog = (
    obj: AssociateApprovalRuleTemplateWithRepositoryInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AssociateApprovalRuleTemplateWithRepositoryInput =>
    __isa(o, "AssociateApprovalRuleTemplateWithRepositoryInput");
}

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface AuthorDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace AuthorDoesNotExistException {
  export const filterSensitiveLog = (
    obj: AuthorDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorDoesNotExistException =>
    __isa(o, "AuthorDoesNotExistException");
}

/**
 * <p>Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.</p>
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  __type?: "BatchAssociateApprovalRuleTemplateWithRepositoriesError";
  /**
   * <p>An error code that specifies whether the repository name was not valid or not found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was not found or not valid.</p>
   */
  errorMessage?: string;

  /**
   * <p>The name of the repository where the association was not made.</p>
   */
  repositoryName?: string;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  export const filterSensitiveLog = (
    obj: BatchAssociateApprovalRuleTemplateWithRepositoriesError
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchAssociateApprovalRuleTemplateWithRepositoriesError =>
    __isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesError");
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  __type?: "BatchAssociateApprovalRuleTemplateWithRepositoriesInput";
  /**
   * <p>The name of the template you want to associate with one or more repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The names of the repositories you want to associate with the template.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  export const filterSensitiveLog = (
    obj: BatchAssociateApprovalRuleTemplateWithRepositoriesInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchAssociateApprovalRuleTemplateWithRepositoriesInput =>
    __isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesInput");
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  __type?: "BatchAssociateApprovalRuleTemplateWithRepositoriesOutput";
  /**
   * <p>A list of names of the repositories that have been associated with the template.</p>
   */
  associatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to create the association between the template and the repositories.</p>
   */
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[] | undefined;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  export const filterSensitiveLog = (
    obj: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchAssociateApprovalRuleTemplateWithRepositoriesOutput =>
    __isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesOutput");
}

/**
 * <p>Returns information about errors in a BatchDescribeMergeConflicts operation.</p>
 */
export interface BatchDescribeMergeConflictsError {
  __type?: "BatchDescribeMergeConflictsError";
  /**
   * <p>The name of the exception.</p>
   */
  exceptionName: string | undefined;

  /**
   * <p>The path to the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The message provided by the exception.</p>
   */
  message: string | undefined;
}

export namespace BatchDescribeMergeConflictsError {
  export const filterSensitiveLog = (
    obj: BatchDescribeMergeConflictsError
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDescribeMergeConflictsError =>
    __isa(o, "BatchDescribeMergeConflictsError");
}

export interface BatchDescribeMergeConflictsInput {
  __type?: "BatchDescribeMergeConflictsInput";
  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.</p>
   */
  filePaths?: string[];

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository that contains the merge conflicts you want to review.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace BatchDescribeMergeConflictsInput {
  export const filterSensitiveLog = (
    obj: BatchDescribeMergeConflictsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDescribeMergeConflictsInput =>
    __isa(o, "BatchDescribeMergeConflictsInput");
}

export interface BatchDescribeMergeConflictsOutput {
  __type?: "BatchDescribeMergeConflictsOutput";
  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.</p>
   */
  conflicts: Conflict[] | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>A list of any errors returned while describing the merge conflicts for each file.</p>
   */
  errors?: BatchDescribeMergeConflictsError[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;
}

export namespace BatchDescribeMergeConflictsOutput {
  export const filterSensitiveLog = (
    obj: BatchDescribeMergeConflictsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDescribeMergeConflictsOutput =>
    __isa(o, "BatchDescribeMergeConflictsOutput");
}

/**
 * <p>Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.</p>
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  __type?: "BatchDisassociateApprovalRuleTemplateFromRepositoriesError";
  /**
   * <p>An error code that specifies whether the repository name was not valid or not
   *             found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was either not found or not valid.</p>
   */
  errorMessage?: string;

  /**
   * <p>The name of the repository where the association with the template was not able to be removed.</p>
   */
  repositoryName?: string;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  export const filterSensitiveLog = (
    obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesError
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchDisassociateApprovalRuleTemplateFromRepositoriesError =>
    __isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesError");
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  __type?: "BatchDisassociateApprovalRuleTemplateFromRepositoriesInput";
  /**
   * <p>The name of the template that you want to disassociate from one or more repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The repository names that you want to disassociate from the approval rule
   *             template.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  export const filterSensitiveLog = (
    obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchDisassociateApprovalRuleTemplateFromRepositoriesInput =>
    __isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesInput");
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  __type?: "BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput";
  /**
   * <p>A list of repository names that have had their association with the template
   *             removed.</p>
   */
  disassociatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.</p>
   */
  errors:
    | BatchDisassociateApprovalRuleTemplateFromRepositoriesError[]
    | undefined;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  export const filterSensitiveLog = (
    obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput =>
    __isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput");
}

/**
 * <p>Returns information about errors in a BatchGetCommits operation.</p>
 */
export interface BatchGetCommitsError {
  __type?: "BatchGetCommitsError";
  /**
   * <p>A commit ID that either could not be found or was not in a valid format.</p>
   */
  commitId?: string;

  /**
   * <p>An error code that specifies whether the commit ID was not valid or not found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides detail about why the commit ID either was not found or was not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchGetCommitsError {
  export const filterSensitiveLog = (obj: BatchGetCommitsError): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetCommitsError =>
    __isa(o, "BatchGetCommitsError");
}

export interface BatchGetCommitsInput {
  __type?: "BatchGetCommitsInput";
  /**
   * <p>The full commit IDs of the commits to get information about.</p>
   *         <note>
   *             <p>You must supply the full SHA IDs of each commit. You cannot use shortened SHA
   *                 IDs.</p>
   *         </note>
   */
  commitIds: string[] | undefined;

  /**
   * <p>The name of the repository that contains the commits.</p>
   */
  repositoryName: string | undefined;
}

export namespace BatchGetCommitsInput {
  export const filterSensitiveLog = (obj: BatchGetCommitsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetCommitsInput =>
    __isa(o, "BatchGetCommitsInput");
}

export interface BatchGetCommitsOutput {
  __type?: "BatchGetCommitsOutput";
  /**
   * <p>An array of commit data type objects, each of which contains information about a specified commit.</p>
   */
  commits?: Commit[];

  /**
   * <p>Returns any commit IDs for which information could not be found. For example, if one
   *             of the commit IDs was a shortened SHA ID or that commit was not found in the specified
   *             repository, the ID returns an error object with more information.</p>
   */
  errors?: BatchGetCommitsError[];
}

export namespace BatchGetCommitsOutput {
  export const filterSensitiveLog = (obj: BatchGetCommitsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetCommitsOutput =>
    __isa(o, "BatchGetCommitsOutput");
}

/**
 * <p>Represents the input of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesInput {
  __type?: "BatchGetRepositoriesInput";
  /**
   * <p>The names of the repositories to get information about.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchGetRepositoriesInput {
  export const filterSensitiveLog = (obj: BatchGetRepositoriesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetRepositoriesInput =>
    __isa(o, "BatchGetRepositoriesInput");
}

/**
 * <p>Represents the output of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesOutput {
  __type?: "BatchGetRepositoriesOutput";
  /**
   * <p>A list of repositories returned by the batch get repositories operation.</p>
   */
  repositories?: RepositoryMetadata[];

  /**
   * <p>Returns a list of repository names for which information could not be found.</p>
   */
  repositoriesNotFound?: string[];
}

export namespace BatchGetRepositoriesOutput {
  export const filterSensitiveLog = (obj: BatchGetRepositoriesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetRepositoriesOutput =>
    __isa(o, "BatchGetRepositoriesOutput");
}

/**
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 */
export interface BeforeCommitIdAndAfterCommitIdAreSameException
  extends __SmithyException,
    $MetadataBearer {
  name: "BeforeCommitIdAndAfterCommitIdAreSameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BeforeCommitIdAndAfterCommitIdAreSameException {
  export const filterSensitiveLog = (
    obj: BeforeCommitIdAndAfterCommitIdAreSameException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BeforeCommitIdAndAfterCommitIdAreSameException =>
    __isa(o, "BeforeCommitIdAndAfterCommitIdAreSameException");
}

/**
 * <p>The specified blob does not exist.</p>
 */
export interface BlobIdDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "BlobIdDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BlobIdDoesNotExistException {
  export const filterSensitiveLog = (
    obj: BlobIdDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BlobIdDoesNotExistException =>
    __isa(o, "BlobIdDoesNotExistException");
}

/**
 * <p>A blob ID is required, but was not specified.</p>
 */
export interface BlobIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "BlobIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BlobIdRequiredException {
  export const filterSensitiveLog = (obj: BlobIdRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BlobIdRequiredException =>
    __isa(o, "BlobIdRequiredException");
}

/**
 * <p>Returns information about a specific Git blob object.</p>
 */
export interface BlobMetadata {
  __type?: "BlobMetadata";
  /**
   * <p>The full ID of the blob.</p>
   */
  blobId?: string;

  /**
   * <p>The file mode permissions of the blob. File mode permission codes include:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>100644</code> indicates read/write</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>100755</code> indicates read/write/execute</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>160000</code> indicates a submodule</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>120000</code> indicates a symlink</p>
   *             </li>
   *          </ul>
   */
  mode?: string;

  /**
   * <p>The path to the blob and associated file name, if any.</p>
   */
  path?: string;
}

export namespace BlobMetadata {
  export const filterSensitiveLog = (obj: BlobMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is BlobMetadata => __isa(o, "BlobMetadata");
}

/**
 * <p>The specified branch does not exist.</p>
 */
export interface BranchDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "BranchDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchDoesNotExistException {
  export const filterSensitiveLog = (
    obj: BranchDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BranchDoesNotExistException =>
    __isa(o, "BranchDoesNotExistException");
}

/**
 * <p>Returns information about a branch.</p>
 */
export interface BranchInfo {
  __type?: "BranchInfo";
  /**
   * <p>The name of the branch.</p>
   */
  branchName?: string;

  /**
   * <p>The ID of the last commit made to the branch.</p>
   */
  commitId?: string;
}

export namespace BranchInfo {
  export const filterSensitiveLog = (obj: BranchInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is BranchInfo => __isa(o, "BranchInfo");
}

/**
 * <p>The specified branch name already exists.</p>
 */
export interface BranchNameExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "BranchNameExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameExistsException {
  export const filterSensitiveLog = (obj: BranchNameExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BranchNameExistsException =>
    __isa(o, "BranchNameExistsException");
}

/**
 * <p>The specified branch name is not valid because it is a tag name. Enter the name of a
 *             branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
 */
export interface BranchNameIsTagNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "BranchNameIsTagNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameIsTagNameException {
  export const filterSensitiveLog = (
    obj: BranchNameIsTagNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BranchNameIsTagNameException =>
    __isa(o, "BranchNameIsTagNameException");
}

/**
 * <p>A branch name is required, but was not specified.</p>
 */
export interface BranchNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "BranchNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameRequiredException {
  export const filterSensitiveLog = (
    obj: BranchNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BranchNameRequiredException =>
    __isa(o, "BranchNameRequiredException");
}

/**
 * <p>The approval rule cannot be deleted from the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export interface CannotDeleteApprovalRuleFromTemplateException
  extends __SmithyException,
    $MetadataBearer {
  name: "CannotDeleteApprovalRuleFromTemplateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CannotDeleteApprovalRuleFromTemplateException {
  export const filterSensitiveLog = (
    obj: CannotDeleteApprovalRuleFromTemplateException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CannotDeleteApprovalRuleFromTemplateException =>
    __isa(o, "CannotDeleteApprovalRuleFromTemplateException");
}

/**
 * <p>The approval rule cannot be modified for the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export interface CannotModifyApprovalRuleFromTemplateException
  extends __SmithyException,
    $MetadataBearer {
  name: "CannotModifyApprovalRuleFromTemplateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CannotModifyApprovalRuleFromTemplateException {
  export const filterSensitiveLog = (
    obj: CannotModifyApprovalRuleFromTemplateException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CannotModifyApprovalRuleFromTemplateException =>
    __isa(o, "CannotModifyApprovalRuleFromTemplateException");
}

export enum ChangeTypeEnum {
  ADDED = "A",
  DELETED = "D",
  MODIFIED = "M"
}

/**
 * <p>A client request token is required. A client request token is an unique,
 *             client-generated idempotency token that, when provided in a request, ensures the request
 *             cannot be repeated with a changed parameter. If a request is received with the same
 *             parameters and a token is included, the request returns information about the initial
 *             request that used that token.</p>
 */
export interface ClientRequestTokenRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ClientRequestTokenRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ClientRequestTokenRequiredException {
  export const filterSensitiveLog = (
    obj: ClientRequestTokenRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientRequestTokenRequiredException =>
    __isa(o, "ClientRequestTokenRequiredException");
}

/**
 * <p>Returns information about a specific comment.</p>
 */
export interface Comment {
  __type?: "Comment";
  /**
   * <p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>
   */
  authorArn?: string;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The system-generated comment ID.</p>
   */
  commentId?: string;

  /**
   * <p>The content of the comment.</p>
   */
  content?: string;

  /**
   * <p>The date and time the comment was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>A Boolean value indicating whether the comment has been deleted.</p>
   */
  deleted?: boolean;

  /**
   * <p>The ID of the comment for which this comment is a reply, if any.</p>
   */
  inReplyTo?: string;

  /**
   * <p>The date and time the comment was most recently modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;
}

export namespace Comment {
  export const filterSensitiveLog = (obj: Comment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Comment => __isa(o, "Comment");
}

/**
 * <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 */
export interface CommentContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentContentRequiredException {
  export const filterSensitiveLog = (
    obj: CommentContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentContentRequiredException =>
    __isa(o, "CommentContentRequiredException");
}

/**
 * <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 */
export interface CommentContentSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentContentSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentContentSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: CommentContentSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentContentSizeLimitExceededException =>
    __isa(o, "CommentContentSizeLimitExceededException");
}

/**
 * <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 */
export interface CommentDeletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentDeletedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentDeletedException {
  export const filterSensitiveLog = (obj: CommentDeletedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentDeletedException =>
    __isa(o, "CommentDeletedException");
}

/**
 * <p>No comment exists with the provided ID. Verify that you have used the correct ID, and
 *             then try again.</p>
 */
export interface CommentDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentDoesNotExistException {
  export const filterSensitiveLog = (
    obj: CommentDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentDoesNotExistException =>
    __isa(o, "CommentDoesNotExistException");
}

/**
 * <p>The comment ID is missing or null. A comment ID is required.</p>
 */
export interface CommentIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentIdRequiredException {
  export const filterSensitiveLog = (obj: CommentIdRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentIdRequiredException =>
    __isa(o, "CommentIdRequiredException");
}

/**
 * <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 */
export interface CommentNotCreatedByCallerException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommentNotCreatedByCallerException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentNotCreatedByCallerException {
  export const filterSensitiveLog = (
    obj: CommentNotCreatedByCallerException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentNotCreatedByCallerException =>
    __isa(o, "CommentNotCreatedByCallerException");
}

/**
 * <p>Returns information about comments on the comparison between two commits.</p>
 */
export interface CommentsForComparedCommit {
  __type?: "CommentsForComparedCommit";
  /**
   * <p>The full blob ID of the commit used to establish the after of the comparison.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The full commit ID of the commit used to establish the after of the comparison.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the commit used to establish the before of the comparison.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full commit ID of the commit used to establish the before of the
   *             comparison.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the comparison
   *          between commits.</p>
   */
  comments?: Comment[];

  /**
   * <p>Location information about the comment on the comparison, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE or
   *             AFTER.</p>
   */
  location?: Location;

  /**
   * <p>The name of the repository that contains the compared commits.</p>
   */
  repositoryName?: string;
}

export namespace CommentsForComparedCommit {
  export const filterSensitiveLog = (obj: CommentsForComparedCommit): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentsForComparedCommit =>
    __isa(o, "CommentsForComparedCommit");
}

/**
 * <p>Returns information about comments on a pull request.</p>
 */
export interface CommentsForPullRequest {
  __type?: "CommentsForPullRequest";
  /**
   * <p>The full blob ID of the file on which you want to comment on the source commit.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the source branch at the time the
   *             comment was made. </p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the file on which you want to comment on the destination commit.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the destination branch when the
   *             pull request was created. This commit is superceded by the after commit in the source
   *             branch when and if you merge the source branch into the destination branch.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   */
  comments?: Comment[];

  /**
   * <p>Location information about the comment on the pull request, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE
   *             (destination branch) or AFTER (source branch).</p>
   */
  location?: Location;

  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;
}

export namespace CommentsForPullRequest {
  export const filterSensitiveLog = (obj: CommentsForPullRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommentsForPullRequest =>
    __isa(o, "CommentsForPullRequest");
}

/**
 * <p>Returns information about a specific commit.</p>
 */
export interface Commit {
  __type?: "Commit";
  /**
   * <p>Any other data associated with the specified commit.</p>
   */
  additionalData?: string;

  /**
   * <p>Information about the author of the specified commit. Information includes
   *             the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured
   *             in Git.</p>
   */
  author?: UserInfo;

  /**
   * <p>The full SHA ID of the specified commit. </p>
   */
  commitId?: string;

  /**
   * <p>Information about the person who committed the specified commit, also known as the committer. Information includes
   *         the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured
   *         in Git.</p>
   *         <p>For more information
   *             about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git
   *             by Scott Chacon and Ben Straub.</p>
   */
  committer?: UserInfo;

  /**
   * <p>The commit message associated with the specified commit.</p>
   */
  message?: string;

  /**
   * <p>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</p>
   */
  parents?: string[];

  /**
   * <p>Tree information for the specified commit.</p>
   */
  treeId?: string;
}

export namespace Commit {
  export const filterSensitiveLog = (obj: Commit): any => ({
    ...obj
  });
  export const isa = (o: any): o is Commit => __isa(o, "Commit");
}

/**
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 */
export interface CommitDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitDoesNotExistException {
  export const filterSensitiveLog = (
    obj: CommitDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitDoesNotExistException =>
    __isa(o, "CommitDoesNotExistException");
}

/**
 * <p>The specified commit ID does not exist.</p>
 */
export interface CommitIdDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitIdDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdDoesNotExistException {
  export const filterSensitiveLog = (
    obj: CommitIdDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitIdDoesNotExistException =>
    __isa(o, "CommitIdDoesNotExistException");
}

/**
 * <p>A commit ID was not specified.</p>
 */
export interface CommitIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdRequiredException {
  export const filterSensitiveLog = (obj: CommitIdRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitIdRequiredException =>
    __isa(o, "CommitIdRequiredException");
}

/**
 * <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 */
export interface CommitIdsLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitIdsLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdsLimitExceededException {
  export const filterSensitiveLog = (
    obj: CommitIdsLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitIdsLimitExceededException =>
    __isa(o, "CommitIdsLimitExceededException");
}

/**
 * <p>A list of commit IDs is required, but was either not specified or the list was empty.</p>
 */
export interface CommitIdsListRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitIdsListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdsListRequiredException {
  export const filterSensitiveLog = (
    obj: CommitIdsListRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitIdsListRequiredException =>
    __isa(o, "CommitIdsListRequiredException");
}

/**
 * <p>The commit message is too long. Provide a shorter string. </p>
 */
export interface CommitMessageLengthExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitMessageLengthExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitMessageLengthExceededException {
  export const filterSensitiveLog = (
    obj: CommitMessageLengthExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitMessageLengthExceededException =>
    __isa(o, "CommitMessageLengthExceededException");
}

/**
 * <p>A commit was not specified.</p>
 */
export interface CommitRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CommitRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitRequiredException {
  export const filterSensitiveLog = (obj: CommitRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CommitRequiredException =>
    __isa(o, "CommitRequiredException");
}

/**
 * <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
 */
export interface ConcurrentReferenceUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentReferenceUpdateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ConcurrentReferenceUpdateException {
  export const filterSensitiveLog = (
    obj: ConcurrentReferenceUpdateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentReferenceUpdateException =>
    __isa(o, "ConcurrentReferenceUpdateException");
}

/**
 * <p>Information about conflicts in a merge operation.</p>
 */
export interface Conflict {
  __type?: "Conflict";
  /**
   * <p>Metadata about a conflict in a merge operation.</p>
   */
  conflictMetadata?: ConflictMetadata;

  /**
   * <p>A list of hunks that contain the differences between files or lines causing the conflict.</p>
   */
  mergeHunks?: MergeHunk[];
}

export namespace Conflict {
  export const filterSensitiveLog = (obj: Conflict): any => ({
    ...obj
  });
  export const isa = (o: any): o is Conflict => __isa(o, "Conflict");
}

export enum ConflictDetailLevelTypeEnum {
  FILE_LEVEL = "FILE_LEVEL",
  LINE_LEVEL = "LINE_LEVEL"
}

/**
 * <p>Information about the metadata for a conflict in a merge operation.</p>
 */
export interface ConflictMetadata {
  __type?: "ConflictMetadata";
  /**
   * <p>A boolean value indicating whether there are conflicts in the content of a file.</p>
   */
  contentConflict?: boolean;

  /**
   * <p>A boolean value indicating whether there are conflicts in the file mode of a file.</p>
   */
  fileModeConflict?: boolean;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   */
  fileModes?: FileModes;

  /**
   * <p>The path of the file that contains conflicts.</p>
   */
  filePath?: string;

  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   */
  fileSizes?: FileSizes;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   */
  isBinaryFile?: IsBinaryFile;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   */
  mergeOperations?: MergeOperations;

  /**
   * <p>The number of conflicts, including both hunk conflicts and metadata conflicts.</p>
   */
  numberOfConflicts?: number;

  /**
   * <p>A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.</p>
   */
  objectTypeConflict?: boolean;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   */
  objectTypes?: ObjectTypes;
}

export namespace ConflictMetadata {
  export const filterSensitiveLog = (obj: ConflictMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictMetadata =>
    __isa(o, "ConflictMetadata");
}

/**
 * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
 *             resolving conflicts during a merge.</p>
 */
export interface ConflictResolution {
  __type?: "ConflictResolution";
  /**
   * <p>Files to be deleted as part of the merge conflict resolution.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>Files to have content replaced as part of the merge conflict resolution.</p>
   */
  replaceContents?: ReplaceContentEntry[];

  /**
   * <p>File modes that are set as part of the merge conflict resolution.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace ConflictResolution {
  export const filterSensitiveLog = (obj: ConflictResolution): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictResolution =>
    __isa(o, "ConflictResolution");
}

export enum ConflictResolutionStrategyTypeEnum {
  ACCEPT_DESTINATION = "ACCEPT_DESTINATION",
  ACCEPT_SOURCE = "ACCEPT_SOURCE",
  AUTOMERGE = "AUTOMERGE",
  NONE = "NONE"
}

export interface CreateApprovalRuleTemplateInput {
  __type?: "CreateApprovalRuleTemplateInput";
  /**
   * <p>The content of the approval rule that is created on pull requests in associated
   *             repositories. If you specify one or more destination references (branches), approval
   *             rules are created in an associated repository only if their destination references
   *             (branches) match those specified in the template.</p>
   *         <note>
   *             <p>When you create the content of the approval rule template, you can specify
   *                 approvers in an approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/iam/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  approvalRuleTemplateContent: string | undefined;

  /**
   * <p>The description of the approval rule template. Consider providing a description that
   *             explains what this template does and when it might be appropriate to associate it with
   *             repositories.</p>
   */
  approvalRuleTemplateDescription?: string;

  /**
   * <p>The name of the approval rule template. Provide descriptive names, because this name
   *             is applied to the approval rules created automatically in associated
   *             repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace CreateApprovalRuleTemplateInput {
  export const filterSensitiveLog = (
    obj: CreateApprovalRuleTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApprovalRuleTemplateInput =>
    __isa(o, "CreateApprovalRuleTemplateInput");
}

export interface CreateApprovalRuleTemplateOutput {
  __type?: "CreateApprovalRuleTemplateOutput";
  /**
   * <p>The content and structure of the created approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace CreateApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (
    obj: CreateApprovalRuleTemplateOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApprovalRuleTemplateOutput =>
    __isa(o, "CreateApprovalRuleTemplateOutput");
}

/**
 * <p>Represents the input of a create branch operation.</p>
 */
export interface CreateBranchInput {
  __type?: "CreateBranchInput";
  /**
   * <p>The name of the new branch to create.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit to point the new branch to.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The name of the repository in which you want to create the new branch.</p>
   */
  repositoryName: string | undefined;
}

export namespace CreateBranchInput {
  export const filterSensitiveLog = (obj: CreateBranchInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBranchInput =>
    __isa(o, "CreateBranchInput");
}

export interface CreateCommitInput {
  __type?: "CreateCommitInput";
  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The name of the branch where you create the commit.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The commit message you want to include in the commit. Commit messages are limited to
   *             256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>The files to delete in this commit. These files still exist in earlier commits.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>The email address of the person who created the commit.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a ..gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The ID of the commit that is the parent of the commit you create. Not required if this
   *             is an empty repository.</p>
   */
  parentCommitId?: string;

  /**
   * <p>The files to add or update in this commit.</p>
   */
  putFiles?: PutFileEntry[];

  /**
   * <p>The name of the repository where you create the commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The file modes to update for files in this commit.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace CreateCommitInput {
  export const filterSensitiveLog = (obj: CreateCommitInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCommitInput =>
    __isa(o, "CreateCommitInput");
}

export interface CreateCommitOutput {
  __type?: "CreateCommitOutput";
  /**
   * <p>The full commit ID of the commit that contains your committed file changes.</p>
   */
  commitId?: string;

  /**
   * <p>The files added as part of the committed file changes.</p>
   */
  filesAdded?: FileMetadata[];

  /**
   * <p>The files deleted as part of the committed file changes.</p>
   */
  filesDeleted?: FileMetadata[];

  /**
   * <p>The files updated as part of the commited file changes.</p>
   */
  filesUpdated?: FileMetadata[];

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.</p>
   */
  treeId?: string;
}

export namespace CreateCommitOutput {
  export const filterSensitiveLog = (obj: CreateCommitOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCommitOutput =>
    __isa(o, "CreateCommitOutput");
}

export interface CreatePullRequestApprovalRuleInput {
  __type?: "CreatePullRequestApprovalRuleInput";
  /**
   * <p>The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information
   *         about approval pools, see the AWS CodeCommit User Guide.</p>
   *         <note>
   *             <p>When you create the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following would be counted
   *                         as approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                     (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                     (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see
   *                <a href="https://docs.aws.amazon.com/iam/latest/UserGuide/reference_identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  approvalRuleContent: string | undefined;

  /**
   * <p>The name for the approval rule.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The system-generated ID of the pull request for which you want to create the approval rule.</p>
   */
  pullRequestId: string | undefined;
}

export namespace CreatePullRequestApprovalRuleInput {
  export const filterSensitiveLog = (
    obj: CreatePullRequestApprovalRuleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePullRequestApprovalRuleInput =>
    __isa(o, "CreatePullRequestApprovalRuleInput");
}

export interface CreatePullRequestApprovalRuleOutput {
  __type?: "CreatePullRequestApprovalRuleOutput";
  /**
   * <p>Information about the created approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

export namespace CreatePullRequestApprovalRuleOutput {
  export const filterSensitiveLog = (
    obj: CreatePullRequestApprovalRuleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePullRequestApprovalRuleOutput =>
    __isa(o, "CreatePullRequestApprovalRuleOutput");
}

export interface CreatePullRequestInput {
  __type?: "CreatePullRequestInput";
  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   *         <note>
   *             <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an
   *                 idempotency token is created for you.</p>
   *         </note>
   */
  clientRequestToken?: string;

  /**
   * <p>A description of the pull request.</p>
   */
  description?: string;

  /**
   * <p>The targets for the pull request, including the source of the code to be reviewed (the
   *             source branch) and the destination where the creator of the pull request intends the
   *             code to be merged after the pull request is closed (the destination branch).</p>
   */
  targets: Target[] | undefined;

  /**
   * <p>The title of the pull request. This title is used to identify the pull request to
   *             other users in the repository.</p>
   */
  title: string | undefined;
}

export namespace CreatePullRequestInput {
  export const filterSensitiveLog = (obj: CreatePullRequestInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePullRequestInput =>
    __isa(o, "CreatePullRequestInput");
}

export interface CreatePullRequestOutput {
  __type?: "CreatePullRequestOutput";
  /**
   * <p>Information about the newly created pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace CreatePullRequestOutput {
  export const filterSensitiveLog = (obj: CreatePullRequestOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePullRequestOutput =>
    __isa(o, "CreatePullRequestOutput");
}

/**
 * <p>Represents the input of a create repository operation.</p>
 */
export interface CreateRepositoryInput {
  __type?: "CreateRepositoryInput";
  /**
   * <p>A comment or description about the new repository.</p>
   *         <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   */
  repositoryDescription?: string;

  /**
   * <p>The name of the new repository to be created.</p>
   *         <note>
   *             <p>The repository name must be unique across the calling AWS account. Repository names
   *                 are limited to 100 alphanumeric, dash, and underscore characters, and cannot include
   *                 certain characters. For more information about the limits on repository names, see
   *                     <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the <i>AWS CodeCommit User Guide</i>. The
   *                 suffix .git is prohibited.</p>
   *          </note>
   */
  repositoryName: string | undefined;

  /**
   * <p>One or more tag key-value pairs to use when tagging this repository.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRepositoryInput {
  export const filterSensitiveLog = (obj: CreateRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRepositoryInput =>
    __isa(o, "CreateRepositoryInput");
}

/**
 * <p>Represents the output of a create repository operation.</p>
 */
export interface CreateRepositoryOutput {
  __type?: "CreateRepositoryOutput";
  /**
   * <p>Information about the newly created repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace CreateRepositoryOutput {
  export const filterSensitiveLog = (obj: CreateRepositoryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRepositoryOutput =>
    __isa(o, "CreateRepositoryOutput");
}

export interface CreateUnreferencedMergeCommitInput {
  __type?: "CreateUnreferencedMergeCommitInput";
  /**
   * <p>The name of the author who created the unreferenced commit. This information is used
   *             as both the author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The commit message for the unreferenced commit.</p>
   */
  commitMessage?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The email address for the person who created the unreferenced commit.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The name of the repository where you want to create the unreferenced merge commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace CreateUnreferencedMergeCommitInput {
  export const filterSensitiveLog = (
    obj: CreateUnreferencedMergeCommitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUnreferencedMergeCommitInput =>
    __isa(o, "CreateUnreferencedMergeCommitInput");
}

export interface CreateUnreferencedMergeCommitOutput {
  __type?: "CreateUnreferencedMergeCommitOutput";
  /**
   * <p>The full commit ID of the commit that contains your merge results.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the merge results.</p>
   */
  treeId?: string;
}

export namespace CreateUnreferencedMergeCommitOutput {
  export const filterSensitiveLog = (
    obj: CreateUnreferencedMergeCommitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUnreferencedMergeCommitOutput =>
    __isa(o, "CreateUnreferencedMergeCommitOutput");
}

/**
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 */
export interface DefaultBranchCannotBeDeletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DefaultBranchCannotBeDeletedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace DefaultBranchCannotBeDeletedException {
  export const filterSensitiveLog = (
    obj: DefaultBranchCannotBeDeletedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefaultBranchCannotBeDeletedException =>
    __isa(o, "DefaultBranchCannotBeDeletedException");
}

export interface DeleteApprovalRuleTemplateInput {
  __type?: "DeleteApprovalRuleTemplateInput";
  /**
   * <p>The name of the approval rule template to delete.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace DeleteApprovalRuleTemplateInput {
  export const filterSensitiveLog = (
    obj: DeleteApprovalRuleTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApprovalRuleTemplateInput =>
    __isa(o, "DeleteApprovalRuleTemplateInput");
}

export interface DeleteApprovalRuleTemplateOutput {
  __type?: "DeleteApprovalRuleTemplateOutput";
  /**
   * <p>The system-generated ID of the deleted approval rule template. If the template has
   *             been previously deleted, the only response is a 200 OK.</p>
   */
  approvalRuleTemplateId: string | undefined;
}

export namespace DeleteApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (
    obj: DeleteApprovalRuleTemplateOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApprovalRuleTemplateOutput =>
    __isa(o, "DeleteApprovalRuleTemplateOutput");
}

/**
 * <p>Represents the input of a delete branch operation.</p>
 */
export interface DeleteBranchInput {
  __type?: "DeleteBranchInput";
  /**
   * <p>The name of the branch to delete.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The name of the repository that contains the branch to be deleted.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteBranchInput {
  export const filterSensitiveLog = (obj: DeleteBranchInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBranchInput =>
    __isa(o, "DeleteBranchInput");
}

/**
 * <p>Represents the output of a delete branch operation.</p>
 */
export interface DeleteBranchOutput {
  __type?: "DeleteBranchOutput";
  /**
   * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
   */
  deletedBranch?: BranchInfo;
}

export namespace DeleteBranchOutput {
  export const filterSensitiveLog = (obj: DeleteBranchOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBranchOutput =>
    __isa(o, "DeleteBranchOutput");
}

export interface DeleteCommentContentInput {
  __type?: "DeleteCommentContentInput";
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *          or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace DeleteCommentContentInput {
  export const filterSensitiveLog = (obj: DeleteCommentContentInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCommentContentInput =>
    __isa(o, "DeleteCommentContentInput");
}

export interface DeleteCommentContentOutput {
  __type?: "DeleteCommentContentOutput";
  /**
   * <p>Information about the comment you just deleted.</p>
   */
  comment?: Comment;
}

export namespace DeleteCommentContentOutput {
  export const filterSensitiveLog = (obj: DeleteCommentContentOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCommentContentOutput =>
    __isa(o, "DeleteCommentContentOutput");
}

/**
 * <p>A file that is deleted as part of a commit.</p>
 */
export interface DeleteFileEntry {
  __type?: "DeleteFileEntry";
  /**
   * <p>The full path of the file to be deleted, including the name of the file.</p>
   */
  filePath: string | undefined;
}

export namespace DeleteFileEntry {
  export const filterSensitiveLog = (obj: DeleteFileEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFileEntry =>
    __isa(o, "DeleteFileEntry");
}

export interface DeleteFileInput {
  __type?: "DeleteFileInput";
  /**
   * <p>The name of the branch where the commit that deletes the file is made.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The commit message you want to include as part of deleting the file. Commit messages
   *             are limited to 256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>The email address for the commit that deletes the file. If no email address is
   *             specified, the email address is left blank.</p>
   */
  email?: string;

  /**
   * <p>The fully qualified path to the file that to be deleted, including the full name and
   *             extension of that file. For example, /examples/file.md is a fully qualified path to a
   *             file named file.md in a folder named examples.</p>
   */
  filePath: string | undefined;

  /**
   * <p>If a file is the only object in the folder or directory, specifies whether to delete
   *             the folder or directory that contains the file. By default, empty folders are deleted.
   *             This includes empty folders that are part of the directory structure. For example, if
   *             the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the
   *             last file in dir4 also deletes the empty folders dir4, dir3, and dir2.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The name of the author of the commit that deletes the file. If no name is specified,
   *             the user's ARN is used as the author name and committer name.</p>
   */
  name?: string;

  /**
   * <p>The ID of the commit that is the tip of the branch where you want to create the commit
   *             that deletes the file. This must be the HEAD commit for the branch. The commit that
   *             deletes the file is created from this commit ID.</p>
   */
  parentCommitId: string | undefined;

  /**
   * <p>The name of the repository that contains the file to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteFileInput {
  export const filterSensitiveLog = (obj: DeleteFileInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFileInput =>
    __isa(o, "DeleteFileInput");
}

export interface DeleteFileOutput {
  __type?: "DeleteFileOutput";
  /**
   * <p>The blob ID removed from the tree as part of deleting the file.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full commit ID of the commit that contains the change that deletes the file.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The fully qualified path to the file to be deleted, including the full name and
   *             extension of that file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the delete file change.</p>
   */
  treeId: string | undefined;
}

export namespace DeleteFileOutput {
  export const filterSensitiveLog = (obj: DeleteFileOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFileOutput =>
    __isa(o, "DeleteFileOutput");
}

export interface DeletePullRequestApprovalRuleInput {
  __type?: "DeletePullRequestApprovalRuleInput";
  /**
   * <p>The name of the approval rule you want to delete.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The system-generated ID of the pull request that contains the approval rule you want to delete.</p>
   */
  pullRequestId: string | undefined;
}

export namespace DeletePullRequestApprovalRuleInput {
  export const filterSensitiveLog = (
    obj: DeletePullRequestApprovalRuleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePullRequestApprovalRuleInput =>
    __isa(o, "DeletePullRequestApprovalRuleInput");
}

export interface DeletePullRequestApprovalRuleOutput {
  __type?: "DeletePullRequestApprovalRuleOutput";
  /**
   * <p>The ID of the deleted approval rule. </p>
   *         <note>
   *             <p>If the approval rule was deleted in an earlier API call, the response is 200 OK without
   *                 content.</p>
   *          </note>
   */
  approvalRuleId: string | undefined;
}

export namespace DeletePullRequestApprovalRuleOutput {
  export const filterSensitiveLog = (
    obj: DeletePullRequestApprovalRuleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePullRequestApprovalRuleOutput =>
    __isa(o, "DeletePullRequestApprovalRuleOutput");
}

/**
 * <p>Represents the input of a delete repository operation.</p>
 */
export interface DeleteRepositoryInput {
  __type?: "DeleteRepositoryInput";
  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryInput {
  export const filterSensitiveLog = (obj: DeleteRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryInput =>
    __isa(o, "DeleteRepositoryInput");
}

/**
 * <p>Represents the output of a delete repository operation.</p>
 */
export interface DeleteRepositoryOutput {
  __type?: "DeleteRepositoryOutput";
  /**
   * <p>The ID of the repository that was deleted.</p>
   */
  repositoryId?: string;
}

export namespace DeleteRepositoryOutput {
  export const filterSensitiveLog = (obj: DeleteRepositoryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryOutput =>
    __isa(o, "DeleteRepositoryOutput");
}

export interface DescribeMergeConflictsInput {
  __type?: "DescribeMergeConflictsInput";
  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The path of the target files used to describe the conflicts. </p>
   */
  filePath: string | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository where you want to get information about a merge conflict.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace DescribeMergeConflictsInput {
  export const filterSensitiveLog = (
    obj: DescribeMergeConflictsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMergeConflictsInput =>
    __isa(o, "DescribeMergeConflictsInput");
}

export interface DescribeMergeConflictsOutput {
  __type?: "DescribeMergeConflictsOutput";
  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>Contains metadata about the conflicts found in the merge.</p>
   */
  conflictMetadata: ConflictMetadata | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>A list of merge hunks of the differences between the files or lines.</p>
   */
  mergeHunks: MergeHunk[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;
}

export namespace DescribeMergeConflictsOutput {
  export const filterSensitiveLog = (
    obj: DescribeMergeConflictsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMergeConflictsOutput =>
    __isa(o, "DescribeMergeConflictsOutput");
}

export interface DescribePullRequestEventsInput {
  __type?: "DescribePullRequestEventsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.
   *             The default is 100 events, which is also the maximum number of events that can be returned in a result.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>Optional. The pull request event type about which you want to return information.</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export namespace DescribePullRequestEventsInput {
  export const filterSensitiveLog = (
    obj: DescribePullRequestEventsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePullRequestEventsInput =>
    __isa(o, "DescribePullRequestEventsInput");
}

export interface DescribePullRequestEventsOutput {
  __type?: "DescribePullRequestEventsOutput";
  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the pull request events.</p>
   */
  pullRequestEvents: PullRequestEvent[] | undefined;
}

export namespace DescribePullRequestEventsOutput {
  export const filterSensitiveLog = (
    obj: DescribePullRequestEventsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePullRequestEventsOutput =>
    __isa(o, "DescribePullRequestEventsOutput");
}

/**
 * <p>Returns information about a set of differences for a commit specifier.</p>
 */
export interface Difference {
  __type?: "Difference";
  /**
   * <p>Information about an <code>afterBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  afterBlob?: BlobMetadata;

  /**
   * <p>Information about a <code>beforeBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  beforeBlob?: BlobMetadata;

  /**
   * <p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>
   */
  changeType?: ChangeTypeEnum | string;
}

export namespace Difference {
  export const filterSensitiveLog = (obj: Difference): any => ({
    ...obj
  });
  export const isa = (o: any): o is Difference => __isa(o, "Difference");
}

/**
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
 */
export interface DirectoryNameConflictsWithFileNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DirectoryNameConflictsWithFileNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace DirectoryNameConflictsWithFileNameException {
  export const filterSensitiveLog = (
    obj: DirectoryNameConflictsWithFileNameException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DirectoryNameConflictsWithFileNameException =>
    __isa(o, "DirectoryNameConflictsWithFileNameException");
}

export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  __type?: "DisassociateApprovalRuleTemplateFromRepositoryInput";
  /**
   * <p>The name of the approval rule template to disassociate from a specified repository.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository you want to disassociate from the template.</p>
   */
  repositoryName: string | undefined;
}

export namespace DisassociateApprovalRuleTemplateFromRepositoryInput {
  export const filterSensitiveLog = (
    obj: DisassociateApprovalRuleTemplateFromRepositoryInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateApprovalRuleTemplateFromRepositoryInput =>
    __isa(o, "DisassociateApprovalRuleTemplateFromRepositoryInput");
}

/**
 * <p>An encryption integrity check failed.</p>
 */
export interface EncryptionIntegrityChecksFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "EncryptionIntegrityChecksFailedException";
  $fault: "server";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionIntegrityChecksFailedException {
  export const filterSensitiveLog = (
    obj: EncryptionIntegrityChecksFailedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionIntegrityChecksFailedException =>
    __isa(o, "EncryptionIntegrityChecksFailedException");
}

/**
 * <p>An encryption key could not be accessed.</p>
 */
export interface EncryptionKeyAccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "EncryptionKeyAccessDeniedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyAccessDeniedException {
  export const filterSensitiveLog = (
    obj: EncryptionKeyAccessDeniedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionKeyAccessDeniedException =>
    __isa(o, "EncryptionKeyAccessDeniedException");
}

/**
 * <p>The encryption key is disabled.</p>
 */
export interface EncryptionKeyDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "EncryptionKeyDisabledException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyDisabledException {
  export const filterSensitiveLog = (
    obj: EncryptionKeyDisabledException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionKeyDisabledException =>
    __isa(o, "EncryptionKeyDisabledException");
}

/**
 * <p>No encryption key was found.</p>
 */
export interface EncryptionKeyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EncryptionKeyNotFoundException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyNotFoundException {
  export const filterSensitiveLog = (
    obj: EncryptionKeyNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionKeyNotFoundException =>
    __isa(o, "EncryptionKeyNotFoundException");
}

/**
 * <p>The encryption key is not available.</p>
 */
export interface EncryptionKeyUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "EncryptionKeyUnavailableException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyUnavailableException {
  export const filterSensitiveLog = (
    obj: EncryptionKeyUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionKeyUnavailableException =>
    __isa(o, "EncryptionKeyUnavailableException");
}

export interface EvaluatePullRequestApprovalRulesInput {
  __type?: "EvaluatePullRequestApprovalRulesInput";
  /**
   * <p>The system-generated ID of the pull request you want to evaluate.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision. To retrieve the most recent
   *             revision ID for a pull request, use
   *             <a>GetPullRequest</a>.</p>
   */
  revisionId: string | undefined;
}

export namespace EvaluatePullRequestApprovalRulesInput {
  export const filterSensitiveLog = (
    obj: EvaluatePullRequestApprovalRulesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EvaluatePullRequestApprovalRulesInput =>
    __isa(o, "EvaluatePullRequestApprovalRulesInput");
}

export interface EvaluatePullRequestApprovalRulesOutput {
  __type?: "EvaluatePullRequestApprovalRulesOutput";
  /**
   * <p>The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have
   *         not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. </p>
   */
  evaluation: Evaluation | undefined;
}

export namespace EvaluatePullRequestApprovalRulesOutput {
  export const filterSensitiveLog = (
    obj: EvaluatePullRequestApprovalRulesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EvaluatePullRequestApprovalRulesOutput =>
    __isa(o, "EvaluatePullRequestApprovalRulesOutput");
}

/**
 * <p>Returns information about the approval rules applied to a pull request and whether conditions have been met.</p>
 */
export interface Evaluation {
  __type?: "Evaluation";
  /**
   * <p>The names of the approval rules that have not had their conditions met.</p>
   */
  approvalRulesNotSatisfied?: string[];

  /**
   * <p>The names of the approval rules that have had their conditions met.</p>
   */
  approvalRulesSatisfied?: string[];

  /**
   * <p>Whether the state of the pull request is approved.</p>
   */
  approved?: boolean;

  /**
   * <p>Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.</p>
   */
  overridden?: boolean;
}

export namespace Evaluation {
  export const filterSensitiveLog = (obj: Evaluation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Evaluation => __isa(o, "Evaluation");
}

/**
 * <p>Returns information about a file in a repository.</p>
 */
export interface File {
  __type?: "File";
  /**
   * <p>The fully qualified path to the file in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The relative path of the file from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace File {
  export const filterSensitiveLog = (obj: File): any => ({
    ...obj
  });
  export const isa = (o: any): o is File => __isa(o, "File");
}

/**
 * <p>The commit cannot be created because both a source file and file content have been
 *             specified for the same file. You cannot provide both. Either specify a source file or
 *             provide the file content directly.</p>
 */
export interface FileContentAndSourceFileSpecifiedException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileContentAndSourceFileSpecifiedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileContentAndSourceFileSpecifiedException {
  export const filterSensitiveLog = (
    obj: FileContentAndSourceFileSpecifiedException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is FileContentAndSourceFileSpecifiedException =>
    __isa(o, "FileContentAndSourceFileSpecifiedException");
}

/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 */
export interface FileContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileContentRequiredException {
  export const filterSensitiveLog = (
    obj: FileContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileContentRequiredException =>
    __isa(o, "FileContentRequiredException");
}

/**
 * <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 */
export interface FileContentSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileContentSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileContentSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: FileContentSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileContentSizeLimitExceededException =>
    __isa(o, "FileContentSizeLimitExceededException");
}

/**
 * <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
 */
export interface FileDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileDoesNotExistException {
  export const filterSensitiveLog = (obj: FileDoesNotExistException): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileDoesNotExistException =>
    __isa(o, "FileDoesNotExistException");
}

/**
 * <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
 */
export interface FileEntryRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileEntryRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileEntryRequiredException {
  export const filterSensitiveLog = (obj: FileEntryRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileEntryRequiredException =>
    __isa(o, "FileEntryRequiredException");
}

/**
 * <p>A file to be added, updated, or deleted as part of a commit.</p>
 */
export interface FileMetadata {
  __type?: "FileMetadata";
  /**
   * <p>The full path to the file to be added or updated, including the name of the
   *             file.</p>
   */
  absolutePath?: string;

  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace FileMetadata {
  export const filterSensitiveLog = (obj: FileMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileMetadata => __isa(o, "FileMetadata");
}

/**
 * <p>The commit cannot be created because no file mode has been specified. A file mode is
 *             required to update mode permissions for a file.</p>
 */
export interface FileModeRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileModeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileModeRequiredException {
  export const filterSensitiveLog = (obj: FileModeRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileModeRequiredException =>
    __isa(o, "FileModeRequiredException");
}

/**
 * <p>Information about file modes in a merge or pull request.</p>
 */
export interface FileModes {
  __type?: "FileModes";
  /**
   * <p>The file mode of a file in the base of a merge or pull request.</p>
   */
  base?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the destination of a merge or pull request.</p>
   */
  destination?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the source of a merge or pull request.</p>
   */
  source?: FileModeTypeEnum | string;
}

export namespace FileModes {
  export const filterSensitiveLog = (obj: FileModes): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileModes => __isa(o, "FileModes");
}

export enum FileModeTypeEnum {
  EXECUTABLE = "EXECUTABLE",
  NORMAL = "NORMAL",
  SYMLINK = "SYMLINK"
}

/**
 * <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide
 *         another name for the file, or add the file in a directory that does not match the file name.</p>
 */
export interface FileNameConflictsWithDirectoryNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileNameConflictsWithDirectoryNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileNameConflictsWithDirectoryNameException {
  export const filterSensitiveLog = (
    obj: FileNameConflictsWithDirectoryNameException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is FileNameConflictsWithDirectoryNameException =>
    __isa(o, "FileNameConflictsWithDirectoryNameException");
}

/**
 * <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files
 *         have valid file paths that do not point to a submodule.</p>
 */
export interface FilePathConflictsWithSubmodulePathException
  extends __SmithyException,
    $MetadataBearer {
  name: "FilePathConflictsWithSubmodulePathException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FilePathConflictsWithSubmodulePathException {
  export const filterSensitiveLog = (
    obj: FilePathConflictsWithSubmodulePathException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is FilePathConflictsWithSubmodulePathException =>
    __isa(o, "FilePathConflictsWithSubmodulePathException");
}

/**
 * <p>Information about the size of files in a merge or pull request.</p>
 */
export interface FileSizes {
  __type?: "FileSizes";
  /**
   * <p>The size of a file in the base of a merge or pull request.</p>
   */
  base?: number;

  /**
   * <p>The size of a file in the destination of a merge or pull request.</p>
   */
  destination?: number;

  /**
   * <p>The  size of a file in the source of a merge or pull request.</p>
   */
  source?: number;
}

export namespace FileSizes {
  export const filterSensitiveLog = (obj: FileSizes): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileSizes => __isa(o, "FileSizes");
}

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface FileTooLargeException
  extends __SmithyException,
    $MetadataBearer {
  name: "FileTooLargeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileTooLargeException {
  export const filterSensitiveLog = (obj: FileTooLargeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileTooLargeException =>
    __isa(o, "FileTooLargeException");
}

/**
 * <p>Returns information about a folder in a repository.</p>
 */
export interface Folder {
  __type?: "Folder";
  /**
   * <p>The fully qualified path of the folder in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the specified folder from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;
}

export namespace Folder {
  export const filterSensitiveLog = (obj: Folder): any => ({
    ...obj
  });
  export const isa = (o: any): o is Folder => __isa(o, "Folder");
}

/**
 * <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 */
export interface FolderContentSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "FolderContentSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FolderContentSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: FolderContentSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FolderContentSizeLimitExceededException =>
    __isa(o, "FolderContentSizeLimitExceededException");
}

/**
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 */
export interface FolderDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "FolderDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FolderDoesNotExistException {
  export const filterSensitiveLog = (
    obj: FolderDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FolderDoesNotExistException =>
    __isa(o, "FolderDoesNotExistException");
}

export interface GetApprovalRuleTemplateInput {
  __type?: "GetApprovalRuleTemplateInput";
  /**
   * <p>The name of the approval rule template for which you want to get information.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace GetApprovalRuleTemplateInput {
  export const filterSensitiveLog = (
    obj: GetApprovalRuleTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetApprovalRuleTemplateInput =>
    __isa(o, "GetApprovalRuleTemplateInput");
}

export interface GetApprovalRuleTemplateOutput {
  __type?: "GetApprovalRuleTemplateOutput";
  /**
   * <p>The content and structure of the approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace GetApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (
    obj: GetApprovalRuleTemplateOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetApprovalRuleTemplateOutput =>
    __isa(o, "GetApprovalRuleTemplateOutput");
}

/**
 * <p>Represents the input of a get blob operation.</p>
 */
export interface GetBlobInput {
  __type?: "GetBlobInput";
  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The name of the repository that contains the blob.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetBlobInput {
  export const filterSensitiveLog = (obj: GetBlobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBlobInput => __isa(o, "GetBlobInput");
}

/**
 * <p>Represents the output of a get blob operation.</p>
 */
export interface GetBlobOutput {
  __type?: "GetBlobOutput";
  /**
   * <p>The content of the blob, usually a file.</p>
   */
  content: Uint8Array | undefined;
}

export namespace GetBlobOutput {
  export const filterSensitiveLog = (obj: GetBlobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBlobOutput => __isa(o, "GetBlobOutput");
}

/**
 * <p>Represents the input of a get branch operation.</p>
 */
export interface GetBranchInput {
  __type?: "GetBranchInput";
  /**
   * <p>The name of the branch for which you want to retrieve information.</p>
   */
  branchName?: string;

  /**
   * <p>The name of the repository that contains the branch for which you want to retrieve information.</p>
   */
  repositoryName?: string;
}

export namespace GetBranchInput {
  export const filterSensitiveLog = (obj: GetBranchInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBranchInput =>
    __isa(o, "GetBranchInput");
}

/**
 * <p>Represents the output of a get branch operation.</p>
 */
export interface GetBranchOutput {
  __type?: "GetBranchOutput";
  /**
   * <p>The name of the branch.</p>
   */
  branch?: BranchInfo;
}

export namespace GetBranchOutput {
  export const filterSensitiveLog = (obj: GetBranchOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBranchOutput =>
    __isa(o, "GetBranchOutput");
}

export interface GetCommentInput {
  __type?: "GetCommentInput";
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace GetCommentInput {
  export const filterSensitiveLog = (obj: GetCommentInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentInput =>
    __isa(o, "GetCommentInput");
}

export interface GetCommentOutput {
  __type?: "GetCommentOutput";
  /**
   * <p>The contents of the comment.</p>
   */
  comment?: Comment;
}

export namespace GetCommentOutput {
  export const filterSensitiveLog = (obj: GetCommentOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentOutput =>
    __isa(o, "GetCommentOutput");
}

export interface GetCommentsForComparedCommitInput {
  __type?: "GetCommentsForComparedCommitInput";
  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The
   *             default is 100 comments, but you can configure up to 500.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that when provided in a request, returns the next batch of the results. </p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository where you want to compare commits.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetCommentsForComparedCommitInput {
  export const filterSensitiveLog = (
    obj: GetCommentsForComparedCommitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentsForComparedCommitInput =>
    __isa(o, "GetCommentsForComparedCommitInput");
}

export interface GetCommentsForComparedCommitOutput {
  __type?: "GetCommentsForComparedCommitOutput";
  /**
   * <p>A list of comment objects on the compared commit.</p>
   */
  commentsForComparedCommitData?: CommentsForComparedCommit[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentsForComparedCommitOutput {
  export const filterSensitiveLog = (
    obj: GetCommentsForComparedCommitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentsForComparedCommitOutput =>
    __isa(o, "GetCommentsForComparedCommitOutput");
}

export interface GetCommentsForPullRequestInput {
  __type?: "GetCommentsForPullRequestInput";
  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments.
   *             You can return up to 500 comments with a single request.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;
}

export namespace GetCommentsForPullRequestInput {
  export const filterSensitiveLog = (
    obj: GetCommentsForPullRequestInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentsForPullRequestInput =>
    __isa(o, "GetCommentsForPullRequestInput");
}

export interface GetCommentsForPullRequestOutput {
  __type?: "GetCommentsForPullRequestOutput";
  /**
   * <p>An array of comment objects on the pull request.</p>
   */
  commentsForPullRequestData?: CommentsForPullRequest[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentsForPullRequestOutput {
  export const filterSensitiveLog = (
    obj: GetCommentsForPullRequestOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommentsForPullRequestOutput =>
    __isa(o, "GetCommentsForPullRequestOutput");
}

/**
 * <p>Represents the input of a get commit operation.</p>
 */
export interface GetCommitInput {
  __type?: "GetCommitInput";
  /**
   * <p>The commit ID. Commit IDs are the full SHA ID of the commit.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The name of the repository to which the commit was made.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetCommitInput {
  export const filterSensitiveLog = (obj: GetCommitInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommitInput =>
    __isa(o, "GetCommitInput");
}

/**
 * <p>Represents the output of a get commit operation.</p>
 */
export interface GetCommitOutput {
  __type?: "GetCommitOutput";
  /**
   * <p>A commit data type object that contains information about the specified commit.</p>
   */
  commit: Commit | undefined;
}

export namespace GetCommitOutput {
  export const filterSensitiveLog = (obj: GetCommitOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCommitOutput =>
    __isa(o, "GetCommitOutput");
}

export interface GetDifferencesInput {
  __type?: "GetDifferencesInput";
  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  MaxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>
   */
  afterCommitSpecifier: string | undefined;

  /**
   * <p>The file path in which to check differences. Limits the results to this path. Can also
   *             be used to specify the changed name of a directory or folder, if it has changed. If not
   *             specified, differences are shown for all paths.</p>
   */
  afterPath?: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, the full commit ID). Optional. If not specified, all changes before the
   *                 <code>afterCommitSpecifier</code> value are shown. If you do not use
   *                 <code>beforeCommitSpecifier</code> in your request, consider limiting the results
   *             with <code>maxResults</code>.</p>
   */
  beforeCommitSpecifier?: string;

  /**
   * <p>The file path in which to check for differences. Limits the results to this path. Can
   *             also be used to specify the previous name of a directory or folder. If
   *                 <code>beforePath</code> and <code>afterPath</code> are not specified, differences
   *             are shown for all paths.</p>
   */
  beforePath?: string;

  /**
   * <p>The name of the repository where you want to get differences.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetDifferencesInput {
  export const filterSensitiveLog = (obj: GetDifferencesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDifferencesInput =>
    __isa(o, "GetDifferencesInput");
}

export interface GetDifferencesOutput {
  __type?: "GetDifferencesOutput";
  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;

  /**
   * <p>A data type object that contains information about the differences, including whether
   *             the difference is added, modified, or deleted (A, D, M).</p>
   */
  differences?: Difference[];
}

export namespace GetDifferencesOutput {
  export const filterSensitiveLog = (obj: GetDifferencesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDifferencesOutput =>
    __isa(o, "GetDifferencesOutput");
}

export interface GetFileInput {
  __type?: "GetFileInput";
  /**
   * <p>The fully quaified reference that identifies the commit that contains the file. For
   *             example, you can specify a full commit ID, a tag, a branch name, or a reference such as
   *             refs/heads/master. If none is provided, the head commit is used.</p>
   */
  commitSpecifier?: string;

  /**
   * <p>The fully qualified path to the file, including the full name and extension of the
   *             file. For example, /examples/file.md is the fully qualified path to a file named file.md
   *             in a folder named examples.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The name of the repository that contains the file.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetFileInput {
  export const filterSensitiveLog = (obj: GetFileInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFileInput => __isa(o, "GetFileInput");
}

export interface GetFileOutput {
  __type?: "GetFileOutput";
  /**
   * <p>The blob ID of the object that represents the file content.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full commit ID of the commit that contains the content returned by GetFile.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The base-64 encoded binary data object that represents the content of the file.</p>
   */
  fileContent: Uint8Array | undefined;

  /**
   * <p>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.</p>
   *         <note>
   *             <p>The file mode permissions returned by this API are not the standard file mode
   *                 permission values, such as 100644, but rather extrapolated values. See the supported
   *                 return values.</p>
   *         </note>
   */
  fileMode: FileModeTypeEnum | string | undefined;

  /**
   * <p>The fully qualified path to the specified file. Returns the name and extension of the
   *             file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The size of the contents of the file, in bytes.</p>
   */
  fileSize: number | undefined;
}

export namespace GetFileOutput {
  export const filterSensitiveLog = (obj: GetFileOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFileOutput => __isa(o, "GetFileOutput");
}

export interface GetFolderInput {
  __type?: "GetFolderInput";
  /**
   * <p>A fully qualified reference used to identify a commit that contains the version of the
   *             folder's content to return. A fully qualified reference can be a commit ID, branch name,
   *             tag, or reference such as HEAD. If no specifier is provided, the folder content is
   *             returned as it exists in the HEAD commit.</p>
   */
  commitSpecifier?: string;

  /**
   * <p>The fully qualified path to the folder whose contents are returned, including the
   *             folder name. For example, /examples is a fully-qualified path to a folder named examples
   *             that was created off of the root directory (/) of a repository. </p>
   */
  folderPath: string | undefined;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetFolderInput {
  export const filterSensitiveLog = (obj: GetFolderInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFolderInput =>
    __isa(o, "GetFolderInput");
}

export interface GetFolderOutput {
  __type?: "GetFolderOutput";
  /**
   * <p>The full commit ID used as a reference for the returned version of the folder
   *             content.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The list of files in the specified folder, if any.</p>
   */
  files?: File[];

  /**
   * <p>The fully qualified path of the folder whose contents are returned.</p>
   */
  folderPath: string | undefined;

  /**
   * <p>The list of folders that exist under the specified folder, if any.</p>
   */
  subFolders?: Folder[];

  /**
   * <p>The list of submodules in the specified folder, if any.</p>
   */
  subModules?: SubModule[];

  /**
   * <p>The list of symbolic links to other files and folders in the specified folder, if
   *             any.</p>
   */
  symbolicLinks?: SymbolicLink[];

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;
}

export namespace GetFolderOutput {
  export const filterSensitiveLog = (obj: GetFolderOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFolderOutput =>
    __isa(o, "GetFolderOutput");
}

export interface GetMergeCommitInput {
  __type?: "GetMergeCommitInput";
  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The name of the repository that contains the merge commit about which you want to get information.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace GetMergeCommitInput {
  export const filterSensitiveLog = (obj: GetMergeCommitInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeCommitInput =>
    __isa(o, "GetMergeCommitInput");
}

export interface GetMergeCommitOutput {
  __type?: "GetMergeCommitOutput";
  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID for the merge commit created when the source branch was merged into the
   *             destination branch. If the fast-forward merge strategy was used, there is no merge
   *             commit.</p>
   */
  mergedCommitId?: string;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId?: string;
}

export namespace GetMergeCommitOutput {
  export const filterSensitiveLog = (obj: GetMergeCommitOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeCommitOutput =>
    __isa(o, "GetMergeCommitOutput");
}

export interface GetMergeConflictsInput {
  __type?: "GetMergeConflictsInput";
  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>The merge option or strategy you want to use to merge the code.  </p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace GetMergeConflictsInput {
  export const filterSensitiveLog = (obj: GetMergeConflictsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeConflictsInput =>
    __isa(o, "GetMergeConflictsInput");
}

export interface GetMergeConflictsOutput {
  __type?: "GetMergeConflictsOutput";
  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>A list of metadata for any conflicting files. If the specified merge strategy is
   *             FAST_FORWARD_MERGE, this list is always empty.</p>
   */
  conflictMetadataList: ConflictMetadata[] | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether the code is mergeable by the specified merge option.</p>
   */
  mergeable: boolean | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;
}

export namespace GetMergeConflictsOutput {
  export const filterSensitiveLog = (obj: GetMergeConflictsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeConflictsOutput =>
    __isa(o, "GetMergeConflictsOutput");
}

export interface GetMergeOptionsInput {
  __type?: "GetMergeOptionsInput";
  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The name of the repository that contains the commits about which you want to get merge options.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;
}

export namespace GetMergeOptionsInput {
  export const filterSensitiveLog = (obj: GetMergeOptionsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeOptionsInput =>
    __isa(o, "GetMergeOptionsInput");
}

export interface GetMergeOptionsOutput {
  __type?: "GetMergeOptionsOutput";
  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The merge option or strategy used to merge the code.</p>
   */
  mergeOptions: (MergeOptionTypeEnum | string)[] | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;
}

export namespace GetMergeOptionsOutput {
  export const filterSensitiveLog = (obj: GetMergeOptionsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMergeOptionsOutput =>
    __isa(o, "GetMergeOptionsOutput");
}

export interface GetPullRequestApprovalStatesInput {
  __type?: "GetPullRequestApprovalStatesInput";
  /**
   * <p>The system-generated ID for the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision.</p>
   */
  revisionId: string | undefined;
}

export namespace GetPullRequestApprovalStatesInput {
  export const filterSensitiveLog = (
    obj: GetPullRequestApprovalStatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestApprovalStatesInput =>
    __isa(o, "GetPullRequestApprovalStatesInput");
}

export interface GetPullRequestApprovalStatesOutput {
  __type?: "GetPullRequestApprovalStatesOutput";
  /**
   * <p>Information about users who have approved the pull request.</p>
   */
  approvals?: Approval[];
}

export namespace GetPullRequestApprovalStatesOutput {
  export const filterSensitiveLog = (
    obj: GetPullRequestApprovalStatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestApprovalStatesOutput =>
    __isa(o, "GetPullRequestApprovalStatesOutput");
}

export interface GetPullRequestInput {
  __type?: "GetPullRequestInput";
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export namespace GetPullRequestInput {
  export const filterSensitiveLog = (obj: GetPullRequestInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestInput =>
    __isa(o, "GetPullRequestInput");
}

export interface GetPullRequestOutput {
  __type?: "GetPullRequestOutput";
  /**
   * <p>Information about the specified pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace GetPullRequestOutput {
  export const filterSensitiveLog = (obj: GetPullRequestOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestOutput =>
    __isa(o, "GetPullRequestOutput");
}

export interface GetPullRequestOverrideStateInput {
  __type?: "GetPullRequestOverrideStateInput";
  /**
   * <p>The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden).</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision for the pull request. To retrieve the most
   *             recent revision ID, use
   *             <a>GetPullRequest</a>.</p>
   */
  revisionId: string | undefined;
}

export namespace GetPullRequestOverrideStateInput {
  export const filterSensitiveLog = (
    obj: GetPullRequestOverrideStateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestOverrideStateInput =>
    __isa(o, "GetPullRequestOverrideStateInput");
}

export interface GetPullRequestOverrideStateOutput {
  __type?: "GetPullRequestOverrideStateOutput";
  /**
   * <p>A Boolean value that indicates whether a pull request has had its rules set aside (TRUE) or whether all approval rules still apply (FALSE).</p>
   */
  overridden?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
   */
  overrider?: string;
}

export namespace GetPullRequestOverrideStateOutput {
  export const filterSensitiveLog = (
    obj: GetPullRequestOverrideStateOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPullRequestOverrideStateOutput =>
    __isa(o, "GetPullRequestOverrideStateOutput");
}

/**
 * <p>Represents the input of a get repository operation.</p>
 */
export interface GetRepositoryInput {
  __type?: "GetRepositoryInput";
  /**
   * <p>The name of the repository to get information about.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryInput {
  export const filterSensitiveLog = (obj: GetRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryInput =>
    __isa(o, "GetRepositoryInput");
}

/**
 * <p>Represents the output of a get repository operation.</p>
 */
export interface GetRepositoryOutput {
  __type?: "GetRepositoryOutput";
  /**
   * <p>Information about the repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace GetRepositoryOutput {
  export const filterSensitiveLog = (obj: GetRepositoryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryOutput =>
    __isa(o, "GetRepositoryOutput");
}

/**
 * <p>Represents the input of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersInput {
  __type?: "GetRepositoryTriggersInput";
  /**
   * <p>The name of the repository for which the trigger is configured.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryTriggersInput {
  export const filterSensitiveLog = (obj: GetRepositoryTriggersInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryTriggersInput =>
    __isa(o, "GetRepositoryTriggersInput");
}

/**
 * <p>Represents the output of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersOutput {
  __type?: "GetRepositoryTriggersOutput";
  /**
   * <p>The system-generated unique ID for the trigger.</p>
   */
  configurationId?: string;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   */
  triggers?: RepositoryTrigger[];
}

export namespace GetRepositoryTriggersOutput {
  export const filterSensitiveLog = (
    obj: GetRepositoryTriggersOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryTriggersOutput =>
    __isa(o, "GetRepositoryTriggersOutput");
}

/**
 * <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 */
export interface IdempotencyParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotencyParameterMismatchException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace IdempotencyParameterMismatchException {
  export const filterSensitiveLog = (
    obj: IdempotencyParameterMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotencyParameterMismatchException =>
    __isa(o, "IdempotencyParameterMismatchException");
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 */
export interface InvalidActorArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidActorArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidActorArnException {
  export const filterSensitiveLog = (obj: InvalidActorArnException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidActorArnException =>
    __isa(o, "InvalidActorArnException");
}

/**
 * <p>The content for the approval rule is not valid.</p>
 */
export interface InvalidApprovalRuleContentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalRuleContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleContentException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalRuleContentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidApprovalRuleContentException =>
    __isa(o, "InvalidApprovalRuleContentException");
}

/**
 * <p>The name for the approval rule is not valid.</p>
 */
export interface InvalidApprovalRuleNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalRuleNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleNameException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalRuleNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidApprovalRuleNameException =>
    __isa(o, "InvalidApprovalRuleNameException");
}

/**
 * <p>The content of the approval rule template is not valid.</p>
 */
export interface InvalidApprovalRuleTemplateContentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalRuleTemplateContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateContentException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalRuleTemplateContentException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidApprovalRuleTemplateContentException =>
    __isa(o, "InvalidApprovalRuleTemplateContentException");
}

/**
 * <p>The description for the approval rule template is not valid because it exceeds the
 *             maximum characters allowed for a description. For more information about limits in AWS
 *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User
 *             Guide</a>.</p>
 */
export interface InvalidApprovalRuleTemplateDescriptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalRuleTemplateDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateDescriptionException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalRuleTemplateDescriptionException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidApprovalRuleTemplateDescriptionException =>
    __isa(o, "InvalidApprovalRuleTemplateDescriptionException");
}

/**
 * <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 */
export interface InvalidApprovalRuleTemplateNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalRuleTemplateNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateNameException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalRuleTemplateNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidApprovalRuleTemplateNameException =>
    __isa(o, "InvalidApprovalRuleTemplateNameException");
}

/**
 * <p>The state for the approval is not valid. Valid values include APPROVE and REVOKE. </p>
 */
export interface InvalidApprovalStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApprovalStateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalStateException {
  export const filterSensitiveLog = (
    obj: InvalidApprovalStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidApprovalStateException =>
    __isa(o, "InvalidApprovalStateException");
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 */
export interface InvalidAuthorArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAuthorArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidAuthorArnException {
  export const filterSensitiveLog = (obj: InvalidAuthorArnException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAuthorArnException =>
    __isa(o, "InvalidAuthorArnException");
}

/**
 * <p>The specified blob is not valid.</p>
 */
export interface InvalidBlobIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidBlobIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidBlobIdException {
  export const filterSensitiveLog = (obj: InvalidBlobIdException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidBlobIdException =>
    __isa(o, "InvalidBlobIdException");
}

/**
 * <p>The specified reference name is not valid.</p>
 */
export interface InvalidBranchNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidBranchNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidBranchNameException {
  export const filterSensitiveLog = (obj: InvalidBranchNameException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidBranchNameException =>
    __isa(o, "InvalidBranchNameException");
}

/**
 * <p>The client request token is not valid.</p>
 */
export interface InvalidClientRequestTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClientRequestTokenException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidClientRequestTokenException {
  export const filterSensitiveLog = (
    obj: InvalidClientRequestTokenException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClientRequestTokenException =>
    __isa(o, "InvalidClientRequestTokenException");
}

/**
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 */
export interface InvalidCommentIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCommentIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommentIdException {
  export const filterSensitiveLog = (obj: InvalidCommentIdException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCommentIdException =>
    __isa(o, "InvalidCommentIdException");
}

/**
 * <p>The specified commit is not valid.</p>
 */
export interface InvalidCommitException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCommitException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommitException {
  export const filterSensitiveLog = (obj: InvalidCommitException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCommitException =>
    __isa(o, "InvalidCommitException");
}

/**
 * <p>The specified commit ID is not valid.</p>
 */
export interface InvalidCommitIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCommitIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommitIdException {
  export const filterSensitiveLog = (obj: InvalidCommitIdException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCommitIdException =>
    __isa(o, "InvalidCommitIdException");
}

/**
 * <p>The specified conflict detail level is not valid.</p>
 */
export interface InvalidConflictDetailLevelException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConflictDetailLevelException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictDetailLevelException {
  export const filterSensitiveLog = (
    obj: InvalidConflictDetailLevelException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidConflictDetailLevelException =>
    __isa(o, "InvalidConflictDetailLevelException");
}

/**
 * <p>The specified conflict resolution list is not valid.</p>
 */
export interface InvalidConflictResolutionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConflictResolutionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictResolutionException {
  export const filterSensitiveLog = (
    obj: InvalidConflictResolutionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidConflictResolutionException =>
    __isa(o, "InvalidConflictResolutionException");
}

/**
 * <p>The specified conflict resolution strategy is not valid.</p>
 */
export interface InvalidConflictResolutionStrategyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConflictResolutionStrategyException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictResolutionStrategyException {
  export const filterSensitiveLog = (
    obj: InvalidConflictResolutionStrategyException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidConflictResolutionStrategyException =>
    __isa(o, "InvalidConflictResolutionStrategyException");
}

/**
 * <p>The specified continuation token is not valid.</p>
 */
export interface InvalidContinuationTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidContinuationTokenException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidContinuationTokenException {
  export const filterSensitiveLog = (
    obj: InvalidContinuationTokenException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidContinuationTokenException =>
    __isa(o, "InvalidContinuationTokenException");
}

/**
 * <p>The specified deletion parameter is not valid.</p>
 */
export interface InvalidDeletionParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDeletionParameterException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDeletionParameterException {
  export const filterSensitiveLog = (
    obj: InvalidDeletionParameterException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDeletionParameterException =>
    __isa(o, "InvalidDeletionParameterException");
}

/**
 * <p>The pull request description is not valid. Descriptions cannot be more than 1,000
 *             characters.</p>
 */
export interface InvalidDescriptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDescriptionException {
  export const filterSensitiveLog = (
    obj: InvalidDescriptionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDescriptionException =>
    __isa(o, "InvalidDescriptionException");
}

/**
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 */
export interface InvalidDestinationCommitSpecifierException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDestinationCommitSpecifierException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDestinationCommitSpecifierException {
  export const filterSensitiveLog = (
    obj: InvalidDestinationCommitSpecifierException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidDestinationCommitSpecifierException =>
    __isa(o, "InvalidDestinationCommitSpecifierException");
}

/**
 * <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 */
export interface InvalidEmailException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEmailException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidEmailException {
  export const filterSensitiveLog = (obj: InvalidEmailException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidEmailException =>
    __isa(o, "InvalidEmailException");
}

/**
 * <p>The location of the file is not valid. Make sure that you include the file name and
 *             extension.</p>
 */
export interface InvalidFileLocationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidFileLocationException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidFileLocationException {
  export const filterSensitiveLog = (
    obj: InvalidFileLocationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFileLocationException =>
    __isa(o, "InvalidFileLocationException");
}

/**
 * <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 */
export interface InvalidFileModeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidFileModeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidFileModeException {
  export const filterSensitiveLog = (obj: InvalidFileModeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFileModeException =>
    __isa(o, "InvalidFileModeException");
}

/**
 * <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 */
export interface InvalidFilePositionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidFilePositionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidFilePositionException {
  export const filterSensitiveLog = (
    obj: InvalidFilePositionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidFilePositionException =>
    __isa(o, "InvalidFilePositionException");
}

/**
 * <p>The specified value for the number of conflict files to return is not valid.</p>
 */
export interface InvalidMaxConflictFilesException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMaxConflictFilesException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxConflictFilesException {
  export const filterSensitiveLog = (
    obj: InvalidMaxConflictFilesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidMaxConflictFilesException =>
    __isa(o, "InvalidMaxConflictFilesException");
}

/**
 * <p>The specified value for the number of merge hunks to return is not valid.</p>
 */
export interface InvalidMaxMergeHunksException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMaxMergeHunksException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxMergeHunksException {
  export const filterSensitiveLog = (
    obj: InvalidMaxMergeHunksException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidMaxMergeHunksException =>
    __isa(o, "InvalidMaxMergeHunksException");
}

/**
 * <p>The specified number of maximum results is not valid.</p>
 */
export interface InvalidMaxResultsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxResultsException {
  export const filterSensitiveLog = (obj: InvalidMaxResultsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidMaxResultsException =>
    __isa(o, "InvalidMaxResultsException");
}

/**
 * <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 */
export interface InvalidMergeOptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMergeOptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMergeOptionException {
  export const filterSensitiveLog = (
    obj: InvalidMergeOptionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidMergeOptionException =>
    __isa(o, "InvalidMergeOptionException");
}

/**
 * <p>The specified sort order is not valid.</p>
 */
export interface InvalidOrderException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOrderException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidOrderException {
  export const filterSensitiveLog = (obj: InvalidOrderException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOrderException =>
    __isa(o, "InvalidOrderException");
}

/**
 * <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 */
export interface InvalidOverrideStatusException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOverrideStatusException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidOverrideStatusException {
  export const filterSensitiveLog = (
    obj: InvalidOverrideStatusException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOverrideStatusException =>
    __isa(o, "InvalidOverrideStatusException");
}

/**
 * <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you
 *         want to add or update a file.</p>
 */
export interface InvalidParentCommitIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParentCommitIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidParentCommitIdException {
  export const filterSensitiveLog = (
    obj: InvalidParentCommitIdException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParentCommitIdException =>
    __isa(o, "InvalidParentCommitIdException");
}

/**
 * <p>The specified path is not valid.</p>
 */
export interface InvalidPathException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPathException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPathException {
  export const filterSensitiveLog = (obj: InvalidPathException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPathException =>
    __isa(o, "InvalidPathException");
}

/**
 * <p>The pull request event type is not valid. </p>
 */
export interface InvalidPullRequestEventTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPullRequestEventTypeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestEventTypeException {
  export const filterSensitiveLog = (
    obj: InvalidPullRequestEventTypeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPullRequestEventTypeException =>
    __isa(o, "InvalidPullRequestEventTypeException");
}

/**
 * <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 */
export interface InvalidPullRequestIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPullRequestIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestIdException {
  export const filterSensitiveLog = (
    obj: InvalidPullRequestIdException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPullRequestIdException =>
    __isa(o, "InvalidPullRequestIdException");
}

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPullRequestStatusException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestStatusException {
  export const filterSensitiveLog = (
    obj: InvalidPullRequestStatusException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPullRequestStatusException =>
    __isa(o, "InvalidPullRequestStatusException");
}

/**
 * <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPullRequestStatusUpdateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestStatusUpdateException {
  export const filterSensitiveLog = (
    obj: InvalidPullRequestStatusUpdateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPullRequestStatusUpdateException =>
    __isa(o, "InvalidPullRequestStatusUpdateException");
}

/**
 * <p>The specified reference name format is not valid. Reference names must conform to the
 *             Git references format (for example, refs/heads/master). For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals -
 *                 Git References</a> or consult your Git documentation.</p>
 */
export interface InvalidReferenceNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidReferenceNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReferenceNameException {
  export const filterSensitiveLog = (
    obj: InvalidReferenceNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidReferenceNameException =>
    __isa(o, "InvalidReferenceNameException");
}

/**
 * <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
 */
export interface InvalidRelativeFileVersionEnumException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRelativeFileVersionEnumException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRelativeFileVersionEnumException {
  export const filterSensitiveLog = (
    obj: InvalidRelativeFileVersionEnumException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRelativeFileVersionEnumException =>
    __isa(o, "InvalidRelativeFileVersionEnumException");
}

/**
 * <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 */
export interface InvalidReplacementContentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidReplacementContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReplacementContentException {
  export const filterSensitiveLog = (
    obj: InvalidReplacementContentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidReplacementContentException =>
    __isa(o, "InvalidReplacementContentException");
}

/**
 * <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 */
export interface InvalidReplacementTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidReplacementTypeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReplacementTypeException {
  export const filterSensitiveLog = (
    obj: InvalidReplacementTypeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidReplacementTypeException =>
    __isa(o, "InvalidReplacementTypeException");
}

/**
 * <p>The specified repository description is not valid.</p>
 */
export interface InvalidRepositoryDescriptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryDescriptionException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryDescriptionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRepositoryDescriptionException =>
    __isa(o, "InvalidRepositoryDescriptionException");
}

/**
 * <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 */
export interface InvalidRepositoryNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryNameException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRepositoryNameException =>
    __isa(o, "InvalidRepositoryNameException");
}

/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerBranchNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerBranchNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerBranchNameException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerBranchNameException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidRepositoryTriggerBranchNameException =>
    __isa(o, "InvalidRepositoryTriggerBranchNameException");
}

/**
 * <p>The custom data provided for the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerCustomDataException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerCustomDataException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerCustomDataException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerCustomDataException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidRepositoryTriggerCustomDataException =>
    __isa(o, "InvalidRepositoryTriggerCustomDataException");
}

/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 */
export interface InvalidRepositoryTriggerDestinationArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerDestinationArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerDestinationArnException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerDestinationArnException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidRepositoryTriggerDestinationArnException =>
    __isa(o, "InvalidRepositoryTriggerDestinationArnException");
}

/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 */
export interface InvalidRepositoryTriggerEventsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerEventsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerEventsException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerEventsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRepositoryTriggerEventsException =>
    __isa(o, "InvalidRepositoryTriggerEventsException");
}

/**
 * <p>The name of the trigger is not valid.</p>
 */
export interface InvalidRepositoryTriggerNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerNameException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRepositoryTriggerNameException =>
    __isa(o, "InvalidRepositoryTriggerNameException");
}

/**
 * <p>The AWS Region for the trigger target does not match the AWS Region for the
 *             repository. Triggers must be created in the same Region as the target for the
 *             trigger.</p>
 */
export interface InvalidRepositoryTriggerRegionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRepositoryTriggerRegionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryTriggerRegionException {
  export const filterSensitiveLog = (
    obj: InvalidRepositoryTriggerRegionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRepositoryTriggerRegionException =>
    __isa(o, "InvalidRepositoryTriggerRegionException");
}

/**
 * <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export interface InvalidResourceArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidResourceArnException {
  export const filterSensitiveLog = (
    obj: InvalidResourceArnException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceArnException =>
    __isa(o, "InvalidResourceArnException");
}

/**
 * <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 */
export interface InvalidRevisionIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRevisionIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRevisionIdException {
  export const filterSensitiveLog = (obj: InvalidRevisionIdException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRevisionIdException =>
    __isa(o, "InvalidRevisionIdException");
}

/**
 * <p>The SHA-256 hash signature for the rule content is not valid.</p>
 */
export interface InvalidRuleContentSha256Exception
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRuleContentSha256Exception";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRuleContentSha256Exception {
  export const filterSensitiveLog = (
    obj: InvalidRuleContentSha256Exception
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRuleContentSha256Exception =>
    __isa(o, "InvalidRuleContentSha256Exception");
}

/**
 * <p>The specified sort by value is not valid.</p>
 */
export interface InvalidSortByException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSortByException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSortByException {
  export const filterSensitiveLog = (obj: InvalidSortByException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSortByException =>
    __isa(o, "InvalidSortByException");
}

/**
 * <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
 */
export interface InvalidSourceCommitSpecifierException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSourceCommitSpecifierException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSourceCommitSpecifierException {
  export const filterSensitiveLog = (
    obj: InvalidSourceCommitSpecifierException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSourceCommitSpecifierException =>
    __isa(o, "InvalidSourceCommitSpecifierException");
}

/**
 * <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
 */
export interface InvalidSystemTagUsageException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSystemTagUsageException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSystemTagUsageException {
  export const filterSensitiveLog = (
    obj: InvalidSystemTagUsageException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSystemTagUsageException =>
    __isa(o, "InvalidSystemTagUsageException");
}

/**
 * <p>The list of tags is not valid.</p>
 */
export interface InvalidTagKeysListException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagKeysListException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTagKeysListException {
  export const filterSensitiveLog = (
    obj: InvalidTagKeysListException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagKeysListException =>
    __isa(o, "InvalidTagKeysListException");
}

/**
 * <p>The map of tags is not valid.</p>
 */
export interface InvalidTagsMapException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagsMapException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTagsMapException {
  export const filterSensitiveLog = (obj: InvalidTagsMapException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagsMapException =>
    __isa(o, "InvalidTagsMapException");
}

/**
 * <p>The specified target branch is not valid.</p>
 */
export interface InvalidTargetBranchException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTargetBranchException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTargetBranchException {
  export const filterSensitiveLog = (
    obj: InvalidTargetBranchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTargetBranchException =>
    __isa(o, "InvalidTargetBranchException");
}

/**
 * <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface InvalidTargetException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTargetException {
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTargetException =>
    __isa(o, "InvalidTargetException");
}

/**
 * <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for
 *             the repository name, source branch, and destination branch for a pull request.</p>
 */
export interface InvalidTargetsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTargetsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTargetsException {
  export const filterSensitiveLog = (obj: InvalidTargetsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTargetsException =>
    __isa(o, "InvalidTargetsException");
}

/**
 * <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 */
export interface InvalidTitleException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTitleException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTitleException {
  export const filterSensitiveLog = (obj: InvalidTitleException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTitleException =>
    __isa(o, "InvalidTitleException");
}

/**
 * <p>Information about whether a file is binary or textual in a merge or pull request operation.</p>
 */
export interface IsBinaryFile {
  __type?: "IsBinaryFile";
  /**
   * <p>The binary or non-binary status of a file in the base of a merge or pull request.</p>
   */
  base?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the destination of a merge or pull request.</p>
   */
  destination?: boolean;

  /**
   * <p>The binary or non-binary status of file in the source of a merge or pull request.</p>
   */
  source?: boolean;
}

export namespace IsBinaryFile {
  export const filterSensitiveLog = (obj: IsBinaryFile): any => ({
    ...obj
  });
  export const isa = (o: any): o is IsBinaryFile => __isa(o, "IsBinaryFile");
}

export interface ListApprovalRuleTemplatesInput {
  __type?: "ListApprovalRuleTemplatesInput";
  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace ListApprovalRuleTemplatesInput {
  export const filterSensitiveLog = (
    obj: ListApprovalRuleTemplatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApprovalRuleTemplatesInput =>
    __isa(o, "ListApprovalRuleTemplatesInput");
}

export interface ListApprovalRuleTemplatesOutput {
  __type?: "ListApprovalRuleTemplatesOutput";
  /**
   * <p>The names of all the approval rule templates found in the AWS Region for your AWS account.</p>
   */
  approvalRuleTemplateNames?: string[];

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListApprovalRuleTemplatesOutput {
  export const filterSensitiveLog = (
    obj: ListApprovalRuleTemplatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApprovalRuleTemplatesOutput =>
    __isa(o, "ListApprovalRuleTemplatesOutput");
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  __type?: "ListAssociatedApprovalRuleTemplatesForRepositoryInput";
  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository for which you want to list all associated approval rule templates.</p>
   */
  repositoryName: string | undefined;
}

export namespace ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  export const filterSensitiveLog = (
    obj: ListAssociatedApprovalRuleTemplatesForRepositoryInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAssociatedApprovalRuleTemplatesForRepositoryInput =>
    __isa(o, "ListAssociatedApprovalRuleTemplatesForRepositoryInput");
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  __type?: "ListAssociatedApprovalRuleTemplatesForRepositoryOutput";
  /**
   * <p>The names of all approval rule templates associated with the repository.</p>
   */
  approvalRuleTemplateNames?: string[];

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  export const filterSensitiveLog = (
    obj: ListAssociatedApprovalRuleTemplatesForRepositoryOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAssociatedApprovalRuleTemplatesForRepositoryOutput =>
    __isa(o, "ListAssociatedApprovalRuleTemplatesForRepositoryOutput");
}

/**
 * <p>Represents the input of a list branches operation.</p>
 */
export interface ListBranchesInput {
  __type?: "ListBranchesInput";
  /**
   * <p>An enumeration token that allows the operation to batch the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the repository that contains the branches.</p>
   */
  repositoryName: string | undefined;
}

export namespace ListBranchesInput {
  export const filterSensitiveLog = (obj: ListBranchesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBranchesInput =>
    __isa(o, "ListBranchesInput");
}

/**
 * <p>Represents the output of a list branches operation.</p>
 */
export interface ListBranchesOutput {
  __type?: "ListBranchesOutput";
  /**
   * <p>The list of branch names.</p>
   */
  branches?: string[];

  /**
   * <p>An enumeration token that returns the batch of the results.</p>
   */
  nextToken?: string;
}

export namespace ListBranchesOutput {
  export const filterSensitiveLog = (obj: ListBranchesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBranchesOutput =>
    __isa(o, "ListBranchesOutput");
}

export interface ListPullRequestsInput {
  __type?: "ListPullRequestsInput";
  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results
   *         to pull requests created by that user.</p>
   */
  authorArn?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>The name of the repository for which you want to list pull requests.</p>
   */
  repositoryName: string | undefined;
}

export namespace ListPullRequestsInput {
  export const filterSensitiveLog = (obj: ListPullRequestsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPullRequestsInput =>
    __isa(o, "ListPullRequestsInput");
}

export interface ListPullRequestsOutput {
  __type?: "ListPullRequestsOutput";
  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The system-generated IDs of the pull requests.</p>
   */
  pullRequestIds: string[] | undefined;
}

export namespace ListPullRequestsOutput {
  export const filterSensitiveLog = (obj: ListPullRequestsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPullRequestsOutput =>
    __isa(o, "ListPullRequestsOutput");
}

export interface ListRepositoriesForApprovalRuleTemplateInput {
  __type?: "ListRepositoriesForApprovalRuleTemplateInput";
  /**
   * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace ListRepositoriesForApprovalRuleTemplateInput {
  export const filterSensitiveLog = (
    obj: ListRepositoriesForApprovalRuleTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRepositoriesForApprovalRuleTemplateInput =>
    __isa(o, "ListRepositoriesForApprovalRuleTemplateInput");
}

export interface ListRepositoriesForApprovalRuleTemplateOutput {
  __type?: "ListRepositoriesForApprovalRuleTemplateOutput";
  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of repository names that are associated with the specified approval rule template.</p>
   */
  repositoryNames?: string[];
}

export namespace ListRepositoriesForApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (
    obj: ListRepositoriesForApprovalRuleTemplateOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRepositoriesForApprovalRuleTemplateOutput =>
    __isa(o, "ListRepositoriesForApprovalRuleTemplateOutput");
}

/**
 * <p>Represents the input of a list repositories operation.</p>
 */
export interface ListRepositoriesInput {
  __type?: "ListRepositoriesInput";
  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;

  /**
   * <p>The order in which to sort the results of a list repositories operation.</p>
   */
  order?: OrderEnum | string;

  /**
   * <p>The criteria used to sort the results of a list repositories operation.</p>
   */
  sortBy?: SortByEnum | string;
}

export namespace ListRepositoriesInput {
  export const filterSensitiveLog = (obj: ListRepositoriesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRepositoriesInput =>
    __isa(o, "ListRepositoriesInput");
}

/**
 * <p>Represents the output of a list repositories operation.</p>
 */
export interface ListRepositoriesOutput {
  __type?: "ListRepositoriesOutput";
  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;

  /**
   * <p>Lists the repositories called by the list repositories operation.</p>
   */
  repositories?: RepositoryNameIdPair[];
}

export namespace ListRepositoriesOutput {
  export const filterSensitiveLog = (obj: ListRepositoriesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRepositoriesOutput =>
    __isa(o, "ListRepositoriesOutput");
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
   *             about tags, if any.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceInput =>
    __isa(o, "ListTagsForResourceInput");
}

export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceOutput =>
    __isa(o, "ListTagsForResourceOutput");
}

/**
 * <p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>
 */
export interface Location {
  __type?: "Location";
  /**
   * <p>The name of the file being compared, including its extension and subdirectory, if any.</p>
   */
  filePath?: string;

  /**
   * <p>The position of a change in a compared file, in line number format.</p>
   */
  filePosition?: number;

  /**
   * <p>In a comparison of commits or a pull request, whether the change is in the before or
   *             after of that comparison.</p>
   */
  relativeFileVersion?: RelativeFileVersionEnum | string;
}

export namespace Location {
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj
  });
  export const isa = (o: any): o is Location => __isa(o, "Location");
}

/**
 * <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 */
export interface ManualMergeRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ManualMergeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ManualMergeRequiredException {
  export const filterSensitiveLog = (
    obj: ManualMergeRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManualMergeRequiredException =>
    __isa(o, "ManualMergeRequiredException");
}

/**
 * <p>The number of branches for the trigger was exceeded.</p>
 */
export interface MaximumBranchesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumBranchesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumBranchesExceededException {
  export const filterSensitiveLog = (
    obj: MaximumBranchesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumBranchesExceededException =>
    __isa(o, "MaximumBranchesExceededException");
}

/**
 * <p>The number of allowed conflict resolution entries was exceeded.</p>
 */
export interface MaximumConflictResolutionEntriesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumConflictResolutionEntriesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumConflictResolutionEntriesExceededException {
  export const filterSensitiveLog = (
    obj: MaximumConflictResolutionEntriesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is MaximumConflictResolutionEntriesExceededException =>
    __isa(o, "MaximumConflictResolutionEntriesExceededException");
}

/**
 * <p>The number of files to load exceeds the allowed limit.</p>
 */
export interface MaximumFileContentToLoadExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumFileContentToLoadExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumFileContentToLoadExceededException {
  export const filterSensitiveLog = (
    obj: MaximumFileContentToLoadExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumFileContentToLoadExceededException =>
    __isa(o, "MaximumFileContentToLoadExceededException");
}

/**
 * <p>The number of specified files to change as part of this commit exceeds the maximum number of files
 *         that can be changed in a single commit. Consider using a Git client for these changes.</p>
 */
export interface MaximumFileEntriesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumFileEntriesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumFileEntriesExceededException {
  export const filterSensitiveLog = (
    obj: MaximumFileEntriesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumFileEntriesExceededException =>
    __isa(o, "MaximumFileEntriesExceededException");
}

/**
 * <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 */
export interface MaximumItemsToCompareExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumItemsToCompareExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumItemsToCompareExceededException {
  export const filterSensitiveLog = (
    obj: MaximumItemsToCompareExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumItemsToCompareExceededException =>
    __isa(o, "MaximumItemsToCompareExceededException");
}

/**
 * <p>The number of approvals required for the approval rule exceeds the maximum number allowed.</p>
 */
export interface MaximumNumberOfApprovalsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumNumberOfApprovalsExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumNumberOfApprovalsExceededException {
  export const filterSensitiveLog = (
    obj: MaximumNumberOfApprovalsExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumNumberOfApprovalsExceededException =>
    __isa(o, "MaximumNumberOfApprovalsExceededException");
}

/**
 * <p>You cannot create the pull request because the repository has too many open pull requests.
 *             The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
 */
export interface MaximumOpenPullRequestsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumOpenPullRequestsExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumOpenPullRequestsExceededException {
  export const filterSensitiveLog = (
    obj: MaximumOpenPullRequestsExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumOpenPullRequestsExceededException =>
    __isa(o, "MaximumOpenPullRequestsExceededException");
}

/**
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 */
export interface MaximumRepositoryNamesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumRepositoryNamesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumRepositoryNamesExceededException {
  export const filterSensitiveLog = (
    obj: MaximumRepositoryNamesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaximumRepositoryNamesExceededException =>
    __isa(o, "MaximumRepositoryNamesExceededException");
}

/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 */
export interface MaximumRepositoryTriggersExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumRepositoryTriggersExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumRepositoryTriggersExceededException {
  export const filterSensitiveLog = (
    obj: MaximumRepositoryTriggersExceededException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is MaximumRepositoryTriggersExceededException =>
    __isa(o, "MaximumRepositoryTriggersExceededException");
}

/**
 * <p>The maximum number of approval rule templates for a repository has been exceeded. You cannot associate more than 25
 *         approval rule templates with a repository.</p>
 */
export interface MaximumRuleTemplatesAssociatedWithRepositoryException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumRuleTemplatesAssociatedWithRepositoryException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumRuleTemplatesAssociatedWithRepositoryException {
  export const filterSensitiveLog = (
    obj: MaximumRuleTemplatesAssociatedWithRepositoryException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is MaximumRuleTemplatesAssociatedWithRepositoryException =>
    __isa(o, "MaximumRuleTemplatesAssociatedWithRepositoryException");
}

export interface MergeBranchesByFastForwardInput {
  __type?: "MergeBranchesByFastForwardInput";
  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied.</p>
   */
  targetBranch?: string;
}

export namespace MergeBranchesByFastForwardInput {
  export const filterSensitiveLog = (
    obj: MergeBranchesByFastForwardInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesByFastForwardInput =>
    __isa(o, "MergeBranchesByFastForwardInput");
}

export interface MergeBranchesByFastForwardOutput {
  __type?: "MergeBranchesByFastForwardOutput";
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesByFastForwardOutput {
  export const filterSensitiveLog = (
    obj: MergeBranchesByFastForwardOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesByFastForwardOutput =>
    __isa(o, "MergeBranchesByFastForwardOutput");
}

export interface MergeBranchesBySquashInput {
  __type?: "MergeBranchesBySquashInput";
  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The commit message for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;
}

export namespace MergeBranchesBySquashInput {
  export const filterSensitiveLog = (obj: MergeBranchesBySquashInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesBySquashInput =>
    __isa(o, "MergeBranchesBySquashInput");
}

export interface MergeBranchesBySquashOutput {
  __type?: "MergeBranchesBySquashOutput";
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesBySquashOutput {
  export const filterSensitiveLog = (
    obj: MergeBranchesBySquashOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesBySquashOutput =>
    __isa(o, "MergeBranchesBySquashOutput");
}

export interface MergeBranchesByThreeWayInput {
  __type?: "MergeBranchesByThreeWayInput";
  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;
}

export namespace MergeBranchesByThreeWayInput {
  export const filterSensitiveLog = (
    obj: MergeBranchesByThreeWayInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesByThreeWayInput =>
    __isa(o, "MergeBranchesByThreeWayInput");
}

export interface MergeBranchesByThreeWayOutput {
  __type?: "MergeBranchesByThreeWayOutput";
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesByThreeWayOutput {
  export const filterSensitiveLog = (
    obj: MergeBranchesByThreeWayOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeBranchesByThreeWayOutput =>
    __isa(o, "MergeBranchesByThreeWayOutput");
}

/**
 * <p>Information about merge hunks in a merge or pull request operation.</p>
 */
export interface MergeHunk {
  __type?: "MergeHunk";
  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   */
  base?: MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   */
  destination?: MergeHunkDetail;

  /**
   * <p>A Boolean value indicating whether a combination of hunks contains a conflict.
   *             Conflicts occur when the same file or the same lines in a file were modified in both the
   *             source and destination of a merge or pull request. Valid values include true, false, and
   *             null. True when the hunk represents a conflict and one or more files contains a line
   *             conflict. File mode conflicts in a merge do not set this to true.</p>
   */
  isConflict?: boolean;

  /**
   * <p>Information about the merge hunk in the source of a merge or pull request.</p>
   */
  source?: MergeHunkDetail;
}

export namespace MergeHunk {
  export const filterSensitiveLog = (obj: MergeHunk): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeHunk => __isa(o, "MergeHunk");
}

/**
 * <p>Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.</p>
 */
export interface MergeHunkDetail {
  __type?: "MergeHunkDetail";
  /**
   * <p>The end position of the hunk in the merge result.</p>
   */
  endLine?: number;

  /**
   * <p>The base-64 encoded content of the hunk merged region that might contain a
   *             conflict.</p>
   */
  hunkContent?: string;

  /**
   * <p>The start position of the hunk in the merge result.</p>
   */
  startLine?: number;
}

export namespace MergeHunkDetail {
  export const filterSensitiveLog = (obj: MergeHunkDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeHunkDetail =>
    __isa(o, "MergeHunkDetail");
}

/**
 * <p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>
 */
export interface MergeMetadata {
  __type?: "MergeMetadata";
  /**
   * <p>A Boolean value indicating whether the merge has been made.</p>
   */
  isMerged?: boolean;

  /**
   * <p>The commit ID for the merge commit, if any.</p>
   */
  mergeCommitId?: string;

  /**
   * <p>The merge strategy used in the merge.</p>
   */
  mergeOption?: MergeOptionTypeEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>
   */
  mergedBy?: string;
}

export namespace MergeMetadata {
  export const filterSensitiveLog = (obj: MergeMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeMetadata => __isa(o, "MergeMetadata");
}

/**
 * <p>Information about the file operation conflicts in a merge operation.</p>
 */
export interface MergeOperations {
  __type?: "MergeOperations";
  /**
   * <p>The operation on a file in the destination of a merge or pull request.</p>
   */
  destination?: ChangeTypeEnum | string;

  /**
   * <p>The operation (add, modify, or delete) on a file in the source of a merge or pull
   *             request.</p>
   */
  source?: ChangeTypeEnum | string;
}

export namespace MergeOperations {
  export const filterSensitiveLog = (obj: MergeOperations): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeOperations =>
    __isa(o, "MergeOperations");
}

/**
 * <p>A merge option or stategy is required, and none was provided.</p>
 */
export interface MergeOptionRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "MergeOptionRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MergeOptionRequiredException {
  export const filterSensitiveLog = (
    obj: MergeOptionRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergeOptionRequiredException =>
    __isa(o, "MergeOptionRequiredException");
}

export enum MergeOptionTypeEnum {
  FAST_FORWARD_MERGE = "FAST_FORWARD_MERGE",
  SQUASH_MERGE = "SQUASH_MERGE",
  THREE_WAY_MERGE = "THREE_WAY_MERGE"
}

export interface MergePullRequestByFastForwardInput {
  __type?: "MergePullRequestByFastForwardInput";
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;
}

export namespace MergePullRequestByFastForwardInput {
  export const filterSensitiveLog = (
    obj: MergePullRequestByFastForwardInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestByFastForwardInput =>
    __isa(o, "MergePullRequestByFastForwardInput");
}

export interface MergePullRequestByFastForwardOutput {
  __type?: "MergePullRequestByFastForwardOutput";
  /**
   * <p>Information about the specified pull request, including the merge.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestByFastForwardOutput {
  export const filterSensitiveLog = (
    obj: MergePullRequestByFastForwardOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestByFastForwardOutput =>
    __isa(o, "MergePullRequestByFastForwardOutput");
}

export interface MergePullRequestBySquashInput {
  __type?: "MergePullRequestBySquashInput";
  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;
}

export namespace MergePullRequestBySquashInput {
  export const filterSensitiveLog = (
    obj: MergePullRequestBySquashInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestBySquashInput =>
    __isa(o, "MergePullRequestBySquashInput");
}

export interface MergePullRequestBySquashOutput {
  __type?: "MergePullRequestBySquashOutput";
  /**
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestBySquashOutput {
  export const filterSensitiveLog = (
    obj: MergePullRequestBySquashOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestBySquashOutput =>
    __isa(o, "MergePullRequestBySquashOutput");
}

export interface MergePullRequestByThreeWayInput {
  __type?: "MergePullRequestByThreeWayInput";
  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;
}

export namespace MergePullRequestByThreeWayInput {
  export const filterSensitiveLog = (
    obj: MergePullRequestByThreeWayInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestByThreeWayInput =>
    __isa(o, "MergePullRequestByThreeWayInput");
}

export interface MergePullRequestByThreeWayOutput {
  __type?: "MergePullRequestByThreeWayOutput";
  /**
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestByThreeWayOutput {
  export const filterSensitiveLog = (
    obj: MergePullRequestByThreeWayOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MergePullRequestByThreeWayOutput =>
    __isa(o, "MergePullRequestByThreeWayOutput");
}

/**
 * <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 */
export interface MultipleConflictResolutionEntriesException
  extends __SmithyException,
    $MetadataBearer {
  name: "MultipleConflictResolutionEntriesException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MultipleConflictResolutionEntriesException {
  export const filterSensitiveLog = (
    obj: MultipleConflictResolutionEntriesException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is MultipleConflictResolutionEntriesException =>
    __isa(o, "MultipleConflictResolutionEntriesException");
}

/**
 * <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
 */
export interface MultipleRepositoriesInPullRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "MultipleRepositoriesInPullRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MultipleRepositoriesInPullRequestException {
  export const filterSensitiveLog = (
    obj: MultipleRepositoriesInPullRequestException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is MultipleRepositoriesInPullRequestException =>
    __isa(o, "MultipleRepositoriesInPullRequestException");
}

/**
 * <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 */
export interface NameLengthExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "NameLengthExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NameLengthExceededException {
  export const filterSensitiveLog = (
    obj: NameLengthExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NameLengthExceededException =>
    __isa(o, "NameLengthExceededException");
}

/**
 * <p>The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.</p>
 */
export interface NoChangeException extends __SmithyException, $MetadataBearer {
  name: "NoChangeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NoChangeException {
  export const filterSensitiveLog = (obj: NoChangeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoChangeException =>
    __isa(o, "NoChangeException");
}

/**
 * <p>The approval rule cannot be added. The pull request has the maximum number of approval rules associated with it.</p>
 */
export interface NumberOfRulesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "NumberOfRulesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NumberOfRulesExceededException {
  export const filterSensitiveLog = (
    obj: NumberOfRulesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NumberOfRulesExceededException =>
    __isa(o, "NumberOfRulesExceededException");
}

/**
 * <p>The maximum number of approval rule templates has been exceeded for this AWS Region. </p>
 */
export interface NumberOfRuleTemplatesExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "NumberOfRuleTemplatesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NumberOfRuleTemplatesExceededException {
  export const filterSensitiveLog = (
    obj: NumberOfRuleTemplatesExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NumberOfRuleTemplatesExceededException =>
    __isa(o, "NumberOfRuleTemplatesExceededException");
}

export enum ObjectTypeEnum {
  DIRECTORY = "DIRECTORY",
  FILE = "FILE",
  GIT_LINK = "GIT_LINK",
  SYMBOLIC_LINK = "SYMBOLIC_LINK"
}

/**
 * <p>Information about the type of an object in a merge operation.</p>
 */
export interface ObjectTypes {
  __type?: "ObjectTypes";
  /**
   * <p>The type of the object in the base commit of the merge.</p>
   */
  base?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the destination branch.</p>
   */
  destination?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the source branch.</p>
   */
  source?: ObjectTypeEnum | string;
}

export namespace ObjectTypes {
  export const filterSensitiveLog = (obj: ObjectTypes): any => ({
    ...obj
  });
  export const isa = (o: any): o is ObjectTypes => __isa(o, "ObjectTypes");
}

export enum OrderEnum {
  ASCENDING = "ascending",
  DESCENDING = "descending"
}

/**
 * <p>Returns information about the template that created the approval rule for a pull request.</p>
 */
export interface OriginApprovalRuleTemplate {
  __type?: "OriginApprovalRuleTemplate";
  /**
   * <p>The ID of the template that created the approval rule.</p>
   */
  approvalRuleTemplateId?: string;

  /**
   * <p>The name of the template that created the approval rule.</p>
   */
  approvalRuleTemplateName?: string;
}

export namespace OriginApprovalRuleTemplate {
  export const filterSensitiveLog = (obj: OriginApprovalRuleTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is OriginApprovalRuleTemplate =>
    __isa(o, "OriginApprovalRuleTemplate");
}

/**
 * <p>The pull request has already had its approval rules set to override.</p>
 */
export interface OverrideAlreadySetException
  extends __SmithyException,
    $MetadataBearer {
  name: "OverrideAlreadySetException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace OverrideAlreadySetException {
  export const filterSensitiveLog = (
    obj: OverrideAlreadySetException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OverrideAlreadySetException =>
    __isa(o, "OverrideAlreadySetException");
}

export interface OverridePullRequestApprovalRulesInput {
  __type?: "OverridePullRequestApprovalRulesInput";
  /**
   * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
   *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
   */
  overrideStatus: OverrideStatus | string | undefined;

  /**
   * <p>The system-generated ID of the pull request for which you want to override all
   *             approval rule requirements. To get this information, use
   *             <a>GetPullRequest</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
   *             To get the revision ID, use GetPullRequest.</p>
   */
  revisionId: string | undefined;
}

export namespace OverridePullRequestApprovalRulesInput {
  export const filterSensitiveLog = (
    obj: OverridePullRequestApprovalRulesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OverridePullRequestApprovalRulesInput =>
    __isa(o, "OverridePullRequestApprovalRulesInput");
}

export enum OverrideStatus {
  OVERRIDE = "OVERRIDE",
  REVOKE = "REVOKE"
}

/**
 * <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
 */
export interface OverrideStatusRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "OverrideStatusRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace OverrideStatusRequiredException {
  export const filterSensitiveLog = (
    obj: OverrideStatusRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OverrideStatusRequiredException =>
    __isa(o, "OverrideStatusRequiredException");
}

/**
 * <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
 */
export interface ParentCommitDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ParentCommitDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitDoesNotExistException {
  export const filterSensitiveLog = (
    obj: ParentCommitDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParentCommitDoesNotExistException =>
    __isa(o, "ParentCommitDoesNotExistException");
}

/**
 * <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head
 *         of the branch, use <a>GetBranch</a>.</p>
 */
export interface ParentCommitIdOutdatedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ParentCommitIdOutdatedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitIdOutdatedException {
  export const filterSensitiveLog = (
    obj: ParentCommitIdOutdatedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParentCommitIdOutdatedException =>
    __isa(o, "ParentCommitIdOutdatedException");
}

/**
 * <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command
 *         (for example, git pull or git log).</p>
 */
export interface ParentCommitIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ParentCommitIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitIdRequiredException {
  export const filterSensitiveLog = (
    obj: ParentCommitIdRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParentCommitIdRequiredException =>
    __isa(o, "ParentCommitIdRequiredException");
}

/**
 * <p>The specified path does not exist.</p>
 */
export interface PathDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "PathDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PathDoesNotExistException {
  export const filterSensitiveLog = (obj: PathDoesNotExistException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PathDoesNotExistException =>
    __isa(o, "PathDoesNotExistException");
}

/**
 * <p>The folderPath for a location cannot be null.</p>
 */
export interface PathRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "PathRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PathRequiredException {
  export const filterSensitiveLog = (obj: PathRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PathRequiredException =>
    __isa(o, "PathRequiredException");
}

export interface PostCommentForComparedCommitInput {
  __type?: "PostCommentForComparedCommitInput";
  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit. Required for commenting on any commit unless that commit is the initial
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The content of the comment you want to make.</p>
   */
  content: string | undefined;

  /**
   * <p>The location of the comparison where you want to comment.</p>
   */
  location?: Location;

  /**
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   */
  repositoryName: string | undefined;
}

export namespace PostCommentForComparedCommitInput {
  export const filterSensitiveLog = (
    obj: PostCommentForComparedCommitInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentForComparedCommitInput =>
    __isa(o, "PostCommentForComparedCommitInput");
}

export interface PostCommentForComparedCommitOutput {
  __type?: "PostCommentForComparedCommitOutput";
  /**
   * <p>In the directionality you established, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * <p>In the directionality you established, the full commit ID of the after commit.</p>
   */
  afterCommitId?: string;

  /**
   * <p>In the directionality you established, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>In the directionality you established, the full commit ID of the before commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;

  /**
   * <p>The location of the comment in the comparison between the two commits.</p>
   */
  location?: Location;

  /**
   * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
   */
  repositoryName?: string;
}

export namespace PostCommentForComparedCommitOutput {
  export const filterSensitiveLog = (
    obj: PostCommentForComparedCommitOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentForComparedCommitOutput =>
    __isa(o, "PostCommentForComparedCommitOutput");
}

export interface PostCommentForPullRequestInput {
  __type?: "PostCommentForPullRequestInput";
  /**
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The content of your comment on the change.</p>
   */
  content: string | undefined;

  /**
   * <p>The location of the change where you want to post your comment. If no location is
   *             provided, the comment is posted as a general comment on the pull request difference
   *             between the before commit ID and the after commit ID.</p>
   */
  location?: Location;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   */
  repositoryName: string | undefined;
}

export namespace PostCommentForPullRequestInput {
  export const filterSensitiveLog = (
    obj: PostCommentForPullRequestInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentForPullRequestInput =>
    __isa(o, "PostCommentForPullRequestInput");
}

export interface PostCommentForPullRequestOutput {
  __type?: "PostCommentForPullRequestOutput";
  /**
   * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch where the pull request is
   *             merged.</p>
   */
  afterCommitId?: string;

  /**
   * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch used to create the pull request,
   *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;

  /**
   * <p>The location of the change where you posted your comment.</p>
   */
  location?: Location;

  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   */
  repositoryName?: string;
}

export namespace PostCommentForPullRequestOutput {
  export const filterSensitiveLog = (
    obj: PostCommentForPullRequestOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentForPullRequestOutput =>
    __isa(o, "PostCommentForPullRequestOutput");
}

export interface PostCommentReplyInput {
  __type?: "PostCommentReplyInput";
  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The contents of your reply to a comment.</p>
   */
  content: string | undefined;

  /**
   * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *         or <a>GetCommentsForPullRequest</a>.</p>
   */
  inReplyTo: string | undefined;
}

export namespace PostCommentReplyInput {
  export const filterSensitiveLog = (obj: PostCommentReplyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentReplyInput =>
    __isa(o, "PostCommentReplyInput");
}

export interface PostCommentReplyOutput {
  __type?: "PostCommentReplyOutput";
  /**
   * <p>Information about the reply to a comment.</p>
   */
  comment?: Comment;
}

export namespace PostCommentReplyOutput {
  export const filterSensitiveLog = (obj: PostCommentReplyOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostCommentReplyOutput =>
    __isa(o, "PostCommentReplyOutput");
}

/**
 * <p>Returns information about a pull request.</p>
 */
export interface PullRequest {
  __type?: "PullRequest";
  /**
   * <p>The approval rules applied to the pull request.</p>
   */
  approvalRules?: ApprovalRule[];

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>
   */
  authorArn?: string;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The date and time the pull request was originally created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>
   */
  description?: string;

  /**
   * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
   */
  lastActivityDate?: Date;

  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
   */
  pullRequestTargets?: PullRequestTarget[];

  /**
   * <p>The system-generated revision ID for the pull request.</p>
   */
  revisionId?: string;

  /**
   * <p>The user-defined title of the pull request. This title is displayed in the list of
   *             pull requests to other repository users.</p>
   */
  title?: string;
}

export namespace PullRequest {
  export const filterSensitiveLog = (obj: PullRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequest => __isa(o, "PullRequest");
}

/**
 * <p>The pull request status cannot be updated because it is already closed.</p>
 */
export interface PullRequestAlreadyClosedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestAlreadyClosedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestAlreadyClosedException {
  export const filterSensitiveLog = (
    obj: PullRequestAlreadyClosedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestAlreadyClosedException =>
    __isa(o, "PullRequestAlreadyClosedException");
}

/**
 * <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 */
export interface PullRequestApprovalRulesNotSatisfiedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestApprovalRulesNotSatisfiedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestApprovalRulesNotSatisfiedException {
  export const filterSensitiveLog = (
    obj: PullRequestApprovalRulesNotSatisfiedException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PullRequestApprovalRulesNotSatisfiedException =>
    __isa(o, "PullRequestApprovalRulesNotSatisfiedException");
}

/**
 * <p>The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull
 *         request that you created.</p>
 */
export interface PullRequestCannotBeApprovedByAuthorException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestCannotBeApprovedByAuthorException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestCannotBeApprovedByAuthorException {
  export const filterSensitiveLog = (
    obj: PullRequestCannotBeApprovedByAuthorException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PullRequestCannotBeApprovedByAuthorException =>
    __isa(o, "PullRequestCannotBeApprovedByAuthorException");
}

/**
 * <p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>
 */
export interface PullRequestCreatedEventMetadata {
  __type?: "PullRequestCreatedEventMetadata";
  /**
   * <p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The commit ID on the source branch used when the pull request was created.</p>
   */
  sourceCommitId?: string;
}

export namespace PullRequestCreatedEventMetadata {
  export const filterSensitiveLog = (
    obj: PullRequestCreatedEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestCreatedEventMetadata =>
    __isa(o, "PullRequestCreatedEventMetadata");
}

/**
 * <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 */
export interface PullRequestDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestDoesNotExistException {
  export const filterSensitiveLog = (
    obj: PullRequestDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestDoesNotExistException =>
    __isa(o, "PullRequestDoesNotExistException");
}

/**
 * <p>Returns information about a pull request event.</p>
 */
export interface PullRequestEvent {
  __type?: "PullRequestEvent";
  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>Information about a pull request event.</p>
   */
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  /**
   * <p>Information about an approval rule override event for a pull request.</p>
   */
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;

  /**
   * <p>Information about an approval state change for a pull request.</p>
   */
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   */
  eventDate?: Date;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   */
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  /**
   * <p>The type of the pull request event (for example, a status change event
   *             (PULL_REQUEST_STATUS_CHANGED) or update event
   *             (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   */
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   */
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
}

export namespace PullRequestEvent {
  export const filterSensitiveLog = (obj: PullRequestEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestEvent =>
    __isa(o, "PullRequestEvent");
}

export enum PullRequestEventType {
  PULL_REQUEST_APPROVAL_RULE_CREATED = "PULL_REQUEST_APPROVAL_RULE_CREATED",
  PULL_REQUEST_APPROVAL_RULE_DELETED = "PULL_REQUEST_APPROVAL_RULE_DELETED",
  PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN",
  PULL_REQUEST_APPROVAL_RULE_UPDATED = "PULL_REQUEST_APPROVAL_RULE_UPDATED",
  PULL_REQUEST_APPROVAL_STATE_CHANGED = "PULL_REQUEST_APPROVAL_STATE_CHANGED",
  PULL_REQUEST_CREATED = "PULL_REQUEST_CREATED",
  PULL_REQUEST_MERGE_STATE_CHANGED = "PULL_REQUEST_MERGE_STATE_CHANGED",
  PULL_REQUEST_SOURCE_REFERENCE_UPDATED = "PULL_REQUEST_SOURCE_REFERENCE_UPDATED",
  PULL_REQUEST_STATUS_CHANGED = "PULL_REQUEST_STATUS_CHANGED"
}

/**
 * <p>A pull request ID is required, but none was provided.</p>
 */
export interface PullRequestIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestIdRequiredException {
  export const filterSensitiveLog = (
    obj: PullRequestIdRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestIdRequiredException =>
    __isa(o, "PullRequestIdRequiredException");
}

/**
 * <p>Returns information about the change in the merge state for a pull request event. </p>
 */
export interface PullRequestMergedStateChangedEventMetadata {
  __type?: "PullRequestMergedStateChangedEventMetadata";
  /**
   * <p>The name of the branch that the pull request is merged into.</p>
   */
  destinationReference?: string;

  /**
   * <p>Information about the merge state change event.</p>
   */
  mergeMetadata?: MergeMetadata;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;
}

export namespace PullRequestMergedStateChangedEventMetadata {
  export const filterSensitiveLog = (
    obj: PullRequestMergedStateChangedEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PullRequestMergedStateChangedEventMetadata =>
    __isa(o, "PullRequestMergedStateChangedEventMetadata");
}

/**
 * <p>Information about an update to the source branch of a pull request.</p>
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  __type?: "PullRequestSourceReferenceUpdatedEventMetadata";
  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;

  /**
   * <p>The name of the repository where the pull request was updated.</p>
   */
  repositoryName?: string;
}

export namespace PullRequestSourceReferenceUpdatedEventMetadata {
  export const filterSensitiveLog = (
    obj: PullRequestSourceReferenceUpdatedEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PullRequestSourceReferenceUpdatedEventMetadata =>
    __isa(o, "PullRequestSourceReferenceUpdatedEventMetadata");
}

/**
 * <p>Information about a change to the status of a pull request.</p>
 */
export interface PullRequestStatusChangedEventMetadata {
  __type?: "PullRequestStatusChangedEventMetadata";
  /**
   * <p>The changed status of the pull request.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;
}

export namespace PullRequestStatusChangedEventMetadata {
  export const filterSensitiveLog = (
    obj: PullRequestStatusChangedEventMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestStatusChangedEventMetadata =>
    __isa(o, "PullRequestStatusChangedEventMetadata");
}

export enum PullRequestStatusEnum {
  CLOSED = "CLOSED",
  OPEN = "OPEN"
}

/**
 * <p>A pull request status is required, but none was provided.</p>
 */
export interface PullRequestStatusRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "PullRequestStatusRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestStatusRequiredException {
  export const filterSensitiveLog = (
    obj: PullRequestStatusRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestStatusRequiredException =>
    __isa(o, "PullRequestStatusRequiredException");
}

/**
 * <p>Returns information about a pull request target.</p>
 */
export interface PullRequestTarget {
  __type?: "PullRequestTarget";
  /**
   * <p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>
   */
  destinationCommit?: string;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch. </p>
   */
  destinationReference?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;

  /**
   * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
   */
  mergeMetadata?: MergeMetadata;

  /**
   * <p>The name of the repository that contains the pull request source and destination branches.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the tip of the source branch used to create the pull request. If
   *             the pull request branch is updated by a push while the pull request is open, the commit
   *             ID changes to reflect the new tip of the branch.</p>
   */
  sourceCommit?: string;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference?: string;
}

export namespace PullRequestTarget {
  export const filterSensitiveLog = (obj: PullRequestTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is PullRequestTarget =>
    __isa(o, "PullRequestTarget");
}

/**
 * <p>Information about a file added or updated as part of a commit.</p>
 */
export interface PutFileEntry {
  __type?: "PutFileEntry";
  /**
   * <p>The content of the file, if a source file is not specified.</p>
   */
  fileContent?: Uint8Array;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The full path to the file in the repository, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit,
   *         if you are not providing the file content directly.</p>
   */
  sourceFile?: SourceFileSpecifier;
}

export namespace PutFileEntry {
  export const filterSensitiveLog = (obj: PutFileEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutFileEntry => __isa(o, "PutFileEntry");
}

/**
 * <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
 */
export interface PutFileEntryConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "PutFileEntryConflictException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PutFileEntryConflictException {
  export const filterSensitiveLog = (
    obj: PutFileEntryConflictException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutFileEntryConflictException =>
    __isa(o, "PutFileEntryConflictException");
}

export interface PutFileInput {
  __type?: "PutFileInput";
  /**
   * <p>The name of the branch where you want to add or update the file. If this is an empty
   *             repository, this branch is created.</p>
   */
  branchName: string | undefined;

  /**
   * <p>A message about why this file was added or updated. Although it is optional, a message
   *             makes the commit history for your repository more useful.</p>
   */
  commitMessage?: string;

  /**
   * <p>An email address for the person adding or updating the file.</p>
   */
  email?: string;

  /**
   * <p>The content of the file, in binary object format. </p>
   */
  fileContent: Uint8Array | undefined;

  /**
   * <p>The file mode permissions of the blob. Valid file mode permissions are listed
   *             here.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
   *         <note>
   *             <p>If the path does not currently exist in the repository, the path is created as part of adding
   *                 the file.</p>
   *          </note>
   */
  filePath: string | undefined;

  /**
   * <p>The name of the person adding or updating the file. Although it is optional, a name
   *             makes the commit history for your repository more useful.</p>
   */
  name?: string;

  /**
   * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
   *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
   *         <p>The commit ID must match the ID of the head commit at the time of the operation.
   *             Otherwise, an error occurs, and the file is not added or updated.</p>
   */
  parentCommitId?: string;

  /**
   * <p>The name of the repository where you want to add or update the file.</p>
   */
  repositoryName: string | undefined;
}

export namespace PutFileInput {
  export const filterSensitiveLog = (obj: PutFileInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutFileInput => __isa(o, "PutFileInput");
}

export interface PutFileOutput {
  __type?: "PutFileOutput";
  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA ID of the commit that contains this file change.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   */
  treeId: string | undefined;
}

export namespace PutFileOutput {
  export const filterSensitiveLog = (obj: PutFileOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutFileOutput => __isa(o, "PutFileOutput");
}

/**
 * <p>Represents the input of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersInput {
  __type?: "PutRepositoryTriggersInput";
  /**
   * <p>The name of the repository where you want to create or update the trigger.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

export namespace PutRepositoryTriggersInput {
  export const filterSensitiveLog = (obj: PutRepositoryTriggersInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRepositoryTriggersInput =>
    __isa(o, "PutRepositoryTriggersInput");
}

/**
 * <p>Represents the output of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersOutput {
  __type?: "PutRepositoryTriggersOutput";
  /**
   * <p>The system-generated unique ID for the create or update operation.</p>
   */
  configurationId?: string;
}

export namespace PutRepositoryTriggersOutput {
  export const filterSensitiveLog = (
    obj: PutRepositoryTriggersOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRepositoryTriggersOutput =>
    __isa(o, "PutRepositoryTriggersOutput");
}

/**
 * <p>The specified reference does not exist. You must provide a full commit ID.</p>
 */
export interface ReferenceDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReferenceDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceDoesNotExistException {
  export const filterSensitiveLog = (
    obj: ReferenceDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceDoesNotExistException =>
    __isa(o, "ReferenceDoesNotExistException");
}

/**
 * <p>A reference name is required, but none was provided.</p>
 */
export interface ReferenceNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReferenceNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceNameRequiredException {
  export const filterSensitiveLog = (
    obj: ReferenceNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceNameRequiredException =>
    __isa(o, "ReferenceNameRequiredException");
}

/**
 * <p>The specified reference is not a supported type. </p>
 */
export interface ReferenceTypeNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReferenceTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceTypeNotSupportedException {
  export const filterSensitiveLog = (
    obj: ReferenceTypeNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceTypeNotSupportedException =>
    __isa(o, "ReferenceTypeNotSupportedException");
}

export enum RelativeFileVersionEnum {
  AFTER = "AFTER",
  BEFORE = "BEFORE"
}

/**
 * <p>Information about a replacement content entry in the conflict of a merge or pull request operation.</p>
 */
export interface ReplaceContentEntry {
  __type?: "ReplaceContentEntry";
  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   */
  content?: Uint8Array;

  /**
   * <p>The file mode to apply during conflict resoltion.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The path of the conflicting file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The replacement type to use when determining how to resolve the conflict.</p>
   */
  replacementType: ReplacementTypeEnum | string | undefined;
}

export namespace ReplaceContentEntry {
  export const filterSensitiveLog = (obj: ReplaceContentEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplaceContentEntry =>
    __isa(o, "ReplaceContentEntry");
}

/**
 * <p>USE_NEW_CONTENT was specified, but no replacement content has been provided.</p>
 */
export interface ReplacementContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplacementContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReplacementContentRequiredException {
  export const filterSensitiveLog = (
    obj: ReplacementContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplacementContentRequiredException =>
    __isa(o, "ReplacementContentRequiredException");
}

export enum ReplacementTypeEnum {
  KEEP_BASE = "KEEP_BASE",
  KEEP_DESTINATION = "KEEP_DESTINATION",
  KEEP_SOURCE = "KEEP_SOURCE",
  USE_NEW_CONTENT = "USE_NEW_CONTENT"
}

/**
 * <p>A replacement type is required.</p>
 */
export interface ReplacementTypeRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplacementTypeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReplacementTypeRequiredException {
  export const filterSensitiveLog = (
    obj: ReplacementTypeRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplacementTypeRequiredException =>
    __isa(o, "ReplacementTypeRequiredException");
}

/**
 * <p>The specified repository does not exist.</p>
 */
export interface RepositoryDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryDoesNotExistException {
  export const filterSensitiveLog = (
    obj: RepositoryDoesNotExistException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryDoesNotExistException =>
    __isa(o, "RepositoryDoesNotExistException");
}

/**
 * <p>A repository resource limit was exceeded.</p>
 */
export interface RepositoryLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryLimitExceededException {
  export const filterSensitiveLog = (
    obj: RepositoryLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryLimitExceededException =>
    __isa(o, "RepositoryLimitExceededException");
}

/**
 * <p>Information about a repository.</p>
 */
export interface RepositoryMetadata {
  __type?: "RepositoryMetadata";
  /**
   * <p>The Amazon Resource Name (ARN) of the repository.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the AWS account associated with the repository.</p>
   */
  accountId?: string;

  /**
   * <p>The URL to use for cloning the repository over HTTPS.</p>
   */
  cloneUrlHttp?: string;

  /**
   * <p>The URL to use for cloning the repository over SSH.</p>
   */
  cloneUrlSsh?: string;

  /**
   * <p>The date and time the repository was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The repository's default branch name.</p>
   */
  defaultBranch?: string;

  /**
   * <p>The date and time the repository was last modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>A comment or description about the repository.</p>
   */
  repositoryDescription?: string;

  /**
   * <p>The ID of the repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The repository's name.</p>
   */
  repositoryName?: string;
}

export namespace RepositoryMetadata {
  export const filterSensitiveLog = (obj: RepositoryMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryMetadata =>
    __isa(o, "RepositoryMetadata");
}

/**
 * <p>The specified repository name already exists.</p>
 */
export interface RepositoryNameExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNameExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNameExistsException {
  export const filterSensitiveLog = (
    obj: RepositoryNameExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNameExistsException =>
    __isa(o, "RepositoryNameExistsException");
}

/**
 * <p>Information about a repository name and ID.</p>
 */
export interface RepositoryNameIdPair {
  __type?: "RepositoryNameIdPair";
  /**
   * <p>The ID associated with the repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The name associated with the repository.</p>
   */
  repositoryName?: string;
}

export namespace RepositoryNameIdPair {
  export const filterSensitiveLog = (obj: RepositoryNameIdPair): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNameIdPair =>
    __isa(o, "RepositoryNameIdPair");
}

/**
 * <p>A repository name is required, but was not specified.</p>
 */
export interface RepositoryNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNameRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNameRequiredException =>
    __isa(o, "RepositoryNameRequiredException");
}

/**
 * <p>At least one repository name object is required, but was not specified.</p>
 */
export interface RepositoryNamesRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNamesRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNamesRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryNamesRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNamesRequiredException =>
    __isa(o, "RepositoryNamesRequiredException");
}

/**
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 */
export interface RepositoryNotAssociatedWithPullRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNotAssociatedWithPullRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNotAssociatedWithPullRequestException {
  export const filterSensitiveLog = (
    obj: RepositoryNotAssociatedWithPullRequestException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RepositoryNotAssociatedWithPullRequestException =>
    __isa(o, "RepositoryNotAssociatedWithPullRequestException");
}

/**
 * <p>Information about a trigger for a repository.</p>
 */
export interface RepositoryTrigger {
  __type?: "RepositoryTrigger";
  /**
   * <p>The branches to be included in the trigger configuration. If you specify an empty
   *             array, the trigger applies to all branches.</p>
   *         <note>
   *             <p>Although no content is required in the array, you must include the array itself.</p>
   *         </note>
   */
  branches?: string[];

  /**
   * <p>Any custom data associated with the trigger to be included in the information sent to
   *             the target of the trigger.</p>
   */
  customData?: string;

  /**
   * <p>The ARN of the resource that is the target for a trigger (for example, the ARN of a
   *             topic in Amazon SNS).</p>
   */
  destinationArn: string | undefined;

  /**
   * <p>The repository events that cause the trigger to run actions in another service, such
   *             as sending a notification through Amazon SNS.
   *
   *         </p>
   *          <note>
   *             <p>The valid value "all" cannot be used with any other values.</p>
   *          </note>
   */
  events: (RepositoryTriggerEventEnum | string)[] | undefined;

  /**
   * <p>The name of the trigger.</p>
   */
  name: string | undefined;
}

export namespace RepositoryTrigger {
  export const filterSensitiveLog = (obj: RepositoryTrigger): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryTrigger =>
    __isa(o, "RepositoryTrigger");
}

/**
 * <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 */
export interface RepositoryTriggerBranchNameListRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryTriggerBranchNameListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryTriggerBranchNameListRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryTriggerBranchNameListRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RepositoryTriggerBranchNameListRequiredException =>
    __isa(o, "RepositoryTriggerBranchNameListRequiredException");
}

/**
 * <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 */
export interface RepositoryTriggerDestinationArnRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryTriggerDestinationArnRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryTriggerDestinationArnRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryTriggerDestinationArnRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RepositoryTriggerDestinationArnRequiredException =>
    __isa(o, "RepositoryTriggerDestinationArnRequiredException");
}

export enum RepositoryTriggerEventEnum {
  ALL = "all",
  CREATE_REFERENCE = "createReference",
  DELETE_REFERENCE = "deleteReference",
  UPDATE_REFERENCE = "updateReference"
}

/**
 * <p>At least one event for the trigger is required, but was not specified.</p>
 */
export interface RepositoryTriggerEventsListRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryTriggerEventsListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryTriggerEventsListRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryTriggerEventsListRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RepositoryTriggerEventsListRequiredException =>
    __isa(o, "RepositoryTriggerEventsListRequiredException");
}

/**
 * <p>A trigger failed to run.</p>
 */
export interface RepositoryTriggerExecutionFailure {
  __type?: "RepositoryTriggerExecutionFailure";
  /**
   * <p>Message information about the trigger that did not run.</p>
   */
  failureMessage?: string;

  /**
   * <p>The name of the trigger that did not run.</p>
   */
  trigger?: string;
}

export namespace RepositoryTriggerExecutionFailure {
  export const filterSensitiveLog = (
    obj: RepositoryTriggerExecutionFailure
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryTriggerExecutionFailure =>
    __isa(o, "RepositoryTriggerExecutionFailure");
}

/**
 * <p>A name for the trigger is required, but was not specified.</p>
 */
export interface RepositoryTriggerNameRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryTriggerNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryTriggerNameRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryTriggerNameRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryTriggerNameRequiredException =>
    __isa(o, "RepositoryTriggerNameRequiredException");
}

/**
 * <p>The list of triggers for the repository is required, but was not specified.</p>
 */
export interface RepositoryTriggersListRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryTriggersListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryTriggersListRequiredException {
  export const filterSensitiveLog = (
    obj: RepositoryTriggersListRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryTriggersListRequiredException =>
    __isa(o, "RepositoryTriggersListRequiredException");
}

/**
 * <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export interface ResourceArnRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceArnRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ResourceArnRequiredException {
  export const filterSensitiveLog = (
    obj: ResourceArnRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceArnRequiredException =>
    __isa(o, "ResourceArnRequiredException");
}

/**
 * <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
 */
export interface RestrictedSourceFileException
  extends __SmithyException,
    $MetadataBearer {
  name: "RestrictedSourceFileException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RestrictedSourceFileException {
  export const filterSensitiveLog = (
    obj: RestrictedSourceFileException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestrictedSourceFileException =>
    __isa(o, "RestrictedSourceFileException");
}

/**
 * <p>A revision ID is required, but was not provided.</p>
 */
export interface RevisionIdRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "RevisionIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RevisionIdRequiredException {
  export const filterSensitiveLog = (
    obj: RevisionIdRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevisionIdRequiredException =>
    __isa(o, "RevisionIdRequiredException");
}

/**
 * <p>The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.</p>
 */
export interface RevisionNotCurrentException
  extends __SmithyException,
    $MetadataBearer {
  name: "RevisionNotCurrentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RevisionNotCurrentException {
  export const filterSensitiveLog = (
    obj: RevisionNotCurrentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevisionNotCurrentException =>
    __isa(o, "RevisionNotCurrentException");
}

/**
 * <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch
 *         that you specified.</p>
 */
export interface SameFileContentException
  extends __SmithyException,
    $MetadataBearer {
  name: "SameFileContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SameFileContentException {
  export const filterSensitiveLog = (obj: SameFileContentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SameFileContentException =>
    __isa(o, "SameFileContentException");
}

/**
 * <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example,
 *         you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same
 *         file as part of the same commit.</p>
 */
export interface SamePathRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "SamePathRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SamePathRequestException {
  export const filterSensitiveLog = (obj: SamePathRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamePathRequestException =>
    __isa(o, "SamePathRequestException");
}

/**
 * <p>Information about the file mode changes.</p>
 */
export interface SetFileModeEntry {
  __type?: "SetFileModeEntry";
  /**
   * <p>The file mode for the file.</p>
   */
  fileMode: FileModeTypeEnum | string | undefined;

  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string | undefined;
}

export namespace SetFileModeEntry {
  export const filterSensitiveLog = (obj: SetFileModeEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetFileModeEntry =>
    __isa(o, "SetFileModeEntry");
}

export enum SortByEnum {
  MODIFIED_DATE = "lastModifiedDate",
  REPOSITORY_NAME = "repositoryName"
}

/**
 * <p>The source branch and destination branch for the pull request are the same. You must
 *             specify different branches for the source and destination.</p>
 */
export interface SourceAndDestinationAreSameException
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceAndDestinationAreSameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SourceAndDestinationAreSameException {
  export const filterSensitiveLog = (
    obj: SourceAndDestinationAreSameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceAndDestinationAreSameException =>
    __isa(o, "SourceAndDestinationAreSameException");
}

/**
 * <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
 */
export interface SourceFileOrContentRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceFileOrContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SourceFileOrContentRequiredException {
  export const filterSensitiveLog = (
    obj: SourceFileOrContentRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceFileOrContentRequiredException =>
    __isa(o, "SourceFileOrContentRequiredException");
}

/**
 * <p>Information about a source file that is part of changes made in a commit.</p>
 */
export interface SourceFileSpecifier {
  __type?: "SourceFileSpecifier";
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>Whether to remove the source file from the parent commit.</p>
   */
  isMove?: boolean;
}

export namespace SourceFileSpecifier {
  export const filterSensitiveLog = (obj: SourceFileSpecifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceFileSpecifier =>
    __isa(o, "SourceFileSpecifier");
}

/**
 * <p>Returns information about a submodule reference in a repository folder.</p>
 */
export interface SubModule {
  __type?: "SubModule";
  /**
   * <p>The fully qualified path to the folder that contains the reference to the submodule.</p>
   */
  absolutePath?: string;

  /**
   * <p>The commit ID that contains the reference to the submodule.</p>
   */
  commitId?: string;

  /**
   * <p>The relative path of the submodule from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace SubModule {
  export const filterSensitiveLog = (obj: SubModule): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubModule => __isa(o, "SubModule");
}

/**
 * <p>Returns information about a symbolic link in a repository folder.</p>
 */
export interface SymbolicLink {
  __type?: "SymbolicLink";
  /**
   * <p>The fully qualified path to the folder that contains the symbolic link.</p>
   */
  absolutePath?: string;

  /**
   * <p>The blob ID that contains the information about the symbolic link.</p>
   */
  blobId?: string;

  /**
   * <p>The file mode permissions of the blob that cotains information about the symbolic link.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The relative path of the symbolic link from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace SymbolicLink {
  export const filterSensitiveLog = (obj: SymbolicLink): any => ({
    ...obj
  });
  export const isa = (o: any): o is SymbolicLink => __isa(o, "SymbolicLink");
}

/**
 * <p>A list of tag keys is required. The list cannot be empty or null.</p>
 */
export interface TagKeysListRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagKeysListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TagKeysListRequiredException {
  export const filterSensitiveLog = (
    obj: TagKeysListRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagKeysListRequiredException =>
    __isa(o, "TagKeysListRequiredException");
}

/**
 * <p>The tag policy is not valid.</p>
 */
export interface TagPolicyException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TagPolicyException {
  export const filterSensitiveLog = (obj: TagPolicyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagPolicyException =>
    __isa(o, "TagPolicyException");
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value pair to use when tagging this repository.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceInput =>
    __isa(o, "TagResourceInput");
}

/**
 * <p>A map of tags is required.</p>
 */
export interface TagsMapRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagsMapRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TagsMapRequiredException {
  export const filterSensitiveLog = (obj: TagsMapRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagsMapRequiredException =>
    __isa(o, "TagsMapRequiredException");
}

/**
 * <p>Returns information about a target for a pull request.</p>
 */
export interface Target {
  __type?: "Target";
  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch.</p>
   */
  destinationReference?: string;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference: string | undefined;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj
  });
  export const isa = (o: any): o is Target => __isa(o, "Target");
}

/**
 * <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface TargetRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TargetRequiredException {
  export const filterSensitiveLog = (obj: TargetRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetRequiredException =>
    __isa(o, "TargetRequiredException");
}

/**
 * <p>An array of target objects is required. It cannot be empty or null.</p>
 */
export interface TargetsRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetsRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TargetsRequiredException {
  export const filterSensitiveLog = (obj: TargetsRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetsRequiredException =>
    __isa(o, "TargetsRequiredException");
}

/**
 * <p>Represents the input of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersInput {
  __type?: "TestRepositoryTriggersInput";
  /**
   * <p>The name of the repository in which to test the triggers.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of triggers to test.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

export namespace TestRepositoryTriggersInput {
  export const filterSensitiveLog = (
    obj: TestRepositoryTriggersInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestRepositoryTriggersInput =>
    __isa(o, "TestRepositoryTriggersInput");
}

/**
 * <p>Represents the output of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersOutput {
  __type?: "TestRepositoryTriggersOutput";
  /**
   * <p>The list of triggers that were not tested. This list provides the names of the
   *             triggers that could not be tested, separated by commas.</p>
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[];

  /**
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   */
  successfulExecutions?: string[];
}

export namespace TestRepositoryTriggersOutput {
  export const filterSensitiveLog = (
    obj: TestRepositoryTriggersOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestRepositoryTriggersOutput =>
    __isa(o, "TestRepositoryTriggersOutput");
}

/**
 * <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 */
export interface TipOfSourceReferenceIsDifferentException
  extends __SmithyException,
    $MetadataBearer {
  name: "TipOfSourceReferenceIsDifferentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TipOfSourceReferenceIsDifferentException {
  export const filterSensitiveLog = (
    obj: TipOfSourceReferenceIsDifferentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TipOfSourceReferenceIsDifferentException =>
    __isa(o, "TipOfSourceReferenceIsDifferentException");
}

/**
 * <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 */
export interface TipsDivergenceExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TipsDivergenceExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TipsDivergenceExceededException {
  export const filterSensitiveLog = (
    obj: TipsDivergenceExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TipsDivergenceExceededException =>
    __isa(o, "TipsDivergenceExceededException");
}

/**
 * <p>A pull request title is required. It cannot be empty or null.</p>
 */
export interface TitleRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "TitleRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TitleRequiredException {
  export const filterSensitiveLog = (obj: TitleRequiredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TitleRequiredException =>
    __isa(o, "TitleRequiredException");
}

/**
 * <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceInput =>
    __isa(o, "UntagResourceInput");
}

export interface UpdateApprovalRuleTemplateContentInput {
  __type?: "UpdateApprovalRuleTemplateContentInput";
  /**
   * <p>The name of the approval rule template where you want to update the content of the rule. </p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;

  /**
   * <p>The content that replaces the existing content of the rule. Content statements must be
   *             complete. You cannot provide only the changes.</p>
   */
  newRuleContent: string | undefined;
}

export namespace UpdateApprovalRuleTemplateContentInput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateContentInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApprovalRuleTemplateContentInput =>
    __isa(o, "UpdateApprovalRuleTemplateContentInput");
}

export interface UpdateApprovalRuleTemplateContentOutput {
  __type?: "UpdateApprovalRuleTemplateContentOutput";
  /**
   * <p>Returns information about an approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateContentOutput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateContentOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApprovalRuleTemplateContentOutput =>
    __isa(o, "UpdateApprovalRuleTemplateContentOutput");
}

export interface UpdateApprovalRuleTemplateDescriptionInput {
  __type?: "UpdateApprovalRuleTemplateDescriptionInput";
  /**
   * <p>The updated description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription: string | undefined;

  /**
   * <p>The name of the template for which you want to update the description.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace UpdateApprovalRuleTemplateDescriptionInput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateDescriptionInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdateApprovalRuleTemplateDescriptionInput =>
    __isa(o, "UpdateApprovalRuleTemplateDescriptionInput");
}

export interface UpdateApprovalRuleTemplateDescriptionOutput {
  __type?: "UpdateApprovalRuleTemplateDescriptionOutput";
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateDescriptionOutput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateDescriptionOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdateApprovalRuleTemplateDescriptionOutput =>
    __isa(o, "UpdateApprovalRuleTemplateDescriptionOutput");
}

export interface UpdateApprovalRuleTemplateNameInput {
  __type?: "UpdateApprovalRuleTemplateNameInput";
  /**
   * <p>The new name you want to apply to the approval rule template.</p>
   */
  newApprovalRuleTemplateName: string | undefined;

  /**
   * <p>The current name of the approval rule template.</p>
   */
  oldApprovalRuleTemplateName: string | undefined;
}

export namespace UpdateApprovalRuleTemplateNameInput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateNameInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApprovalRuleTemplateNameInput =>
    __isa(o, "UpdateApprovalRuleTemplateNameInput");
}

export interface UpdateApprovalRuleTemplateNameOutput {
  __type?: "UpdateApprovalRuleTemplateNameOutput";
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateNameOutput {
  export const filterSensitiveLog = (
    obj: UpdateApprovalRuleTemplateNameOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApprovalRuleTemplateNameOutput =>
    __isa(o, "UpdateApprovalRuleTemplateNameOutput");
}

export interface UpdateCommentInput {
  __type?: "UpdateCommentInput";
  /**
   * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;

  /**
   * <p>The updated content to replace the existing content of the comment.</p>
   */
  content: string | undefined;
}

export namespace UpdateCommentInput {
  export const filterSensitiveLog = (obj: UpdateCommentInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCommentInput =>
    __isa(o, "UpdateCommentInput");
}

export interface UpdateCommentOutput {
  __type?: "UpdateCommentOutput";
  /**
   * <p>Information about the updated comment.</p>
   */
  comment?: Comment;
}

export namespace UpdateCommentOutput {
  export const filterSensitiveLog = (obj: UpdateCommentOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCommentOutput =>
    __isa(o, "UpdateCommentOutput");
}

/**
 * <p>Represents the input of an update default branch operation.</p>
 */
export interface UpdateDefaultBranchInput {
  __type?: "UpdateDefaultBranchInput";
  /**
   * <p>The name of the branch to set as the default.</p>
   */
  defaultBranchName: string | undefined;

  /**
   * <p>The name of the repository to set or change the default branch for.</p>
   */
  repositoryName: string | undefined;
}

export namespace UpdateDefaultBranchInput {
  export const filterSensitiveLog = (obj: UpdateDefaultBranchInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDefaultBranchInput =>
    __isa(o, "UpdateDefaultBranchInput");
}

export interface UpdatePullRequestApprovalRuleContentInput {
  __type?: "UpdatePullRequestApprovalRuleContentInput";
  /**
   * <p>The name of the approval rule you want to update.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;

  /**
   * <p>The updated content for the approval rule.</p>
   *         <note>
   *             <p>When you update the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/iam/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  newRuleContent: string | undefined;

  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;
}

export namespace UpdatePullRequestApprovalRuleContentInput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestApprovalRuleContentInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestApprovalRuleContentInput =>
    __isa(o, "UpdatePullRequestApprovalRuleContentInput");
}

export interface UpdatePullRequestApprovalRuleContentOutput {
  __type?: "UpdatePullRequestApprovalRuleContentOutput";
  /**
   * <p>Information about the updated approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

export namespace UpdatePullRequestApprovalRuleContentOutput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestApprovalRuleContentOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdatePullRequestApprovalRuleContentOutput =>
    __isa(o, "UpdatePullRequestApprovalRuleContentOutput");
}

export interface UpdatePullRequestApprovalStateInput {
  __type?: "UpdatePullRequestApprovalStateInput";
  /**
   * <p>The approval state to associate with the user on the pull request.</p>
   */
  approvalState: ApprovalState | string | undefined;

  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision.</p>
   */
  revisionId: string | undefined;
}

export namespace UpdatePullRequestApprovalStateInput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestApprovalStateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestApprovalStateInput =>
    __isa(o, "UpdatePullRequestApprovalStateInput");
}

export interface UpdatePullRequestDescriptionInput {
  __type?: "UpdatePullRequestDescriptionInput";
  /**
   * <p>The updated content of the description for the pull request. This content replaces the
   *             existing description.</p>
   */
  description: string | undefined;

  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export namespace UpdatePullRequestDescriptionInput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestDescriptionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestDescriptionInput =>
    __isa(o, "UpdatePullRequestDescriptionInput");
}

export interface UpdatePullRequestDescriptionOutput {
  __type?: "UpdatePullRequestDescriptionOutput";
  /**
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestDescriptionOutput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestDescriptionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestDescriptionOutput =>
    __isa(o, "UpdatePullRequestDescriptionOutput");
}

export interface UpdatePullRequestStatusInput {
  __type?: "UpdatePullRequestStatusInput";
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The status of the pull request. The only valid operations are to update the status
   *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
   *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus: PullRequestStatusEnum | string | undefined;
}

export namespace UpdatePullRequestStatusInput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestStatusInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestStatusInput =>
    __isa(o, "UpdatePullRequestStatusInput");
}

export interface UpdatePullRequestStatusOutput {
  __type?: "UpdatePullRequestStatusOutput";
  /**
   * <p>Information about the pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestStatusOutput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestStatusOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestStatusOutput =>
    __isa(o, "UpdatePullRequestStatusOutput");
}

export interface UpdatePullRequestTitleInput {
  __type?: "UpdatePullRequestTitleInput";
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated title of the pull request. This replaces the existing title.</p>
   */
  title: string | undefined;
}

export namespace UpdatePullRequestTitleInput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestTitleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestTitleInput =>
    __isa(o, "UpdatePullRequestTitleInput");
}

export interface UpdatePullRequestTitleOutput {
  __type?: "UpdatePullRequestTitleOutput";
  /**
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestTitleOutput {
  export const filterSensitiveLog = (
    obj: UpdatePullRequestTitleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePullRequestTitleOutput =>
    __isa(o, "UpdatePullRequestTitleOutput");
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryDescriptionInput {
  __type?: "UpdateRepositoryDescriptionInput";
  /**
   * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
   */
  repositoryDescription?: string;

  /**
   * <p>The name of the repository to set or change the comment or description for.</p>
   */
  repositoryName: string | undefined;
}

export namespace UpdateRepositoryDescriptionInput {
  export const filterSensitiveLog = (
    obj: UpdateRepositoryDescriptionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRepositoryDescriptionInput =>
    __isa(o, "UpdateRepositoryDescriptionInput");
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryNameInput {
  __type?: "UpdateRepositoryNameInput";
  /**
   * <p>The new name for the repository.</p>
   */
  newName: string | undefined;

  /**
   * <p>The current name of the repository.</p>
   */
  oldName: string | undefined;
}

export namespace UpdateRepositoryNameInput {
  export const filterSensitiveLog = (obj: UpdateRepositoryNameInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRepositoryNameInput =>
    __isa(o, "UpdateRepositoryNameInput");
}

/**
 * <p>Information about the user who made a specified commit.</p>
 */
export interface UserInfo {
  __type?: "UserInfo";
  /**
   * <p>The date when the specified commit was commited, in timestamp format with GMT offset.</p>
   */
  date?: string;

  /**
   * <p>The email address associated with the user who made the commit, if any.</p>
   */
  email?: string;

  /**
   * <p>The name of the user who made the specified commit.</p>
   */
  name?: string;
}

export namespace UserInfo {
  export const filterSensitiveLog = (obj: UserInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserInfo => __isa(o, "UserInfo");
}
