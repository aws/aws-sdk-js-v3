"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KMSClient_1 = require("./KMSClient");
const CancelKeyDeletionCommand_1 = require("./commands/CancelKeyDeletionCommand");
const ConnectCustomKeyStoreCommand_1 = require("./commands/ConnectCustomKeyStoreCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateCustomKeyStoreCommand_1 = require("./commands/CreateCustomKeyStoreCommand");
const CreateGrantCommand_1 = require("./commands/CreateGrantCommand");
const CreateKeyCommand_1 = require("./commands/CreateKeyCommand");
const DecryptCommand_1 = require("./commands/DecryptCommand");
const DeleteAliasCommand_1 = require("./commands/DeleteAliasCommand");
const DeleteCustomKeyStoreCommand_1 = require("./commands/DeleteCustomKeyStoreCommand");
const DeleteImportedKeyMaterialCommand_1 = require("./commands/DeleteImportedKeyMaterialCommand");
const DescribeCustomKeyStoresCommand_1 = require("./commands/DescribeCustomKeyStoresCommand");
const DescribeKeyCommand_1 = require("./commands/DescribeKeyCommand");
const DisableKeyCommand_1 = require("./commands/DisableKeyCommand");
const DisableKeyRotationCommand_1 = require("./commands/DisableKeyRotationCommand");
const DisconnectCustomKeyStoreCommand_1 = require("./commands/DisconnectCustomKeyStoreCommand");
const EnableKeyCommand_1 = require("./commands/EnableKeyCommand");
const EnableKeyRotationCommand_1 = require("./commands/EnableKeyRotationCommand");
const EncryptCommand_1 = require("./commands/EncryptCommand");
const GenerateDataKeyCommand_1 = require("./commands/GenerateDataKeyCommand");
const GenerateDataKeyPairCommand_1 = require("./commands/GenerateDataKeyPairCommand");
const GenerateDataKeyPairWithoutPlaintextCommand_1 = require("./commands/GenerateDataKeyPairWithoutPlaintextCommand");
const GenerateDataKeyWithoutPlaintextCommand_1 = require("./commands/GenerateDataKeyWithoutPlaintextCommand");
const GenerateRandomCommand_1 = require("./commands/GenerateRandomCommand");
const GetKeyPolicyCommand_1 = require("./commands/GetKeyPolicyCommand");
const GetKeyRotationStatusCommand_1 = require("./commands/GetKeyRotationStatusCommand");
const GetParametersForImportCommand_1 = require("./commands/GetParametersForImportCommand");
const GetPublicKeyCommand_1 = require("./commands/GetPublicKeyCommand");
const ImportKeyMaterialCommand_1 = require("./commands/ImportKeyMaterialCommand");
const ListAliasesCommand_1 = require("./commands/ListAliasesCommand");
const ListGrantsCommand_1 = require("./commands/ListGrantsCommand");
const ListKeyPoliciesCommand_1 = require("./commands/ListKeyPoliciesCommand");
const ListKeysCommand_1 = require("./commands/ListKeysCommand");
const ListResourceTagsCommand_1 = require("./commands/ListResourceTagsCommand");
const ListRetirableGrantsCommand_1 = require("./commands/ListRetirableGrantsCommand");
const PutKeyPolicyCommand_1 = require("./commands/PutKeyPolicyCommand");
const ReEncryptCommand_1 = require("./commands/ReEncryptCommand");
const RetireGrantCommand_1 = require("./commands/RetireGrantCommand");
const RevokeGrantCommand_1 = require("./commands/RevokeGrantCommand");
const ScheduleKeyDeletionCommand_1 = require("./commands/ScheduleKeyDeletionCommand");
const SignCommand_1 = require("./commands/SignCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAliasCommand_1 = require("./commands/UpdateAliasCommand");
const UpdateCustomKeyStoreCommand_1 = require("./commands/UpdateCustomKeyStoreCommand");
const UpdateKeyDescriptionCommand_1 = require("./commands/UpdateKeyDescriptionCommand");
const VerifyCommand_1 = require("./commands/VerifyCommand");
/**
 * <fullname>AWS Key Management Service</fullname>
 *          <p>AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes
 *       the AWS KMS operations that you can call programmatically. For general information about AWS KMS,
 *       see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
 *                <i>AWS Key Management Service Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to AWS KMS and other AWS services. For example,
 *         the SDKs take care of tasks such as signing requests (see below), managing errors, and
 *         retrying requests automatically. For more information about the AWS SDKs, including how to
 *         download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS.</p>
 *          <p>Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients
 *       must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral
 *       Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems
 *       such as Java 7 and later support these modes.</p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed by using an access key ID and a secret access key. We strongly
 *       recommend that you <i>do not</i> use your AWS account (root) access key ID and
 *       secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key
 *       for an IAM user. You can also use the AWS Security Token Service to generate temporary
 *       security credentials that you can use to sign requests.</p>
 *          <p>All AWS KMS operations require <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS
 *       account and delivers them to an Amazon S3 bucket that you specify. By using the information
 *       collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request,
 *       when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find
 *       your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail User Guide</a>.</p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information about credentials and request signing, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security
 *             Credentials</a> - This topic provides general information about the types of
 *           credentials used for accessing AWS.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary
 *             Security Credentials</a> - This section of the <i>IAM User Guide</i>
 *           describes how to create and use temporary security credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version
 *             4 Signing Process</a> - This set of topics walks you through the process of signing
 *           a request using an access key ID and a secret access key.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Commonly Used API Operations</b>
 *          </p>
 *          <p>Of the API operations discussed in this guide, the following will prove the most useful
 *       for most applications. You will likely perform operations other than these, such as creating
 *       keys and assigning policies, by using the console.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 */
class KMS extends KMSClient_1.KMSClient {
    cancelKeyDeletion(args, optionsOrCb, cb) {
        const command = new CancelKeyDeletionCommand_1.CancelKeyDeletionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    connectCustomKeyStore(args, optionsOrCb, cb) {
        const command = new ConnectCustomKeyStoreCommand_1.ConnectCustomKeyStoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAlias(args, optionsOrCb, cb) {
        const command = new CreateAliasCommand_1.CreateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomKeyStore(args, optionsOrCb, cb) {
        const command = new CreateCustomKeyStoreCommand_1.CreateCustomKeyStoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGrant(args, optionsOrCb, cb) {
        const command = new CreateGrantCommand_1.CreateGrantCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createKey(args, optionsOrCb, cb) {
        const command = new CreateKeyCommand_1.CreateKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    decrypt(args, optionsOrCb, cb) {
        const command = new DecryptCommand_1.DecryptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAlias(args, optionsOrCb, cb) {
        const command = new DeleteAliasCommand_1.DeleteAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomKeyStore(args, optionsOrCb, cb) {
        const command = new DeleteCustomKeyStoreCommand_1.DeleteCustomKeyStoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteImportedKeyMaterial(args, optionsOrCb, cb) {
        const command = new DeleteImportedKeyMaterialCommand_1.DeleteImportedKeyMaterialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomKeyStores(args, optionsOrCb, cb) {
        const command = new DescribeCustomKeyStoresCommand_1.DescribeCustomKeyStoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeKey(args, optionsOrCb, cb) {
        const command = new DescribeKeyCommand_1.DescribeKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableKey(args, optionsOrCb, cb) {
        const command = new DisableKeyCommand_1.DisableKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableKeyRotation(args, optionsOrCb, cb) {
        const command = new DisableKeyRotationCommand_1.DisableKeyRotationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disconnectCustomKeyStore(args, optionsOrCb, cb) {
        const command = new DisconnectCustomKeyStoreCommand_1.DisconnectCustomKeyStoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableKey(args, optionsOrCb, cb) {
        const command = new EnableKeyCommand_1.EnableKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableKeyRotation(args, optionsOrCb, cb) {
        const command = new EnableKeyRotationCommand_1.EnableKeyRotationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    encrypt(args, optionsOrCb, cb) {
        const command = new EncryptCommand_1.EncryptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateDataKey(args, optionsOrCb, cb) {
        const command = new GenerateDataKeyCommand_1.GenerateDataKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateDataKeyPair(args, optionsOrCb, cb) {
        const command = new GenerateDataKeyPairCommand_1.GenerateDataKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateDataKeyPairWithoutPlaintext(args, optionsOrCb, cb) {
        const command = new GenerateDataKeyPairWithoutPlaintextCommand_1.GenerateDataKeyPairWithoutPlaintextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateDataKeyWithoutPlaintext(args, optionsOrCb, cb) {
        const command = new GenerateDataKeyWithoutPlaintextCommand_1.GenerateDataKeyWithoutPlaintextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    generateRandom(args, optionsOrCb, cb) {
        const command = new GenerateRandomCommand_1.GenerateRandomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getKeyPolicy(args, optionsOrCb, cb) {
        const command = new GetKeyPolicyCommand_1.GetKeyPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getKeyRotationStatus(args, optionsOrCb, cb) {
        const command = new GetKeyRotationStatusCommand_1.GetKeyRotationStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getParametersForImport(args, optionsOrCb, cb) {
        const command = new GetParametersForImportCommand_1.GetParametersForImportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPublicKey(args, optionsOrCb, cb) {
        const command = new GetPublicKeyCommand_1.GetPublicKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importKeyMaterial(args, optionsOrCb, cb) {
        const command = new ImportKeyMaterialCommand_1.ImportKeyMaterialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAliases(args, optionsOrCb, cb) {
        const command = new ListAliasesCommand_1.ListAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGrants(args, optionsOrCb, cb) {
        const command = new ListGrantsCommand_1.ListGrantsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listKeyPolicies(args, optionsOrCb, cb) {
        const command = new ListKeyPoliciesCommand_1.ListKeyPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listKeys(args, optionsOrCb, cb) {
        const command = new ListKeysCommand_1.ListKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourceTags(args, optionsOrCb, cb) {
        const command = new ListResourceTagsCommand_1.ListResourceTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRetirableGrants(args, optionsOrCb, cb) {
        const command = new ListRetirableGrantsCommand_1.ListRetirableGrantsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putKeyPolicy(args, optionsOrCb, cb) {
        const command = new PutKeyPolicyCommand_1.PutKeyPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    reEncrypt(args, optionsOrCb, cb) {
        const command = new ReEncryptCommand_1.ReEncryptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    retireGrant(args, optionsOrCb, cb) {
        const command = new RetireGrantCommand_1.RetireGrantCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeGrant(args, optionsOrCb, cb) {
        const command = new RevokeGrantCommand_1.RevokeGrantCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    scheduleKeyDeletion(args, optionsOrCb, cb) {
        const command = new ScheduleKeyDeletionCommand_1.ScheduleKeyDeletionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sign(args, optionsOrCb, cb) {
        const command = new SignCommand_1.SignCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAlias(args, optionsOrCb, cb) {
        const command = new UpdateAliasCommand_1.UpdateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCustomKeyStore(args, optionsOrCb, cb) {
        const command = new UpdateCustomKeyStoreCommand_1.UpdateCustomKeyStoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateKeyDescription(args, optionsOrCb, cb) {
        const command = new UpdateKeyDescriptionCommand_1.UpdateKeyDescriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verify(args, optionsOrCb, cb) {
        const command = new VerifyCommand_1.VerifyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.KMS = KMS;
//# sourceMappingURL=KMS.js.map