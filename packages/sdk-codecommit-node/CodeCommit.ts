import {CodeCommitClient} from './CodeCommitClient';
import {BatchGetRepositoriesInput} from './types/BatchGetRepositoriesInput';
import {BatchGetRepositoriesOutput} from './types/BatchGetRepositoriesOutput';
import {BlobIdDoesNotExistException} from './types/BlobIdDoesNotExistException';
import {BlobIdRequiredException} from './types/BlobIdRequiredException';
import {BranchDoesNotExistException} from './types/BranchDoesNotExistException';
import {BranchNameExistsException} from './types/BranchNameExistsException';
import {BranchNameRequiredException} from './types/BranchNameRequiredException';
import {CommitDoesNotExistException} from './types/CommitDoesNotExistException';
import {CommitIdDoesNotExistException} from './types/CommitIdDoesNotExistException';
import {CommitIdRequiredException} from './types/CommitIdRequiredException';
import {CommitRequiredException} from './types/CommitRequiredException';
import {CreateBranchInput} from './types/CreateBranchInput';
import {CreateBranchOutput} from './types/CreateBranchOutput';
import {CreateRepositoryInput} from './types/CreateRepositoryInput';
import {CreateRepositoryOutput} from './types/CreateRepositoryOutput';
import {DefaultBranchCannotBeDeletedException} from './types/DefaultBranchCannotBeDeletedException';
import {DeleteBranchInput} from './types/DeleteBranchInput';
import {DeleteBranchOutput} from './types/DeleteBranchOutput';
import {DeleteRepositoryInput} from './types/DeleteRepositoryInput';
import {DeleteRepositoryOutput} from './types/DeleteRepositoryOutput';
import {EncryptionIntegrityChecksFailedException} from './types/EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './types/EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './types/EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './types/EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './types/EncryptionKeyUnavailableException';
import {FileTooLargeException} from './types/FileTooLargeException';
import {GetBlobInput} from './types/GetBlobInput';
import {GetBlobOutput} from './types/GetBlobOutput';
import {GetBranchInput} from './types/GetBranchInput';
import {GetBranchOutput} from './types/GetBranchOutput';
import {GetCommitInput} from './types/GetCommitInput';
import {GetCommitOutput} from './types/GetCommitOutput';
import {GetDifferencesInput} from './types/GetDifferencesInput';
import {GetDifferencesOutput} from './types/GetDifferencesOutput';
import {GetRepositoryInput} from './types/GetRepositoryInput';
import {GetRepositoryOutput} from './types/GetRepositoryOutput';
import {GetRepositoryTriggersInput} from './types/GetRepositoryTriggersInput';
import {GetRepositoryTriggersOutput} from './types/GetRepositoryTriggersOutput';
import {InvalidBlobIdException} from './types/InvalidBlobIdException';
import {InvalidBranchNameException} from './types/InvalidBranchNameException';
import {InvalidCommitException} from './types/InvalidCommitException';
import {InvalidCommitIdException} from './types/InvalidCommitIdException';
import {InvalidContinuationTokenException} from './types/InvalidContinuationTokenException';
import {InvalidMaxResultsException} from './types/InvalidMaxResultsException';
import {InvalidOrderException} from './types/InvalidOrderException';
import {InvalidPathException} from './types/InvalidPathException';
import {InvalidRepositoryDescriptionException} from './types/InvalidRepositoryDescriptionException';
import {InvalidRepositoryNameException} from './types/InvalidRepositoryNameException';
import {InvalidRepositoryTriggerBranchNameException} from './types/InvalidRepositoryTriggerBranchNameException';
import {InvalidRepositoryTriggerCustomDataException} from './types/InvalidRepositoryTriggerCustomDataException';
import {InvalidRepositoryTriggerDestinationArnException} from './types/InvalidRepositoryTriggerDestinationArnException';
import {InvalidRepositoryTriggerEventsException} from './types/InvalidRepositoryTriggerEventsException';
import {InvalidRepositoryTriggerNameException} from './types/InvalidRepositoryTriggerNameException';
import {InvalidRepositoryTriggerRegionException} from './types/InvalidRepositoryTriggerRegionException';
import {InvalidSortByException} from './types/InvalidSortByException';
import {ListBranchesInput} from './types/ListBranchesInput';
import {ListBranchesOutput} from './types/ListBranchesOutput';
import {ListRepositoriesInput} from './types/ListRepositoriesInput';
import {ListRepositoriesOutput} from './types/ListRepositoriesOutput';
import {MaximumBranchesExceededException} from './types/MaximumBranchesExceededException';
import {MaximumRepositoryNamesExceededException} from './types/MaximumRepositoryNamesExceededException';
import {MaximumRepositoryTriggersExceededException} from './types/MaximumRepositoryTriggersExceededException';
import {PathDoesNotExistException} from './types/PathDoesNotExistException';
import {PutRepositoryTriggersInput} from './types/PutRepositoryTriggersInput';
import {PutRepositoryTriggersOutput} from './types/PutRepositoryTriggersOutput';
import {RepositoryDoesNotExistException} from './types/RepositoryDoesNotExistException';
import {RepositoryLimitExceededException} from './types/RepositoryLimitExceededException';
import {RepositoryNameExistsException} from './types/RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './types/RepositoryNameRequiredException';
import {RepositoryNamesRequiredException} from './types/RepositoryNamesRequiredException';
import {RepositoryTriggerBranchNameListRequiredException} from './types/RepositoryTriggerBranchNameListRequiredException';
import {RepositoryTriggerDestinationArnRequiredException} from './types/RepositoryTriggerDestinationArnRequiredException';
import {RepositoryTriggerEventsListRequiredException} from './types/RepositoryTriggerEventsListRequiredException';
import {RepositoryTriggerNameRequiredException} from './types/RepositoryTriggerNameRequiredException';
import {RepositoryTriggersListRequiredException} from './types/RepositoryTriggersListRequiredException';
import {TestRepositoryTriggersInput} from './types/TestRepositoryTriggersInput';
import {TestRepositoryTriggersOutput} from './types/TestRepositoryTriggersOutput';
import {UpdateDefaultBranchInput} from './types/UpdateDefaultBranchInput';
import {UpdateDefaultBranchOutput} from './types/UpdateDefaultBranchOutput';
import {UpdateRepositoryDescriptionInput} from './types/UpdateRepositoryDescriptionInput';
import {UpdateRepositoryDescriptionOutput} from './types/UpdateRepositoryDescriptionOutput';
import {UpdateRepositoryNameInput} from './types/UpdateRepositoryNameInput';
import {UpdateRepositoryNameOutput} from './types/UpdateRepositoryNameOutput';
import {BatchGetRepositoriesCommand} from './commands/BatchGetRepositoriesCommand';
import {CreateBranchCommand} from './commands/CreateBranchCommand';
import {CreateRepositoryCommand} from './commands/CreateRepositoryCommand';
import {DeleteBranchCommand} from './commands/DeleteBranchCommand';
import {DeleteRepositoryCommand} from './commands/DeleteRepositoryCommand';
import {GetBlobCommand} from './commands/GetBlobCommand';
import {GetBranchCommand} from './commands/GetBranchCommand';
import {GetCommitCommand} from './commands/GetCommitCommand';
import {GetDifferencesCommand} from './commands/GetDifferencesCommand';
import {GetRepositoryCommand} from './commands/GetRepositoryCommand';
import {GetRepositoryTriggersCommand} from './commands/GetRepositoryTriggersCommand';
import {ListBranchesCommand} from './commands/ListBranchesCommand';
import {ListRepositoriesCommand} from './commands/ListRepositoriesCommand';
import {PutRepositoryTriggersCommand} from './commands/PutRepositoryTriggersCommand';
import {TestRepositoryTriggersCommand} from './commands/TestRepositoryTriggersCommand';
import {UpdateDefaultBranchCommand} from './commands/UpdateDefaultBranchCommand';
import {UpdateRepositoryDescriptionCommand} from './commands/UpdateRepositoryDescriptionCommand';
import {UpdateRepositoryNameCommand} from './commands/UpdateRepositoryNameCommand';

