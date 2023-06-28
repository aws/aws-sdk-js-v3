// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelKeyDeletionCommand,
  CancelKeyDeletionCommandInput,
  CancelKeyDeletionCommandOutput,
} from "./commands/CancelKeyDeletionCommand";
import {
  ConnectCustomKeyStoreCommand,
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
} from "./commands/ConnectCustomKeyStoreCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateCustomKeyStoreCommand,
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
} from "./commands/CreateCustomKeyStoreCommand";
import { CreateGrantCommand, CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import { CreateKeyCommand, CreateKeyCommandInput, CreateKeyCommandOutput } from "./commands/CreateKeyCommand";
import { DecryptCommand, DecryptCommandInput, DecryptCommandOutput } from "./commands/DecryptCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import {
  DeleteCustomKeyStoreCommand,
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
} from "./commands/DeleteCustomKeyStoreCommand";
import {
  DeleteImportedKeyMaterialCommand,
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput,
} from "./commands/DeleteImportedKeyMaterialCommand";
import {
  DescribeCustomKeyStoresCommand,
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "./commands/DescribeCustomKeyStoresCommand";
import { DescribeKeyCommand, DescribeKeyCommandInput, DescribeKeyCommandOutput } from "./commands/DescribeKeyCommand";
import { DisableKeyCommand, DisableKeyCommandInput, DisableKeyCommandOutput } from "./commands/DisableKeyCommand";
import {
  DisableKeyRotationCommand,
  DisableKeyRotationCommandInput,
  DisableKeyRotationCommandOutput,
} from "./commands/DisableKeyRotationCommand";
import {
  DisconnectCustomKeyStoreCommand,
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput,
} from "./commands/DisconnectCustomKeyStoreCommand";
import { EnableKeyCommand, EnableKeyCommandInput, EnableKeyCommandOutput } from "./commands/EnableKeyCommand";
import {
  EnableKeyRotationCommand,
  EnableKeyRotationCommandInput,
  EnableKeyRotationCommandOutput,
} from "./commands/EnableKeyRotationCommand";
import { EncryptCommand, EncryptCommandInput, EncryptCommandOutput } from "./commands/EncryptCommand";
import {
  GenerateDataKeyCommand,
  GenerateDataKeyCommandInput,
  GenerateDataKeyCommandOutput,
} from "./commands/GenerateDataKeyCommand";
import {
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
} from "./commands/GenerateDataKeyPairCommand";
import {
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyPairWithoutPlaintextCommand";
import {
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyWithoutPlaintextCommand";
import { GenerateMacCommand, GenerateMacCommandInput, GenerateMacCommandOutput } from "./commands/GenerateMacCommand";
import {
  GenerateRandomCommand,
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput,
} from "./commands/GenerateRandomCommand";
import {
  GetKeyPolicyCommand,
  GetKeyPolicyCommandInput,
  GetKeyPolicyCommandOutput,
} from "./commands/GetKeyPolicyCommand";
import {
  GetKeyRotationStatusCommand,
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
} from "./commands/GetKeyRotationStatusCommand";
import {
  GetParametersForImportCommand,
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "./commands/GetParametersForImportCommand";
import {
  GetPublicKeyCommand,
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
} from "./commands/GetPublicKeyCommand";
import {
  ImportKeyMaterialCommand,
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput,
} from "./commands/ImportKeyMaterialCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListGrantsCommand, ListGrantsCommandInput, ListGrantsCommandOutput } from "./commands/ListGrantsCommand";
import {
  ListKeyPoliciesCommand,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
} from "./commands/ListKeyPoliciesCommand";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand";
import {
  ListResourceTagsCommand,
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput,
} from "./commands/ListResourceTagsCommand";
import {
  ListRetirableGrantsCommand,
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "./commands/ListRetirableGrantsCommand";
import {
  PutKeyPolicyCommand,
  PutKeyPolicyCommandInput,
  PutKeyPolicyCommandOutput,
} from "./commands/PutKeyPolicyCommand";
import { ReEncryptCommand, ReEncryptCommandInput, ReEncryptCommandOutput } from "./commands/ReEncryptCommand";
import {
  ReplicateKeyCommand,
  ReplicateKeyCommandInput,
  ReplicateKeyCommandOutput,
} from "./commands/ReplicateKeyCommand";
import { RetireGrantCommand, RetireGrantCommandInput, RetireGrantCommandOutput } from "./commands/RetireGrantCommand";
import { RevokeGrantCommand, RevokeGrantCommandInput, RevokeGrantCommandOutput } from "./commands/RevokeGrantCommand";
import {
  ScheduleKeyDeletionCommand,
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
} from "./commands/ScheduleKeyDeletionCommand";
import { SignCommand, SignCommandInput, SignCommandOutput } from "./commands/SignCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import {
  UpdateCustomKeyStoreCommand,
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
} from "./commands/UpdateCustomKeyStoreCommand";
import {
  UpdateKeyDescriptionCommand,
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput,
} from "./commands/UpdateKeyDescriptionCommand";
import {
  UpdatePrimaryRegionCommand,
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
} from "./commands/UpdatePrimaryRegionCommand";
import { VerifyCommand, VerifyCommandInput, VerifyCommandOutput } from "./commands/VerifyCommand";
import { VerifyMacCommand, VerifyMacCommandInput, VerifyMacCommandOutput } from "./commands/VerifyMacCommand";
import { KMSClient, KMSClientConfig } from "./KMSClient";

const commands = {
  CancelKeyDeletionCommand,
  ConnectCustomKeyStoreCommand,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisconnectCustomKeyStoreCommand,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  GenerateDataKeyCommand,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateMacCommand,
  GenerateRandomCommand,
  GetKeyPolicyCommand,
  GetKeyRotationStatusCommand,
  GetParametersForImportCommand,
  GetPublicKeyCommand,
  ImportKeyMaterialCommand,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  PutKeyPolicyCommand,
  ReEncryptCommand,
  ReplicateKeyCommand,
  RetireGrantCommand,
  RevokeGrantCommand,
  ScheduleKeyDeletionCommand,
  SignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
};

export interface KMS {
  /**
   * @see {@link CancelKeyDeletionCommand}
   */
  cancelKeyDeletion(
    args: CancelKeyDeletionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelKeyDeletionCommandOutput>;
  cancelKeyDeletion(
    args: CancelKeyDeletionCommandInput,
    cb: (err: any, data?: CancelKeyDeletionCommandOutput) => void
  ): void;
  cancelKeyDeletion(
    args: CancelKeyDeletionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelKeyDeletionCommandOutput) => void
  ): void;

  /**
   * @see {@link ConnectCustomKeyStoreCommand}
   */
  connectCustomKeyStore(
    args: ConnectCustomKeyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConnectCustomKeyStoreCommandOutput>;
  connectCustomKeyStore(
    args: ConnectCustomKeyStoreCommandInput,
    cb: (err: any, data?: ConnectCustomKeyStoreCommandOutput) => void
  ): void;
  connectCustomKeyStore(
    args: ConnectCustomKeyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConnectCustomKeyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomKeyStoreCommand}
   */
  createCustomKeyStore(
    args: CreateCustomKeyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomKeyStoreCommandOutput>;
  createCustomKeyStore(
    args: CreateCustomKeyStoreCommandInput,
    cb: (err: any, data?: CreateCustomKeyStoreCommandOutput) => void
  ): void;
  createCustomKeyStore(
    args: CreateCustomKeyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomKeyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGrantCommand}
   */
  createGrant(args: CreateGrantCommandInput, options?: __HttpHandlerOptions): Promise<CreateGrantCommandOutput>;
  createGrant(args: CreateGrantCommandInput, cb: (err: any, data?: CreateGrantCommandOutput) => void): void;
  createGrant(
    args: CreateGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(args: CreateKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyCommandOutput>;
  createKey(args: CreateKeyCommandInput, cb: (err: any, data?: CreateKeyCommandOutput) => void): void;
  createKey(
    args: CreateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DecryptCommand}
   */
  decrypt(args: DecryptCommandInput, options?: __HttpHandlerOptions): Promise<DecryptCommandOutput>;
  decrypt(args: DecryptCommandInput, cb: (err: any, data?: DecryptCommandOutput) => void): void;
  decrypt(
    args: DecryptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecryptCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomKeyStoreCommand}
   */
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomKeyStoreCommandOutput>;
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreCommandInput,
    cb: (err: any, data?: DeleteCustomKeyStoreCommandOutput) => void
  ): void;
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomKeyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportedKeyMaterialCommand}
   */
  deleteImportedKeyMaterial(
    args: DeleteImportedKeyMaterialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportedKeyMaterialCommandOutput>;
  deleteImportedKeyMaterial(
    args: DeleteImportedKeyMaterialCommandInput,
    cb: (err: any, data?: DeleteImportedKeyMaterialCommandOutput) => void
  ): void;
  deleteImportedKeyMaterial(
    args: DeleteImportedKeyMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportedKeyMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomKeyStoresCommand}
   */
  describeCustomKeyStores(
    args: DescribeCustomKeyStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomKeyStoresCommandOutput>;
  describeCustomKeyStores(
    args: DescribeCustomKeyStoresCommandInput,
    cb: (err: any, data?: DescribeCustomKeyStoresCommandOutput) => void
  ): void;
  describeCustomKeyStores(
    args: DescribeCustomKeyStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomKeyStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyCommand}
   */
  describeKey(args: DescribeKeyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeKeyCommandOutput>;
  describeKey(args: DescribeKeyCommandInput, cb: (err: any, data?: DescribeKeyCommandOutput) => void): void;
  describeKey(
    args: DescribeKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableKeyCommand}
   */
  disableKey(args: DisableKeyCommandInput, options?: __HttpHandlerOptions): Promise<DisableKeyCommandOutput>;
  disableKey(args: DisableKeyCommandInput, cb: (err: any, data?: DisableKeyCommandOutput) => void): void;
  disableKey(
    args: DisableKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableKeyRotationCommand}
   */
  disableKeyRotation(
    args: DisableKeyRotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableKeyRotationCommandOutput>;
  disableKeyRotation(
    args: DisableKeyRotationCommandInput,
    cb: (err: any, data?: DisableKeyRotationCommandOutput) => void
  ): void;
  disableKeyRotation(
    args: DisableKeyRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableKeyRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectCustomKeyStoreCommand}
   */
  disconnectCustomKeyStore(
    args: DisconnectCustomKeyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectCustomKeyStoreCommandOutput>;
  disconnectCustomKeyStore(
    args: DisconnectCustomKeyStoreCommandInput,
    cb: (err: any, data?: DisconnectCustomKeyStoreCommandOutput) => void
  ): void;
  disconnectCustomKeyStore(
    args: DisconnectCustomKeyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectCustomKeyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableKeyCommand}
   */
  enableKey(args: EnableKeyCommandInput, options?: __HttpHandlerOptions): Promise<EnableKeyCommandOutput>;
  enableKey(args: EnableKeyCommandInput, cb: (err: any, data?: EnableKeyCommandOutput) => void): void;
  enableKey(
    args: EnableKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableKeyRotationCommand}
   */
  enableKeyRotation(
    args: EnableKeyRotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableKeyRotationCommandOutput>;
  enableKeyRotation(
    args: EnableKeyRotationCommandInput,
    cb: (err: any, data?: EnableKeyRotationCommandOutput) => void
  ): void;
  enableKeyRotation(
    args: EnableKeyRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableKeyRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link EncryptCommand}
   */
  encrypt(args: EncryptCommandInput, options?: __HttpHandlerOptions): Promise<EncryptCommandOutput>;
  encrypt(args: EncryptCommandInput, cb: (err: any, data?: EncryptCommandOutput) => void): void;
  encrypt(
    args: EncryptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EncryptCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateDataKeyCommand}
   */
  generateDataKey(
    args: GenerateDataKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataKeyCommandOutput>;
  generateDataKey(args: GenerateDataKeyCommandInput, cb: (err: any, data?: GenerateDataKeyCommandOutput) => void): void;
  generateDataKey(
    args: GenerateDataKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateDataKeyPairCommand}
   */
  generateDataKeyPair(
    args: GenerateDataKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataKeyPairCommandOutput>;
  generateDataKeyPair(
    args: GenerateDataKeyPairCommandInput,
    cb: (err: any, data?: GenerateDataKeyPairCommandOutput) => void
  ): void;
  generateDataKeyPair(
    args: GenerateDataKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateDataKeyPairWithoutPlaintextCommand}
   */
  generateDataKeyPairWithoutPlaintext(
    args: GenerateDataKeyPairWithoutPlaintextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput>;
  generateDataKeyPairWithoutPlaintext(
    args: GenerateDataKeyPairWithoutPlaintextCommandInput,
    cb: (err: any, data?: GenerateDataKeyPairWithoutPlaintextCommandOutput) => void
  ): void;
  generateDataKeyPairWithoutPlaintext(
    args: GenerateDataKeyPairWithoutPlaintextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataKeyPairWithoutPlaintextCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateDataKeyWithoutPlaintextCommand}
   */
  generateDataKeyWithoutPlaintext(
    args: GenerateDataKeyWithoutPlaintextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataKeyWithoutPlaintextCommandOutput>;
  generateDataKeyWithoutPlaintext(
    args: GenerateDataKeyWithoutPlaintextCommandInput,
    cb: (err: any, data?: GenerateDataKeyWithoutPlaintextCommandOutput) => void
  ): void;
  generateDataKeyWithoutPlaintext(
    args: GenerateDataKeyWithoutPlaintextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataKeyWithoutPlaintextCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMacCommand}
   */
  generateMac(args: GenerateMacCommandInput, options?: __HttpHandlerOptions): Promise<GenerateMacCommandOutput>;
  generateMac(args: GenerateMacCommandInput, cb: (err: any, data?: GenerateMacCommandOutput) => void): void;
  generateMac(
    args: GenerateMacCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMacCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateRandomCommand}
   */
  generateRandom(
    args: GenerateRandomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateRandomCommandOutput>;
  generateRandom(args: GenerateRandomCommandInput, cb: (err: any, data?: GenerateRandomCommandOutput) => void): void;
  generateRandom(
    args: GenerateRandomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateRandomCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyPolicyCommand}
   */
  getKeyPolicy(args: GetKeyPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPolicyCommandOutput>;
  getKeyPolicy(args: GetKeyPolicyCommandInput, cb: (err: any, data?: GetKeyPolicyCommandOutput) => void): void;
  getKeyPolicy(
    args: GetKeyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyRotationStatusCommand}
   */
  getKeyRotationStatus(
    args: GetKeyRotationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyRotationStatusCommandOutput>;
  getKeyRotationStatus(
    args: GetKeyRotationStatusCommandInput,
    cb: (err: any, data?: GetKeyRotationStatusCommandOutput) => void
  ): void;
  getKeyRotationStatus(
    args: GetKeyRotationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyRotationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParametersForImportCommand}
   */
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParametersForImportCommandOutput>;
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    cb: (err: any, data?: GetParametersForImportCommandOutput) => void
  ): void;
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParametersForImportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(args: GetPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyCommandOutput>;
  getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportKeyMaterialCommand}
   */
  importKeyMaterial(
    args: ImportKeyMaterialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportKeyMaterialCommandOutput>;
  importKeyMaterial(
    args: ImportKeyMaterialCommandInput,
    cb: (err: any, data?: ImportKeyMaterialCommandOutput) => void
  ): void;
  importKeyMaterial(
    args: ImportKeyMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGrantsCommand}
   */
  listGrants(args: ListGrantsCommandInput, options?: __HttpHandlerOptions): Promise<ListGrantsCommandOutput>;
  listGrants(args: ListGrantsCommandInput, cb: (err: any, data?: ListGrantsCommandOutput) => void): void;
  listGrants(
    args: ListGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyPoliciesCommand}
   */
  listKeyPolicies(
    args: ListKeyPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeyPoliciesCommandOutput>;
  listKeyPolicies(args: ListKeyPoliciesCommandInput, cb: (err: any, data?: ListKeyPoliciesCommandOutput) => void): void;
  listKeyPolicies(
    args: ListKeyPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(args: ListKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListKeysCommandOutput>;
  listKeys(args: ListKeysCommandInput, cb: (err: any, data?: ListKeysCommandOutput) => void): void;
  listKeys(
    args: ListKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTagsCommand}
   */
  listResourceTags(
    args: ListResourceTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTagsCommandOutput>;
  listResourceTags(
    args: ListResourceTagsCommandInput,
    cb: (err: any, data?: ListResourceTagsCommandOutput) => void
  ): void;
  listResourceTags(
    args: ListResourceTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetirableGrantsCommand}
   */
  listRetirableGrants(
    args: ListRetirableGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetirableGrantsCommandOutput>;
  listRetirableGrants(
    args: ListRetirableGrantsCommandInput,
    cb: (err: any, data?: ListRetirableGrantsCommandOutput) => void
  ): void;
  listRetirableGrants(
    args: ListRetirableGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetirableGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutKeyPolicyCommand}
   */
  putKeyPolicy(args: PutKeyPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutKeyPolicyCommandOutput>;
  putKeyPolicy(args: PutKeyPolicyCommandInput, cb: (err: any, data?: PutKeyPolicyCommandOutput) => void): void;
  putKeyPolicy(
    args: PutKeyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKeyPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ReEncryptCommand}
   */
  reEncrypt(args: ReEncryptCommandInput, options?: __HttpHandlerOptions): Promise<ReEncryptCommandOutput>;
  reEncrypt(args: ReEncryptCommandInput, cb: (err: any, data?: ReEncryptCommandOutput) => void): void;
  reEncrypt(
    args: ReEncryptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReEncryptCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplicateKeyCommand}
   */
  replicateKey(args: ReplicateKeyCommandInput, options?: __HttpHandlerOptions): Promise<ReplicateKeyCommandOutput>;
  replicateKey(args: ReplicateKeyCommandInput, cb: (err: any, data?: ReplicateKeyCommandOutput) => void): void;
  replicateKey(
    args: ReplicateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplicateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link RetireGrantCommand}
   */
  retireGrant(args: RetireGrantCommandInput, options?: __HttpHandlerOptions): Promise<RetireGrantCommandOutput>;
  retireGrant(args: RetireGrantCommandInput, cb: (err: any, data?: RetireGrantCommandOutput) => void): void;
  retireGrant(
    args: RetireGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetireGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeGrantCommand}
   */
  revokeGrant(args: RevokeGrantCommandInput, options?: __HttpHandlerOptions): Promise<RevokeGrantCommandOutput>;
  revokeGrant(args: RevokeGrantCommandInput, cb: (err: any, data?: RevokeGrantCommandOutput) => void): void;
  revokeGrant(
    args: RevokeGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link ScheduleKeyDeletionCommand}
   */
  scheduleKeyDeletion(
    args: ScheduleKeyDeletionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScheduleKeyDeletionCommandOutput>;
  scheduleKeyDeletion(
    args: ScheduleKeyDeletionCommandInput,
    cb: (err: any, data?: ScheduleKeyDeletionCommandOutput) => void
  ): void;
  scheduleKeyDeletion(
    args: ScheduleKeyDeletionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScheduleKeyDeletionCommandOutput) => void
  ): void;

  /**
   * @see {@link SignCommand}
   */
  sign(args: SignCommandInput, options?: __HttpHandlerOptions): Promise<SignCommandOutput>;
  sign(args: SignCommandInput, cb: (err: any, data?: SignCommandOutput) => void): void;
  sign(args: SignCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SignCommandOutput) => void): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomKeyStoreCommand}
   */
  updateCustomKeyStore(
    args: UpdateCustomKeyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomKeyStoreCommandOutput>;
  updateCustomKeyStore(
    args: UpdateCustomKeyStoreCommandInput,
    cb: (err: any, data?: UpdateCustomKeyStoreCommandOutput) => void
  ): void;
  updateCustomKeyStore(
    args: UpdateCustomKeyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomKeyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyDescriptionCommand}
   */
  updateKeyDescription(
    args: UpdateKeyDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyDescriptionCommandOutput>;
  updateKeyDescription(
    args: UpdateKeyDescriptionCommandInput,
    cb: (err: any, data?: UpdateKeyDescriptionCommandOutput) => void
  ): void;
  updateKeyDescription(
    args: UpdateKeyDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrimaryRegionCommand}
   */
  updatePrimaryRegion(
    args: UpdatePrimaryRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrimaryRegionCommandOutput>;
  updatePrimaryRegion(
    args: UpdatePrimaryRegionCommandInput,
    cb: (err: any, data?: UpdatePrimaryRegionCommandOutput) => void
  ): void;
  updatePrimaryRegion(
    args: UpdatePrimaryRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrimaryRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyCommand}
   */
  verify(args: VerifyCommandInput, options?: __HttpHandlerOptions): Promise<VerifyCommandOutput>;
  verify(args: VerifyCommandInput, cb: (err: any, data?: VerifyCommandOutput) => void): void;
  verify(
    args: VerifyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyMacCommand}
   */
  verifyMac(args: VerifyMacCommandInput, options?: __HttpHandlerOptions): Promise<VerifyMacCommandOutput>;
  verifyMac(args: VerifyMacCommandInput, cb: (err: any, data?: VerifyMacCommandOutput) => void): void;
  verifyMac(
    args: VerifyMacCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyMacCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Key Management Service</fullname>
 *          <p>Key Management Service (KMS) is an encryption and key management web service. This guide describes
 *       the KMS operations that you can call programmatically. For general information about KMS,
 *       see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
 *                <i>Key Management Service Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to KMS and other Amazon Web Services services. For example,
 *         the SDKs take care of tasks such as signing requests (see below), managing errors, and
 *         retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to
 *         download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS.</p>
 *          <p>If you need to use FIPS 140-2 validated cryptographic modules when communicating with
 *       Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the
 *       available FIPS endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">Service endpoints</a> in the Key Management Service topic of
 *       the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>All KMS API calls must be signed and be transmitted using Transport Layer Security
 *       (TLS). KMS recommends you always use the latest supported TLS version. Clients must also
 *       support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman
 *       (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7
 *       and later support these modes.</p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your Amazon Web Services account root access key ID and secret access key for
 *       everyday work. You can use the access key ID and secret access key for an IAM user or you
 *       can use the Security Token Service (STS) to generate temporary security credentials and use those to sign
 *       requests. </p>
 *          <p>All KMS requests must be signed with <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your
 *       Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the
 *       information collected by CloudTrail, you can determine what requests were made to KMS, who made
 *       the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it
 *       on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information about credentials and request signing, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services
 *             Security Credentials</a> - This topic provides general information about the types
 *           of credentials used to access Amazon Web Services.</p>
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
export class KMS extends KMSClient implements KMS {}
createAggregatedClient(commands, KMS);
