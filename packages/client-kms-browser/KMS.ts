import {KMSClient} from './KMSClient';
import {AlreadyExistsException} from './types/AlreadyExistsException';
import {CancelKeyDeletionInput} from './types/CancelKeyDeletionInput';
import {CancelKeyDeletionOutput} from './types/CancelKeyDeletionOutput';
import {CreateAliasInput} from './types/CreateAliasInput';
import {CreateAliasOutput} from './types/CreateAliasOutput';
import {CreateGrantInput} from './types/CreateGrantInput';
import {CreateGrantOutput} from './types/CreateGrantOutput';
import {CreateKeyInput} from './types/CreateKeyInput';
import {CreateKeyOutput} from './types/CreateKeyOutput';
import {DecryptInput} from './types/DecryptInput';
import {DecryptOutput} from './types/DecryptOutput';
import {DeleteAliasInput} from './types/DeleteAliasInput';
import {DeleteAliasOutput} from './types/DeleteAliasOutput';
import {DeleteImportedKeyMaterialInput} from './types/DeleteImportedKeyMaterialInput';
import {DeleteImportedKeyMaterialOutput} from './types/DeleteImportedKeyMaterialOutput';
import {DependencyTimeoutException} from './types/DependencyTimeoutException';
import {DescribeKeyInput} from './types/DescribeKeyInput';
import {DescribeKeyOutput} from './types/DescribeKeyOutput';
import {DisableKeyInput} from './types/DisableKeyInput';
import {DisableKeyOutput} from './types/DisableKeyOutput';
import {DisableKeyRotationInput} from './types/DisableKeyRotationInput';
import {DisableKeyRotationOutput} from './types/DisableKeyRotationOutput';
import {DisabledException} from './types/DisabledException';
import {EnableKeyInput} from './types/EnableKeyInput';
import {EnableKeyOutput} from './types/EnableKeyOutput';
import {EnableKeyRotationInput} from './types/EnableKeyRotationInput';
import {EnableKeyRotationOutput} from './types/EnableKeyRotationOutput';
import {EncryptInput} from './types/EncryptInput';
import {EncryptOutput} from './types/EncryptOutput';
import {ExpiredImportTokenException} from './types/ExpiredImportTokenException';
import {GenerateDataKeyInput} from './types/GenerateDataKeyInput';
import {GenerateDataKeyOutput} from './types/GenerateDataKeyOutput';
import {GenerateDataKeyWithoutPlaintextInput} from './types/GenerateDataKeyWithoutPlaintextInput';
import {GenerateDataKeyWithoutPlaintextOutput} from './types/GenerateDataKeyWithoutPlaintextOutput';
import {GenerateRandomInput} from './types/GenerateRandomInput';
import {GenerateRandomOutput} from './types/GenerateRandomOutput';
import {GetKeyPolicyInput} from './types/GetKeyPolicyInput';
import {GetKeyPolicyOutput} from './types/GetKeyPolicyOutput';
import {GetKeyRotationStatusInput} from './types/GetKeyRotationStatusInput';
import {GetKeyRotationStatusOutput} from './types/GetKeyRotationStatusOutput';
import {GetParametersForImportInput} from './types/GetParametersForImportInput';
import {GetParametersForImportOutput} from './types/GetParametersForImportOutput';
import {ImportKeyMaterialInput} from './types/ImportKeyMaterialInput';
import {ImportKeyMaterialOutput} from './types/ImportKeyMaterialOutput';
import {IncorrectKeyMaterialException} from './types/IncorrectKeyMaterialException';
import {InvalidAliasNameException} from './types/InvalidAliasNameException';
import {InvalidArnException} from './types/InvalidArnException';
import {InvalidCiphertextException} from './types/InvalidCiphertextException';
import {InvalidGrantIdException} from './types/InvalidGrantIdException';
import {InvalidGrantTokenException} from './types/InvalidGrantTokenException';
import {InvalidImportTokenException} from './types/InvalidImportTokenException';
import {InvalidKeyUsageException} from './types/InvalidKeyUsageException';
import {InvalidMarkerException} from './types/InvalidMarkerException';
import {KMSInternalException} from './types/KMSInternalException';
import {KMSInvalidStateException} from './types/KMSInvalidStateException';
import {KeyUnavailableException} from './types/KeyUnavailableException';
import {LimitExceededException} from './types/LimitExceededException';
import {ListAliasesInput} from './types/ListAliasesInput';
import {ListAliasesOutput} from './types/ListAliasesOutput';
import {ListGrantsInput} from './types/ListGrantsInput';
import {ListGrantsOutput} from './types/ListGrantsOutput';
import {ListKeyPoliciesInput} from './types/ListKeyPoliciesInput';
import {ListKeyPoliciesOutput} from './types/ListKeyPoliciesOutput';
import {ListKeysInput} from './types/ListKeysInput';
import {ListKeysOutput} from './types/ListKeysOutput';
import {ListResourceTagsInput} from './types/ListResourceTagsInput';
import {ListResourceTagsOutput} from './types/ListResourceTagsOutput';
import {ListRetirableGrantsInput} from './types/ListRetirableGrantsInput';
import {ListRetirableGrantsOutput} from './types/ListRetirableGrantsOutput';
import {MalformedPolicyDocumentException} from './types/MalformedPolicyDocumentException';
import {NotFoundException} from './types/NotFoundException';
import {PutKeyPolicyInput} from './types/PutKeyPolicyInput';
import {PutKeyPolicyOutput} from './types/PutKeyPolicyOutput';
import {ReEncryptInput} from './types/ReEncryptInput';
import {ReEncryptOutput} from './types/ReEncryptOutput';
import {RetireGrantInput} from './types/RetireGrantInput';
import {RetireGrantOutput} from './types/RetireGrantOutput';
import {RevokeGrantInput} from './types/RevokeGrantInput';
import {RevokeGrantOutput} from './types/RevokeGrantOutput';
import {ScheduleKeyDeletionInput} from './types/ScheduleKeyDeletionInput';
import {ScheduleKeyDeletionOutput} from './types/ScheduleKeyDeletionOutput';
import {TagException} from './types/TagException';
import {TagResourceInput} from './types/TagResourceInput';
import {TagResourceOutput} from './types/TagResourceOutput';
import {UnsupportedOperationException} from './types/UnsupportedOperationException';
import {UntagResourceInput} from './types/UntagResourceInput';
import {UntagResourceOutput} from './types/UntagResourceOutput';
import {UpdateAliasInput} from './types/UpdateAliasInput';
import {UpdateAliasOutput} from './types/UpdateAliasOutput';
import {UpdateKeyDescriptionInput} from './types/UpdateKeyDescriptionInput';
import {UpdateKeyDescriptionOutput} from './types/UpdateKeyDescriptionOutput';
import {CancelKeyDeletionCommand} from './commands/CancelKeyDeletionCommand';
import {CreateAliasCommand} from './commands/CreateAliasCommand';
import {CreateGrantCommand} from './commands/CreateGrantCommand';
import {CreateKeyCommand} from './commands/CreateKeyCommand';
import {DecryptCommand} from './commands/DecryptCommand';
import {DeleteAliasCommand} from './commands/DeleteAliasCommand';
import {DeleteImportedKeyMaterialCommand} from './commands/DeleteImportedKeyMaterialCommand';
import {DescribeKeyCommand} from './commands/DescribeKeyCommand';
import {DisableKeyCommand} from './commands/DisableKeyCommand';
import {DisableKeyRotationCommand} from './commands/DisableKeyRotationCommand';
import {EnableKeyCommand} from './commands/EnableKeyCommand';
import {EnableKeyRotationCommand} from './commands/EnableKeyRotationCommand';
import {EncryptCommand} from './commands/EncryptCommand';
import {GenerateDataKeyCommand} from './commands/GenerateDataKeyCommand';
import {GenerateDataKeyWithoutPlaintextCommand} from './commands/GenerateDataKeyWithoutPlaintextCommand';
import {GenerateRandomCommand} from './commands/GenerateRandomCommand';
import {GetKeyPolicyCommand} from './commands/GetKeyPolicyCommand';
import {GetKeyRotationStatusCommand} from './commands/GetKeyRotationStatusCommand';
import {GetParametersForImportCommand} from './commands/GetParametersForImportCommand';
import {ImportKeyMaterialCommand} from './commands/ImportKeyMaterialCommand';
import {ListAliasesCommand} from './commands/ListAliasesCommand';
import {ListGrantsCommand} from './commands/ListGrantsCommand';
import {ListKeyPoliciesCommand} from './commands/ListKeyPoliciesCommand';
import {ListKeysCommand} from './commands/ListKeysCommand';
import {ListResourceTagsCommand} from './commands/ListResourceTagsCommand';
import {ListRetirableGrantsCommand} from './commands/ListRetirableGrantsCommand';
import {PutKeyPolicyCommand} from './commands/PutKeyPolicyCommand';
import {ReEncryptCommand} from './commands/ReEncryptCommand';
import {RetireGrantCommand} from './commands/RetireGrantCommand';
import {RevokeGrantCommand} from './commands/RevokeGrantCommand';
import {ScheduleKeyDeletionCommand} from './commands/ScheduleKeyDeletionCommand';
import {TagResourceCommand} from './commands/TagResourceCommand';
import {UntagResourceCommand} from './commands/UntagResourceCommand';
import {UpdateAliasCommand} from './commands/UpdateAliasCommand';
import {UpdateKeyDescriptionCommand} from './commands/UpdateKeyDescriptionCommand';

