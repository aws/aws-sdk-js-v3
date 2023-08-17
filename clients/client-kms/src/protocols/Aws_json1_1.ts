// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput } from "../commands/CancelKeyDeletionCommand";
import {
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
} from "../commands/ConnectCustomKeyStoreCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import {
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
} from "../commands/CreateCustomKeyStoreCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "../commands/CreateGrantCommand";
import { CreateKeyCommandInput, CreateKeyCommandOutput } from "../commands/CreateKeyCommand";
import { DecryptCommandInput, DecryptCommandOutput } from "../commands/DecryptCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import {
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
} from "../commands/DeleteCustomKeyStoreCommand";
import {
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput,
} from "../commands/DeleteImportedKeyMaterialCommand";
import {
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "../commands/DescribeCustomKeyStoresCommand";
import { DescribeKeyCommandInput, DescribeKeyCommandOutput } from "../commands/DescribeKeyCommand";
import { DisableKeyCommandInput, DisableKeyCommandOutput } from "../commands/DisableKeyCommand";
import { DisableKeyRotationCommandInput, DisableKeyRotationCommandOutput } from "../commands/DisableKeyRotationCommand";
import {
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput,
} from "../commands/DisconnectCustomKeyStoreCommand";
import { EnableKeyCommandInput, EnableKeyCommandOutput } from "../commands/EnableKeyCommand";
import { EnableKeyRotationCommandInput, EnableKeyRotationCommandOutput } from "../commands/EnableKeyRotationCommand";
import { EncryptCommandInput, EncryptCommandOutput } from "../commands/EncryptCommand";
import { GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput } from "../commands/GenerateDataKeyCommand";
import {
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
} from "../commands/GenerateDataKeyPairCommand";
import {
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
} from "../commands/GenerateDataKeyPairWithoutPlaintextCommand";
import {
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
} from "../commands/GenerateDataKeyWithoutPlaintextCommand";
import { GenerateMacCommandInput, GenerateMacCommandOutput } from "../commands/GenerateMacCommand";
import { GenerateRandomCommandInput, GenerateRandomCommandOutput } from "../commands/GenerateRandomCommand";
import { GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput } from "../commands/GetKeyPolicyCommand";
import {
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
} from "../commands/GetKeyRotationStatusCommand";
import {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "../commands/GetParametersForImportCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "../commands/GetPublicKeyCommand";
import { ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput } from "../commands/ImportKeyMaterialCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { ListGrantsCommandInput, ListGrantsCommandOutput } from "../commands/ListGrantsCommand";
import { ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput } from "../commands/ListKeyPoliciesCommand";
import { ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { ListResourceTagsCommandInput, ListResourceTagsCommandOutput } from "../commands/ListResourceTagsCommand";
import {
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "../commands/ListRetirableGrantsCommand";
import { PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput } from "../commands/PutKeyPolicyCommand";
import { ReEncryptCommandInput, ReEncryptCommandOutput } from "../commands/ReEncryptCommand";
import { ReplicateKeyCommandInput, ReplicateKeyCommandOutput } from "../commands/ReplicateKeyCommand";
import { RetireGrantCommandInput, RetireGrantCommandOutput } from "../commands/RetireGrantCommand";
import { RevokeGrantCommandInput, RevokeGrantCommandOutput } from "../commands/RevokeGrantCommand";
import {
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
} from "../commands/ScheduleKeyDeletionCommand";
import { SignCommandInput, SignCommandOutput } from "../commands/SignCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "../commands/UpdateAliasCommand";
import {
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
} from "../commands/UpdateCustomKeyStoreCommand";
import {
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput,
} from "../commands/UpdateKeyDescriptionCommand";
import {
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
} from "../commands/UpdatePrimaryRegionCommand";
import { VerifyCommandInput, VerifyCommandOutput } from "../commands/VerifyCommand";
import { VerifyMacCommandInput, VerifyMacCommandOutput } from "../commands/VerifyMacCommand";
import { KMSServiceException as __BaseException } from "../models/KMSServiceException";
import {
  AliasListEntry,
  AlreadyExistsException,
  CancelKeyDeletionRequest,
  CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException,
  ConnectCustomKeyStoreRequest,
  CreateAliasRequest,
  CreateCustomKeyStoreRequest,
  CreateGrantRequest,
  CreateKeyRequest,
  CreateKeyResponse,
  CustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException,
  CustomKeyStoresListEntry,
  DecryptRequest,
  DecryptResponse,
  DeleteAliasRequest,
  DeleteCustomKeyStoreRequest,
  DeleteImportedKeyMaterialRequest,
  DependencyTimeoutException,
  DescribeCustomKeyStoresRequest,
  DescribeCustomKeyStoresResponse,
  DescribeKeyRequest,
  DescribeKeyResponse,
  DisabledException,
  DisableKeyRequest,
  DisableKeyRotationRequest,
  DisconnectCustomKeyStoreRequest,
  DryRunOperationException,
  EnableKeyRequest,
  EnableKeyRotationRequest,
  EncryptRequest,
  EncryptResponse,
  ExpiredImportTokenException,
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairResponse,
  GenerateDataKeyPairWithoutPlaintextRequest,
  GenerateDataKeyPairWithoutPlaintextResponse,
  GenerateDataKeyRequest,
  GenerateDataKeyResponse,
  GenerateDataKeyWithoutPlaintextRequest,
  GenerateDataKeyWithoutPlaintextResponse,
  GenerateMacRequest,
  GenerateMacResponse,
  GenerateRandomRequest,
  GenerateRandomResponse,
  GetKeyPolicyRequest,
  GetKeyRotationStatusRequest,
  GetParametersForImportRequest,
  GetParametersForImportResponse,
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  GrantConstraints,
  GrantListEntry,
  GrantOperation,
  ImportKeyMaterialRequest,
  IncorrectKeyException,
  IncorrectKeyMaterialException,
  IncorrectTrustAnchorException,
  InvalidAliasNameException,
  InvalidArnException,
  InvalidCiphertextException,
  InvalidGrantIdException,
  InvalidGrantTokenException,
  InvalidImportTokenException,
  InvalidKeyUsageException,
  InvalidMarkerException,
  KeyMetadata,
  KeyUnavailableException,
  KMSInternalException,
  KMSInvalidMacException,
  KMSInvalidSignatureException,
  KMSInvalidStateException,
  LimitExceededException,
  ListAliasesRequest,
  ListAliasesResponse,
  ListGrantsRequest,
  ListGrantsResponse,
  ListKeyPoliciesRequest,
  ListKeysRequest,
  ListResourceTagsRequest,
  ListRetirableGrantsRequest,
  MalformedPolicyDocumentException,
  NotFoundException,
  PutKeyPolicyRequest,
  RecipientInfo,
  ReEncryptRequest,
  ReEncryptResponse,
  ReplicateKeyRequest,
  ReplicateKeyResponse,
  RetireGrantRequest,
  RevokeGrantRequest,
  ScheduleKeyDeletionRequest,
  ScheduleKeyDeletionResponse,
  SignRequest,
  SignResponse,
  Tag,
  TagException,
  TagResourceRequest,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateAliasRequest,
  UpdateCustomKeyStoreRequest,
  UpdateKeyDescriptionRequest,
  UpdatePrimaryRegionRequest,
  VerifyMacRequest,
  VerifyRequest,
  XksKeyAlreadyInUseException,
  XksKeyInvalidConfigurationException,
  XksKeyNotFoundException,
  XksProxyAuthenticationCredentialType,
  XksProxyIncorrectAuthenticationCredentialException,
  XksProxyInvalidConfigurationException,
  XksProxyInvalidResponseException,
  XksProxyUriEndpointInUseException,
  XksProxyUriInUseException,
  XksProxyUriUnreachableException,
  XksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceNotFoundException,
} from "../models/models_0";

/**
 * serializeAws_json1_1CancelKeyDeletionCommand
 */
export const se_CancelKeyDeletionCommand = async (
  input: CancelKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelKeyDeletion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConnectCustomKeyStoreCommand
 */
export const se_ConnectCustomKeyStoreCommand = async (
  input: ConnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConnectCustomKeyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomKeyStoreCommand
 */
export const se_CreateCustomKeyStoreCommand = async (
  input: CreateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCustomKeyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGrantCommand
 */
export const se_CreateGrantCommand = async (
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGrant");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateKeyCommand
 */
export const se_CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DecryptCommand
 */
export const se_DecryptCommand = async (
  input: DecryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Decrypt");
  let body: any;
  body = JSON.stringify(se_DecryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomKeyStoreCommand
 */
export const se_DeleteCustomKeyStoreCommand = async (
  input: DeleteCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomKeyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImportedKeyMaterialCommand
 */
export const se_DeleteImportedKeyMaterialCommand = async (
  input: DeleteImportedKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImportedKeyMaterial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomKeyStoresCommand
 */
export const se_DescribeCustomKeyStoresCommand = async (
  input: DescribeCustomKeyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomKeyStores");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeKeyCommand
 */
export const se_DescribeKeyCommand = async (
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableKeyCommand
 */
export const se_DisableKeyCommand = async (
  input: DisableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableKeyRotationCommand
 */
export const se_DisableKeyRotationCommand = async (
  input: DisableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableKeyRotation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisconnectCustomKeyStoreCommand
 */
export const se_DisconnectCustomKeyStoreCommand = async (
  input: DisconnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisconnectCustomKeyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableKeyCommand
 */
export const se_EnableKeyCommand = async (
  input: EnableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableKeyRotationCommand
 */
export const se_EnableKeyRotationCommand = async (
  input: EnableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableKeyRotation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EncryptCommand
 */
export const se_EncryptCommand = async (
  input: EncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Encrypt");
  let body: any;
  body = JSON.stringify(se_EncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateDataKeyCommand
 */
export const se_GenerateDataKeyCommand = async (
  input: GenerateDataKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateDataKey");
  let body: any;
  body = JSON.stringify(se_GenerateDataKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateDataKeyPairCommand
 */
export const se_GenerateDataKeyPairCommand = async (
  input: GenerateDataKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateDataKeyPair");
  let body: any;
  body = JSON.stringify(se_GenerateDataKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand
 */
export const se_GenerateDataKeyPairWithoutPlaintextCommand = async (
  input: GenerateDataKeyPairWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateDataKeyPairWithoutPlaintext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand
 */
export const se_GenerateDataKeyWithoutPlaintextCommand = async (
  input: GenerateDataKeyWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateDataKeyWithoutPlaintext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateMacCommand
 */
export const se_GenerateMacCommand = async (
  input: GenerateMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateMac");
  let body: any;
  body = JSON.stringify(se_GenerateMacRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateRandomCommand
 */
export const se_GenerateRandomCommand = async (
  input: GenerateRandomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateRandom");
  let body: any;
  body = JSON.stringify(se_GenerateRandomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyPolicyCommand
 */
export const se_GetKeyPolicyCommand = async (
  input: GetKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyRotationStatusCommand
 */
export const se_GetKeyRotationStatusCommand = async (
  input: GetKeyRotationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyRotationStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersForImportCommand
 */
export const se_GetParametersForImportCommand = async (
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParametersForImport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPublicKeyCommand
 */
export const se_GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPublicKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportKeyMaterialCommand
 */
export const se_ImportKeyMaterialCommand = async (
  input: ImportKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportKeyMaterial");
  let body: any;
  body = JSON.stringify(se_ImportKeyMaterialRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGrantsCommand
 */
export const se_ListGrantsCommand = async (
  input: ListGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGrants");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListKeyPoliciesCommand
 */
export const se_ListKeyPoliciesCommand = async (
  input: ListKeyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeyPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListKeysCommand
 */
export const se_ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceTagsCommand
 */
export const se_ListResourceTagsCommand = async (
  input: ListResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRetirableGrantsCommand
 */
export const se_ListRetirableGrantsCommand = async (
  input: ListRetirableGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRetirableGrants");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutKeyPolicyCommand
 */
export const se_PutKeyPolicyCommand = async (
  input: PutKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutKeyPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReEncryptCommand
 */
export const se_ReEncryptCommand = async (
  input: ReEncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReEncrypt");
  let body: any;
  body = JSON.stringify(se_ReEncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReplicateKeyCommand
 */
export const se_ReplicateKeyCommand = async (
  input: ReplicateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReplicateKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetireGrantCommand
 */
export const se_RetireGrantCommand = async (
  input: RetireGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetireGrant");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeGrantCommand
 */
export const se_RevokeGrantCommand = async (
  input: RevokeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RevokeGrant");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ScheduleKeyDeletionCommand
 */
export const se_ScheduleKeyDeletionCommand = async (
  input: ScheduleKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ScheduleKeyDeletion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SignCommand
 */
export const se_SignCommand = async (input: SignCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Sign");
  let body: any;
  body = JSON.stringify(se_SignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomKeyStoreCommand
 */
export const se_UpdateCustomKeyStoreCommand = async (
  input: UpdateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCustomKeyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateKeyDescriptionCommand
 */
export const se_UpdateKeyDescriptionCommand = async (
  input: UpdateKeyDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateKeyDescription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePrimaryRegionCommand
 */
export const se_UpdatePrimaryRegionCommand = async (
  input: UpdatePrimaryRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePrimaryRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyCommand
 */
export const se_VerifyCommand = async (input: VerifyCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Verify");
  let body: any;
  body = JSON.stringify(se_VerifyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyMacCommand
 */
export const se_VerifyMacCommand = async (
  input: VerifyMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("VerifyMac");
  let body: any;
  body = JSON.stringify(se_VerifyMacRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CancelKeyDeletionCommand
 */
export const de_CancelKeyDeletionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelKeyDeletionCommandError
 */
const de_CancelKeyDeletionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConnectCustomKeyStoreCommand
 */
export const de_ConnectCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConnectCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ConnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ConnectCustomKeyStoreCommandError
 */
const de_ConnectCustomKeyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      throw await de_CloudHsmClusterInvalidConfigurationExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await de_CloudHsmClusterNotActiveExceptionRes(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.kms#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidAliasNameException":
    case "com.amazonaws.kms#InvalidAliasNameException":
      throw await de_InvalidAliasNameExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCustomKeyStoreCommand
 */
export const de_CreateCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCustomKeyStoreCommandError
 */
const de_CreateCustomKeyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInUseException":
    case "com.amazonaws.kms#CloudHsmClusterInUseException":
      throw await de_CloudHsmClusterInUseExceptionRes(parsedOutput, context);
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      throw await de_CloudHsmClusterInvalidConfigurationExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await de_CloudHsmClusterNotActiveExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      throw await de_CloudHsmClusterNotFoundExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      throw await de_CustomKeyStoreNameInUseExceptionRes(parsedOutput, context);
    case "IncorrectTrustAnchorException":
    case "com.amazonaws.kms#IncorrectTrustAnchorException":
      throw await de_IncorrectTrustAnchorExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "XksProxyIncorrectAuthenticationCredentialException":
    case "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException":
      throw await de_XksProxyIncorrectAuthenticationCredentialExceptionRes(parsedOutput, context);
    case "XksProxyInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyInvalidConfigurationException":
      throw await de_XksProxyInvalidConfigurationExceptionRes(parsedOutput, context);
    case "XksProxyInvalidResponseException":
    case "com.amazonaws.kms#XksProxyInvalidResponseException":
      throw await de_XksProxyInvalidResponseExceptionRes(parsedOutput, context);
    case "XksProxyUriEndpointInUseException":
    case "com.amazonaws.kms#XksProxyUriEndpointInUseException":
      throw await de_XksProxyUriEndpointInUseExceptionRes(parsedOutput, context);
    case "XksProxyUriInUseException":
    case "com.amazonaws.kms#XksProxyUriInUseException":
      throw await de_XksProxyUriInUseExceptionRes(parsedOutput, context);
    case "XksProxyUriUnreachableException":
    case "com.amazonaws.kms#XksProxyUriUnreachableException":
      throw await de_XksProxyUriUnreachableExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInUseException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException":
      throw await de_XksProxyVpcEndpointServiceInUseExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException":
      throw await de_XksProxyVpcEndpointServiceInvalidConfigurationExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceNotFoundException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException":
      throw await de_XksProxyVpcEndpointServiceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateGrantCommand
 */
export const de_CreateGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateGrantCommandError
 */
const de_CreateGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateKeyCommand
 */
export const de_CreateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateKeyResponse(data, context);
  const response: CreateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateKeyCommandError
 */
const de_CreateKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      throw await de_CloudHsmClusterInvalidConfigurationExceptionRes(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await de_TagExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "XksKeyAlreadyInUseException":
    case "com.amazonaws.kms#XksKeyAlreadyInUseException":
      throw await de_XksKeyAlreadyInUseExceptionRes(parsedOutput, context);
    case "XksKeyInvalidConfigurationException":
    case "com.amazonaws.kms#XksKeyInvalidConfigurationException":
      throw await de_XksKeyInvalidConfigurationExceptionRes(parsedOutput, context);
    case "XksKeyNotFoundException":
    case "com.amazonaws.kms#XksKeyNotFoundException":
      throw await de_XksKeyNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DecryptCommand
 */
export const de_DecryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecryptResponse(data, context);
  const response: DecryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DecryptCommandError
 */
const de_DecryptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      throw await de_IncorrectKeyExceptionRes(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await de_InvalidCiphertextExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAliasCommandError
 */
const de_DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCustomKeyStoreCommand
 */
export const de_DeleteCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCustomKeyStoreCommandError
 */
const de_DeleteCustomKeyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreHasCMKsException":
    case "com.amazonaws.kms#CustomKeyStoreHasCMKsException":
      throw await de_CustomKeyStoreHasCMKsExceptionRes(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImportedKeyMaterialCommand
 */
export const de_DeleteImportedKeyMaterialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImportedKeyMaterialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteImportedKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteImportedKeyMaterialCommandError
 */
const de_DeleteImportedKeyMaterialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCustomKeyStoresCommand
 */
export const de_DescribeCustomKeyStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomKeyStoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomKeyStoresResponse(data, context);
  const response: DescribeCustomKeyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCustomKeyStoresCommandError
 */
const de_DescribeCustomKeyStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeKeyCommand
 */
export const de_DescribeKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeKeyResponse(data, context);
  const response: DescribeKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeKeyCommandError
 */
const de_DescribeKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableKeyCommand
 */
export const de_DisableKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableKeyCommandError
 */
const de_DisableKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableKeyRotationCommand
 */
export const de_DisableKeyRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableKeyRotationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableKeyRotationCommandError
 */
const de_DisableKeyRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisconnectCustomKeyStoreCommand
 */
export const de_DisconnectCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisconnectCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisconnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisconnectCustomKeyStoreCommandError
 */
const de_DisconnectCustomKeyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableKeyCommand
 */
export const de_EnableKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableKeyCommandError
 */
const de_EnableKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableKeyRotationCommand
 */
export const de_EnableKeyRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableKeyRotationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableKeyRotationCommandError
 */
const de_EnableKeyRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EncryptCommand
 */
export const de_EncryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EncryptResponse(data, context);
  const response: EncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EncryptCommandError
 */
const de_EncryptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateDataKeyCommand
 */
export const de_GenerateDataKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateDataKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateDataKeyResponse(data, context);
  const response: GenerateDataKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateDataKeyCommandError
 */
const de_GenerateDataKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairCommand
 */
export const de_GenerateDataKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateDataKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateDataKeyPairResponse(data, context);
  const response: GenerateDataKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairCommandError
 */
const de_GenerateDataKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand
 */
export const de_GenerateDataKeyPairWithoutPlaintextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateDataKeyPairWithoutPlaintextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateDataKeyPairWithoutPlaintextResponse(data, context);
  const response: GenerateDataKeyPairWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError
 */
const de_GenerateDataKeyPairWithoutPlaintextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand
 */
export const de_GenerateDataKeyWithoutPlaintextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateDataKeyWithoutPlaintextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateDataKeyWithoutPlaintextResponse(data, context);
  const response: GenerateDataKeyWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError
 */
const de_GenerateDataKeyWithoutPlaintextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateMacCommand
 */
export const de_GenerateMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateMacCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateMacResponse(data, context);
  const response: GenerateMacCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateMacCommandError
 */
const de_GenerateMacCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GenerateRandomCommand
 */
export const de_GenerateRandomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateRandomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateRandomResponse(data, context);
  const response: GenerateRandomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GenerateRandomCommandError
 */
const de_GenerateRandomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetKeyPolicyCommand
 */
export const de_GetKeyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetKeyPolicyCommandError
 */
const de_GetKeyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetKeyRotationStatusCommand
 */
export const de_GetKeyRotationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyRotationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetKeyRotationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetKeyRotationStatusCommandError
 */
const de_GetKeyRotationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetParametersForImportCommand
 */
export const de_GetParametersForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParametersForImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParametersForImportResponse(data, context);
  const response: GetParametersForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetParametersForImportCommandError
 */
const de_GetParametersForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPublicKeyCommand
 */
export const de_GetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPublicKeyResponse(data, context);
  const response: GetPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPublicKeyCommandError
 */
const de_GetPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportKeyMaterialCommand
 */
export const de_ImportKeyMaterialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportKeyMaterialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportKeyMaterialCommandError
 */
const de_ImportKeyMaterialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "ExpiredImportTokenException":
    case "com.amazonaws.kms#ExpiredImportTokenException":
      throw await de_ExpiredImportTokenExceptionRes(parsedOutput, context);
    case "IncorrectKeyMaterialException":
    case "com.amazonaws.kms#IncorrectKeyMaterialException":
      throw await de_IncorrectKeyMaterialExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await de_InvalidCiphertextExceptionRes(parsedOutput, context);
    case "InvalidImportTokenException":
    case "com.amazonaws.kms#InvalidImportTokenException":
      throw await de_InvalidImportTokenExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGrantsCommand
 */
export const de_ListGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGrantsResponse(data, context);
  const response: ListGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGrantsCommandError
 */
const de_ListGrantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await de_InvalidGrantIdExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListKeyPoliciesCommand
 */
export const de_ListKeyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListKeyPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListKeyPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListKeyPoliciesCommandError
 */
const de_ListKeyPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListKeysCommand
 */
export const de_ListKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListKeysCommandError
 */
const de_ListKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceTagsCommand
 */
export const de_ListResourceTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourceTagsCommandError
 */
const de_ListResourceTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRetirableGrantsCommand
 */
export const de_ListRetirableGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRetirableGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGrantsResponse(data, context);
  const response: ListRetirableGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRetirableGrantsCommandError
 */
const de_ListRetirableGrantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await de_InvalidMarkerExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutKeyPolicyCommand
 */
export const de_PutKeyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutKeyPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutKeyPolicyCommandError
 */
const de_PutKeyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReEncryptCommand
 */
export const de_ReEncryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReEncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReEncryptResponse(data, context);
  const response: ReEncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ReEncryptCommandError
 */
const de_ReEncryptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      throw await de_IncorrectKeyExceptionRes(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await de_InvalidCiphertextExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReplicateKeyCommand
 */
export const de_ReplicateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReplicateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReplicateKeyResponse(data, context);
  const response: ReplicateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ReplicateKeyCommandError
 */
const de_ReplicateKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.kms#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await de_TagExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetireGrantCommand
 */
export const de_RetireGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetireGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RetireGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RetireGrantCommandError
 */
const de_RetireGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await de_InvalidGrantIdExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RevokeGrantCommand
 */
export const de_RevokeGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RevokeGrantCommandError
 */
const de_RevokeGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await de_InvalidGrantIdExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ScheduleKeyDeletionCommand
 */
export const de_ScheduleKeyDeletionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ScheduleKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduleKeyDeletionResponse(data, context);
  const response: ScheduleKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ScheduleKeyDeletionCommandError
 */
const de_ScheduleKeyDeletionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SignCommand
 */
export const de_SignCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<SignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SignResponse(data, context);
  const response: SignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SignCommandError
 */
const de_SignCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<SignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await de_TagExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await de_TagExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAliasCommand
 */
export const de_UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAliasCommandError
 */
const de_UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCustomKeyStoreCommand
 */
export const de_UpdateCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCustomKeyStoreCommandError
 */
const de_UpdateCustomKeyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      throw await de_CloudHsmClusterInvalidConfigurationExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await de_CloudHsmClusterNotActiveExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      throw await de_CloudHsmClusterNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmClusterNotRelatedException":
    case "com.amazonaws.kms#CloudHsmClusterNotRelatedException":
      throw await de_CloudHsmClusterNotRelatedExceptionRes(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await de_CustomKeyStoreInvalidStateExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      throw await de_CustomKeyStoreNameInUseExceptionRes(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await de_CustomKeyStoreNotFoundExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "XksProxyIncorrectAuthenticationCredentialException":
    case "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException":
      throw await de_XksProxyIncorrectAuthenticationCredentialExceptionRes(parsedOutput, context);
    case "XksProxyInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyInvalidConfigurationException":
      throw await de_XksProxyInvalidConfigurationExceptionRes(parsedOutput, context);
    case "XksProxyInvalidResponseException":
    case "com.amazonaws.kms#XksProxyInvalidResponseException":
      throw await de_XksProxyInvalidResponseExceptionRes(parsedOutput, context);
    case "XksProxyUriEndpointInUseException":
    case "com.amazonaws.kms#XksProxyUriEndpointInUseException":
      throw await de_XksProxyUriEndpointInUseExceptionRes(parsedOutput, context);
    case "XksProxyUriInUseException":
    case "com.amazonaws.kms#XksProxyUriInUseException":
      throw await de_XksProxyUriInUseExceptionRes(parsedOutput, context);
    case "XksProxyUriUnreachableException":
    case "com.amazonaws.kms#XksProxyUriUnreachableException":
      throw await de_XksProxyUriUnreachableExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInUseException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException":
      throw await de_XksProxyVpcEndpointServiceInUseExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException":
      throw await de_XksProxyVpcEndpointServiceInvalidConfigurationExceptionRes(parsedOutput, context);
    case "XksProxyVpcEndpointServiceNotFoundException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException":
      throw await de_XksProxyVpcEndpointServiceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateKeyDescriptionCommand
 */
export const de_UpdateKeyDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateKeyDescriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateKeyDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateKeyDescriptionCommandError
 */
const de_UpdateKeyDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePrimaryRegionCommand
 */
export const de_UpdatePrimaryRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePrimaryRegionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdatePrimaryRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePrimaryRegionCommandError
 */
const de_UpdatePrimaryRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1VerifyCommand
 */
export const de_VerifyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: VerifyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1VerifyCommandError
 */
const de_VerifyCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<VerifyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await de_DependencyTimeoutExceptionRes(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidSignatureException":
    case "com.amazonaws.kms#KMSInvalidSignatureException":
      throw await de_KMSInvalidSignatureExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1VerifyMacCommand
 */
export const de_VerifyMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyMacCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: VerifyMacCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1VerifyMacCommandError
 */
const de_VerifyMacCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await de_DisabledExceptionRes(parsedOutput, context);
    case "DryRunOperationException":
    case "com.amazonaws.kms#DryRunOperationException":
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await de_InvalidGrantTokenExceptionRes(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await de_InvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await de_KMSInternalExceptionRes(parsedOutput, context);
    case "KMSInvalidMacException":
    case "com.amazonaws.kms#KMSInvalidMacException":
      throw await de_KMSInvalidMacExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await de_KeyUnavailableExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmClusterInUseExceptionRes
 */
const de_CloudHsmClusterInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmClusterInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionRes
 */
const de_CloudHsmClusterInvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmClusterInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotActiveExceptionRes
 */
const de_CloudHsmClusterNotActiveExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmClusterNotActiveException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotFoundExceptionRes
 */
const de_CloudHsmClusterNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmClusterNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionRes
 */
const de_CloudHsmClusterNotRelatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotRelatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmClusterNotRelatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionRes
 */
const de_CustomKeyStoreHasCMKsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreHasCMKsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CustomKeyStoreHasCMKsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionRes
 */
const de_CustomKeyStoreInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CustomKeyStoreInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CustomKeyStoreNameInUseExceptionRes
 */
const de_CustomKeyStoreNameInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CustomKeyStoreNameInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CustomKeyStoreNotFoundExceptionRes
 */
const de_CustomKeyStoreNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CustomKeyStoreNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DependencyTimeoutExceptionRes
 */
const de_DependencyTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DependencyTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DisabledExceptionRes
 */
const de_DisabledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<DisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DryRunOperationExceptionRes
 */
const de_DryRunOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DryRunOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredImportTokenExceptionRes
 */
const de_ExpiredImportTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExpiredImportTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncorrectKeyExceptionRes
 */
const de_IncorrectKeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncorrectKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncorrectKeyMaterialExceptionRes
 */
const de_IncorrectKeyMaterialExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyMaterialException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncorrectKeyMaterialException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncorrectTrustAnchorExceptionRes
 */
const de_IncorrectTrustAnchorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectTrustAnchorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncorrectTrustAnchorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAliasNameExceptionRes
 */
const de_InvalidAliasNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAliasNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidAliasNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArnExceptionRes
 */
const de_InvalidArnExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCiphertextExceptionRes
 */
const de_InvalidCiphertextExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCiphertextException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCiphertextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGrantIdExceptionRes
 */
const de_InvalidGrantIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidGrantIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGrantTokenExceptionRes
 */
const de_InvalidGrantTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidGrantTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidImportTokenExceptionRes
 */
const de_InvalidImportTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidImportTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKeyUsageExceptionRes
 */
const de_InvalidKeyUsageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidKeyUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMarkerExceptionRes
 */
const de_InvalidMarkerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMarkerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMarkerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KeyUnavailableExceptionRes
 */
const de_KeyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KeyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInternalExceptionRes
 */
const de_KMSInternalExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInvalidMacExceptionRes
 */
const de_KMSInvalidMacExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidMacException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSInvalidMacException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInvalidSignatureExceptionRes
 */
const de_KMSInvalidSignatureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidSignatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSInvalidSignatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInvalidStateExceptionRes
 */
const de_KMSInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagExceptionRes
 */
const de_TagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksKeyAlreadyInUseExceptionRes
 */
const de_XksKeyAlreadyInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyAlreadyInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksKeyAlreadyInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksKeyInvalidConfigurationExceptionRes
 */
const de_XksKeyInvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksKeyInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksKeyNotFoundExceptionRes
 */
const de_XksKeyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialExceptionRes
 */
const de_XksProxyIncorrectAuthenticationCredentialExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyIncorrectAuthenticationCredentialException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyIncorrectAuthenticationCredentialException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyInvalidConfigurationExceptionRes
 */
const de_XksProxyInvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyInvalidResponseExceptionRes
 */
const de_XksProxyInvalidResponseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyInvalidResponseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyInvalidResponseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyUriEndpointInUseExceptionRes
 */
const de_XksProxyUriEndpointInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriEndpointInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyUriEndpointInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyUriInUseExceptionRes
 */
const de_XksProxyUriInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyUriInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyUriUnreachableExceptionRes
 */
const de_XksProxyUriUnreachableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriUnreachableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyUriUnreachableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceInUseExceptionRes
 */
const de_XksProxyVpcEndpointServiceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyVpcEndpointServiceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationExceptionRes
 */
const de_XksProxyVpcEndpointServiceInvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyVpcEndpointServiceInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundExceptionRes
 */
const de_XksProxyVpcEndpointServiceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new XksProxyVpcEndpointServiceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CancelKeyDeletionRequest omitted.

// se_ConnectCustomKeyStoreRequest omitted.

// se_CreateAliasRequest omitted.

// se_CreateCustomKeyStoreRequest omitted.

// se_CreateGrantRequest omitted.

// se_CreateKeyRequest omitted.

/**
 * serializeAws_json1_1DecryptRequest
 */
const se_DecryptRequest = (input: DecryptRequest, context: __SerdeContext): any => {
  return take(input, {
    CiphertextBlob: context.base64Encoder,
    DryRun: [],
    EncryptionAlgorithm: [],
    EncryptionContext: _json,
    GrantTokens: _json,
    KeyId: [],
    Recipient: (_) => se_RecipientInfo(_, context),
  });
};

// se_DeleteAliasRequest omitted.

// se_DeleteCustomKeyStoreRequest omitted.

// se_DeleteImportedKeyMaterialRequest omitted.

// se_DescribeCustomKeyStoresRequest omitted.

// se_DescribeKeyRequest omitted.

// se_DisableKeyRequest omitted.

// se_DisableKeyRotationRequest omitted.

// se_DisconnectCustomKeyStoreRequest omitted.

// se_EnableKeyRequest omitted.

// se_EnableKeyRotationRequest omitted.

// se_EncryptionContextType omitted.

/**
 * serializeAws_json1_1EncryptRequest
 */
const se_EncryptRequest = (input: EncryptRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    EncryptionAlgorithm: [],
    EncryptionContext: _json,
    GrantTokens: _json,
    KeyId: [],
    Plaintext: context.base64Encoder,
  });
};

/**
 * serializeAws_json1_1GenerateDataKeyPairRequest
 */
const se_GenerateDataKeyPairRequest = (input: GenerateDataKeyPairRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    EncryptionContext: _json,
    GrantTokens: _json,
    KeyId: [],
    KeyPairSpec: [],
    Recipient: (_) => se_RecipientInfo(_, context),
  });
};

// se_GenerateDataKeyPairWithoutPlaintextRequest omitted.

/**
 * serializeAws_json1_1GenerateDataKeyRequest
 */
const se_GenerateDataKeyRequest = (input: GenerateDataKeyRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    EncryptionContext: _json,
    GrantTokens: _json,
    KeyId: [],
    KeySpec: [],
    NumberOfBytes: [],
    Recipient: (_) => se_RecipientInfo(_, context),
  });
};

// se_GenerateDataKeyWithoutPlaintextRequest omitted.

/**
 * serializeAws_json1_1GenerateMacRequest
 */
const se_GenerateMacRequest = (input: GenerateMacRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    GrantTokens: _json,
    KeyId: [],
    MacAlgorithm: [],
    Message: context.base64Encoder,
  });
};

/**
 * serializeAws_json1_1GenerateRandomRequest
 */
const se_GenerateRandomRequest = (input: GenerateRandomRequest, context: __SerdeContext): any => {
  return take(input, {
    CustomKeyStoreId: [],
    NumberOfBytes: [],
    Recipient: (_) => se_RecipientInfo(_, context),
  });
};

// se_GetKeyPolicyRequest omitted.

// se_GetKeyRotationStatusRequest omitted.

// se_GetParametersForImportRequest omitted.

// se_GetPublicKeyRequest omitted.

// se_GrantConstraints omitted.

// se_GrantOperationList omitted.

// se_GrantTokenList omitted.

/**
 * serializeAws_json1_1ImportKeyMaterialRequest
 */
const se_ImportKeyMaterialRequest = (input: ImportKeyMaterialRequest, context: __SerdeContext): any => {
  return take(input, {
    EncryptedKeyMaterial: context.base64Encoder,
    ExpirationModel: [],
    ImportToken: context.base64Encoder,
    KeyId: [],
    ValidTo: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListAliasesRequest omitted.

// se_ListGrantsRequest omitted.

// se_ListKeyPoliciesRequest omitted.

// se_ListKeysRequest omitted.

// se_ListResourceTagsRequest omitted.

// se_ListRetirableGrantsRequest omitted.

// se_PutKeyPolicyRequest omitted.

/**
 * serializeAws_json1_1RecipientInfo
 */
const se_RecipientInfo = (input: RecipientInfo, context: __SerdeContext): any => {
  return take(input, {
    AttestationDocument: context.base64Encoder,
    KeyEncryptionAlgorithm: [],
  });
};

/**
 * serializeAws_json1_1ReEncryptRequest
 */
const se_ReEncryptRequest = (input: ReEncryptRequest, context: __SerdeContext): any => {
  return take(input, {
    CiphertextBlob: context.base64Encoder,
    DestinationEncryptionAlgorithm: [],
    DestinationEncryptionContext: _json,
    DestinationKeyId: [],
    DryRun: [],
    GrantTokens: _json,
    SourceEncryptionAlgorithm: [],
    SourceEncryptionContext: _json,
    SourceKeyId: [],
  });
};

// se_ReplicateKeyRequest omitted.

// se_RetireGrantRequest omitted.

// se_RevokeGrantRequest omitted.

// se_ScheduleKeyDeletionRequest omitted.

/**
 * serializeAws_json1_1SignRequest
 */
const se_SignRequest = (input: SignRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    GrantTokens: _json,
    KeyId: [],
    Message: context.base64Encoder,
    MessageType: [],
    SigningAlgorithm: [],
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAliasRequest omitted.

// se_UpdateCustomKeyStoreRequest omitted.

// se_UpdateKeyDescriptionRequest omitted.

// se_UpdatePrimaryRegionRequest omitted.

/**
 * serializeAws_json1_1VerifyMacRequest
 */
const se_VerifyMacRequest = (input: VerifyMacRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    GrantTokens: _json,
    KeyId: [],
    Mac: context.base64Encoder,
    MacAlgorithm: [],
    Message: context.base64Encoder,
  });
};

/**
 * serializeAws_json1_1VerifyRequest
 */
const se_VerifyRequest = (input: VerifyRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    GrantTokens: _json,
    KeyId: [],
    Message: context.base64Encoder,
    MessageType: [],
    Signature: context.base64Encoder,
    SigningAlgorithm: [],
  });
};

// se_XksProxyAuthenticationCredentialType omitted.

/**
 * deserializeAws_json1_1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): AliasListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AliasListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AliasListEntry
 */
const de_AliasListEntry = (output: any, context: __SerdeContext): AliasListEntry => {
  return take(output, {
    AliasArn: __expectString,
    AliasName: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TargetKeyId: __expectString,
  }) as any;
};

// de_AlreadyExistsException omitted.

// de_CancelKeyDeletionResponse omitted.

// de_CloudHsmClusterInUseException omitted.

// de_CloudHsmClusterInvalidConfigurationException omitted.

// de_CloudHsmClusterNotActiveException omitted.

// de_CloudHsmClusterNotFoundException omitted.

// de_CloudHsmClusterNotRelatedException omitted.

// de_ConnectCustomKeyStoreResponse omitted.

// de_CreateCustomKeyStoreResponse omitted.

// de_CreateGrantResponse omitted.

/**
 * deserializeAws_json1_1CreateKeyResponse
 */
const de_CreateKeyResponse = (output: any, context: __SerdeContext): CreateKeyResponse => {
  return take(output, {
    KeyMetadata: (_: any) => de_KeyMetadata(_, context),
  }) as any;
};

// de_CustomKeyStoreHasCMKsException omitted.

// de_CustomKeyStoreInvalidStateException omitted.

// de_CustomKeyStoreNameInUseException omitted.

// de_CustomKeyStoreNotFoundException omitted.

/**
 * deserializeAws_json1_1CustomKeyStoresList
 */
const de_CustomKeyStoresList = (output: any, context: __SerdeContext): CustomKeyStoresListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomKeyStoresListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomKeyStoresListEntry
 */
const de_CustomKeyStoresListEntry = (output: any, context: __SerdeContext): CustomKeyStoresListEntry => {
  return take(output, {
    CloudHsmClusterId: __expectString,
    ConnectionErrorCode: __expectString,
    ConnectionState: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomKeyStoreId: __expectString,
    CustomKeyStoreName: __expectString,
    CustomKeyStoreType: __expectString,
    TrustAnchorCertificate: __expectString,
    XksProxyConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DecryptResponse
 */
const de_DecryptResponse = (output: any, context: __SerdeContext): DecryptResponse => {
  return take(output, {
    CiphertextForRecipient: context.base64Decoder,
    EncryptionAlgorithm: __expectString,
    KeyId: __expectString,
    Plaintext: context.base64Decoder,
  }) as any;
};

// de_DeleteCustomKeyStoreResponse omitted.

// de_DependencyTimeoutException omitted.

/**
 * deserializeAws_json1_1DescribeCustomKeyStoresResponse
 */
const de_DescribeCustomKeyStoresResponse = (output: any, context: __SerdeContext): DescribeCustomKeyStoresResponse => {
  return take(output, {
    CustomKeyStores: (_: any) => de_CustomKeyStoresList(_, context),
    NextMarker: __expectString,
    Truncated: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeKeyResponse
 */
const de_DescribeKeyResponse = (output: any, context: __SerdeContext): DescribeKeyResponse => {
  return take(output, {
    KeyMetadata: (_: any) => de_KeyMetadata(_, context),
  }) as any;
};

// de_DisabledException omitted.

// de_DisconnectCustomKeyStoreResponse omitted.

// de_DryRunOperationException omitted.

// de_EncryptionAlgorithmSpecList omitted.

// de_EncryptionContextType omitted.

/**
 * deserializeAws_json1_1EncryptResponse
 */
const de_EncryptResponse = (output: any, context: __SerdeContext): EncryptResponse => {
  return take(output, {
    CiphertextBlob: context.base64Decoder,
    EncryptionAlgorithm: __expectString,
    KeyId: __expectString,
  }) as any;
};

// de_ExpiredImportTokenException omitted.

/**
 * deserializeAws_json1_1GenerateDataKeyPairResponse
 */
const de_GenerateDataKeyPairResponse = (output: any, context: __SerdeContext): GenerateDataKeyPairResponse => {
  return take(output, {
    CiphertextForRecipient: context.base64Decoder,
    KeyId: __expectString,
    KeyPairSpec: __expectString,
    PrivateKeyCiphertextBlob: context.base64Decoder,
    PrivateKeyPlaintext: context.base64Decoder,
    PublicKey: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse
 */
const de_GenerateDataKeyPairWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairWithoutPlaintextResponse => {
  return take(output, {
    KeyId: __expectString,
    KeyPairSpec: __expectString,
    PrivateKeyCiphertextBlob: context.base64Decoder,
    PublicKey: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyResponse
 */
const de_GenerateDataKeyResponse = (output: any, context: __SerdeContext): GenerateDataKeyResponse => {
  return take(output, {
    CiphertextBlob: context.base64Decoder,
    CiphertextForRecipient: context.base64Decoder,
    KeyId: __expectString,
    Plaintext: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse
 */
const de_GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  return take(output, {
    CiphertextBlob: context.base64Decoder,
    KeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GenerateMacResponse
 */
const de_GenerateMacResponse = (output: any, context: __SerdeContext): GenerateMacResponse => {
  return take(output, {
    KeyId: __expectString,
    Mac: context.base64Decoder,
    MacAlgorithm: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GenerateRandomResponse
 */
const de_GenerateRandomResponse = (output: any, context: __SerdeContext): GenerateRandomResponse => {
  return take(output, {
    CiphertextForRecipient: context.base64Decoder,
    Plaintext: context.base64Decoder,
  }) as any;
};

// de_GetKeyPolicyResponse omitted.

// de_GetKeyRotationStatusResponse omitted.

/**
 * deserializeAws_json1_1GetParametersForImportResponse
 */
const de_GetParametersForImportResponse = (output: any, context: __SerdeContext): GetParametersForImportResponse => {
  return take(output, {
    ImportToken: context.base64Decoder,
    KeyId: __expectString,
    ParametersValidTo: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PublicKey: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1GetPublicKeyResponse
 */
const de_GetPublicKeyResponse = (output: any, context: __SerdeContext): GetPublicKeyResponse => {
  return take(output, {
    CustomerMasterKeySpec: __expectString,
    EncryptionAlgorithms: _json,
    KeyId: __expectString,
    KeySpec: __expectString,
    KeyUsage: __expectString,
    PublicKey: context.base64Decoder,
    SigningAlgorithms: _json,
  }) as any;
};

// de_GrantConstraints omitted.

/**
 * deserializeAws_json1_1GrantList
 */
const de_GrantList = (output: any, context: __SerdeContext): GrantListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GrantListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GrantListEntry
 */
const de_GrantListEntry = (output: any, context: __SerdeContext): GrantListEntry => {
  return take(output, {
    Constraints: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GrantId: __expectString,
    GranteePrincipal: __expectString,
    IssuingAccount: __expectString,
    KeyId: __expectString,
    Name: __expectString,
    Operations: _json,
    RetiringPrincipal: __expectString,
  }) as any;
};

// de_GrantOperationList omitted.

// de_ImportKeyMaterialResponse omitted.

// de_IncorrectKeyException omitted.

// de_IncorrectKeyMaterialException omitted.

// de_IncorrectTrustAnchorException omitted.

// de_InvalidAliasNameException omitted.

// de_InvalidArnException omitted.

// de_InvalidCiphertextException omitted.

// de_InvalidGrantIdException omitted.

// de_InvalidGrantTokenException omitted.

// de_InvalidImportTokenException omitted.

// de_InvalidKeyUsageException omitted.

// de_InvalidMarkerException omitted.

// de_KeyList omitted.

// de_KeyListEntry omitted.

/**
 * deserializeAws_json1_1KeyMetadata
 */
const de_KeyMetadata = (output: any, context: __SerdeContext): KeyMetadata => {
  return take(output, {
    AWSAccountId: __expectString,
    Arn: __expectString,
    CloudHsmClusterId: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomKeyStoreId: __expectString,
    CustomerMasterKeySpec: __expectString,
    DeletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Enabled: __expectBoolean,
    EncryptionAlgorithms: _json,
    ExpirationModel: __expectString,
    KeyId: __expectString,
    KeyManager: __expectString,
    KeySpec: __expectString,
    KeyState: __expectString,
    KeyUsage: __expectString,
    MacAlgorithms: _json,
    MultiRegion: __expectBoolean,
    MultiRegionConfiguration: _json,
    Origin: __expectString,
    PendingDeletionWindowInDays: __expectInt32,
    SigningAlgorithms: _json,
    ValidTo: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    XksKeyConfiguration: _json,
  }) as any;
};

// de_KeyUnavailableException omitted.

// de_KMSInternalException omitted.

// de_KMSInvalidMacException omitted.

// de_KMSInvalidSignatureException omitted.

// de_KMSInvalidStateException omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListAliasesResponse
 */
const de_ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return take(output, {
    Aliases: (_: any) => de_AliasList(_, context),
    NextMarker: __expectString,
    Truncated: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1ListGrantsResponse
 */
const de_ListGrantsResponse = (output: any, context: __SerdeContext): ListGrantsResponse => {
  return take(output, {
    Grants: (_: any) => de_GrantList(_, context),
    NextMarker: __expectString,
    Truncated: __expectBoolean,
  }) as any;
};

// de_ListKeyPoliciesResponse omitted.

// de_ListKeysResponse omitted.

// de_ListResourceTagsResponse omitted.

// de_MacAlgorithmSpecList omitted.

// de_MalformedPolicyDocumentException omitted.

// de_MultiRegionConfiguration omitted.

// de_MultiRegionKey omitted.

// de_MultiRegionKeyList omitted.

// de_NotFoundException omitted.

// de_PolicyNameList omitted.

/**
 * deserializeAws_json1_1ReEncryptResponse
 */
const de_ReEncryptResponse = (output: any, context: __SerdeContext): ReEncryptResponse => {
  return take(output, {
    CiphertextBlob: context.base64Decoder,
    DestinationEncryptionAlgorithm: __expectString,
    KeyId: __expectString,
    SourceEncryptionAlgorithm: __expectString,
    SourceKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicateKeyResponse
 */
const de_ReplicateKeyResponse = (output: any, context: __SerdeContext): ReplicateKeyResponse => {
  return take(output, {
    ReplicaKeyMetadata: (_: any) => de_KeyMetadata(_, context),
    ReplicaPolicy: __expectString,
    ReplicaTags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ScheduleKeyDeletionResponse
 */
const de_ScheduleKeyDeletionResponse = (output: any, context: __SerdeContext): ScheduleKeyDeletionResponse => {
  return take(output, {
    DeletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KeyId: __expectString,
    KeyState: __expectString,
    PendingWindowInDays: __expectInt32,
  }) as any;
};

// de_SigningAlgorithmSpecList omitted.

/**
 * deserializeAws_json1_1SignResponse
 */
const de_SignResponse = (output: any, context: __SerdeContext): SignResponse => {
  return take(output, {
    KeyId: __expectString,
    Signature: context.base64Decoder,
    SigningAlgorithm: __expectString,
  }) as any;
};

// de_Tag omitted.

// de_TagException omitted.

// de_TagList omitted.

// de_UnsupportedOperationException omitted.

// de_UpdateCustomKeyStoreResponse omitted.

// de_VerifyMacResponse omitted.

// de_VerifyResponse omitted.

// de_XksKeyAlreadyInUseException omitted.

// de_XksKeyConfigurationType omitted.

// de_XksKeyInvalidConfigurationException omitted.

// de_XksKeyNotFoundException omitted.

// de_XksProxyConfigurationType omitted.

// de_XksProxyIncorrectAuthenticationCredentialException omitted.

// de_XksProxyInvalidConfigurationException omitted.

// de_XksProxyInvalidResponseException omitted.

// de_XksProxyUriEndpointInUseException omitted.

// de_XksProxyUriInUseException omitted.

// de_XksProxyUriUnreachableException omitted.

// de_XksProxyVpcEndpointServiceInUseException omitted.

// de_XksProxyVpcEndpointServiceInvalidConfigurationException omitted.

// de_XksProxyVpcEndpointServiceNotFoundException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `TrentService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
