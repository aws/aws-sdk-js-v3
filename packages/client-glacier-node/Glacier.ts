import {GlacierClient} from './GlacierClient';
import {AbortMultipartUploadInput} from './types/AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from './types/AbortMultipartUploadOutput';
import {AbortVaultLockInput} from './types/AbortVaultLockInput';
import {AbortVaultLockOutput} from './types/AbortVaultLockOutput';
import {AddTagsToVaultInput} from './types/AddTagsToVaultInput';
import {AddTagsToVaultOutput} from './types/AddTagsToVaultOutput';
import {CompleteMultipartUploadInput} from './types/CompleteMultipartUploadInput';
import {CompleteMultipartUploadOutput} from './types/CompleteMultipartUploadOutput';
import {CompleteVaultLockInput} from './types/CompleteVaultLockInput';
import {CompleteVaultLockOutput} from './types/CompleteVaultLockOutput';
import {CreateVaultInput} from './types/CreateVaultInput';
import {CreateVaultOutput} from './types/CreateVaultOutput';
import {DeleteArchiveInput} from './types/DeleteArchiveInput';
import {DeleteArchiveOutput} from './types/DeleteArchiveOutput';
import {DeleteVaultAccessPolicyInput} from './types/DeleteVaultAccessPolicyInput';
import {DeleteVaultAccessPolicyOutput} from './types/DeleteVaultAccessPolicyOutput';
import {DeleteVaultInput} from './types/DeleteVaultInput';
import {DeleteVaultNotificationsInput} from './types/DeleteVaultNotificationsInput';
import {DeleteVaultNotificationsOutput} from './types/DeleteVaultNotificationsOutput';
import {DeleteVaultOutput} from './types/DeleteVaultOutput';
import {DescribeJobInput} from './types/DescribeJobInput';
import {DescribeJobOutput} from './types/DescribeJobOutput';
import {DescribeVaultInput} from './types/DescribeVaultInput';
import {DescribeVaultOutput} from './types/DescribeVaultOutput';
import {GetDataRetrievalPolicyInput} from './types/GetDataRetrievalPolicyInput';
import {GetDataRetrievalPolicyOutput} from './types/GetDataRetrievalPolicyOutput';
import {GetJobOutputInput} from './types/GetJobOutputInput';
import {GetJobOutputOutput} from './types/GetJobOutputOutput';
import {GetVaultAccessPolicyInput} from './types/GetVaultAccessPolicyInput';
import {GetVaultAccessPolicyOutput} from './types/GetVaultAccessPolicyOutput';
import {GetVaultLockInput} from './types/GetVaultLockInput';
import {GetVaultLockOutput} from './types/GetVaultLockOutput';
import {GetVaultNotificationsInput} from './types/GetVaultNotificationsInput';
import {GetVaultNotificationsOutput} from './types/GetVaultNotificationsOutput';
import {InitiateJobInput} from './types/InitiateJobInput';
import {InitiateJobOutput} from './types/InitiateJobOutput';
import {InitiateMultipartUploadInput} from './types/InitiateMultipartUploadInput';
import {InitiateMultipartUploadOutput} from './types/InitiateMultipartUploadOutput';
import {InitiateVaultLockInput} from './types/InitiateVaultLockInput';
import {InitiateVaultLockOutput} from './types/InitiateVaultLockOutput';
import {InsufficientCapacityException} from './types/InsufficientCapacityException';
import {InvalidParameterValueException} from './types/InvalidParameterValueException';
import {LimitExceededException} from './types/LimitExceededException';
import {ListJobsInput} from './types/ListJobsInput';
import {ListJobsOutput} from './types/ListJobsOutput';
import {ListMultipartUploadsInput} from './types/ListMultipartUploadsInput';
import {ListMultipartUploadsOutput} from './types/ListMultipartUploadsOutput';
import {ListPartsInput} from './types/ListPartsInput';
import {ListPartsOutput} from './types/ListPartsOutput';
import {ListProvisionedCapacityInput} from './types/ListProvisionedCapacityInput';
import {ListProvisionedCapacityOutput} from './types/ListProvisionedCapacityOutput';
import {ListTagsForVaultInput} from './types/ListTagsForVaultInput';
import {ListTagsForVaultOutput} from './types/ListTagsForVaultOutput';
import {ListVaultsInput} from './types/ListVaultsInput';
import {ListVaultsOutput} from './types/ListVaultsOutput';
import {MissingParameterValueException} from './types/MissingParameterValueException';
import {PolicyEnforcedException} from './types/PolicyEnforcedException';
import {PurchaseProvisionedCapacityInput} from './types/PurchaseProvisionedCapacityInput';
import {PurchaseProvisionedCapacityOutput} from './types/PurchaseProvisionedCapacityOutput';
import {RemoveTagsFromVaultInput} from './types/RemoveTagsFromVaultInput';
import {RemoveTagsFromVaultOutput} from './types/RemoveTagsFromVaultOutput';
import {RequestTimeoutException} from './types/RequestTimeoutException';
import {ResourceNotFoundException} from './types/ResourceNotFoundException';
import {ServiceUnavailableException} from './types/ServiceUnavailableException';
import {SetDataRetrievalPolicyInput} from './types/SetDataRetrievalPolicyInput';
import {SetDataRetrievalPolicyOutput} from './types/SetDataRetrievalPolicyOutput';
import {SetVaultAccessPolicyInput} from './types/SetVaultAccessPolicyInput';
import {SetVaultAccessPolicyOutput} from './types/SetVaultAccessPolicyOutput';
import {SetVaultNotificationsInput} from './types/SetVaultNotificationsInput';
import {SetVaultNotificationsOutput} from './types/SetVaultNotificationsOutput';
import {UploadArchiveInput} from './types/UploadArchiveInput';
import {UploadArchiveOutput} from './types/UploadArchiveOutput';
import {UploadMultipartPartInput} from './types/UploadMultipartPartInput';
import {UploadMultipartPartOutput} from './types/UploadMultipartPartOutput';
import {AbortMultipartUploadCommand} from './commands/AbortMultipartUploadCommand';
import {AbortVaultLockCommand} from './commands/AbortVaultLockCommand';
import {AddTagsToVaultCommand} from './commands/AddTagsToVaultCommand';
import {CompleteMultipartUploadCommand} from './commands/CompleteMultipartUploadCommand';
import {CompleteVaultLockCommand} from './commands/CompleteVaultLockCommand';
import {CreateVaultCommand} from './commands/CreateVaultCommand';
import {DeleteArchiveCommand} from './commands/DeleteArchiveCommand';
import {DeleteVaultAccessPolicyCommand} from './commands/DeleteVaultAccessPolicyCommand';
import {DeleteVaultCommand} from './commands/DeleteVaultCommand';
import {DeleteVaultNotificationsCommand} from './commands/DeleteVaultNotificationsCommand';
import {DescribeJobCommand} from './commands/DescribeJobCommand';
import {DescribeVaultCommand} from './commands/DescribeVaultCommand';
import {GetDataRetrievalPolicyCommand} from './commands/GetDataRetrievalPolicyCommand';
import {GetJobOutputCommand} from './commands/GetJobOutputCommand';
import {GetVaultAccessPolicyCommand} from './commands/GetVaultAccessPolicyCommand';
import {GetVaultLockCommand} from './commands/GetVaultLockCommand';
import {GetVaultNotificationsCommand} from './commands/GetVaultNotificationsCommand';
import {InitiateJobCommand} from './commands/InitiateJobCommand';
import {InitiateMultipartUploadCommand} from './commands/InitiateMultipartUploadCommand';
import {InitiateVaultLockCommand} from './commands/InitiateVaultLockCommand';
import {ListJobsCommand} from './commands/ListJobsCommand';
import {ListMultipartUploadsCommand} from './commands/ListMultipartUploadsCommand';
import {ListPartsCommand} from './commands/ListPartsCommand';
import {ListProvisionedCapacityCommand} from './commands/ListProvisionedCapacityCommand';
import {ListTagsForVaultCommand} from './commands/ListTagsForVaultCommand';
import {ListVaultsCommand} from './commands/ListVaultsCommand';
import {PurchaseProvisionedCapacityCommand} from './commands/PurchaseProvisionedCapacityCommand';
import {RemoveTagsFromVaultCommand} from './commands/RemoveTagsFromVaultCommand';
import {SetDataRetrievalPolicyCommand} from './commands/SetDataRetrievalPolicyCommand';
import {SetVaultAccessPolicyCommand} from './commands/SetVaultAccessPolicyCommand';
import {SetVaultNotificationsCommand} from './commands/SetVaultNotificationsCommand';
import {UploadArchiveCommand} from './commands/UploadArchiveCommand';
import {UploadMultipartPartCommand} from './commands/UploadMultipartPartCommand';