export class KMS extends KMSClient {
    /**
     * <p>Cancels the deletion of a customer master key (CMK). When this operation is successful, the CMK is set to the <code>Disabled</code> state. To enable a CMK, use <a>EnableKey</a>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about scheduling and canceling deletion of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public cancelKeyDeletion(args: CancelKeyDeletionInput): Promise<CancelKeyDeletionOutput>;
    public cancelKeyDeletion(
        args: CancelKeyDeletionInput,
        cb: (err: any, data?: CancelKeyDeletionOutput) => void
    ): void;
    public cancelKeyDeletion(
        args: CancelKeyDeletionInput,
        cb?: (err: any, data?: CancelKeyDeletionOutput) => void
    ): Promise<CancelKeyDeletionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CancelKeyDeletionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a display name for a customer-managed customer master key (CMK). You can use an alias to identify a CMK in selected operations, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. </p> <p>Each CMK can have multiple aliases, but each alias points to only one CMK. The alias name must be unique in the AWS account and region. To simplify code that runs in multiple regions, use the same alias name, but point it to a different CMK in each region. </p> <p>Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all CMKs, use the <a>ListAliases</a> operation.</p> <p>The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with <b>aws/</b>. That alias name prefix is reserved for AWS managed CMKs.</p> <p>The alias and the CMK it is mapped to must be in the same AWS account and the same region. You cannot perform this operation on an alias in a different AWS account.</p> <p>To map an existing alias to a different CMK, call <a>UpdateAlias</a>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {AlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidAliasNameException} <p>The request was rejected because the specified alias name is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createAlias(args: CreateAliasInput): Promise<CreateAliasOutput>;
    public createAlias(
        args: CreateAliasInput,
        cb: (err: any, data?: CreateAliasOutput) => void
    ): void;
    public createAlias(
        args: CreateAliasInput,
        cb?: (err: any, data?: CreateAliasOutput) => void
    ): Promise<CreateAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Adds a grant to a customer master key (CMK). The grant specifies who can use the CMK and under what conditions. When setting permissions, grants are an alternative to key policies. </p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter. For more information about grants, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createGrant(args: CreateGrantInput): Promise<CreateGrantOutput>;
    public createGrant(
        args: CreateGrantInput,
        cb: (err: any, data?: CreateGrantOutput) => void
    ): void;
    public createGrant(
        args: CreateGrantInput,
        cb?: (err: any, data?: CreateGrantOutput) => void
    ): Promise<CreateGrantOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateGrantCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a customer master key (CMK) in the caller's AWS account.</p> <p>You can use a CMK to encrypt small amounts of data (4 KiB or less) directly. But CMKs are more commonly used to encrypt data encryption keys (DEKs), which are used to encrypt raw data. For more information about DEKs and the difference between CMKs and DEKs, see the following:</p> <ul> <li> <p>The <a>GenerateDataKey</a> operation</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">AWS Key Management Service Concepts</a> in the <i>AWS Key Management Service Developer Guide</i> </p> </li> </ul> <p>You cannot use this operation to create a CMK in a different AWS account.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {MalformedPolicyDocumentException} <p>The request was rejected because the specified policy is not syntactically or semantically correct.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {TagException} <p>The request was rejected because one or more tags are not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createKey(args: CreateKeyInput): Promise<CreateKeyOutput>;
    public createKey(
        args: CreateKeyInput,
        cb: (err: any, data?: CreateKeyOutput) => void
    ): void;
    public createKey(
        args: CreateKeyInput,
        cb?: (err: any, data?: CreateKeyOutput) => void
    ): Promise<CreateKeyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateKeyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted by using any of the following operations:</p> <ul> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> </ul> <p>Whenever possible, use key policies to give users permission to call the Decrypt operation on the CMK, instead of IAM policies. Otherwise, you might create an IAM user policy that gives the user Decrypt permission on all CMKs. This user could decrypt ciphertext that was encrypted by CMKs in other accounts if the key policy for the cross-account CMK permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user to particular CMKs or particular trusted accounts.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {InvalidCiphertextException} <p>The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.</p>
     *   - {KeyUnavailableException} <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public decrypt(args: DecryptInput): Promise<DecryptOutput>;
    public decrypt(
        args: DecryptInput,
        cb: (err: any, data?: DecryptOutput) => void
    ): void;
    public decrypt(
        args: DecryptInput,
        cb?: (err: any, data?: DecryptOutput) => void
    ): Promise<DecryptOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DecryptCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the specified alias. You cannot perform this operation on an alias in a different AWS account. </p> <p>Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all CMKs, use the <a>ListAliases</a> operation. </p> <p>Each CMK can have multiple aliases. To change the alias of a CMK, use <a>DeleteAlias</a> to delete the current alias and <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different customer master key (CMK), call <a>UpdateAlias</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteAlias(args: DeleteAliasInput): Promise<DeleteAliasOutput>;
    public deleteAlias(
        args: DeleteAliasInput,
        cb: (err: any, data?: DeleteAliasOutput) => void
    ): void;
    public deleteAlias(
        args: DeleteAliasInput,
        cb?: (err: any, data?: DeleteAliasOutput) => void
    ): Promise<DeleteAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>When the specified CMK is in the <code>PendingDeletion</code> state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to <code>PendingImport</code>.</p> <p>After you delete key material, you can use <a>ImportKeyMaterial</a> to reimport the same key material into the CMK.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteImportedKeyMaterial(args: DeleteImportedKeyMaterialInput): Promise<DeleteImportedKeyMaterialOutput>;
    public deleteImportedKeyMaterial(
        args: DeleteImportedKeyMaterialInput,
        cb: (err: any, data?: DeleteImportedKeyMaterialOutput) => void
    ): void;
    public deleteImportedKeyMaterial(
        args: DeleteImportedKeyMaterialInput,
        cb?: (err: any, data?: DeleteImportedKeyMaterialOutput) => void
    ): Promise<DeleteImportedKeyMaterialOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteImportedKeyMaterialCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Provides detailed information about the specified customer master key (CMK).</p> <p>You can use <code>DescribeKey</code> on a predefined AWS alias, that is, an AWS alias with no key ID. When you do, AWS KMS associates the alias with an <a href="http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">AWS managed CMK</a> and returns its <code>KeyId</code> and <code>Arn</code> in the response.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeKey(args: DescribeKeyInput): Promise<DescribeKeyOutput>;
    public describeKey(
        args: DescribeKeyInput,
        cb: (err: any, data?: DescribeKeyOutput) => void
    ): void;
    public describeKey(
        args: DescribeKeyInput,
        cb?: (err: any, data?: DescribeKeyOutput) => void
    ): Promise<DescribeKeyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeKeyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects the Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public disableKey(args: DisableKeyInput): Promise<DisableKeyOutput>;
    public disableKey(
        args: DisableKeyInput,
        cb: (err: any, data?: DisableKeyOutput) => void
    ): void;
    public disableKey(
        args: DisableKeyInput,
        cb?: (err: any, data?: DisableKeyOutput) => void
    ): Promise<DisableKeyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DisableKeyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Disables <a href="http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public disableKeyRotation(args: DisableKeyRotationInput): Promise<DisableKeyRotationOutput>;
    public disableKeyRotation(
        args: DisableKeyRotationInput,
        cb: (err: any, data?: DisableKeyRotationOutput) => void
    ): void;
    public disableKeyRotation(
        args: DisableKeyRotationInput,
        cb?: (err: any, data?: DisableKeyRotationOutput) => void
    ): Promise<DisableKeyRotationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DisableKeyRotationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets the state of a customer master key (CMK) to enabled, thereby permitting its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public enableKey(args: EnableKeyInput): Promise<EnableKeyOutput>;
    public enableKey(
        args: EnableKeyInput,
        cb: (err: any, data?: EnableKeyOutput) => void
    ): void;
    public enableKey(
        args: EnableKeyInput,
        cb?: (err: any, data?: EnableKeyOutput) => void
    ): Promise<EnableKeyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new EnableKeyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Enables <a href="http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public enableKeyRotation(args: EnableKeyRotationInput): Promise<EnableKeyRotationOutput>;
    public enableKeyRotation(
        args: EnableKeyRotationInput,
        cb: (err: any, data?: EnableKeyRotationOutput) => void
    ): void;
    public enableKeyRotation(
        args: EnableKeyRotationInput,
        cb?: (err: any, data?: EnableKeyRotationOutput) => void
    ): Promise<EnableKeyRotationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new EnableKeyRotationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Encrypts plaintext into ciphertext by using a customer master key (CMK). The <code>Encrypt</code> operation has two primary use cases:</p> <ul> <li> <p>You can encrypt up to 4 kilobytes (4096 bytes) of arbitrary data such as an RSA key, a database password, or other sensitive information.</p> </li> <li> <p>You can use the <code>Encrypt</code> operation to move encrypted data from one AWS region to another. In the first region, generate a data key and use the plaintext key to encrypt the data. Then, in the new region, call the <code>Encrypt</code> method on same plaintext data key. Now, you can safely move the encrypted data and encrypted data key to the new region, and decrypt in the new region when necessary.</p> </li> </ul> <p>You don't need use this operation to encrypt a data key within a region. The <a>GenerateDataKey</a> and <a>GenerateDataKeyWithoutPlaintext</a> operations return an encrypted data key.</p> <p>Also, you don't need to use this operation to encrypt data in your application. You can use the plaintext and encrypted data keys that the <code>GenerateDataKey</code> operation returns.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {KeyUnavailableException} <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidKeyUsageException} <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public encrypt(args: EncryptInput): Promise<EncryptOutput>;
    public encrypt(
        args: EncryptInput,
        cb: (err: any, data?: EncryptOutput) => void
    ): void;
    public encrypt(
        args: EncryptInput,
        cb?: (err: any, data?: EncryptOutput) => void
    ): Promise<EncryptOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new EncryptCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a data encryption key that you can use in your application to encrypt data locally. </p> <p>You must specify the customer master key (CMK) under which to generate the data key. You must also specify the length of the data key using either the <code>KeySpec</code> or <code>NumberOfBytes</code> field. You must specify one field or the other, but not both. For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use <code>KeySpec</code>. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p> <p>This operation returns a plaintext copy of the data key in the <code>Plaintext</code> field of the response, and an encrypted copy of the data key in the <code>CiphertextBlob</code> field. The data key is encrypted under the CMK specified in the <code>KeyId</code> field of the request. </p> <p>We recommend that you use the following pattern to encrypt data locally in your application:</p> <ol> <li> <p>Use this operation (<code>GenerateDataKey</code>) to get a data encryption key.</p> </li> <li> <p>Use the plaintext data encryption key (returned in the <code>Plaintext</code> field of the response) to encrypt data locally, then erase the plaintext data key from memory.</p> </li> <li> <p>Store the encrypted data key (returned in the <code>CiphertextBlob</code> field of the response) alongside the locally encrypted data.</p> </li> </ol> <p>To decrypt data locally:</p> <ol> <li> <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key into a plaintext copy of the data key.</p> </li> <li> <p>Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.</p> </li> </ol> <p>To return only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To return a random byte string that is cryptographically secure, use <a>GenerateRandom</a>.</p> <p>If you use the optional <code>EncryptionContext</code> field, you must store at least enough information to be able to reconstruct the full encryption context when you later send the ciphertext to the <a>Decrypt</a> operation. It is a good practice to choose an encryption context that you can reconstruct on the fly to better secure the ciphertext. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {KeyUnavailableException} <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidKeyUsageException} <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public generateDataKey(args: GenerateDataKeyInput): Promise<GenerateDataKeyOutput>;
    public generateDataKey(
        args: GenerateDataKeyInput,
        cb: (err: any, data?: GenerateDataKeyOutput) => void
    ): void;
    public generateDataKey(
        args: GenerateDataKeyInput,
        cb?: (err: any, data?: GenerateDataKeyOutput) => void
    ): Promise<GenerateDataKeyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GenerateDataKeyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a data encryption key encrypted under a customer master key (CMK). This operation is identical to <a>GenerateDataKey</a> but returns only the encrypted copy of the data key. </p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p> <p>This operation is useful in a system that has multiple components with different degrees of trust. For example, consider a system that stores encrypted data in containers. Each container stores the encrypted data and an encrypted copy of the data key. One component of the system, called the <i>control plane</i>, creates new containers. When it creates a new container, it uses this operation (<code>GenerateDataKeyWithoutPlaintext</code>) to get an encrypted data key and then stores it in the container. Later, a different component of the system, called the <i>data plane</i>, puts encrypted data into the containers. To do this, it passes the encrypted data key to the <a>Decrypt</a> operation. It then uses the returned plaintext data key to encrypt data and finally stores the encrypted data in the container. In this system, the control plane never sees the plaintext data key.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {KeyUnavailableException} <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidKeyUsageException} <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public generateDataKeyWithoutPlaintext(args: GenerateDataKeyWithoutPlaintextInput): Promise<GenerateDataKeyWithoutPlaintextOutput>;
    public generateDataKeyWithoutPlaintext(
        args: GenerateDataKeyWithoutPlaintextInput,
        cb: (err: any, data?: GenerateDataKeyWithoutPlaintextOutput) => void
    ): void;
    public generateDataKeyWithoutPlaintext(
        args: GenerateDataKeyWithoutPlaintextInput,
        cb?: (err: any, data?: GenerateDataKeyWithoutPlaintextOutput) => void
    ): Promise<GenerateDataKeyWithoutPlaintextOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GenerateDataKeyWithoutPlaintextCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a random byte string that is cryptographically secure.</p> <p>For more information about entropy and random number generation, see the <a href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">AWS Key Management Service Cryptographic Details</a> whitepaper.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public generateRandom(args: GenerateRandomInput): Promise<GenerateRandomOutput>;
    public generateRandom(
        args: GenerateRandomInput,
        cb: (err: any, data?: GenerateRandomOutput) => void
    ): void;
    public generateRandom(
        args: GenerateRandomInput,
        cb?: (err: any, data?: GenerateRandomOutput) => void
    ): Promise<GenerateRandomOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GenerateRandomCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets a key policy attached to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getKeyPolicy(args: GetKeyPolicyInput): Promise<GetKeyPolicyOutput>;
    public getKeyPolicy(
        args: GetKeyPolicyInput,
        cb: (err: any, data?: GetKeyPolicyOutput) => void
    ): void;
    public getKeyPolicy(
        args: GetKeyPolicyInput,
        cb?: (err: any, data?: GetKeyPolicyOutput) => void
    ): Promise<GetKeyPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetKeyPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets a Boolean value that indicates whether <a href="http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is enabled for the specified customer master key (CMK).</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <ul> <li> <p>Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.</p> </li> <li> <p>Pending deletion: While a CMK is pending deletion, its key rotation status is <code>false</code> and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.</p> </li> </ul> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getKeyRotationStatus(args: GetKeyRotationStatusInput): Promise<GetKeyRotationStatusOutput>;
    public getKeyRotationStatus(
        args: GetKeyRotationStatusInput,
        cb: (err: any, data?: GetKeyRotationStatusOutput) => void
    ): void;
    public getKeyRotationStatus(
        args: GetKeyRotationStatusInput,
        cb?: (err: any, data?: GetKeyRotationStatusOutput) => void
    ): Promise<GetKeyRotationStatusOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetKeyRotationStatusCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the items you need in order to import key material into AWS KMS from your existing key management infrastructure. For more information about importing key material into AWS KMS, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>You must specify the key ID of the customer master key (CMK) into which you will import key material. This CMK's <code>Origin</code> must be <code>EXTERNAL</code>. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on a CMK in a different AWS account.</p> <p>This operation returns a public key and an import token. Use the public key to encrypt the key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request. The public key and import token from the same response must be used together. These items are valid for 24 hours. When they expire, they cannot be used for a subsequent <a>ImportKeyMaterial</a> request. To get new ones, send another <code>GetParametersForImport</code> request.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getParametersForImport(args: GetParametersForImportInput): Promise<GetParametersForImportOutput>;
    public getParametersForImport(
        args: GetParametersForImportInput,
        cb: (err: any, data?: GetParametersForImportOutput) => void
    ): void;
    public getParametersForImport(
        args: GetParametersForImportInput,
        cb?: (err: any, data?: GetParametersForImportOutput) => void
    ): Promise<GetParametersForImportOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetParametersForImportCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Imports key material into an existing AWS KMS customer master key (CMK) that was created without key material. You cannot perform this operation on a CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>Before using this operation, call <a>GetParametersForImport</a>. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same <code>GetParametersForImport</code> response.</p> <p>When calling this operation, you must specify the following values:</p> <ul> <li> <p>The key ID or key ARN of a CMK with no key material. Its <code>Origin</code> must be <code>EXTERNAL</code>.</p> <p>To create a CMK with no key material, call <a>CreateKey</a> and set the value of its <code>Origin</code> parameter to <code>EXTERNAL</code>. To get the <code>Origin</code> of a CMK, call <a>DescribeKey</a>.)</p> </li> <li> <p>The encrypted key material. To get the public key to encrypt the key material, call <a>GetParametersForImport</a>.</p> </li> <li> <p>The import token that <a>GetParametersForImport</a> returned. This token and the public key used to encrypt the key material must have come from the same response.</p> </li> <li> <p>Whether the key material expires and if so, when. If you set an expiration date, you can change it only by reimporting the same key material and specifying a new expiration date. If the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. To use the CMK again, you must reimport the same key material.</p> </li> </ul> <p>When this operation is successful, the CMK's key state changes from <code>PendingImport</code> to <code>Enabled</code>, and you can use the CMK. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {InvalidCiphertextException} <p>The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.</p>
     *   - {IncorrectKeyMaterialException} <p>The request was rejected because the provided key material is invalid or is not the same key material that was previously imported into this customer master key (CMK).</p>
     *   - {ExpiredImportTokenException} <p>The request was rejected because the provided import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new public key to encrypt the key material, and then try the request again.</p>
     *   - {InvalidImportTokenException} <p>The request was rejected because the provided import token is invalid or is associated with a different customer master key (CMK).</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public importKeyMaterial(args: ImportKeyMaterialInput): Promise<ImportKeyMaterialOutput>;
    public importKeyMaterial(
        args: ImportKeyMaterialInput,
        cb: (err: any, data?: ImportKeyMaterialOutput) => void
    ): void;
    public importKeyMaterial(
        args: ImportKeyMaterialInput,
        cb?: (err: any, data?: ImportKeyMaterialOutput) => void
    ): Promise<ImportKeyMaterialOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ImportKeyMaterialCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets a list of aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see <a>CreateAlias</a>.</p> <p>By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the <code>KeyId</code> parameter.</p> <p>The <code>ListAliases</code> response can include aliases that you created and associated with your customer managed CMKs, and aliases that AWS created and associated with AWS managed CMKs in your account. You can recognize AWS aliases because their names have the format <code>aws/&lt;service-name&gt;</code>, such as <code>aws/dynamodb</code>.</p> <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">AWS KMS aliases limit</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidMarkerException} <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listAliases(args: ListAliasesInput): Promise<ListAliasesOutput>;
    public listAliases(
        args: ListAliasesInput,
        cb: (err: any, data?: ListAliasesOutput) => void
    ): void;
    public listAliases(
        args: ListAliasesInput,
        cb?: (err: any, data?: ListAliasesOutput) => void
    ): Promise<ListAliasesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListAliasesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets a list of all grants for the specified customer master key (CMK).</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidMarkerException} <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listGrants(args: ListGrantsInput): Promise<ListGrantsOutput>;
    public listGrants(
        args: ListGrantsInput,
        cb: (err: any, data?: ListGrantsOutput) => void
    ): void;
    public listGrants(
        args: ListGrantsInput,
        cb?: (err: any, data?: ListGrantsOutput) => void
    ): Promise<ListGrantsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListGrantsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets the names of the key policies that are attached to a customer master key (CMK). This operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation. However, the only valid policy name is <code>default</code>. You cannot perform this operation on a CMK in a different AWS account.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listKeyPolicies(args: ListKeyPoliciesInput): Promise<ListKeyPoliciesOutput>;
    public listKeyPolicies(
        args: ListKeyPoliciesInput,
        cb: (err: any, data?: ListKeyPoliciesOutput) => void
    ): void;
    public listKeyPolicies(
        args: ListKeyPoliciesInput,
        cb?: (err: any, data?: ListKeyPoliciesOutput) => void
    ): Promise<ListKeyPoliciesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListKeyPoliciesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets a list of all customer master keys (CMKs) in the caller's AWS account and region.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {InvalidMarkerException} <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listKeys(args: ListKeysInput): Promise<ListKeysOutput>;
    public listKeys(
        args: ListKeysInput,
        cb: (err: any, data?: ListKeysOutput) => void
    ): void;
    public listKeys(
        args: ListKeysInput,
        cb?: (err: any, data?: ListKeysOutput) => void
    ): Promise<ListKeysOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListKeysCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of all tags for the specified customer master key (CMK).</p> <p>You cannot perform this operation on a CMK in a different AWS account.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {InvalidMarkerException} <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listResourceTags(args: ListResourceTagsInput): Promise<ListResourceTagsOutput>;
    public listResourceTags(
        args: ListResourceTagsInput,
        cb: (err: any, data?: ListResourceTagsOutput) => void
    ): void;
    public listResourceTags(
        args: ListResourceTagsInput,
        cb?: (err: any, data?: ListResourceTagsOutput) => void
    ): Promise<ListResourceTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListResourceTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of all grants for which the grant's <code>RetiringPrincipal</code> matches the one specified.</p> <p>A typical use is to list all grants that you are able to retire. To retire a grant, use <a>RetireGrant</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidMarkerException} <p>The request was rejected because the marker that specifies where pagination should next begin is not valid.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listRetirableGrants(args: ListRetirableGrantsInput): Promise<ListRetirableGrantsOutput>;
    public listRetirableGrants(
        args: ListRetirableGrantsInput,
        cb: (err: any, data?: ListRetirableGrantsOutput) => void
    ): void;
    public listRetirableGrants(
        args: ListRetirableGrantsInput,
        cb?: (err: any, data?: ListRetirableGrantsOutput) => void
    ): Promise<ListRetirableGrantsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListRetirableGrantsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Attaches a key policy to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about key policies, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {MalformedPolicyDocumentException} <p>The request was rejected because the specified policy is not syntactically or semantically correct.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {UnsupportedOperationException} <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putKeyPolicy(args: PutKeyPolicyInput): Promise<PutKeyPolicyOutput>;
    public putKeyPolicy(
        args: PutKeyPolicyInput,
        cb: (err: any, data?: PutKeyPolicyOutput) => void
    ): void;
    public putKeyPolicy(
        args: PutKeyPolicyInput,
        cb?: (err: any, data?: PutKeyPolicyOutput) => void
    ): Promise<PutKeyPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutKeyPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Encrypts data on the server side with a new customer master key (CMK) without exposing the plaintext of the data on the client side. The data is first decrypted and then reencrypted. You can also use this operation to change the encryption context of a ciphertext. </p> <p>You can reencrypt data using CMKs in different AWS accounts.</p> <p>Unlike other operations, <code>ReEncrypt</code> is authorized twice, once as <code>ReEncryptFrom</code> on the source CMK and once as <code>ReEncryptTo</code> on the destination CMK. We recommend that you include the <code>"kms:ReEncrypt*"</code> permission in your <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policies</a> to permit reencryption from or to the CMK. This permission is automatically included in the key policy when you create a CMK through the console. But you must include it manually when you create a CMK programmatically or when you set a key policy with the <a>PutKeyPolicy</a> operation.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DisabledException} <p>The request was rejected because the specified CMK is not enabled.</p>
     *   - {InvalidCiphertextException} <p>The request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.</p>
     *   - {KeyUnavailableException} <p>The request was rejected because the specified CMK was not available. The request can be retried.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidKeyUsageException} <p>The request was rejected because the specified <code>KeySpec</code> value is not valid.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public reEncrypt(args: ReEncryptInput): Promise<ReEncryptOutput>;
    public reEncrypt(
        args: ReEncryptInput,
        cb: (err: any, data?: ReEncryptOutput) => void
    ): void;
    public reEncrypt(
        args: ReEncryptInput,
        cb?: (err: any, data?: ReEncryptOutput) => void
    ): Promise<ReEncryptOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ReEncryptCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:</p> <ul> <li> <p>The AWS account (root user) under which the grant was created</p> </li> <li> <p>The <code>RetiringPrincipal</code>, if present in the grant</p> </li> <li> <p>The <code>GranteePrincipal</code>, if <code>RetireGrant</code> is an operation specified in the grant</p> </li> </ul> <p>You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The <a>CreateGrant</a> operation returns both.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {InvalidGrantTokenException} <p>The request was rejected because the specified grant token is not valid.</p>
     *   - {InvalidGrantIdException} <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public retireGrant(args: RetireGrantInput): Promise<RetireGrantOutput>;
    public retireGrant(
        args: RetireGrantInput,
        cb: (err: any, data?: RetireGrantOutput) => void
    ): void;
    public retireGrant(
        args: RetireGrantInput,
        cb?: (err: any, data?: RetireGrantOutput) => void
    ): Promise<RetireGrantOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RetireGrantCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Revokes the specified grant for the specified customer master key (CMK). You can revoke a grant to actively deny operations that depend on it.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {InvalidGrantIdException} <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public revokeGrant(args: RevokeGrantInput): Promise<RevokeGrantOutput>;
    public revokeGrant(
        args: RevokeGrantInput,
        cb: (err: any, data?: RevokeGrantOutput) => void
    ): void;
    public revokeGrant(
        args: RevokeGrantInput,
        cb?: (err: any, data?: RevokeGrantOutput) => void
    ): Promise<RevokeGrantOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RevokeGrantCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the state of the CMK changes to <code>PendingDeletion</code>. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.</p> <p>You cannot perform this operation on a CMK in a different AWS account.</p> <important> <p>Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is rendered unrecoverable. To restrict the use of a CMK without deleting it, use <a>DisableKey</a>.</p> </important> <p>For more information about scheduling a CMK for deletion, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public scheduleKeyDeletion(args: ScheduleKeyDeletionInput): Promise<ScheduleKeyDeletionOutput>;
    public scheduleKeyDeletion(
        args: ScheduleKeyDeletionInput,
        cb: (err: any, data?: ScheduleKeyDeletionOutput) => void
    ): void;
    public scheduleKeyDeletion(
        args: ScheduleKeyDeletionInput,
        cb?: (err: any, data?: ScheduleKeyDeletionOutput) => void
    ): Promise<ScheduleKeyDeletionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ScheduleKeyDeletionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {LimitExceededException} <p>The request was rejected because a limit was exceeded. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {TagException} <p>The request was rejected because one or more tags are not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
    public tagResource(
        args: TagResourceInput,
        cb: (err: any, data?: TagResourceOutput) => void
    ): void;
    public tagResource(
        args: TagResourceInput,
        cb?: (err: any, data?: TagResourceOutput) => void
    ): Promise<TagResourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new TagResourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a>TagResource</a>.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {TagException} <p>The request was rejected because one or more tags are not valid.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
    public untagResource(
        args: UntagResourceInput,
        cb: (err: any, data?: UntagResourceOutput) => void
    ): void;
    public untagResource(
        args: UntagResourceInput,
        cb?: (err: any, data?: UntagResourceOutput) => void
    ): Promise<UntagResourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UntagResourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Associates an existing alias with a different customer master key (CMK). Each CMK can have multiple aliases, but the aliases must be unique within the account and region. You cannot perform this operation on an alias in a different AWS account.</p> <p>This operation works only on existing aliases. To change the alias of a CMK to a new value, use <a>CreateAlias</a> to create a new alias and <a>DeleteAlias</a> to delete the old alias.</p> <p>Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all CMKs in the account, use the <a>ListAliases</a> operation. </p> <p>An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word <code>alias</code> followed by a forward slash (<code>alias/</code>). The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with <code>aws</code>; that alias name prefix is reserved by Amazon Web Services (AWS).</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateAlias(args: UpdateAliasInput): Promise<UpdateAliasOutput>;
    public updateAlias(
        args: UpdateAliasInput,
        cb: (err: any, data?: UpdateAliasOutput) => void
    ): void;
    public updateAlias(
        args: UpdateAliasInput,
        cb?: (err: any, data?: UpdateAliasOutput) => void
    ): Promise<UpdateAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the description of a customer master key (CMK). To see the description of a CMK, use <a>DescribeKey</a>. </p> <p>You cannot perform this operation on a CMK in a different AWS account.</p> <p>The result of this operation varies with the key state of the CMK. For details, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {NotFoundException} <p>The request was rejected because the specified entity or resource could not be found.</p>
     *   - {InvalidArnException} <p>The request was rejected because a specified ARN was not valid.</p>
     *   - {DependencyTimeoutException} <p>The system timed out while trying to fulfill the request. The request can be retried.</p>
     *   - {KMSInternalException} <p>The request was rejected because an internal exception occurred. The request can be retried.</p>
     *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource is not valid for this request.</p> <p>For more information about how key state affects the use of a CMK, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateKeyDescription(args: UpdateKeyDescriptionInput): Promise<UpdateKeyDescriptionOutput>;
    public updateKeyDescription(
        args: UpdateKeyDescriptionInput,
        cb: (err: any, data?: UpdateKeyDescriptionOutput) => void
    ): void;
    public updateKeyDescription(
        args: UpdateKeyDescriptionInput,
        cb?: (err: any, data?: UpdateKeyDescriptionOutput) => void
    ): Promise<UpdateKeyDescriptionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateKeyDescriptionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