export class CodeCommit extends CodeCommitClient {
    /**
     * <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNamesRequiredException} <p>A repository names object is required but was not specified.</p>
     *   - {MaximumRepositoryNamesExceededException} <p>The maximum number of allowed repository names was exceeded. Currently, this number is 25.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public batchGetRepositories(args: BatchGetRepositoriesInput): Promise<BatchGetRepositoriesOutput>;
    public batchGetRepositories(
        args: BatchGetRepositoriesInput,
        cb: (err: any, data?: BatchGetRepositoriesOutput) => void
    ): void;
    public batchGetRepositories(
        args: BatchGetRepositoriesInput,
        cb?: (err: any, data?: BatchGetRepositoriesOutput) => void
    ): Promise<BatchGetRepositoriesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new BatchGetRepositoriesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
     *   - {BranchNameExistsException} <p>The specified branch name already exists.</p>
     *   - {InvalidBranchNameException} <p>The specified branch name is not valid.</p>
     *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
     *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
     *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createBranch(args: CreateBranchInput): Promise<CreateBranchOutput>;
    public createBranch(
        args: CreateBranchInput,
        cb: (err: any, data?: CreateBranchOutput) => void
    ): void;
    public createBranch(
        args: CreateBranchInput,
        cb?: (err: any, data?: CreateBranchOutput) => void
    ): Promise<CreateBranchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new, empty repository.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameExistsException} <p>The specified repository name already exists.</p>
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {InvalidRepositoryDescriptionException} <p>The specified repository description is not valid.</p>
     *   - {RepositoryLimitExceededException} <p>A repository resource limit was exceeded.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createRepository(args: CreateRepositoryInput): Promise<CreateRepositoryOutput>;
    public createRepository(
        args: CreateRepositoryInput,
        cb: (err: any, data?: CreateRepositoryOutput) => void
    ): void;
    public createRepository(
        args: CreateRepositoryInput,
        cb?: (err: any, data?: CreateRepositoryOutput) => void
    ): Promise<CreateRepositoryOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
     *   - {InvalidBranchNameException} <p>The specified branch name is not valid.</p>
     *   - {DefaultBranchCannotBeDeletedException} <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBranch(args: DeleteBranchInput): Promise<DeleteBranchOutput>;
    public deleteBranch(
        args: DeleteBranchInput,
        cb: (err: any, data?: DeleteBranchOutput) => void
    ): void;
    public deleteBranch(
        args: DeleteBranchInput,
        cb?: (err: any, data?: DeleteBranchOutput) => void
    ): Promise<DeleteBranchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.</p> </important>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteRepository(args: DeleteRepositoryInput): Promise<DeleteRepositoryOutput>;
    public deleteRepository(
        args: DeleteRepositoryInput,
        cb: (err: any, data?: DeleteRepositoryOutput) => void
    ): void;
    public deleteRepository(
        args: DeleteRepositoryInput,
        cb?: (err: any, data?: DeleteRepositoryOutput) => void
    ): Promise<DeleteRepositoryOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the base-64 encoded content of an individual blob within a repository.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {BlobIdRequiredException} <p>A blob ID is required but was not specified.</p>
     *   - {InvalidBlobIdException} <p>The specified blob is not valid.</p>
     *   - {BlobIdDoesNotExistException} <p>The specified blob does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {FileTooLargeException} <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBlob(args: GetBlobInput): Promise<GetBlobOutput>;
    public getBlob(
        args: GetBlobInput,
        cb: (err: any, data?: GetBlobOutput) => void
    ): void;
    public getBlob(
        args: GetBlobInput,
        cb?: (err: any, data?: GetBlobOutput) => void
    ): Promise<GetBlobOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBlobCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
     *   - {InvalidBranchNameException} <p>The specified branch name is not valid.</p>
     *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBranch(args: GetBranchInput): Promise<GetBranchOutput>;
    public getBranch(
        args: GetBranchInput,
        cb: (err: any, data?: GetBranchOutput) => void
    ): void;
    public getBranch(
        args: GetBranchInput,
        cb?: (err: any, data?: GetBranchOutput) => void
    ): Promise<GetBranchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns information about a commit, including commit message and committer information.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {CommitIdRequiredException} <p>A commit ID was not specified.</p>
     *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
     *   - {CommitIdDoesNotExistException} <p>The specified commit ID does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getCommit(args: GetCommitInput): Promise<GetCommitOutput>;
    public getCommit(
        args: GetCommitInput,
        cb: (err: any, data?: GetCommitOutput) => void
    ): void;
    public getCommit(
        args: GetCommitInput,
        cb?: (err: any, data?: GetCommitOutput) => void
    ): Promise<GetCommitOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetCommitCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
     *   - {InvalidMaxResultsException} <p>The specified number of maximum results is not valid.</p>
     *   - {InvalidCommitIdException} <p>The specified commit ID is not valid.</p>
     *   - {CommitRequiredException} <p>A commit was not specified.</p>
     *   - {InvalidCommitException} <p>The specified commit is not valid.</p>
     *   - {CommitDoesNotExistException} <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
     *   - {InvalidPathException} <p>The specified path is not valid.</p>
     *   - {PathDoesNotExistException} <p>The specified path does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getDifferences(args: GetDifferencesInput): Promise<GetDifferencesOutput>;
    public getDifferences(
        args: GetDifferencesInput,
        cb: (err: any, data?: GetDifferencesOutput) => void
    ): void;
    public getDifferences(
        args: GetDifferencesInput,
        cb?: (err: any, data?: GetDifferencesOutput) => void
    ): Promise<GetDifferencesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetDifferencesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getRepository(args: GetRepositoryInput): Promise<GetRepositoryOutput>;
    public getRepository(
        args: GetRepositoryInput,
        cb: (err: any, data?: GetRepositoryOutput) => void
    ): void;
    public getRepository(
        args: GetRepositoryInput,
        cb?: (err: any, data?: GetRepositoryOutput) => void
    ): Promise<GetRepositoryOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetRepositoryCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets information about triggers configured for a repository.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getRepositoryTriggers(args: GetRepositoryTriggersInput): Promise<GetRepositoryTriggersOutput>;
    public getRepositoryTriggers(
        args: GetRepositoryTriggersInput,
        cb: (err: any, data?: GetRepositoryTriggersOutput) => void
    ): void;
    public getRepositoryTriggers(
        args: GetRepositoryTriggersInput,
        cb?: (err: any, data?: GetRepositoryTriggersOutput) => void
    ): Promise<GetRepositoryTriggersOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets information about one or more branches in a repository.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listBranches(args: ListBranchesInput): Promise<ListBranchesOutput>;
    public listBranches(
        args: ListBranchesInput,
        cb: (err: any, data?: ListBranchesOutput) => void
    ): void;
    public listBranches(
        args: ListBranchesInput,
        cb?: (err: any, data?: ListBranchesOutput) => void
    ): Promise<ListBranchesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListBranchesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets information about one or more repositories.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidSortByException} <p>The specified sort by value is not valid.</p>
     *   - {InvalidOrderException} <p>The specified sort order is not valid.</p>
     *   - {InvalidContinuationTokenException} <p>The specified continuation token is not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listRepositories(args: ListRepositoriesInput): Promise<ListRepositoriesOutput>;
    public listRepositories(
        args: ListRepositoriesInput,
        cb: (err: any, data?: ListRepositoriesOutput) => void
    ): void;
    public listRepositories(
        args: ListRepositoriesInput,
        cb?: (err: any, data?: ListRepositoriesOutput) => void
    ): Promise<ListRepositoriesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListRepositoriesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Replaces all triggers for a repository. This can be used to create or delete triggers.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryTriggersListRequiredException} <p>The list of triggers for the repository is required but was not specified.</p>
     *   - {MaximumRepositoryTriggersExceededException} <p>The number of triggers allowed for the repository was exceeded.</p>
     *   - {InvalidRepositoryTriggerNameException} <p>The name of the trigger is not valid.</p>
     *   - {InvalidRepositoryTriggerDestinationArnException} <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
     *   - {InvalidRepositoryTriggerRegionException} <p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>
     *   - {InvalidRepositoryTriggerCustomDataException} <p>The custom data provided for the trigger is not valid.</p>
     *   - {MaximumBranchesExceededException} <p>The number of branches for the trigger was exceeded.</p>
     *   - {InvalidRepositoryTriggerBranchNameException} <p>One or more branch names specified for the trigger is not valid.</p>
     *   - {InvalidRepositoryTriggerEventsException} <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
     *   - {RepositoryTriggerNameRequiredException} <p>A name for the trigger is required but was not specified.</p>
     *   - {RepositoryTriggerDestinationArnRequiredException} <p>A destination ARN for the target service for the trigger is required but was not specified.</p>
     *   - {RepositoryTriggerBranchNameListRequiredException} <p>At least one branch name is required but was not specified in the trigger configuration.</p>
     *   - {RepositoryTriggerEventsListRequiredException} <p>At least one event for the trigger is required but was not specified.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putRepositoryTriggers(args: PutRepositoryTriggersInput): Promise<PutRepositoryTriggersOutput>;
    public putRepositoryTriggers(
        args: PutRepositoryTriggersInput,
        cb: (err: any, data?: PutRepositoryTriggersOutput) => void
    ): void;
    public putRepositoryTriggers(
        args: PutRepositoryTriggersInput,
        cb?: (err: any, data?: PutRepositoryTriggersOutput) => void
    ): Promise<PutRepositoryTriggersOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {RepositoryTriggersListRequiredException} <p>The list of triggers for the repository is required but was not specified.</p>
     *   - {MaximumRepositoryTriggersExceededException} <p>The number of triggers allowed for the repository was exceeded.</p>
     *   - {InvalidRepositoryTriggerNameException} <p>The name of the trigger is not valid.</p>
     *   - {InvalidRepositoryTriggerDestinationArnException} <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
     *   - {InvalidRepositoryTriggerRegionException} <p>The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.</p>
     *   - {InvalidRepositoryTriggerCustomDataException} <p>The custom data provided for the trigger is not valid.</p>
     *   - {MaximumBranchesExceededException} <p>The number of branches for the trigger was exceeded.</p>
     *   - {InvalidRepositoryTriggerBranchNameException} <p>One or more branch names specified for the trigger is not valid.</p>
     *   - {InvalidRepositoryTriggerEventsException} <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
     *   - {RepositoryTriggerNameRequiredException} <p>A name for the trigger is required but was not specified.</p>
     *   - {RepositoryTriggerDestinationArnRequiredException} <p>A destination ARN for the target service for the trigger is required but was not specified.</p>
     *   - {RepositoryTriggerBranchNameListRequiredException} <p>At least one branch name is required but was not specified in the trigger configuration.</p>
     *   - {RepositoryTriggerEventsListRequiredException} <p>At least one event for the trigger is required but was not specified.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public testRepositoryTriggers(args: TestRepositoryTriggersInput): Promise<TestRepositoryTriggersOutput>;
    public testRepositoryTriggers(
        args: TestRepositoryTriggersInput,
        cb: (err: any, data?: TestRepositoryTriggersOutput) => void
    ): void;
    public testRepositoryTriggers(
        args: TestRepositoryTriggersInput,
        cb?: (err: any, data?: TestRepositoryTriggersOutput) => void
    ): Promise<TestRepositoryTriggersOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new TestRepositoryTriggersCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {BranchNameRequiredException} <p>A branch name is required but was not specified.</p>
     *   - {InvalidBranchNameException} <p>The specified branch name is not valid.</p>
     *   - {BranchDoesNotExistException} <p>The specified branch does not exist.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateDefaultBranch(args: UpdateDefaultBranchInput): Promise<UpdateDefaultBranchOutput>;
    public updateDefaultBranch(
        args: UpdateDefaultBranchInput,
        cb: (err: any, data?: UpdateDefaultBranchOutput) => void
    ): void;
    public updateDefaultBranch(
        args: UpdateDefaultBranchInput,
        cb?: (err: any, data?: UpdateDefaultBranchOutput) => void
    ): Promise<UpdateDefaultBranchOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateDefaultBranchCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {InvalidRepositoryDescriptionException} <p>The specified repository description is not valid.</p>
     *   - {EncryptionIntegrityChecksFailedException} <p>An encryption integrity check failed.</p>
     *   - {EncryptionKeyAccessDeniedException} <p>An encryption key could not be accessed.</p>
     *   - {EncryptionKeyDisabledException} <p>The encryption key is disabled.</p>
     *   - {EncryptionKeyNotFoundException} <p>No encryption key was found.</p>
     *   - {EncryptionKeyUnavailableException} <p>The encryption key is not available.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateRepositoryDescription(args: UpdateRepositoryDescriptionInput): Promise<UpdateRepositoryDescriptionOutput>;
    public updateRepositoryDescription(
        args: UpdateRepositoryDescriptionInput,
        cb: (err: any, data?: UpdateRepositoryDescriptionOutput) => void
    ): void;
    public updateRepositoryDescription(
        args: UpdateRepositoryDescriptionInput,
        cb?: (err: any, data?: UpdateRepositoryDescriptionOutput) => void
    ): Promise<UpdateRepositoryDescriptionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateRepositoryDescriptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix ".git" is prohibited. For a full description of the limits on repository names, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {RepositoryDoesNotExistException} <p>The specified repository does not exist.</p>
     *   - {RepositoryNameExistsException} <p>The specified repository name already exists.</p>
     *   - {RepositoryNameRequiredException} <p>A repository name is required but was not specified.</p>
     *   - {InvalidRepositoryNameException} <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateRepositoryName(args: UpdateRepositoryNameInput): Promise<UpdateRepositoryNameOutput>;
    public updateRepositoryName(
        args: UpdateRepositoryNameInput,
        cb: (err: any, data?: UpdateRepositoryNameOutput) => void
    ): void;
    public updateRepositoryName(
        args: UpdateRepositoryNameInput,
        cb?: (err: any, data?: UpdateRepositoryNameOutput) => void
    ): Promise<UpdateRepositoryNameOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateRepositoryNameCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
