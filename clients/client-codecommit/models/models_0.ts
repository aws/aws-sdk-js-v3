import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface ActorDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ActorDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ActorDoesNotExistException {
  export const filterSensitiveLog = (obj: ActorDoesNotExistException): any => ({
    ...obj,
  });
}

export enum ApprovalState {
  APPROVE = "APPROVE",
  REVOKE = "REVOKE",
}

/**
 * <p>Returns information about a specific approval on a pull request.</p>
 */
export interface Approval {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn?: string;

  /**
   * <p>The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.</p>
   */
  approvalState?: ApprovalState | string;
}

export namespace Approval {
  export const filterSensitiveLog = (obj: Approval): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the template that created the approval rule for a pull request.</p>
 */
export interface OriginApprovalRuleTemplate {
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
    ...obj,
  });
}

/**
 * <p>Returns information about an approval rule.</p>
 */
export interface ApprovalRule {
  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;

  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule.</p>
   */
  ruleContentSha256?: string;

  /**
   * <p>The date the approval rule was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date the approval rule was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.</p>
   */
  lastModifiedUser?: string;

  /**
   * <p>The approval rule template used to create the rule.</p>
   */
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
}

export namespace ApprovalRule {
  export const filterSensitiveLog = (obj: ApprovalRule): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 */
export interface ApprovalRuleContentRequiredException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleContentRequiredException {
  export const filterSensitiveLog = (obj: ApprovalRuleContentRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified approval rule does not exist.</p>
 */
export interface ApprovalRuleDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleDoesNotExistException {
  export const filterSensitiveLog = (obj: ApprovalRuleDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an event for an approval rule.</p>
 */
export interface ApprovalRuleEventMetadata {
  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;

  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;
}

export namespace ApprovalRuleEventMetadata {
  export const filterSensitiveLog = (obj: ApprovalRuleEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 */
export interface ApprovalRuleNameAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleNameAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleNameAlreadyExistsException {
  export const filterSensitiveLog = (obj: ApprovalRuleNameAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>An approval rule name is required, but was not specified.</p>
 */
export interface ApprovalRuleNameRequiredException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleNameRequiredException {
  export const filterSensitiveLog = (obj: ApprovalRuleNameRequiredException): any => ({
    ...obj,
  });
}

export enum OverrideStatus {
  OVERRIDE = "OVERRIDE",
  REVOKE = "REVOKE",
}

/**
 * <p>Returns information about an override event for approval rules for a pull request.</p>
 */
export interface ApprovalRuleOverriddenEventMetadata {
  /**
   * <p>The revision ID of the pull request when the override event occurred.</p>
   */
  revisionId?: string;

  /**
   * <p>The status of the override event.</p>
   */
  overrideStatus?: OverrideStatus | string;
}

export namespace ApprovalRuleOverriddenEventMetadata {
  export const filterSensitiveLog = (obj: ApprovalRuleOverriddenEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an approval rule template.</p>
 */
export interface ApprovalRuleTemplate {
  /**
   * <p>The system-generated ID of the approval rule template.</p>
   */
  approvalRuleTemplateId?: string;

  /**
   * <p>The name of the approval rule template.</p>
   */
  approvalRuleTemplateName?: string;

  /**
   * <p>The description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription?: string;

  /**
   * <p>The content of the approval rule template.</p>
   */
  approvalRuleTemplateContent?: string;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule template.</p>
   */
  ruleContentSha256?: string;

  /**
   * <p>The date the approval rule template was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date the approval rule template was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.</p>
   */
  lastModifiedUser?: string;
}

export namespace ApprovalRuleTemplate {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 */
export interface ApprovalRuleTemplateContentRequiredException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleTemplateContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateContentRequiredException {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplateContentRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
 *         was created, and then try again.</p>
 */
export interface ApprovalRuleTemplateDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleTemplateDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateDoesNotExistException {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplateDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The approval rule template is associated with one or more repositories. You cannot delete a template that is associated with a repository. Remove
 *         all associations, and then try again.</p>
 */
export interface ApprovalRuleTemplateInUseException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleTemplateInUseException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateInUseException {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplateInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this AWS Region for your AWS account. Approval rule template
 *             names must be unique.</p>
 */
export interface ApprovalRuleTemplateNameAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleTemplateNameAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateNameAlreadyExistsException {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplateNameAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>An approval rule template name is required, but was not specified.</p>
 */
export interface ApprovalRuleTemplateNameRequiredException extends __SmithyException, $MetadataBearer {
  name: "ApprovalRuleTemplateNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalRuleTemplateNameRequiredException {
  export const filterSensitiveLog = (obj: ApprovalRuleTemplateNameRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a change in the approval state for a pull request.</p>
 */
export interface ApprovalStateChangedEventMetadata {
  /**
   * <p>The revision ID of the pull request when the approval state changed.</p>
   */
  revisionId?: string;

  /**
   * <p>The approval status for the pull request.</p>
   */
  approvalStatus?: ApprovalState | string;
}

export namespace ApprovalStateChangedEventMetadata {
  export const filterSensitiveLog = (obj: ApprovalStateChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An approval state is required, but was not specified.</p>
 */
export interface ApprovalStateRequiredException extends __SmithyException, $MetadataBearer {
  name: "ApprovalStateRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ApprovalStateRequiredException {
  export const filterSensitiveLog = (obj: ApprovalStateRequiredException): any => ({
    ...obj,
  });
}

export interface AssociateApprovalRuleTemplateWithRepositoryInput {
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
  export const filterSensitiveLog = (obj: AssociateApprovalRuleTemplateWithRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption integrity check failed.</p>
 */
export interface EncryptionIntegrityChecksFailedException extends __SmithyException, $MetadataBearer {
  name: "EncryptionIntegrityChecksFailedException";
  $fault: "server";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionIntegrityChecksFailedException {
  export const filterSensitiveLog = (obj: EncryptionIntegrityChecksFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption key could not be accessed.</p>
 */
export interface EncryptionKeyAccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "EncryptionKeyAccessDeniedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyAccessDeniedException {
  export const filterSensitiveLog = (obj: EncryptionKeyAccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption key is disabled.</p>
 */
export interface EncryptionKeyDisabledException extends __SmithyException, $MetadataBearer {
  name: "EncryptionKeyDisabledException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyDisabledException {
  export const filterSensitiveLog = (obj: EncryptionKeyDisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>No encryption key was found.</p>
 */
export interface EncryptionKeyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EncryptionKeyNotFoundException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyNotFoundException {
  export const filterSensitiveLog = (obj: EncryptionKeyNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption key is not available.</p>
 */
export interface EncryptionKeyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "EncryptionKeyUnavailableException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace EncryptionKeyUnavailableException {
  export const filterSensitiveLog = (obj: EncryptionKeyUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 */
export interface InvalidApprovalRuleTemplateNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidApprovalRuleTemplateNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateNameException {
  export const filterSensitiveLog = (obj: InvalidApprovalRuleTemplateNameException): any => ({
    ...obj,
  });
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
export interface InvalidRepositoryNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidRepositoryNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryNameException {
  export const filterSensitiveLog = (obj: InvalidRepositoryNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of approval rule templates for a repository has been exceeded. You cannot associate more than 25
 *         approval rule templates with a repository.</p>
 */
export interface MaximumRuleTemplatesAssociatedWithRepositoryException extends __SmithyException, $MetadataBearer {
  name: "MaximumRuleTemplatesAssociatedWithRepositoryException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumRuleTemplatesAssociatedWithRepositoryException {
  export const filterSensitiveLog = (obj: MaximumRuleTemplatesAssociatedWithRepositoryException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository does not exist.</p>
 */
export interface RepositoryDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "RepositoryDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryDoesNotExistException {
  export const filterSensitiveLog = (obj: RepositoryDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>A repository name is required, but was not specified.</p>
 */
export interface RepositoryNameRequiredException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNameRequiredException {
  export const filterSensitiveLog = (obj: RepositoryNameRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface AuthorDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "AuthorDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace AuthorDoesNotExistException {
  export const filterSensitiveLog = (obj: AuthorDoesNotExistException): any => ({
    ...obj,
  });
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
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
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.</p>
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * <p>The name of the repository where the association was not made.</p>
   */
  repositoryName?: string;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was not found or not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesError): any => ({
    ...obj,
  });
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
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
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 */
export interface MaximumRepositoryNamesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumRepositoryNamesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumRepositoryNamesExceededException {
  export const filterSensitiveLog = (obj: MaximumRepositoryNamesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>At least one repository name object is required, but was not specified.</p>
 */
export interface RepositoryNamesRequiredException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNamesRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNamesRequiredException {
  export const filterSensitiveLog = (obj: RepositoryNamesRequiredException): any => ({
    ...obj,
  });
}

export enum ConflictDetailLevelTypeEnum {
  FILE_LEVEL = "FILE_LEVEL",
  LINE_LEVEL = "LINE_LEVEL",
}

export enum ConflictResolutionStrategyTypeEnum {
  ACCEPT_DESTINATION = "ACCEPT_DESTINATION",
  ACCEPT_SOURCE = "ACCEPT_SOURCE",
  AUTOMERGE = "AUTOMERGE",
  NONE = "NONE",
}

export enum MergeOptionTypeEnum {
  FAST_FORWARD_MERGE = "FAST_FORWARD_MERGE",
  SQUASH_MERGE = "SQUASH_MERGE",
  THREE_WAY_MERGE = "THREE_WAY_MERGE",
}

export interface BatchDescribeMergeConflictsInput {
  /**
   * <p>The name of the repository that contains the merge conflicts you want to review.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.</p>
   */
  filePaths?: string[];

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
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace BatchDescribeMergeConflictsInput {
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsInput): any => ({
    ...obj,
  });
}

export enum FileModeTypeEnum {
  EXECUTABLE = "EXECUTABLE",
  NORMAL = "NORMAL",
  SYMLINK = "SYMLINK",
}

/**
 * <p>Information about file modes in a merge or pull request.</p>
 */
export interface FileModes {
  /**
   * <p>The file mode of a file in the source of a merge or pull request.</p>
   */
  source?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the destination of a merge or pull request.</p>
   */
  destination?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the base of a merge or pull request.</p>
   */
  base?: FileModeTypeEnum | string;
}

export namespace FileModes {
  export const filterSensitiveLog = (obj: FileModes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the size of files in a merge or pull request.</p>
 */
export interface FileSizes {
  /**
   * <p>The  size of a file in the source of a merge or pull request.</p>
   */
  source?: number;

  /**
   * <p>The size of a file in the destination of a merge or pull request.</p>
   */
  destination?: number;

  /**
   * <p>The size of a file in the base of a merge or pull request.</p>
   */
  base?: number;
}

export namespace FileSizes {
  export const filterSensitiveLog = (obj: FileSizes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about whether a file is binary or textual in a merge or pull request operation.</p>
 */
export interface IsBinaryFile {
  /**
   * <p>The binary or non-binary status of file in the source of a merge or pull request.</p>
   */
  source?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the destination of a merge or pull request.</p>
   */
  destination?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the base of a merge or pull request.</p>
   */
  base?: boolean;
}

export namespace IsBinaryFile {
  export const filterSensitiveLog = (obj: IsBinaryFile): any => ({
    ...obj,
  });
}

export enum ChangeTypeEnum {
  ADDED = "A",
  DELETED = "D",
  MODIFIED = "M",
}

/**
 * <p>Information about the file operation conflicts in a merge operation.</p>
 */
export interface MergeOperations {
  /**
   * <p>The operation (add, modify, or delete) on a file in the source of a merge or pull
   *             request.</p>
   */
  source?: ChangeTypeEnum | string;

  /**
   * <p>The operation on a file in the destination of a merge or pull request.</p>
   */
  destination?: ChangeTypeEnum | string;
}

export namespace MergeOperations {
  export const filterSensitiveLog = (obj: MergeOperations): any => ({
    ...obj,
  });
}

export enum ObjectTypeEnum {
  DIRECTORY = "DIRECTORY",
  FILE = "FILE",
  GIT_LINK = "GIT_LINK",
  SYMBOLIC_LINK = "SYMBOLIC_LINK",
}

/**
 * <p>Information about the type of an object in a merge operation.</p>
 */
export interface ObjectTypes {
  /**
   * <p>The type of the object in the source branch.</p>
   */
  source?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the destination branch.</p>
   */
  destination?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the base commit of the merge.</p>
   */
  base?: ObjectTypeEnum | string;
}

export namespace ObjectTypes {
  export const filterSensitiveLog = (obj: ObjectTypes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the metadata for a conflict in a merge operation.</p>
 */
export interface ConflictMetadata {
  /**
   * <p>The path of the file that contains conflicts.</p>
   */
  filePath?: string;

  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   */
  fileSizes?: FileSizes;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   */
  fileModes?: FileModes;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   */
  objectTypes?: ObjectTypes;

  /**
   * <p>The number of conflicts, including both hunk conflicts and metadata conflicts.</p>
   */
  numberOfConflicts?: number;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   */
  isBinaryFile?: IsBinaryFile;

  /**
   * <p>A boolean value indicating whether there are conflicts in the content of a file.</p>
   */
  contentConflict?: boolean;

  /**
   * <p>A boolean value indicating whether there are conflicts in the file mode of a file.</p>
   */
  fileModeConflict?: boolean;

  /**
   * <p>A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.</p>
   */
  objectTypeConflict?: boolean;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   */
  mergeOperations?: MergeOperations;
}

export namespace ConflictMetadata {
  export const filterSensitiveLog = (obj: ConflictMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.</p>
 */
export interface MergeHunkDetail {
  /**
   * <p>The start position of the hunk in the merge result.</p>
   */
  startLine?: number;

  /**
   * <p>The end position of the hunk in the merge result.</p>
   */
  endLine?: number;

  /**
   * <p>The base-64 encoded content of the hunk merged region that might contain a
   *             conflict.</p>
   */
  hunkContent?: string;
}

export namespace MergeHunkDetail {
  export const filterSensitiveLog = (obj: MergeHunkDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Information about merge hunks in a merge or pull request operation.</p>
 */
export interface MergeHunk {
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

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   */
  destination?: MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   */
  base?: MergeHunkDetail;
}

export namespace MergeHunk {
  export const filterSensitiveLog = (obj: MergeHunk): any => ({
    ...obj,
  });
}

/**
 * <p>Information about conflicts in a merge operation.</p>
 */
export interface Conflict {
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
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchDescribeMergeConflicts operation.</p>
 */
export interface BatchDescribeMergeConflictsError {
  /**
   * <p>The path to the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The name of the exception.</p>
   */
  exceptionName: string | undefined;

  /**
   * <p>The message provided by the exception.</p>
   */
  message: string | undefined;
}

export namespace BatchDescribeMergeConflictsError {
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsError): any => ({
    ...obj,
  });
}

export interface BatchDescribeMergeConflictsOutput {
  /**
   * <p>A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.</p>
   */
  conflicts: Conflict[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of any errors returned while describing the merge conflicts for each file.</p>
   */
  errors?: BatchDescribeMergeConflictsError[];

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;
}

export namespace BatchDescribeMergeConflictsOutput {
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 */
export interface CommitDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "CommitDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitDoesNotExistException {
  export const filterSensitiveLog = (obj: CommitDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>A commit was not specified.</p>
 */
export interface CommitRequiredException extends __SmithyException, $MetadataBearer {
  name: "CommitRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitRequiredException {
  export const filterSensitiveLog = (obj: CommitRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified commit is not valid.</p>
 */
export interface InvalidCommitException extends __SmithyException, $MetadataBearer {
  name: "InvalidCommitException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommitException {
  export const filterSensitiveLog = (obj: InvalidCommitException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified conflict detail level is not valid.</p>
 */
export interface InvalidConflictDetailLevelException extends __SmithyException, $MetadataBearer {
  name: "InvalidConflictDetailLevelException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictDetailLevelException {
  export const filterSensitiveLog = (obj: InvalidConflictDetailLevelException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified conflict resolution strategy is not valid.</p>
 */
export interface InvalidConflictResolutionStrategyException extends __SmithyException, $MetadataBearer {
  name: "InvalidConflictResolutionStrategyException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictResolutionStrategyException {
  export const filterSensitiveLog = (obj: InvalidConflictResolutionStrategyException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified continuation token is not valid.</p>
 */
export interface InvalidContinuationTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidContinuationTokenException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidContinuationTokenException {
  export const filterSensitiveLog = (obj: InvalidContinuationTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified value for the number of conflict files to return is not valid.</p>
 */
export interface InvalidMaxConflictFilesException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxConflictFilesException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxConflictFilesException {
  export const filterSensitiveLog = (obj: InvalidMaxConflictFilesException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified value for the number of merge hunks to return is not valid.</p>
 */
export interface InvalidMaxMergeHunksException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxMergeHunksException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxMergeHunksException {
  export const filterSensitiveLog = (obj: InvalidMaxMergeHunksException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 */
export interface InvalidMergeOptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidMergeOptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMergeOptionException {
  export const filterSensitiveLog = (obj: InvalidMergeOptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of files to load exceeds the allowed limit.</p>
 */
export interface MaximumFileContentToLoadExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumFileContentToLoadExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumFileContentToLoadExceededException {
  export const filterSensitiveLog = (obj: MaximumFileContentToLoadExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 */
export interface MaximumItemsToCompareExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumItemsToCompareExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumItemsToCompareExceededException {
  export const filterSensitiveLog = (obj: MaximumItemsToCompareExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A merge option or stategy is required, and none was provided.</p>
 */
export interface MergeOptionRequiredException extends __SmithyException, $MetadataBearer {
  name: "MergeOptionRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MergeOptionRequiredException {
  export const filterSensitiveLog = (obj: MergeOptionRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 */
export interface TipsDivergenceExceededException extends __SmithyException, $MetadataBearer {
  name: "TipsDivergenceExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TipsDivergenceExceededException {
  export const filterSensitiveLog = (obj: TipsDivergenceExceededException): any => ({
    ...obj,
  });
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
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
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.</p>
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * <p>The name of the repository where the association with the template was not able to be removed.</p>
   */
  repositoryName?: string;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not
   *             found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was either not found or not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesError): any => ({
    ...obj,
  });
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * <p>A list of repository names that have had their association with the template
   *             removed.</p>
   */
  disassociatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.</p>
   */
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] | undefined;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput): any => ({
    ...obj,
  });
}

export interface BatchGetCommitsInput {
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
    ...obj,
  });
}

/**
 * <p>Information about the user who made a specified commit.</p>
 */
export interface UserInfo {
  /**
   * <p>The name of the user who made the specified commit.</p>
   */
  name?: string;

  /**
   * <p>The email address associated with the user who made the commit, if any.</p>
   */
  email?: string;

  /**
   * <p>The date when the specified commit was commited, in timestamp format with GMT offset.</p>
   */
  date?: string;
}

export namespace UserInfo {
  export const filterSensitiveLog = (obj: UserInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific commit.</p>
 */
export interface Commit {
  /**
   * <p>The full SHA ID of the specified commit. </p>
   */
  commitId?: string;

  /**
   * <p>Tree information for the specified commit.</p>
   */
  treeId?: string;

  /**
   * <p>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</p>
   */
  parents?: string[];

  /**
   * <p>The commit message associated with the specified commit.</p>
   */
  message?: string;

  /**
   * <p>Information about the author of the specified commit. Information includes
   *             the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured
   *             in Git.</p>
   */
  author?: UserInfo;

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
   * <p>Any other data associated with the specified commit.</p>
   */
  additionalData?: string;
}

export namespace Commit {
  export const filterSensitiveLog = (obj: Commit): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchGetCommits operation.</p>
 */
export interface BatchGetCommitsError {
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
    ...obj,
  });
}

export interface BatchGetCommitsOutput {
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
    ...obj,
  });
}

/**
 * <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 */
export interface CommitIdsLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CommitIdsLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdsLimitExceededException {
  export const filterSensitiveLog = (obj: CommitIdsLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A list of commit IDs is required, but was either not specified or the list was empty.</p>
 */
export interface CommitIdsListRequiredException extends __SmithyException, $MetadataBearer {
  name: "CommitIdsListRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdsListRequiredException {
  export const filterSensitiveLog = (obj: CommitIdsListRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesInput {
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
    ...obj,
  });
}

/**
 * <p>Information about a repository.</p>
 */
export interface RepositoryMetadata {
  /**
   * <p>The ID of the AWS account associated with the repository.</p>
   */
  accountId?: string;

  /**
   * <p>The ID of the repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The repository's name.</p>
   */
  repositoryName?: string;

  /**
   * <p>A comment or description about the repository.</p>
   */
  repositoryDescription?: string;

  /**
   * <p>The repository's default branch name.</p>
   */
  defaultBranch?: string;

  /**
   * <p>The date and time the repository was last modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date and time the repository was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The URL to use for cloning the repository over HTTPS.</p>
   */
  cloneUrlHttp?: string;

  /**
   * <p>The URL to use for cloning the repository over SSH.</p>
   */
  cloneUrlSsh?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository.</p>
   */
  Arn?: string;
}

export namespace RepositoryMetadata {
  export const filterSensitiveLog = (obj: RepositoryMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesOutput {
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
    ...obj,
  });
}

/**
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 */
export interface BeforeCommitIdAndAfterCommitIdAreSameException extends __SmithyException, $MetadataBearer {
  name: "BeforeCommitIdAndAfterCommitIdAreSameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BeforeCommitIdAndAfterCommitIdAreSameException {
  export const filterSensitiveLog = (obj: BeforeCommitIdAndAfterCommitIdAreSameException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified blob does not exist.</p>
 */
export interface BlobIdDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "BlobIdDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BlobIdDoesNotExistException {
  export const filterSensitiveLog = (obj: BlobIdDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>A blob ID is required, but was not specified.</p>
 */
export interface BlobIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "BlobIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BlobIdRequiredException {
  export const filterSensitiveLog = (obj: BlobIdRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific Git blob object.</p>
 */
export interface BlobMetadata {
  /**
   * <p>The full ID of the blob.</p>
   */
  blobId?: string;

  /**
   * <p>The path to the blob and associated file name, if any.</p>
   */
  path?: string;

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
}

export namespace BlobMetadata {
  export const filterSensitiveLog = (obj: BlobMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>The specified branch does not exist.</p>
 */
export interface BranchDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "BranchDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchDoesNotExistException {
  export const filterSensitiveLog = (obj: BranchDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a branch.</p>
 */
export interface BranchInfo {
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
    ...obj,
  });
}

/**
 * <p>Cannot create the branch with the specified name because the commit conflicts with an existing branch with the same name.
 *             Branch names must be unique.</p>
 */
export interface BranchNameExistsException extends __SmithyException, $MetadataBearer {
  name: "BranchNameExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameExistsException {
  export const filterSensitiveLog = (obj: BranchNameExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified branch name is not valid because it is a tag name. Enter the name of a
 *             branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
 */
export interface BranchNameIsTagNameException extends __SmithyException, $MetadataBearer {
  name: "BranchNameIsTagNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameIsTagNameException {
  export const filterSensitiveLog = (obj: BranchNameIsTagNameException): any => ({
    ...obj,
  });
}

/**
 * <p>A branch name is required, but was not specified.</p>
 */
export interface BranchNameRequiredException extends __SmithyException, $MetadataBearer {
  name: "BranchNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace BranchNameRequiredException {
  export const filterSensitiveLog = (obj: BranchNameRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The approval rule cannot be deleted from the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export interface CannotDeleteApprovalRuleFromTemplateException extends __SmithyException, $MetadataBearer {
  name: "CannotDeleteApprovalRuleFromTemplateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CannotDeleteApprovalRuleFromTemplateException {
  export const filterSensitiveLog = (obj: CannotDeleteApprovalRuleFromTemplateException): any => ({
    ...obj,
  });
}

/**
 * <p>The approval rule cannot be modified for the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export interface CannotModifyApprovalRuleFromTemplateException extends __SmithyException, $MetadataBearer {
  name: "CannotModifyApprovalRuleFromTemplateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CannotModifyApprovalRuleFromTemplateException {
  export const filterSensitiveLog = (obj: CannotModifyApprovalRuleFromTemplateException): any => ({
    ...obj,
  });
}

/**
 * <p>A client request token is required. A client request token is an unique,
 *             client-generated idempotency token that, when provided in a request, ensures the request
 *             cannot be repeated with a changed parameter. If a request is received with the same
 *             parameters and a token is included, the request returns information about the initial
 *             request that used that token.</p>
 */
export interface ClientRequestTokenRequiredException extends __SmithyException, $MetadataBearer {
  name: "ClientRequestTokenRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ClientRequestTokenRequiredException {
  export const filterSensitiveLog = (obj: ClientRequestTokenRequiredException): any => ({
    ...obj,
  });
}

export interface CreateApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template. Provide descriptive names, because this name
   *             is applied to the approval rules created automatically in associated
   *             repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

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
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
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
}

export namespace CreateApprovalRuleTemplateInput {
  export const filterSensitiveLog = (obj: CreateApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface CreateApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the created approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace CreateApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (obj: CreateApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The content of the approval rule template is not valid.</p>
 */
export interface InvalidApprovalRuleTemplateContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidApprovalRuleTemplateContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateContentException {
  export const filterSensitiveLog = (obj: InvalidApprovalRuleTemplateContentException): any => ({
    ...obj,
  });
}

/**
 * <p>The description for the approval rule template is not valid because it exceeds the
 *             maximum characters allowed for a description. For more information about limits in AWS
 *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User
 *             Guide</a>.</p>
 */
export interface InvalidApprovalRuleTemplateDescriptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidApprovalRuleTemplateDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleTemplateDescriptionException {
  export const filterSensitiveLog = (obj: InvalidApprovalRuleTemplateDescriptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of approval rule templates has been exceeded for this AWS Region. </p>
 */
export interface NumberOfRuleTemplatesExceededException extends __SmithyException, $MetadataBearer {
  name: "NumberOfRuleTemplatesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NumberOfRuleTemplatesExceededException {
  export const filterSensitiveLog = (obj: NumberOfRuleTemplatesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A commit ID was not specified.</p>
 */
export interface CommitIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "CommitIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdRequiredException {
  export const filterSensitiveLog = (obj: CommitIdRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a create branch operation.</p>
 */
export interface CreateBranchInput {
  /**
   * <p>The name of the repository in which you want to create the new branch.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the new branch to create.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit to point the new branch to.</p>
   */
  commitId: string | undefined;
}

export namespace CreateBranchInput {
  export const filterSensitiveLog = (obj: CreateBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reference name is not valid.</p>
 */
export interface InvalidBranchNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidBranchNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidBranchNameException {
  export const filterSensitiveLog = (obj: InvalidBranchNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified commit ID is not valid.</p>
 */
export interface InvalidCommitIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidCommitIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommitIdException {
  export const filterSensitiveLog = (obj: InvalidCommitIdException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit message is too long. Provide a shorter string. </p>
 */
export interface CommitMessageLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "CommitMessageLengthExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitMessageLengthExceededException {
  export const filterSensitiveLog = (obj: CommitMessageLengthExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A file that is deleted as part of a commit.</p>
 */
export interface DeleteFileEntry {
  /**
   * <p>The full path of the file to be deleted, including the name of the file.</p>
   */
  filePath: string | undefined;
}

export namespace DeleteFileEntry {
  export const filterSensitiveLog = (obj: DeleteFileEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a source file that is part of changes made in a commit.</p>
 */
export interface SourceFileSpecifier {
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
    ...obj,
  });
}

/**
 * <p>Information about a file added or updated as part of a commit.</p>
 */
export interface PutFileEntry {
  /**
   * <p>The full path to the file in the repository, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The content of the file, if a source file is not specified.</p>
   */
  fileContent?: Uint8Array;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit,
   *         if you are not providing the file content directly.</p>
   */
  sourceFile?: SourceFileSpecifier;
}

export namespace PutFileEntry {
  export const filterSensitiveLog = (obj: PutFileEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the file mode changes.</p>
 */
export interface SetFileModeEntry {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The file mode for the file.</p>
   */
  fileMode: FileModeTypeEnum | string | undefined;
}

export namespace SetFileModeEntry {
  export const filterSensitiveLog = (obj: SetFileModeEntry): any => ({
    ...obj,
  });
}

export interface CreateCommitInput {
  /**
   * <p>The name of the repository where you create the commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you create the commit.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit that is the parent of the commit you create. Not required if this
   *             is an empty repository.</p>
   */
  parentCommitId?: string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person who created the commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message you want to include in the commit. Commit messages are limited to
   *             256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a ..gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The files to add or update in this commit.</p>
   */
  putFiles?: PutFileEntry[];

  /**
   * <p>The files to delete in this commit. These files still exist in earlier commits.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>The file modes to update for files in this commit.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace CreateCommitInput {
  export const filterSensitiveLog = (obj: CreateCommitInput): any => ({
    ...obj,
  });
}

/**
 * <p>A file to be added, updated, or deleted as part of a commit.</p>
 */
export interface FileMetadata {
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
    ...obj,
  });
}

export interface CreateCommitOutput {
  /**
   * <p>The full commit ID of the commit that contains your committed file changes.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.</p>
   */
  treeId?: string;

  /**
   * <p>The files added as part of the committed file changes.</p>
   */
  filesAdded?: FileMetadata[];

  /**
   * <p>The files updated as part of the commited file changes.</p>
   */
  filesUpdated?: FileMetadata[];

  /**
   * <p>The files deleted as part of the committed file changes.</p>
   */
  filesDeleted?: FileMetadata[];
}

export namespace CreateCommitOutput {
  export const filterSensitiveLog = (obj: CreateCommitOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
 */
export interface DirectoryNameConflictsWithFileNameException extends __SmithyException, $MetadataBearer {
  name: "DirectoryNameConflictsWithFileNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace DirectoryNameConflictsWithFileNameException {
  export const filterSensitiveLog = (obj: DirectoryNameConflictsWithFileNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because both a source file and file content have been
 *             specified for the same file. You cannot provide both. Either specify a source file or
 *             provide the file content directly.</p>
 */
export interface FileContentAndSourceFileSpecifiedException extends __SmithyException, $MetadataBearer {
  name: "FileContentAndSourceFileSpecifiedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileContentAndSourceFileSpecifiedException {
  export const filterSensitiveLog = (obj: FileContentAndSourceFileSpecifiedException): any => ({
    ...obj,
  });
}

/**
 * <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 */
export interface FileContentSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "FileContentSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileContentSizeLimitExceededException {
  export const filterSensitiveLog = (obj: FileContentSizeLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
 */
export interface FileDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "FileDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileDoesNotExistException {
  export const filterSensitiveLog = (obj: FileDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
 */
export interface FileEntryRequiredException extends __SmithyException, $MetadataBearer {
  name: "FileEntryRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileEntryRequiredException {
  export const filterSensitiveLog = (obj: FileEntryRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because no file mode has been specified. A file mode is
 *             required to update mode permissions for a file.</p>
 */
export interface FileModeRequiredException extends __SmithyException, $MetadataBearer {
  name: "FileModeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileModeRequiredException {
  export const filterSensitiveLog = (obj: FileModeRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide
 *         another name for the file, or add the file in a directory that does not match the file name.</p>
 */
export interface FileNameConflictsWithDirectoryNameException extends __SmithyException, $MetadataBearer {
  name: "FileNameConflictsWithDirectoryNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileNameConflictsWithDirectoryNameException {
  export const filterSensitiveLog = (obj: FileNameConflictsWithDirectoryNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files
 *         have valid file paths that do not point to a submodule.</p>
 */
export interface FilePathConflictsWithSubmodulePathException extends __SmithyException, $MetadataBearer {
  name: "FilePathConflictsWithSubmodulePathException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FilePathConflictsWithSubmodulePathException {
  export const filterSensitiveLog = (obj: FilePathConflictsWithSubmodulePathException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 */
export interface FolderContentSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "FolderContentSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FolderContentSizeLimitExceededException {
  export const filterSensitiveLog = (obj: FolderContentSizeLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified deletion parameter is not valid.</p>
 */
export interface InvalidDeletionParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeletionParameterException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDeletionParameterException {
  export const filterSensitiveLog = (obj: InvalidDeletionParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 */
export interface InvalidEmailException extends __SmithyException, $MetadataBearer {
  name: "InvalidEmailException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidEmailException {
  export const filterSensitiveLog = (obj: InvalidEmailException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 */
export interface InvalidFileModeException extends __SmithyException, $MetadataBearer {
  name: "InvalidFileModeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidFileModeException {
  export const filterSensitiveLog = (obj: InvalidFileModeException): any => ({
    ...obj,
  });
}

/**
 * <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you
 *         want to add or update a file.</p>
 */
export interface InvalidParentCommitIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidParentCommitIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidParentCommitIdException {
  export const filterSensitiveLog = (obj: InvalidParentCommitIdException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified path is not valid.</p>
 */
export interface InvalidPathException extends __SmithyException, $MetadataBearer {
  name: "InvalidPathException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPathException {
  export const filterSensitiveLog = (obj: InvalidPathException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of specified files to change as part of this commit exceeds the maximum number of files
 *         that can be changed in a single commit. Consider using a Git client for these changes.</p>
 */
export interface MaximumFileEntriesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumFileEntriesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumFileEntriesExceededException {
  export const filterSensitiveLog = (obj: MaximumFileEntriesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 */
export interface NameLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "NameLengthExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NameLengthExceededException {
  export const filterSensitiveLog = (obj: NameLengthExceededException): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

/**
 * <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
 */
export interface ParentCommitDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ParentCommitDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitDoesNotExistException {
  export const filterSensitiveLog = (obj: ParentCommitDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head
 *         of the branch, use <a>GetBranch</a>.</p>
 */
export interface ParentCommitIdOutdatedException extends __SmithyException, $MetadataBearer {
  name: "ParentCommitIdOutdatedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitIdOutdatedException {
  export const filterSensitiveLog = (obj: ParentCommitIdOutdatedException): any => ({
    ...obj,
  });
}

/**
 * <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command
 *         (for example, git pull or git log).</p>
 */
export interface ParentCommitIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "ParentCommitIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ParentCommitIdRequiredException {
  export const filterSensitiveLog = (obj: ParentCommitIdRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The folderPath for a location cannot be null.</p>
 */
export interface PathRequiredException extends __SmithyException, $MetadataBearer {
  name: "PathRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PathRequiredException {
  export const filterSensitiveLog = (obj: PathRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
 */
export interface PutFileEntryConflictException extends __SmithyException, $MetadataBearer {
  name: "PutFileEntryConflictException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PutFileEntryConflictException {
  export const filterSensitiveLog = (obj: PutFileEntryConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
 */
export interface RestrictedSourceFileException extends __SmithyException, $MetadataBearer {
  name: "RestrictedSourceFileException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RestrictedSourceFileException {
  export const filterSensitiveLog = (obj: RestrictedSourceFileException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example,
 *         you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same
 *         file as part of the same commit.</p>
 */
export interface SamePathRequestException extends __SmithyException, $MetadataBearer {
  name: "SamePathRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SamePathRequestException {
  export const filterSensitiveLog = (obj: SamePathRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
 */
export interface SourceFileOrContentRequiredException extends __SmithyException, $MetadataBearer {
  name: "SourceFileOrContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SourceFileOrContentRequiredException {
  export const filterSensitiveLog = (obj: SourceFileOrContentRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a target for a pull request.</p>
 */
export interface Target {
  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference: string | undefined;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch.</p>
   */
  destinationReference?: string;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

export interface CreatePullRequestInput {
  /**
   * <p>The title of the pull request. This title is used to identify the pull request to
   *             other users in the repository.</p>
   */
  title: string | undefined;

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
}

export namespace CreatePullRequestInput {
  export const filterSensitiveLog = (obj: CreatePullRequestInput): any => ({
    ...obj,
  });
}

export enum PullRequestStatusEnum {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * <p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>
 */
export interface MergeMetadata {
  /**
   * <p>A Boolean value indicating whether the merge has been made.</p>
   */
  isMerged?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>
   */
  mergedBy?: string;

  /**
   * <p>The commit ID for the merge commit, if any.</p>
   */
  mergeCommitId?: string;

  /**
   * <p>The merge strategy used in the merge.</p>
   */
  mergeOption?: MergeOptionTypeEnum | string;
}

export namespace MergeMetadata {
  export const filterSensitiveLog = (obj: MergeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request target.</p>
 */
export interface PullRequestTarget {
  /**
   * <p>The name of the repository that contains the pull request source and destination branches.</p>
   */
  repositoryName?: string;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference?: string;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch. </p>
   */
  destinationReference?: string;

  /**
   * <p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>
   */
  destinationCommit?: string;

  /**
   * <p>The full commit ID of the tip of the source branch used to create the pull request. If
   *             the pull request branch is updated by a push while the pull request is open, the commit
   *             ID changes to reflect the new tip of the branch.</p>
   */
  sourceCommit?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;

  /**
   * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
   */
  mergeMetadata?: MergeMetadata;
}

export namespace PullRequestTarget {
  export const filterSensitiveLog = (obj: PullRequestTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request.</p>
 */
export interface PullRequest {
  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The user-defined title of the pull request. This title is displayed in the list of
   *             pull requests to other repository users.</p>
   */
  title?: string;

  /**
   * <p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>
   */
  description?: string;

  /**
   * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
   */
  lastActivityDate?: Date;

  /**
   * <p>The date and time the pull request was originally created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>
   */
  authorArn?: string;

  /**
   * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
   */
  pullRequestTargets?: PullRequestTarget[];

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The system-generated revision ID for the pull request.</p>
   */
  revisionId?: string;

  /**
   * <p>The approval rules applied to the pull request.</p>
   */
  approvalRules?: ApprovalRule[];
}

export namespace PullRequest {
  export const filterSensitiveLog = (obj: PullRequest): any => ({
    ...obj,
  });
}

export interface CreatePullRequestOutput {
  /**
   * <p>Information about the newly created pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace CreatePullRequestOutput {
  export const filterSensitiveLog = (obj: CreatePullRequestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 */
export interface IdempotencyParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotencyParameterMismatchException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace IdempotencyParameterMismatchException {
  export const filterSensitiveLog = (obj: IdempotencyParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The client request token is not valid.</p>
 */
export interface InvalidClientRequestTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientRequestTokenException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidClientRequestTokenException {
  export const filterSensitiveLog = (obj: InvalidClientRequestTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request description is not valid. Descriptions cannot be more than 1,000
 *             characters.</p>
 */
export interface InvalidDescriptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDescriptionException {
  export const filterSensitiveLog = (obj: InvalidDescriptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reference name format is not valid. Reference names must conform to the
 *             Git references format (for example, refs/heads/master). For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals -
 *                 Git References</a> or consult your Git documentation.</p>
 */
export interface InvalidReferenceNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidReferenceNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReferenceNameException {
  export const filterSensitiveLog = (obj: InvalidReferenceNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface InvalidTargetException extends __SmithyException, $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTargetException {
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj,
  });
}

/**
 * <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for
 *             the repository name, source branch, and destination branch for a pull request.</p>
 */
export interface InvalidTargetsException extends __SmithyException, $MetadataBearer {
  name: "InvalidTargetsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTargetsException {
  export const filterSensitiveLog = (obj: InvalidTargetsException): any => ({
    ...obj,
  });
}

/**
 * <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 */
export interface InvalidTitleException extends __SmithyException, $MetadataBearer {
  name: "InvalidTitleException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTitleException {
  export const filterSensitiveLog = (obj: InvalidTitleException): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot create the pull request because the repository has too many open pull requests.
 *             The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
 */
export interface MaximumOpenPullRequestsExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumOpenPullRequestsExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumOpenPullRequestsExceededException {
  export const filterSensitiveLog = (obj: MaximumOpenPullRequestsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
 */
export interface MultipleRepositoriesInPullRequestException extends __SmithyException, $MetadataBearer {
  name: "MultipleRepositoriesInPullRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MultipleRepositoriesInPullRequestException {
  export const filterSensitiveLog = (obj: MultipleRepositoriesInPullRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reference does not exist. You must provide a full commit ID.</p>
 */
export interface ReferenceDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ReferenceDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceDoesNotExistException {
  export const filterSensitiveLog = (obj: ReferenceDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>A reference name is required, but none was provided.</p>
 */
export interface ReferenceNameRequiredException extends __SmithyException, $MetadataBearer {
  name: "ReferenceNameRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceNameRequiredException {
  export const filterSensitiveLog = (obj: ReferenceNameRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reference is not a supported type. </p>
 */
export interface ReferenceTypeNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "ReferenceTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReferenceTypeNotSupportedException {
  export const filterSensitiveLog = (obj: ReferenceTypeNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>The source branch and destination branch for the pull request are the same. You must
 *             specify different branches for the source and destination.</p>
 */
export interface SourceAndDestinationAreSameException extends __SmithyException, $MetadataBearer {
  name: "SourceAndDestinationAreSameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace SourceAndDestinationAreSameException {
  export const filterSensitiveLog = (obj: SourceAndDestinationAreSameException): any => ({
    ...obj,
  });
}

/**
 * <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export interface TargetRequiredException extends __SmithyException, $MetadataBearer {
  name: "TargetRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TargetRequiredException {
  export const filterSensitiveLog = (obj: TargetRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>An array of target objects is required. It cannot be empty or null.</p>
 */
export interface TargetsRequiredException extends __SmithyException, $MetadataBearer {
  name: "TargetsRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TargetsRequiredException {
  export const filterSensitiveLog = (obj: TargetsRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>A pull request title is required. It cannot be empty or null.</p>
 */
export interface TitleRequiredException extends __SmithyException, $MetadataBearer {
  name: "TitleRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TitleRequiredException {
  export const filterSensitiveLog = (obj: TitleRequiredException): any => ({
    ...obj,
  });
}

export interface CreatePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to create the approval rule.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name for the approval rule.</p>
   */
  approvalRuleName: string | undefined;

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
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  approvalRuleContent: string | undefined;
}

export namespace CreatePullRequestApprovalRuleInput {
  export const filterSensitiveLog = (obj: CreatePullRequestApprovalRuleInput): any => ({
    ...obj,
  });
}

export interface CreatePullRequestApprovalRuleOutput {
  /**
   * <p>Information about the created approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

export namespace CreatePullRequestApprovalRuleOutput {
  export const filterSensitiveLog = (obj: CreatePullRequestApprovalRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the approval rule is not valid.</p>
 */
export interface InvalidApprovalRuleContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidApprovalRuleContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleContentException {
  export const filterSensitiveLog = (obj: InvalidApprovalRuleContentException): any => ({
    ...obj,
  });
}

/**
 * <p>The name for the approval rule is not valid.</p>
 */
export interface InvalidApprovalRuleNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidApprovalRuleNameException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidApprovalRuleNameException {
  export const filterSensitiveLog = (obj: InvalidApprovalRuleNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 */
export interface InvalidPullRequestIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidPullRequestIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestIdException {
  export const filterSensitiveLog = (obj: InvalidPullRequestIdException): any => ({
    ...obj,
  });
}

/**
 * <p>The approval rule cannot be added. The pull request has the maximum number of approval rules associated with it.</p>
 */
export interface NumberOfRulesExceededException extends __SmithyException, $MetadataBearer {
  name: "NumberOfRulesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace NumberOfRulesExceededException {
  export const filterSensitiveLog = (obj: NumberOfRulesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request status cannot be updated because it is already closed.</p>
 */
export interface PullRequestAlreadyClosedException extends __SmithyException, $MetadataBearer {
  name: "PullRequestAlreadyClosedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestAlreadyClosedException {
  export const filterSensitiveLog = (obj: PullRequestAlreadyClosedException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 */
export interface PullRequestDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "PullRequestDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestDoesNotExistException {
  export const filterSensitiveLog = (obj: PullRequestDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>A pull request ID is required, but none was provided.</p>
 */
export interface PullRequestIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "PullRequestIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PullRequestIdRequiredException {
  export const filterSensitiveLog = (obj: PullRequestIdRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a create repository operation.</p>
 */
export interface CreateRepositoryInput {
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
   * <p>One or more tag key-value pairs to use when tagging this repository.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRepositoryInput {
  export const filterSensitiveLog = (obj: CreateRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a create repository operation.</p>
 */
export interface CreateRepositoryOutput {
  /**
   * <p>Information about the newly created repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace CreateRepositoryOutput {
  export const filterSensitiveLog = (obj: CreateRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository description is not valid.</p>
 */
export interface InvalidRepositoryDescriptionException extends __SmithyException, $MetadataBearer {
  name: "InvalidRepositoryDescriptionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRepositoryDescriptionException {
  export const filterSensitiveLog = (obj: InvalidRepositoryDescriptionException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
 */
export interface InvalidSystemTagUsageException extends __SmithyException, $MetadataBearer {
  name: "InvalidSystemTagUsageException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSystemTagUsageException {
  export const filterSensitiveLog = (obj: InvalidSystemTagUsageException): any => ({
    ...obj,
  });
}

/**
 * <p>The map of tags is not valid.</p>
 */
export interface InvalidTagsMapException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagsMapException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidTagsMapException {
  export const filterSensitiveLog = (obj: InvalidTagsMapException): any => ({
    ...obj,
  });
}

/**
 * <p>A repository resource limit was exceeded.</p>
 */
export interface RepositoryLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RepositoryLimitExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryLimitExceededException {
  export const filterSensitiveLog = (obj: RepositoryLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository name already exists.</p>
 */
export interface RepositoryNameExistsException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNameExistsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNameExistsException {
  export const filterSensitiveLog = (obj: RepositoryNameExistsException): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

/**
 * <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 * <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
 */
export interface ConcurrentReferenceUpdateException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentReferenceUpdateException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ConcurrentReferenceUpdateException {
  export const filterSensitiveLog = (obj: ConcurrentReferenceUpdateException): any => ({
    ...obj,
  });
}

export enum ReplacementTypeEnum {
  KEEP_BASE = "KEEP_BASE",
  KEEP_DESTINATION = "KEEP_DESTINATION",
  KEEP_SOURCE = "KEEP_SOURCE",
  USE_NEW_CONTENT = "USE_NEW_CONTENT",
}

/**
 * <p>Information about a replacement content entry in the conflict of a merge or pull request operation.</p>
 */
export interface ReplaceContentEntry {
  /**
   * <p>The path of the conflicting file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The replacement type to use when determining how to resolve the conflict.</p>
   */
  replacementType: ReplacementTypeEnum | string | undefined;

  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   */
  content?: Uint8Array;

  /**
   * <p>The file mode to apply during conflict resoltion.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace ReplaceContentEntry {
  export const filterSensitiveLog = (obj: ReplaceContentEntry): any => ({
    ...obj,
  });
}

/**
 * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
 *             resolving conflicts during a merge.</p>
 */
export interface ConflictResolution {
  /**
   * <p>Files to have content replaced as part of the merge conflict resolution.</p>
   */
  replaceContents?: ReplaceContentEntry[];

  /**
   * <p>Files to be deleted as part of the merge conflict resolution.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>File modes that are set as part of the merge conflict resolution.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace ConflictResolution {
  export const filterSensitiveLog = (obj: ConflictResolution): any => ({
    ...obj,
  });
}

export interface CreateUnreferencedMergeCommitInput {
  /**
   * <p>The name of the repository where you want to create the unreferenced merge commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

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
   * <p>The name of the author who created the unreferenced commit. This information is used
   *             as both the author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address for the person who created the unreferenced commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message for the unreferenced commit.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace CreateUnreferencedMergeCommitInput {
  export const filterSensitiveLog = (obj: CreateUnreferencedMergeCommitInput): any => ({
    ...obj,
  });
}

export interface CreateUnreferencedMergeCommitOutput {
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
  export const filterSensitiveLog = (obj: CreateUnreferencedMergeCommitOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified conflict resolution list is not valid.</p>
 */
export interface InvalidConflictResolutionException extends __SmithyException, $MetadataBearer {
  name: "InvalidConflictResolutionException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidConflictResolutionException {
  export const filterSensitiveLog = (obj: InvalidConflictResolutionException): any => ({
    ...obj,
  });
}

/**
 * <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 */
export interface InvalidReplacementContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidReplacementContentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReplacementContentException {
  export const filterSensitiveLog = (obj: InvalidReplacementContentException): any => ({
    ...obj,
  });
}

/**
 * <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 */
export interface InvalidReplacementTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidReplacementTypeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReplacementTypeException {
  export const filterSensitiveLog = (obj: InvalidReplacementTypeException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 */
export interface ManualMergeRequiredException extends __SmithyException, $MetadataBearer {
  name: "ManualMergeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ManualMergeRequiredException {
  export const filterSensitiveLog = (obj: ManualMergeRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of allowed conflict resolution entries was exceeded.</p>
 */
export interface MaximumConflictResolutionEntriesExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumConflictResolutionEntriesExceededException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MaximumConflictResolutionEntriesExceededException {
  export const filterSensitiveLog = (obj: MaximumConflictResolutionEntriesExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 */
export interface MultipleConflictResolutionEntriesException extends __SmithyException, $MetadataBearer {
  name: "MultipleConflictResolutionEntriesException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace MultipleConflictResolutionEntriesException {
  export const filterSensitiveLog = (obj: MultipleConflictResolutionEntriesException): any => ({
    ...obj,
  });
}

/**
 * <p>USE_NEW_CONTENT was specified, but no replacement content has been provided.</p>
 */
export interface ReplacementContentRequiredException extends __SmithyException, $MetadataBearer {
  name: "ReplacementContentRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReplacementContentRequiredException {
  export const filterSensitiveLog = (obj: ReplacementContentRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>A replacement type is required.</p>
 */
export interface ReplacementTypeRequiredException extends __SmithyException, $MetadataBearer {
  name: "ReplacementTypeRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace ReplacementTypeRequiredException {
  export const filterSensitiveLog = (obj: ReplacementTypeRequiredException): any => ({
    ...obj,
  });
}

export interface DeleteApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template to delete.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace DeleteApprovalRuleTemplateInput {
  export const filterSensitiveLog = (obj: DeleteApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface DeleteApprovalRuleTemplateOutput {
  /**
   * <p>The system-generated ID of the deleted approval rule template. If the template has
   *             been previously deleted, the only response is a 200 OK.</p>
   */
  approvalRuleTemplateId: string | undefined;
}

export namespace DeleteApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (obj: DeleteApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 */
export interface DefaultBranchCannotBeDeletedException extends __SmithyException, $MetadataBearer {
  name: "DefaultBranchCannotBeDeletedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace DefaultBranchCannotBeDeletedException {
  export const filterSensitiveLog = (obj: DefaultBranchCannotBeDeletedException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a delete branch operation.</p>
 */
export interface DeleteBranchInput {
  /**
   * <p>The name of the repository that contains the branch to be deleted.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to delete.</p>
   */
  branchName: string | undefined;
}

export namespace DeleteBranchInput {
  export const filterSensitiveLog = (obj: DeleteBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a delete branch operation.</p>
 */
export interface DeleteBranchOutput {
  /**
   * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
   */
  deletedBranch?: BranchInfo;
}

export namespace DeleteBranchOutput {
  export const filterSensitiveLog = (obj: DeleteBranchOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 */
export interface CommentDeletedException extends __SmithyException, $MetadataBearer {
  name: "CommentDeletedException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentDeletedException {
  export const filterSensitiveLog = (obj: CommentDeletedException): any => ({
    ...obj,
  });
}

/**
 * <p>No comment exists with the provided ID. Verify that you have used the correct ID, and
 *             then try again.</p>
 */
export interface CommentDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "CommentDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentDoesNotExistException {
  export const filterSensitiveLog = (obj: CommentDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The comment ID is missing or null. A comment ID is required.</p>
 */
export interface CommentIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "CommentIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommentIdRequiredException {
  export const filterSensitiveLog = (obj: CommentIdRequiredException): any => ({
    ...obj,
  });
}

export interface DeleteCommentContentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *          or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace DeleteCommentContentInput {
  export const filterSensitiveLog = (obj: DeleteCommentContentInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific comment.</p>
 */
export interface Comment {
  /**
   * <p>The system-generated comment ID.</p>
   */
  commentId?: string;

  /**
   * <p>The content of the comment.</p>
   */
  content?: string;

  /**
   * <p>The ID of the comment for which this comment is a reply, if any.</p>
   */
  inReplyTo?: string;

  /**
   * <p>The date and time the comment was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the comment was most recently modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>
   */
  authorArn?: string;

  /**
   * <p>A Boolean value indicating whether the comment has been deleted.</p>
   */
  deleted?: boolean;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.</p>
   */
  callerReactions?: string[];

  /**
   * <p>A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.</p>
   */
  reactionCounts?: { [key: string]: number };
}

export namespace Comment {
  export const filterSensitiveLog = (obj: Comment): any => ({
    ...obj,
  });
}

export interface DeleteCommentContentOutput {
  /**
   * <p>Information about the comment you just deleted.</p>
   */
  comment?: Comment;
}

export namespace DeleteCommentContentOutput {
  export const filterSensitiveLog = (obj: DeleteCommentContentOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 */
export interface InvalidCommentIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidCommentIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidCommentIdException {
  export const filterSensitiveLog = (obj: InvalidCommentIdException): any => ({
    ...obj,
  });
}

export interface DeleteFileInput {
  /**
   * <p>The name of the repository that contains the file to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where the commit that deletes the file is made.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The fully qualified path to the file that to be deleted, including the full name and
   *             extension of that file. For example, /examples/file.md is a fully qualified path to a
   *             file named file.md in a folder named examples.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The ID of the commit that is the tip of the branch where you want to create the commit
   *             that deletes the file. This must be the HEAD commit for the branch. The commit that
   *             deletes the file is created from this commit ID.</p>
   */
  parentCommitId: string | undefined;

  /**
   * <p>If a file is the only object in the folder or directory, specifies whether to delete
   *             the folder or directory that contains the file. By default, empty folders are deleted.
   *             This includes empty folders that are part of the directory structure. For example, if
   *             the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the
   *             last file in dir4 also deletes the empty folders dir4, dir3, and dir2.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The commit message you want to include as part of deleting the file. Commit messages
   *             are limited to 256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the author of the commit that deletes the file. If no name is specified,
   *             the user's ARN is used as the author name and committer name.</p>
   */
  name?: string;

  /**
   * <p>The email address for the commit that deletes the file. If no email address is
   *             specified, the email address is left blank.</p>
   */
  email?: string;
}

export namespace DeleteFileInput {
  export const filterSensitiveLog = (obj: DeleteFileInput): any => ({
    ...obj,
  });
}

export interface DeleteFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the change that deletes the file.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID removed from the tree as part of deleting the file.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the delete file change.</p>
   */
  treeId: string | undefined;

  /**
   * <p>The fully qualified path to the file to be deleted, including the full name and
   *             extension of that file.</p>
   */
  filePath: string | undefined;
}

export namespace DeleteFileOutput {
  export const filterSensitiveLog = (obj: DeleteFileOutput): any => ({
    ...obj,
  });
}

export interface DeletePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request that contains the approval rule you want to delete.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to delete.</p>
   */
  approvalRuleName: string | undefined;
}

export namespace DeletePullRequestApprovalRuleInput {
  export const filterSensitiveLog = (obj: DeletePullRequestApprovalRuleInput): any => ({
    ...obj,
  });
}

export interface DeletePullRequestApprovalRuleOutput {
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
  export const filterSensitiveLog = (obj: DeletePullRequestApprovalRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a delete repository operation.</p>
 */
export interface DeleteRepositoryInput {
  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryInput {
  export const filterSensitiveLog = (obj: DeleteRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a delete repository operation.</p>
 */
export interface DeleteRepositoryOutput {
  /**
   * <p>The ID of the repository that was deleted.</p>
   */
  repositoryId?: string;
}

export namespace DeleteRepositoryOutput {
  export const filterSensitiveLog = (obj: DeleteRepositoryOutput): any => ({
    ...obj,
  });
}

export interface DescribeMergeConflictsInput {
  /**
   * <p>The name of the repository where you want to get information about a merge conflict.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The path of the target files used to describe the conflicts. </p>
   */
  filePath: string | undefined;

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
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace DescribeMergeConflictsInput {
  export const filterSensitiveLog = (obj: DescribeMergeConflictsInput): any => ({
    ...obj,
  });
}

export interface DescribeMergeConflictsOutput {
  /**
   * <p>Contains metadata about the conflicts found in the merge.</p>
   */
  conflictMetadata: ConflictMetadata | undefined;

  /**
   * <p>A list of merge hunks of the differences between the files or lines.</p>
   */
  mergeHunks: MergeHunk[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;
}

export namespace DescribeMergeConflictsOutput {
  export const filterSensitiveLog = (obj: DescribeMergeConflictsOutput): any => ({
    ...obj,
  });
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
  PULL_REQUEST_STATUS_CHANGED = "PULL_REQUEST_STATUS_CHANGED",
}

export interface DescribePullRequestEventsInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>Optional. The pull request event type about which you want to return information.</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.
   *             The default is 100 events, which is also the maximum number of events that can be returned in a result.</p>
   */
  maxResults?: number;
}

export namespace DescribePullRequestEventsInput {
  export const filterSensitiveLog = (obj: DescribePullRequestEventsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>
 */
export interface PullRequestCreatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The commit ID on the source branch used when the pull request was created.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;
}

export namespace PullRequestCreatedEventMetadata {
  export const filterSensitiveLog = (obj: PullRequestCreatedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the change in the merge state for a pull request event. </p>
 */
export interface PullRequestMergedStateChangedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the branch that the pull request is merged into.</p>
   */
  destinationReference?: string;

  /**
   * <p>Information about the merge state change event.</p>
   */
  mergeMetadata?: MergeMetadata;
}

export namespace PullRequestMergedStateChangedEventMetadata {
  export const filterSensitiveLog = (obj: PullRequestMergedStateChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an update to the source branch of a pull request.</p>
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was updated.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;
}

export namespace PullRequestSourceReferenceUpdatedEventMetadata {
  export const filterSensitiveLog = (obj: PullRequestSourceReferenceUpdatedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a change to the status of a pull request.</p>
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * <p>The changed status of the pull request.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;
}

export namespace PullRequestStatusChangedEventMetadata {
  export const filterSensitiveLog = (obj: PullRequestStatusChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request event.</p>
 */
export interface PullRequestEvent {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   */
  eventDate?: Date;

  /**
   * <p>The type of the pull request event (for example, a status change event
   *             (PULL_REQUEST_STATUS_CHANGED) or update event
   *             (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   */
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   */
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   */
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  /**
   * <p>Information about a pull request event.</p>
   */
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  /**
   * <p>Information about an approval state change for a pull request.</p>
   */
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  /**
   * <p>Information about an approval rule override event for a pull request.</p>
   */
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
}

export namespace PullRequestEvent {
  export const filterSensitiveLog = (obj: PullRequestEvent): any => ({
    ...obj,
  });
}

export interface DescribePullRequestEventsOutput {
  /**
   * <p>Information about the pull request events.</p>
   */
  pullRequestEvents: PullRequestEvent[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace DescribePullRequestEventsOutput {
  export const filterSensitiveLog = (obj: DescribePullRequestEventsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 */
export interface InvalidActorArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidActorArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidActorArnException {
  export const filterSensitiveLog = (obj: InvalidActorArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified number of maximum results is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidMaxResultsException {
  export const filterSensitiveLog = (obj: InvalidMaxResultsException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request event type is not valid. </p>
 */
export interface InvalidPullRequestEventTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidPullRequestEventTypeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestEventTypeException {
  export const filterSensitiveLog = (obj: InvalidPullRequestEventTypeException): any => ({
    ...obj,
  });
}

export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
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
  export const filterSensitiveLog = (obj: DisassociateApprovalRuleTemplateFromRepositoryInput): any => ({
    ...obj,
  });
}

export interface EvaluatePullRequestApprovalRulesInput {
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
  export const filterSensitiveLog = (obj: EvaluatePullRequestApprovalRulesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the approval rules applied to a pull request and whether conditions have been met.</p>
 */
export interface Evaluation {
  /**
   * <p>Whether the state of the pull request is approved.</p>
   */
  approved?: boolean;

  /**
   * <p>Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.</p>
   */
  overridden?: boolean;

  /**
   * <p>The names of the approval rules that have had their conditions met.</p>
   */
  approvalRulesSatisfied?: string[];

  /**
   * <p>The names of the approval rules that have not had their conditions met.</p>
   */
  approvalRulesNotSatisfied?: string[];
}

export namespace Evaluation {
  export const filterSensitiveLog = (obj: Evaluation): any => ({
    ...obj,
  });
}

export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * <p>The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have
   *         not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. </p>
   */
  evaluation: Evaluation | undefined;
}

export namespace EvaluatePullRequestApprovalRulesOutput {
  export const filterSensitiveLog = (obj: EvaluatePullRequestApprovalRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 */
export interface InvalidRevisionIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidRevisionIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidRevisionIdException {
  export const filterSensitiveLog = (obj: InvalidRevisionIdException): any => ({
    ...obj,
  });
}

/**
 * <p>A revision ID is required, but was not provided.</p>
 */
export interface RevisionIdRequiredException extends __SmithyException, $MetadataBearer {
  name: "RevisionIdRequiredException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RevisionIdRequiredException {
  export const filterSensitiveLog = (obj: RevisionIdRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.</p>
 */
export interface RevisionNotCurrentException extends __SmithyException, $MetadataBearer {
  name: "RevisionNotCurrentException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RevisionNotCurrentException {
  export const filterSensitiveLog = (obj: RevisionNotCurrentException): any => ({
    ...obj,
  });
}

export interface GetApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to get information.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace GetApprovalRuleTemplateInput {
  export const filterSensitiveLog = (obj: GetApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface GetApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace GetApprovalRuleTemplateOutput {
  export const filterSensitiveLog = (obj: GetApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface FileTooLargeException extends __SmithyException, $MetadataBearer {
  name: "FileTooLargeException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FileTooLargeException {
  export const filterSensitiveLog = (obj: FileTooLargeException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get blob operation.</p>
 */
export interface GetBlobInput {
  /**
   * <p>The name of the repository that contains the blob.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;
}

export namespace GetBlobInput {
  export const filterSensitiveLog = (obj: GetBlobInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get blob operation.</p>
 */
export interface GetBlobOutput {
  /**
   * <p>The content of the blob, usually a file.</p>
   */
  content: Uint8Array | undefined;
}

export namespace GetBlobOutput {
  export const filterSensitiveLog = (obj: GetBlobOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified blob is not valid.</p>
 */
export interface InvalidBlobIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidBlobIdException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidBlobIdException {
  export const filterSensitiveLog = (obj: InvalidBlobIdException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get branch operation.</p>
 */
export interface GetBranchInput {
  /**
   * <p>The name of the repository that contains the branch for which you want to retrieve information.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the branch for which you want to retrieve information.</p>
   */
  branchName?: string;
}

export namespace GetBranchInput {
  export const filterSensitiveLog = (obj: GetBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get branch operation.</p>
 */
export interface GetBranchOutput {
  /**
   * <p>The name of the branch.</p>
   */
  branch?: BranchInfo;
}

export namespace GetBranchOutput {
  export const filterSensitiveLog = (obj: GetBranchOutput): any => ({
    ...obj,
  });
}

export interface GetCommentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace GetCommentInput {
  export const filterSensitiveLog = (obj: GetCommentInput): any => ({
    ...obj,
  });
}

export interface GetCommentOutput {
  /**
   * <p>The contents of the comment.</p>
   */
  comment?: Comment;
}

export namespace GetCommentOutput {
  export const filterSensitiveLog = (obj: GetCommentOutput): any => ({
    ...obj,
  });
}

export interface GetCommentReactionsInput {
  /**
   * <p>The ID of the comment for which you want to get reactions information.</p>
   */
  commentId: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information.</p>
   */
  reactionUserArn?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the results. </p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.  The default is the same as the allowed maximum, 1,000.</p>
   */
  maxResults?: number;
}

export namespace GetCommentReactionsInput {
  export const filterSensitiveLog = (obj: GetCommentReactionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.</p>
 */
export interface ReactionValueFormats {
  /**
   * <p>The Emoji Version 1.0 graphic of the reaction. These graphics are interpreted slightly differently on different operating systems.</p>
   */
  emoji?: string;

  /**
   * <p>The emoji short code for the reaction. Short codes are interpreted slightly differently on different operating systems. </p>
   */
  shortCode?: string;

  /**
   * <p>The Unicode codepoint for the reaction.</p>
   */
  unicode?: string;
}

export namespace ReactionValueFormats {
  export const filterSensitiveLog = (obj: ReactionValueFormats): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the reaction values provided by users on a comment.</p>
 */
export interface ReactionForComment {
  /**
   * <p>The reaction for a specified comment.</p>
   */
  reaction?: ReactionValueFormats;

  /**
   * <p>The Amazon Resource Names (ARNs) of users who have provided reactions to the comment.</p>
   */
  reactionUsers?: string[];

  /**
   * <p>A numerical count of users who reacted with the specified emoji whose identities have been subsequently deleted
   *             from IAM. While these IAM users or roles no longer exist, the reactions might still appear in total reaction counts.</p>
   */
  reactionsFromDeletedUsersCount?: number;
}

export namespace ReactionForComment {
  export const filterSensitiveLog = (obj: ReactionForComment): any => ({
    ...obj,
  });
}

export interface GetCommentReactionsOutput {
  /**
   * <p>An array of reactions to the specified comment.</p>
   */
  reactionsForComment: ReactionForComment[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentReactionsOutput {
  export const filterSensitiveLog = (obj: GetCommentReactionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 */
export interface InvalidReactionUserArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidReactionUserArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidReactionUserArnException {
  export const filterSensitiveLog = (obj: InvalidReactionUserArnException): any => ({
    ...obj,
  });
}

export interface GetCommentsForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to compare commits.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>An enumeration token that when provided in a request, returns the next batch of the results. </p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The
   *             default is 100 comments, but you can configure up to 500.</p>
   */
  maxResults?: number;
}

export namespace GetCommentsForComparedCommitInput {
  export const filterSensitiveLog = (obj: GetCommentsForComparedCommitInput): any => ({
    ...obj,
  });
}

export enum RelativeFileVersionEnum {
  AFTER = "AFTER",
  BEFORE = "BEFORE",
}

/**
 * <p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>
 */
export interface Location {
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
    ...obj,
  });
}

/**
 * <p>Returns information about comments on the comparison between two commits.</p>
 */
export interface CommentsForComparedCommit {
  /**
   * <p>The name of the repository that contains the compared commits.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit used to establish the before of the
   *             comparison.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit used to establish the after of the comparison.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the commit used to establish the before of the comparison.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full blob ID of the commit used to establish the after of the comparison.</p>
   */
  afterBlobId?: string;

  /**
   * <p>Location information about the comment on the comparison, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE or
   *             AFTER.</p>
   */
  location?: Location;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the comparison
   *          between commits.</p>
   */
  comments?: Comment[];
}

export namespace CommentsForComparedCommit {
  export const filterSensitiveLog = (obj: CommentsForComparedCommit): any => ({
    ...obj,
  });
}

export interface GetCommentsForComparedCommitOutput {
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
  export const filterSensitiveLog = (obj: GetCommentsForComparedCommitOutput): any => ({
    ...obj,
  });
}

export interface GetCommentsForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.</p>
   */
  afterCommitId?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments.
   *             You can return up to 500 comments with a single request.</p>
   */
  maxResults?: number;
}

export namespace GetCommentsForPullRequestInput {
  export const filterSensitiveLog = (obj: GetCommentsForPullRequestInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about comments on a pull request.</p>
 */
export interface CommentsForPullRequest {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the destination branch when the
   *             pull request was created. This commit is superceded by the after commit in the source
   *             branch when and if you merge the source branch into the destination branch.</p>
   */
  beforeCommitId?: string;

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
   * <p>The full blob ID of the file on which you want to comment on the source commit.</p>
   */
  afterBlobId?: string;

  /**
   * <p>Location information about the comment on the pull request, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE
   *             (destination branch) or AFTER (source branch).</p>
   */
  location?: Location;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   */
  comments?: Comment[];
}

export namespace CommentsForPullRequest {
  export const filterSensitiveLog = (obj: CommentsForPullRequest): any => ({
    ...obj,
  });
}

export interface GetCommentsForPullRequestOutput {
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
  export const filterSensitiveLog = (obj: GetCommentsForPullRequestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 */
export interface RepositoryNotAssociatedWithPullRequestException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNotAssociatedWithPullRequestException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNotAssociatedWithPullRequestException {
  export const filterSensitiveLog = (obj: RepositoryNotAssociatedWithPullRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified commit ID does not exist.</p>
 */
export interface CommitIdDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "CommitIdDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace CommitIdDoesNotExistException {
  export const filterSensitiveLog = (obj: CommitIdDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get commit operation.</p>
 */
export interface GetCommitInput {
  /**
   * <p>The name of the repository to which the commit was made.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The commit ID. Commit IDs are the full SHA ID of the commit.</p>
   */
  commitId: string | undefined;
}

export namespace GetCommitInput {
  export const filterSensitiveLog = (obj: GetCommitInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get commit operation.</p>
 */
export interface GetCommitOutput {
  /**
   * <p>A commit data type object that contains information about the specified commit.</p>
   */
  commit: Commit | undefined;
}

export namespace GetCommitOutput {
  export const filterSensitiveLog = (obj: GetCommitOutput): any => ({
    ...obj,
  });
}

export interface GetDifferencesInput {
  /**
   * <p>The name of the repository where you want to get differences.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, the full commit ID). Optional. If not specified, all changes before the
   *                 <code>afterCommitSpecifier</code> value are shown. If you do not use
   *                 <code>beforeCommitSpecifier</code> in your request, consider limiting the results
   *             with <code>maxResults</code>.</p>
   */
  beforeCommitSpecifier?: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>
   */
  afterCommitSpecifier: string | undefined;

  /**
   * <p>The file path in which to check for differences. Limits the results to this path. Can
   *             also be used to specify the previous name of a directory or folder. If
   *                 <code>beforePath</code> and <code>afterPath</code> are not specified, differences
   *             are shown for all paths.</p>
   */
  beforePath?: string;

  /**
   * <p>The file path in which to check differences. Limits the results to this path. Can also
   *             be used to specify the changed name of a directory or folder, if it has changed. If not
   *             specified, differences are shown for all paths.</p>
   */
  afterPath?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  MaxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;
}

export namespace GetDifferencesInput {
  export const filterSensitiveLog = (obj: GetDifferencesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a set of differences for a commit specifier.</p>
 */
export interface Difference {
  /**
   * <p>Information about a <code>beforeBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  beforeBlob?: BlobMetadata;

  /**
   * <p>Information about an <code>afterBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  afterBlob?: BlobMetadata;

  /**
   * <p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>
   */
  changeType?: ChangeTypeEnum | string;
}

export namespace Difference {
  export const filterSensitiveLog = (obj: Difference): any => ({
    ...obj,
  });
}

export interface GetDifferencesOutput {
  /**
   * <p>A data type object that contains information about the differences, including whether
   *             the difference is added, modified, or deleted (A, D, M).</p>
   */
  differences?: Difference[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;
}

export namespace GetDifferencesOutput {
  export const filterSensitiveLog = (obj: GetDifferencesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified path does not exist.</p>
 */
export interface PathDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "PathDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace PathDoesNotExistException {
  export const filterSensitiveLog = (obj: PathDoesNotExistException): any => ({
    ...obj,
  });
}

export interface GetFileInput {
  /**
   * <p>The name of the repository that contains the file.</p>
   */
  repositoryName: string | undefined;

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
}

export namespace GetFileInput {
  export const filterSensitiveLog = (obj: GetFileInput): any => ({
    ...obj,
  });
}

export interface GetFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the content returned by GetFile.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID of the object that represents the file content.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The fully qualified path to the specified file. Returns the name and extension of the
   *             file.</p>
   */
  filePath: string | undefined;

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
   * <p>The size of the contents of the file, in bytes.</p>
   */
  fileSize: number | undefined;

  /**
   * <p>The base-64 encoded binary data object that represents the content of the file.</p>
   */
  fileContent: Uint8Array | undefined;
}

export namespace GetFileOutput {
  export const filterSensitiveLog = (obj: GetFileOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 */
export interface FolderDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "FolderDoesNotExistException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace FolderDoesNotExistException {
  export const filterSensitiveLog = (obj: FolderDoesNotExistException): any => ({
    ...obj,
  });
}

export interface GetFolderInput {
  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;

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
}

export namespace GetFolderInput {
  export const filterSensitiveLog = (obj: GetFolderInput): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a file in a repository.</p>
 */
export interface File {
  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The fully qualified path to the file in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the file from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace File {
  export const filterSensitiveLog = (obj: File): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a folder in a repository.</p>
 */
export interface Folder {
  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;

  /**
   * <p>The fully qualified path of the folder in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the specified folder from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace Folder {
  export const filterSensitiveLog = (obj: Folder): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a submodule reference in a repository folder.</p>
 */
export interface SubModule {
  /**
   * <p>The commit ID that contains the reference to the submodule.</p>
   */
  commitId?: string;

  /**
   * <p>The fully qualified path to the folder that contains the reference to the submodule.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the submodule from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace SubModule {
  export const filterSensitiveLog = (obj: SubModule): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a symbolic link in a repository folder.</p>
 */
export interface SymbolicLink {
  /**
   * <p>The blob ID that contains the information about the symbolic link.</p>
   */
  blobId?: string;

  /**
   * <p>The fully qualified path to the folder that contains the symbolic link.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the symbolic link from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The file mode permissions of the blob that cotains information about the symbolic link.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace SymbolicLink {
  export const filterSensitiveLog = (obj: SymbolicLink): any => ({
    ...obj,
  });
}

export interface GetFolderOutput {
  /**
   * <p>The full commit ID used as a reference for the returned version of the folder
   *             content.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The fully qualified path of the folder whose contents are returned.</p>
   */
  folderPath: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;

  /**
   * <p>The list of folders that exist under the specified folder, if any.</p>
   */
  subFolders?: Folder[];

  /**
   * <p>The list of files in the specified folder, if any.</p>
   */
  files?: File[];

  /**
   * <p>The list of symbolic links to other files and folders in the specified folder, if
   *             any.</p>
   */
  symbolicLinks?: SymbolicLink[];

  /**
   * <p>The list of submodules in the specified folder, if any.</p>
   */
  subModules?: SubModule[];
}

export namespace GetFolderOutput {
  export const filterSensitiveLog = (obj: GetFolderOutput): any => ({
    ...obj,
  });
}

export interface GetMergeCommitInput {
  /**
   * <p>The name of the repository that contains the merge commit about which you want to get information.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

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
}

export namespace GetMergeCommitInput {
  export const filterSensitiveLog = (obj: GetMergeCommitInput): any => ({
    ...obj,
  });
}

export interface GetMergeCommitOutput {
  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>The commit ID for the merge commit created when the source branch was merged into the
   *             destination branch. If the fast-forward merge strategy was used, there is no merge
   *             commit.</p>
   */
  mergedCommitId?: string;
}

export namespace GetMergeCommitOutput {
  export const filterSensitiveLog = (obj: GetMergeCommitOutput): any => ({
    ...obj,
  });
}

export interface GetMergeConflictsInput {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.  </p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace GetMergeConflictsInput {
  export const filterSensitiveLog = (obj: GetMergeConflictsInput): any => ({
    ...obj,
  });
}

export interface GetMergeConflictsOutput {
  /**
   * <p>A Boolean value that indicates whether the code is mergeable by the specified merge option.</p>
   */
  mergeable: boolean | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

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
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetMergeConflictsOutput {
  export const filterSensitiveLog = (obj: GetMergeConflictsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 */
export interface InvalidDestinationCommitSpecifierException extends __SmithyException, $MetadataBearer {
  name: "InvalidDestinationCommitSpecifierException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidDestinationCommitSpecifierException {
  export const filterSensitiveLog = (obj: InvalidDestinationCommitSpecifierException): any => ({
    ...obj,
  });
}

/**
 * <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
 */
export interface InvalidSourceCommitSpecifierException extends __SmithyException, $MetadataBearer {
  name: "InvalidSourceCommitSpecifierException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSourceCommitSpecifierException {
  export const filterSensitiveLog = (obj: InvalidSourceCommitSpecifierException): any => ({
    ...obj,
  });
}

export interface GetMergeOptionsInput {
  /**
   * <p>The name of the repository that contains the commits about which you want to get merge options.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

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
}

export namespace GetMergeOptionsInput {
  export const filterSensitiveLog = (obj: GetMergeOptionsInput): any => ({
    ...obj,
  });
}

export interface GetMergeOptionsOutput {
  /**
   * <p>The merge option or strategy used to merge the code.</p>
   */
  mergeOptions: (MergeOptionTypeEnum | string)[] | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId: string | undefined;
}

export namespace GetMergeOptionsOutput {
  export const filterSensitiveLog = (obj: GetMergeOptionsOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export namespace GetPullRequestInput {
  export const filterSensitiveLog = (obj: GetPullRequestInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOutput {
  /**
   * <p>Information about the specified pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace GetPullRequestOutput {
  export const filterSensitiveLog = (obj: GetPullRequestOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestApprovalStatesInput {
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
  export const filterSensitiveLog = (obj: GetPullRequestApprovalStatesInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestApprovalStatesOutput {
  /**
   * <p>Information about users who have approved the pull request.</p>
   */
  approvals?: Approval[];
}

export namespace GetPullRequestApprovalStatesOutput {
  export const filterSensitiveLog = (obj: GetPullRequestApprovalStatesOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOverrideStateInput {
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
  export const filterSensitiveLog = (obj: GetPullRequestOverrideStateInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOverrideStateOutput {
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
  export const filterSensitiveLog = (obj: GetPullRequestOverrideStateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get repository operation.</p>
 */
export interface GetRepositoryInput {
  /**
   * <p>The name of the repository to get information about.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryInput {
  export const filterSensitiveLog = (obj: GetRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get repository operation.</p>
 */
export interface GetRepositoryOutput {
  /**
   * <p>Information about the repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace GetRepositoryOutput {
  export const filterSensitiveLog = (obj: GetRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersInput {
  /**
   * <p>The name of the repository for which the trigger is configured.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryTriggersInput {
  export const filterSensitiveLog = (obj: GetRepositoryTriggersInput): any => ({
    ...obj,
  });
}

export enum RepositoryTriggerEventEnum {
  ALL = "all",
  CREATE_REFERENCE = "createReference",
  DELETE_REFERENCE = "deleteReference",
  UPDATE_REFERENCE = "updateReference",
}

/**
 * <p>Information about a trigger for a repository.</p>
 */
export interface RepositoryTrigger {
  /**
   * <p>The name of the trigger.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the resource that is the target for a trigger (for example, the ARN of a
   *             topic in Amazon SNS).</p>
   */
  destinationArn: string | undefined;

  /**
   * <p>Any custom data associated with the trigger to be included in the information sent to
   *             the target of the trigger.</p>
   */
  customData?: string;

  /**
   * <p>The branches to be included in the trigger configuration. If you specify an empty
   *             array, the trigger applies to all branches.</p>
   *         <note>
   *             <p>Although no content is required in the array, you must include the array itself.</p>
   *         </note>
   */
  branches?: string[];

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
}

export namespace RepositoryTrigger {
  export const filterSensitiveLog = (obj: RepositoryTrigger): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersOutput {
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
  export const filterSensitiveLog = (obj: GetRepositoryTriggersOutput): any => ({
    ...obj,
  });
}

export interface ListApprovalRuleTemplatesInput {
  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListApprovalRuleTemplatesInput {
  export const filterSensitiveLog = (obj: ListApprovalRuleTemplatesInput): any => ({
    ...obj,
  });
}

export interface ListApprovalRuleTemplatesOutput {
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
  export const filterSensitiveLog = (obj: ListApprovalRuleTemplatesOutput): any => ({
    ...obj,
  });
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * <p>The name of the repository for which you want to list all associated approval rule templates.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  export const filterSensitiveLog = (obj: ListAssociatedApprovalRuleTemplatesForRepositoryInput): any => ({
    ...obj,
  });
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
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
  export const filterSensitiveLog = (obj: ListAssociatedApprovalRuleTemplatesForRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a list branches operation.</p>
 */
export interface ListBranchesInput {
  /**
   * <p>The name of the repository that contains the branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results.</p>
   */
  nextToken?: string;
}

export namespace ListBranchesInput {
  export const filterSensitiveLog = (obj: ListBranchesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a list branches operation.</p>
 */
export interface ListBranchesOutput {
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
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 */
export interface InvalidAuthorArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidAuthorArnException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidAuthorArnException {
  export const filterSensitiveLog = (obj: InvalidAuthorArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidPullRequestStatusException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidPullRequestStatusException {
  export const filterSensitiveLog = (obj: InvalidPullRequestStatusException): any => ({
    ...obj,
  });
}

export interface ListPullRequestsInput {
  /**
   * <p>The name of the repository for which you want to list pull requests.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results
   *         to pull requests created by that user.</p>
   */
  authorArn?: string;

  /**
   * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListPullRequestsInput {
  export const filterSensitiveLog = (obj: ListPullRequestsInput): any => ({
    ...obj,
  });
}

export interface ListPullRequestsOutput {
  /**
   * <p>The system-generated IDs of the pull requests.</p>
   */
  pullRequestIds: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListPullRequestsOutput {
  export const filterSensitiveLog = (obj: ListPullRequestsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified sort order is not valid.</p>
 */
export interface InvalidOrderException extends __SmithyException, $MetadataBearer {
  name: "InvalidOrderException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidOrderException {
  export const filterSensitiveLog = (obj: InvalidOrderException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified sort by value is not valid.</p>
 */
export interface InvalidSortByException extends __SmithyException, $MetadataBearer {
  name: "InvalidSortByException";
  $fault: "client";
  /**
   * <p>Any message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidSortByException {
  export const filterSensitiveLog = (obj: InvalidSortByException): any => ({
    ...obj,
  });
}