export class Glacier extends GlacierClient {
    /**
     * <p>This operation aborts a multipart upload identified by the upload ID.</p> <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public abortMultipartUpload(args: AbortMultipartUploadInput): Promise<AbortMultipartUploadOutput>;
    public abortMultipartUpload(
        args: AbortMultipartUploadInput,
        cb: (err: any, data?: AbortMultipartUploadOutput) => void
    ): void;
    public abortMultipartUpload(
        args: AbortMultipartUploadInput,
        cb?: (err: any, data?: AbortMultipartUploadOutput) => void
    ): Promise<AbortMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AbortMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation aborts the vault locking process if the vault lock is not in the <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when this operation is requested, the operation returns an <code>AccessDeniedException</code> error. Aborting the vault locking process removes the vault lock policy from the specified vault. </p> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the <code>InProgress</code> state or if there is no policy associated with the vault.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public abortVaultLock(args: AbortVaultLockInput): Promise<AbortVaultLockOutput>;
    public abortVaultLock(
        args: AbortVaultLockInput,
        cb: (err: any, data?: AbortVaultLockOutput) => void
    ): void;
    public abortVaultLock(
        args: AbortVaultLockInput,
        cb?: (err: any, data?: AbortVaultLockOutput) => void
    ): Promise<AbortVaultLockOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AbortVaultLockCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the <code>LimitExceededException</code> error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon Glacier Resources</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {LimitExceededException} <p>Returned if the request results in a vault or account limit being exceeded.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public addTagsToVault(args: AddTagsToVaultInput): Promise<AddTagsToVaultOutput>;
    public addTagsToVault(
        args: AddTagsToVaultInput,
        cb: (err: any, data?: AddTagsToVaultOutput) => void
    ): void;
    public addTagsToVault(
        args: AddTagsToVaultInput,
        cb?: (err: any, data?: AddTagsToVaultOutput) => void
    ): Promise<AddTagsToVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AddTagsToVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>You call this operation to inform Amazon Glacier that all the archive parts have been uploaded and that Amazon Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Amazon Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>.</p> <p>In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. On the server side, Amazon Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Amazon Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue.</p> <p>Additionally, Amazon Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Amazon Glacier returns an error and the operation fails.</p> <p>Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public completeMultipartUpload(args: CompleteMultipartUploadInput): Promise<CompleteMultipartUploadOutput>;
    public completeMultipartUpload(
        args: CompleteMultipartUploadInput,
        cb: (err: any, data?: CompleteMultipartUploadOutput) => void
    ): void;
    public completeMultipartUpload(
        args: CompleteMultipartUploadInput,
        cb?: (err: any, data?: CompleteMultipartUploadOutput) => void
    ): Promise<CompleteMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CompleteMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation completes the vault locking process by transitioning the vault lock from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the vault lock policy to become unchangeable. A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>This operation is idempotent. This request is always successful if the vault lock is in the <code>Locked</code> state and the provided lock ID matches the lock ID originally used to lock the vault.</p> <p>If an invalid lock ID is passed in the request when the vault lock is in the <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code> error. If an invalid lock ID is passed in the request when the vault lock is in the <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code> error.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public completeVaultLock(args: CompleteVaultLockInput): Promise<CompleteVaultLockOutput>;
    public completeVaultLock(
        args: CompleteVaultLockInput,
        cb: (err: any, data?: CompleteVaultLockOutput) => void
    ): void;
    public completeVaultLock(
        args: CompleteVaultLockInput,
        cb?: (err: any, data?: CompleteVaultLockOutput) => void
    ): Promise<CompleteVaultLockOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CompleteVaultLockCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier.</p> <p>You must use the following guidelines when naming a vault.</p> <ul> <li> <p>Names can be between 1 and 255 characters long.</p> </li> <li> <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).</p> </li> </ul> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {LimitExceededException} <p>Returned if the request results in a vault or account limit being exceeded.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createVault(args: CreateVaultInput): Promise<CreateVaultOutput>;
    public createVault(
        args: CreateVaultInput,
        cb: (err: any, data?: CreateVaultOutput) => void
    ): void;
    public createVault(
        args: CreateVaultInput,
        cb?: (err: any, data?: CreateVaultOutput) => void
    ): Promise<CreateVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:</p> <ul> <li> <p>If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail.</p> </li> <li> <p>If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output.</p> </li> </ul> <p>This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteArchive(args: DeleteArchiveInput): Promise<DeleteArchiveOutput>;
    public deleteArchive(
        args: DeleteArchiveInput,
        cb: (err: any, data?: DeleteArchiveOutput) => void
    ): void;
    public deleteArchive(
        args: DeleteArchiveInput,
        cb?: (err: any, data?: DeleteArchiveOutput) => void
    ): Promise<DeleteArchiveOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteArchiveCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use <a>DescribeVault</a> to return the number of archives in a vault, and you can use <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE archive)</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteVault(args: DeleteVaultInput): Promise<DeleteVaultOutput>;
    public deleteVault(
        args: DeleteVaultInput,
        cb: (err: any, data?: DeleteVaultOutput) => void
    ): void;
    public deleteVault(
        args: DeleteVaultInput,
        cb?: (err: any, data?: DeleteVaultOutput) => void
    ): Promise<DeleteVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request.</p> <p>This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteVaultAccessPolicy(args: DeleteVaultAccessPolicyInput): Promise<DeleteVaultAccessPolicyOutput>;
    public deleteVaultAccessPolicy(
        args: DeleteVaultAccessPolicyInput,
        cb: (err: any, data?: DeleteVaultAccessPolicyOutput) => void
    ): void;
    public deleteVaultAccessPolicy(
        args: DeleteVaultAccessPolicyInput,
        cb?: (err: any, data?: DeleteVaultAccessPolicyOutput) => void
    ): Promise<DeleteVaultAccessPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteVaultAccessPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault Notification Configuration </a> in the Amazon Glacier Developer Guide. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteVaultNotifications(args: DeleteVaultNotificationsInput): Promise<DeleteVaultNotificationsOutput>;
    public deleteVaultNotifications(
        args: DeleteVaultNotificationsInput,
        cb: (err: any, data?: DeleteVaultNotificationsOutput) => void
    ): void;
    public deleteVaultNotifications(
        args: DeleteVaultNotificationsInput,
        cb?: (err: any, data?: DeleteVaultNotificationsOutput) => void
    ): Promise<DeleteVaultNotificationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteVaultNotificationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier completes the job. For more information about initiating a job, see <a>InitiateJob</a>. </p> <note> <p>This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Amazon Glacier can notify the topic after it completes the job.</p> </note> <p>A job ID will not expire for at least 24 hours after Amazon Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For more information about using this operation, see the documentation for the underlying REST API <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeJob(args: DescribeJobInput): Promise<DescribeJobOutput>;
    public describeJob(
        args: DescribeJobInput,
        cb: (err: any, data?: DescribeJobOutput) => void
    ): void;
    public describeJob(
        args: DescribeJobInput,
        cb?: (err: any, data?: DescribeJobOutput) => void
    ): Promise<DescribeJobOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeJobCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use <a>InitiateJob</a>. Amazon Glacier generates vault inventories approximately daily. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in Amazon Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeVault(args: DescribeVaultInput): Promise<DescribeVaultOutput>;
    public describeVault(
        args: DescribeVaultInput,
        cb: (err: any, data?: DescribeVaultOutput) => void
    ): void;
    public describeVault(
        args: DescribeVaultInput,
        cb?: (err: any, data?: DescribeVaultOutput) => void
    ): Promise<DescribeVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getDataRetrievalPolicy(args: GetDataRetrievalPolicyInput): Promise<GetDataRetrievalPolicyOutput>;
    public getDataRetrievalPolicy(
        args: GetDataRetrievalPolicyInput,
        cb: (err: any, data?: GetDataRetrievalPolicyOutput) => void
    ): void;
    public getDataRetrievalPolicy(
        args: GetDataRetrievalPolicyInput,
        cb?: (err: any, data?: GetDataRetrievalPolicyOutput) => void
    ): Promise<GetDataRetrievalPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetDataRetrievalPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory.</p> <p>You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data.</p> <p>A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the <b>Get Job Output</b> response.</p> <p>For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon Glacier The expected size is also returned in the headers from the <b>Get Job Output</b> response.</p> <p>In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected.</p> <p>A job ID does not expire for at least 24 hours after Amazon Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory</a>, <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an Archive</a>, and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getJobOutput(args: GetJobOutputInput): Promise<GetJobOutputOutput>;
    public getJobOutput(
        args: GetJobOutputInput,
        cb: (err: any, data?: GetJobOutputOutput) => void
    ): void;
    public getJobOutput(
        args: GetJobOutputInput,
        cb?: (err: any, data?: GetJobOutputOutput) => void
    ): Promise<GetJobOutputOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetJobOutputCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation retrieves the <code>access-policy</code> subresource set on the vault; for more information on setting this subresource, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy (PUT access-policy)</a>. If there is no access policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault access policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getVaultAccessPolicy(args: GetVaultAccessPolicyInput): Promise<GetVaultAccessPolicyOutput>;
    public getVaultAccessPolicy(
        args: GetVaultAccessPolicyInput,
        cb: (err: any, data?: GetVaultAccessPolicyOutput) => void
    ): void;
    public getVaultAccessPolicy(
        args: GetVaultAccessPolicyInput,
        cb?: (err: any, data?: GetVaultAccessPolicyOutput) => void
    ): Promise<GetVaultAccessPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetVaultAccessPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation retrieves the following attributes from the <code>lock-policy</code> subresource set on the specified vault: </p> <ul> <li> <p>The vault lock policy set on the vault.</p> </li> <li> <p>The state of the vault lock, which is either <code>InProgess</code> or <code>Locked</code>.</p> </li> <li> <p>When the lock ID expires. The lock ID is used to complete the vault locking process.</p> </li> <li> <p>When the vault lock was initiated and put into the <code>InProgress</code> state.</p> </li> </ul> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can abort the vault locking process by calling <a>AbortVaultLock</a>. For more information about the vault locking process, <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>If there is no vault lock policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault lock policies, <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getVaultLock(args: GetVaultLockInput): Promise<GetVaultLockOutput>;
    public getVaultLock(
        args: GetVaultLockInput,
        cb: (err: any, data?: GetVaultLockOutput) => void
    ): void;
    public getVaultLock(
        args: GetVaultLockInput,
        cb?: (err: any, data?: GetVaultLockOutput) => void
    ): Promise<GetVaultLockOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetVaultLockCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation retrieves the <code>notification-configuration</code> subresource of the specified vault.</p> <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not set, the operation returns a <code>404 Not Found</code> error. For more information about vault notifications, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getVaultNotifications(args: GetVaultNotificationsInput): Promise<GetVaultNotificationsOutput>;
    public getVaultNotifications(
        args: GetVaultNotificationsInput,
        cb: (err: any, data?: GetVaultNotificationsOutput) => void
    ): void;
    public getVaultNotifications(
        args: GetVaultNotificationsInput,
        cb?: (err: any, data?: GetVaultNotificationsOutput) => void
    ): Promise<GetVaultNotificationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetVaultNotificationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {PolicyEnforcedException} <p>Returned if a retrieval job would exceed the current data policy's retrieval rate limit. For more information about data retrieval policies,</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {InsufficientCapacityException} <p>Returned if there is insufficient capacity to process this expedited request. This error only applies to expedited retrievals and not to standard or bulk retrievals.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public initiateJob(args: InitiateJobInput): Promise<InitiateJobOutput>;
    public initiateJob(
        args: InitiateJobInput,
        cb: (err: any, data?: InitiateJobOutput) => void
    ): void;
    public initiateJob(
        args: InitiateJobInput,
        cb?: (err: any, data?: InitiateJobOutput) => void
    ): Promise<InitiateJobOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new InitiateJobCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p> <p>When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB.</p> <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. </p> <note> <p>You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size.</p> </note> <p>After you complete the multipart upload, Amazon Glacier removes the multipart upload resource referenced by the ID. Amazon Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public initiateMultipartUpload(args: InitiateMultipartUploadInput): Promise<InitiateMultipartUploadOutput>;
    public initiateMultipartUpload(
        args: InitiateMultipartUploadInput,
        cb: (err: any, data?: InitiateMultipartUploadOutput) => void
    ): void;
    public initiateMultipartUpload(
        args: InitiateMultipartUploadInput,
        cb?: (err: any, data?: InitiateMultipartUploadOutput) => void
    ): Promise<InitiateMultipartUploadOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new InitiateMultipartUploadCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation initiates the vault locking process by doing the following:</p> <ul> <li> <p>Installing a vault lock policy on the specified vault.</p> </li> <li> <p>Setting the lock state of vault lock to <code>InProgress</code>.</p> </li> <li> <p>Returning a lock ID, which is used to complete the vault locking process.</p> </li> </ul> <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>You must complete the vault locking process within 24 hours after the vault lock enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the <code>InProgress</code> state, and the vault lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to complete the vault locking process by setting the state of the vault lock to <code>Locked</code>. </p> <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new vault lock for the vault.</p> <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>. You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>.</p> <p>If this operation is called when the vault lock is in the <code>InProgress</code> state, the operation returns an <code>AccessDeniedException</code> error. When the vault lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a> before you can initiate a new vault lock policy. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public initiateVaultLock(args: InitiateVaultLockInput): Promise<InitiateVaultLockOutput>;
    public initiateVaultLock(
        args: InitiateVaultLockInput,
        cb: (err: any, data?: InitiateVaultLockOutput) => void
    ): void;
    public initiateVaultLock(
        args: InitiateVaultLockInput,
        cb?: (err: any, data?: InitiateVaultLockOutput) => void
    ): Promise<InitiateVaultLockOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new InitiateVaultLockCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time.</p> <note> <p>Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.</p> </note> <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field. If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list, the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p> <p>You can set a maximum limit for the number of jobs returned in the response by specifying the <code>limit</code> parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit.</p> <p>Additionally, you can filter the jobs list returned by specifying the optional <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using the <code>statuscode</code> parameter, you can specify to return only jobs that match either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status. Using the <code>completed</code> parameter, you can specify to return only jobs that were completed (<code>true</code>) or jobs that were not completed (<code>false</code>).</p> <p>For more information about using this operation, see the documentation for the underlying REST API <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
    public listJobs(
        args: ListJobsInput,
        cb: (err: any, data?: ListJobsOutput) => void
    ): void;
    public listJobs(
        args: ListJobsInput,
        cb?: (err: any, data?: ListJobsOutput) => void
    ): Promise<ListJobsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListJobsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order. </p> <p>The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of multipart uploads that begins at a specific upload, set the <code>marker</code> request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the <code>limit</code> parameter in the request.</p> <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listMultipartUploads(args: ListMultipartUploadsInput): Promise<ListMultipartUploadsOutput>;
    public listMultipartUploads(
        args: ListMultipartUploadsInput,
        cb: (err: any, data?: ListMultipartUploadsOutput) => void
    ): void;
    public listMultipartUploads(
        args: ListMultipartUploadsInput,
        cb?: (err: any, data?: ListMultipartUploadsOutput) => void
    ): Promise<ListMultipartUploadsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListMultipartUploadsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range. </p> <p>The List Parts operation supports pagination. By default, this operation returns up to 50 uploaded parts in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of parts that begins at a specific part, set the <code>marker</code> request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listParts(args: ListPartsInput): Promise<ListPartsOutput>;
    public listParts(
        args: ListPartsInput,
        cb: (err: any, data?: ListPartsOutput) => void
    ): void;
    public listParts(
        args: ListPartsInput,
        cb?: (err: any, data?: ListPartsOutput) => void
    ): Promise<ListPartsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListPartsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists the provisioned capacity units for the specified AWS account.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listProvisionedCapacity(args: ListProvisionedCapacityInput): Promise<ListProvisionedCapacityOutput>;
    public listProvisionedCapacity(
        args: ListProvisionedCapacityInput,
        cb: (err: any, data?: ListProvisionedCapacityOutput) => void
    ): void;
    public listProvisionedCapacity(
        args: ListProvisionedCapacityInput,
        cb?: (err: any, data?: ListProvisionedCapacityOutput) => void
    ): Promise<ListProvisionedCapacityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListProvisionedCapacityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon Glacier Resources</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listTagsForVault(args: ListTagsForVaultInput): Promise<ListTagsForVaultOutput>;
    public listTagsForVault(
        args: ListTagsForVaultInput,
        cb: (err: any, data?: ListTagsForVaultOutput) => void
    ): void;
    public listTagsForVault(
        args: ListTagsForVaultInput,
        cb?: (err: any, data?: ListTagsForVaultOutput) => void
    ): Promise<ListTagsForVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListTagsForVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name.</p> <p>By default, this operation returns up to 10 items. If there are more vaults to list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the <code>marker</code> field is <code>null</code>. To return a list of vaults that begins at a specific vault, set the <code>marker</code> request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listVaults(args: ListVaultsInput): Promise<ListVaultsOutput>;
    public listVaults(
        args: ListVaultsInput,
        cb: (err: any, data?: ListVaultsOutput) => void
    ): void;
    public listVaults(
        args: ListVaultsInput,
        cb?: (err: any, data?: ListVaultsOutput) => void
    ): Promise<ListVaultsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListVaultsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {LimitExceededException} <p>Returned if the request results in a vault or account limit being exceeded.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public purchaseProvisionedCapacity(args: PurchaseProvisionedCapacityInput): Promise<PurchaseProvisionedCapacityOutput>;
    public purchaseProvisionedCapacity(
        args: PurchaseProvisionedCapacityInput,
        cb: (err: any, data?: PurchaseProvisionedCapacityOutput) => void
    ): void;
    public purchaseProvisionedCapacity(
        args: PurchaseProvisionedCapacityInput,
        cb?: (err: any, data?: PurchaseProvisionedCapacityOutput) => void
    ): Promise<PurchaseProvisionedCapacityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PurchaseProvisionedCapacityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon Glacier Resources</a>. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public removeTagsFromVault(args: RemoveTagsFromVaultInput): Promise<RemoveTagsFromVaultOutput>;
    public removeTagsFromVault(
        args: RemoveTagsFromVaultInput,
        cb: (err: any, data?: RemoveTagsFromVaultOutput) => void
    ): void;
    public removeTagsFromVault(
        args: RemoveTagsFromVaultInput,
        cb?: (err: any, data?: RemoveTagsFromVaultOutput) => void
    ): Promise<RemoveTagsFromVaultOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RemoveTagsFromVaultCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation.</p> <p>The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public setDataRetrievalPolicy(args: SetDataRetrievalPolicyInput): Promise<SetDataRetrievalPolicyOutput>;
    public setDataRetrievalPolicy(
        args: SetDataRetrievalPolicyInput,
        cb: (err: any, data?: SetDataRetrievalPolicyOutput) => void
    ): void;
    public setDataRetrievalPolicy(
        args: SetDataRetrievalPolicyInput,
        cb?: (err: any, data?: SetDataRetrievalPolicyOutput) => void
    ): Promise<SetDataRetrievalPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SetDataRetrievalPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the <code>access-policy</code> subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public setVaultAccessPolicy(args: SetVaultAccessPolicyInput): Promise<SetVaultAccessPolicyOutput>;
    public setVaultAccessPolicy(
        args: SetVaultAccessPolicyInput,
        cb: (err: any, data?: SetVaultAccessPolicyOutput) => void
    ): void;
    public setVaultAccessPolicy(
        args: SetVaultAccessPolicyInput,
        cb?: (err: any, data?: SetVaultAccessPolicyOutput) => void
    ): Promise<SetVaultAccessPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SetVaultAccessPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications.</p> <p>To configure vault notifications, send a PUT request to the <code>notification-configuration</code> subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic.</p> <p>Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:</p> <ul> <li> <p> <b>ArchiveRetrievalCompleted</b> This event occurs when a job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> <li> <p> <b>InventoryRetrievalCompleted</b> This event occurs when a job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> </ul> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public setVaultNotifications(args: SetVaultNotificationsInput): Promise<SetVaultNotificationsOutput>;
    public setVaultNotifications(
        args: SetVaultNotificationsInput,
        cb: (err: any, data?: SetVaultNotificationsOutput) => void
    ): void;
    public setVaultNotifications(
        args: SetVaultNotificationsInput,
        cb?: (err: any, data?: SetVaultNotificationsOutput) => void
    ): Promise<SetVaultNotificationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SetVaultNotificationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the <code>x-amz-archive-id</code> header of the response. </p> <p>You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p> <p>You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p> <p>You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see <a>InitiateJob</a>. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. </p> <p>Archives are immutable. After you upload an archive, you cannot edit the archive or its description.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon Glacier</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {RequestTimeoutException} <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public uploadArchive(args: UploadArchiveInput): Promise<UploadArchiveOutput>;
    public uploadArchive(
        args: UploadArchiveInput,
        cb: (err: any, data?: UploadArchiveOutput) => void
    ): void;
    public uploadArchive(
        args: UploadArchiveInput,
        cb?: (err: any, data?: UploadArchiveOutput) => void
    ): Promise<UploadArchiveOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UploadArchiveCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.</p> <p>Amazon Glacier rejects your upload part request if any of the following conditions is true:</p> <ul> <li> <p> <b>SHA256 tree hash does not match</b>To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>.</p> </li> <li> <p> <b>Part size does not match</b>The size of each part except the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the same size as, or smaller than, the specified size.</p> <note> <p>If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.</p> </note> </li> <li> <p> <b>Range does not align</b>The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. </p> </li> </ul> <p>This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ResourceNotFoundException} <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     *   - {InvalidParameterValueException} <p>Returned if a parameter of the request is incorrectly specified.</p>
     *   - {MissingParameterValueException} <p>Returned if a required header or parameter is missing from the request.</p>
     *   - {RequestTimeoutException} <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
     *   - {ServiceUnavailableException} <p>Returned if the service cannot complete the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public uploadMultipartPart(args: UploadMultipartPartInput): Promise<UploadMultipartPartOutput>;
    public uploadMultipartPart(
        args: UploadMultipartPartInput,
        cb: (err: any, data?: UploadMultipartPartOutput) => void
    ): void;
    public uploadMultipartPart(
        args: UploadMultipartPartInput,
        cb?: (err: any, data?: UploadMultipartPartOutput) => void
    ): Promise<UploadMultipartPartOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UploadMultipartPartCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
