// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  CancelKeyDeletionResponse,
  CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException,
  ConnectCustomKeyStoreRequest,
  ConnectCustomKeyStoreResponse,
  CreateAliasRequest,
  CreateCustomKeyStoreRequest,
  CreateCustomKeyStoreResponse,
  CreateGrantRequest,
  CreateGrantResponse,
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
  DeleteCustomKeyStoreResponse,
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
  DisconnectCustomKeyStoreResponse,
  EnableKeyRequest,
  EnableKeyRotationRequest,
  EncryptionAlgorithmSpec,
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
  GetKeyPolicyResponse,
  GetKeyRotationStatusRequest,
  GetKeyRotationStatusResponse,
  GetParametersForImportRequest,
  GetParametersForImportResponse,
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  GrantConstraints,
  GrantListEntry,
  GrantOperation,
  ImportKeyMaterialRequest,
  ImportKeyMaterialResponse,
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
  KeyListEntry,
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
  ListKeyPoliciesResponse,
  ListKeysRequest,
  ListKeysResponse,
  ListResourceTagsRequest,
  ListResourceTagsResponse,
  ListRetirableGrantsRequest,
  MacAlgorithmSpec,
  MalformedPolicyDocumentException,
  MultiRegionConfiguration,
  MultiRegionKey,
  NotFoundException,
  PutKeyPolicyRequest,
  ReEncryptRequest,
  ReEncryptResponse,
  ReplicateKeyRequest,
  ReplicateKeyResponse,
  RetireGrantRequest,
  RevokeGrantRequest,
  ScheduleKeyDeletionRequest,
  ScheduleKeyDeletionResponse,
  SigningAlgorithmSpec,
  SignRequest,
  SignResponse,
  Tag,
  TagException,
  TagResourceRequest,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateAliasRequest,
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreResponse,
  UpdateKeyDescriptionRequest,
  UpdatePrimaryRegionRequest,
  VerifyMacRequest,
  VerifyMacResponse,
  VerifyRequest,
  VerifyResponse,
  XksKeyAlreadyInUseException,
  XksKeyConfigurationType,
  XksKeyInvalidConfigurationException,
  XksKeyNotFoundException,
  XksProxyAuthenticationCredentialType,
  XksProxyConfigurationType,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CancelKeyDeletion",
  };
  let body: any;
  body = JSON.stringify(se_CancelKeyDeletionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConnectCustomKeyStoreCommand
 */
export const se_ConnectCustomKeyStoreCommand = async (
  input: ConnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ConnectCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(se_ConnectCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(se_CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomKeyStoreCommand
 */
export const se_CreateCustomKeyStoreCommand = async (
  input: CreateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(se_CreateCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGrantCommand
 */
export const se_CreateGrantCommand = async (
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateGrant",
  };
  let body: any;
  body = JSON.stringify(se_CreateGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateKeyCommand
 */
export const se_CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateKey",
  };
  let body: any;
  body = JSON.stringify(se_CreateKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DecryptCommand
 */
export const se_DecryptCommand = async (
  input: DecryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Decrypt",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteAlias",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomKeyStoreCommand
 */
export const se_DeleteCustomKeyStoreCommand = async (
  input: DeleteCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImportedKeyMaterialCommand
 */
export const se_DeleteImportedKeyMaterialCommand = async (
  input: DeleteImportedKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteImportedKeyMaterial",
  };
  let body: any;
  body = JSON.stringify(se_DeleteImportedKeyMaterialRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomKeyStoresCommand
 */
export const se_DescribeCustomKeyStoresCommand = async (
  input: DescribeCustomKeyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DescribeCustomKeyStores",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomKeyStoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeKeyCommand
 */
export const se_DescribeKeyCommand = async (
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DescribeKey",
  };
  let body: any;
  body = JSON.stringify(se_DescribeKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableKeyCommand
 */
export const se_DisableKeyCommand = async (
  input: DisableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisableKey",
  };
  let body: any;
  body = JSON.stringify(se_DisableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableKeyRotationCommand
 */
export const se_DisableKeyRotationCommand = async (
  input: DisableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisableKeyRotation",
  };
  let body: any;
  body = JSON.stringify(se_DisableKeyRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisconnectCustomKeyStoreCommand
 */
export const se_DisconnectCustomKeyStoreCommand = async (
  input: DisconnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisconnectCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(se_DisconnectCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableKeyCommand
 */
export const se_EnableKeyCommand = async (
  input: EnableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.EnableKey",
  };
  let body: any;
  body = JSON.stringify(se_EnableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableKeyRotationCommand
 */
export const se_EnableKeyRotationCommand = async (
  input: EnableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.EnableKeyRotation",
  };
  let body: any;
  body = JSON.stringify(se_EnableKeyRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EncryptCommand
 */
export const se_EncryptCommand = async (
  input: EncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Encrypt",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKey",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyPair",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyPairWithoutPlaintext",
  };
  let body: any;
  body = JSON.stringify(se_GenerateDataKeyPairWithoutPlaintextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand
 */
export const se_GenerateDataKeyWithoutPlaintextCommand = async (
  input: GenerateDataKeyWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyWithoutPlaintext",
  };
  let body: any;
  body = JSON.stringify(se_GenerateDataKeyWithoutPlaintextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateMacCommand
 */
export const se_GenerateMacCommand = async (
  input: GenerateMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateMac",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateRandom",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetKeyPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetKeyPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyRotationStatusCommand
 */
export const se_GetKeyRotationStatusCommand = async (
  input: GetKeyRotationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetKeyRotationStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetKeyRotationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParametersForImportCommand
 */
export const se_GetParametersForImportCommand = async (
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetParametersForImport",
  };
  let body: any;
  body = JSON.stringify(se_GetParametersForImportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPublicKeyCommand
 */
export const se_GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetPublicKey",
  };
  let body: any;
  body = JSON.stringify(se_GetPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportKeyMaterialCommand
 */
export const se_ImportKeyMaterialCommand = async (
  input: ImportKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ImportKeyMaterial",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListAliases",
  };
  let body: any;
  body = JSON.stringify(se_ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGrantsCommand
 */
export const se_ListGrantsCommand = async (
  input: ListGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListGrants",
  };
  let body: any;
  body = JSON.stringify(se_ListGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListKeyPoliciesCommand
 */
export const se_ListKeyPoliciesCommand = async (
  input: ListKeyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListKeyPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListKeyPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListKeysCommand
 */
export const se_ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListKeys",
  };
  let body: any;
  body = JSON.stringify(se_ListKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceTagsCommand
 */
export const se_ListResourceTagsCommand = async (
  input: ListResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListResourceTags",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRetirableGrantsCommand
 */
export const se_ListRetirableGrantsCommand = async (
  input: ListRetirableGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListRetirableGrants",
  };
  let body: any;
  body = JSON.stringify(se_ListRetirableGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutKeyPolicyCommand
 */
export const se_PutKeyPolicyCommand = async (
  input: PutKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.PutKeyPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutKeyPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReEncryptCommand
 */
export const se_ReEncryptCommand = async (
  input: ReEncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ReEncrypt",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ReplicateKey",
  };
  let body: any;
  body = JSON.stringify(se_ReplicateKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetireGrantCommand
 */
export const se_RetireGrantCommand = async (
  input: RetireGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.RetireGrant",
  };
  let body: any;
  body = JSON.stringify(se_RetireGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeGrantCommand
 */
export const se_RevokeGrantCommand = async (
  input: RevokeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.RevokeGrant",
  };
  let body: any;
  body = JSON.stringify(se_RevokeGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ScheduleKeyDeletionCommand
 */
export const se_ScheduleKeyDeletionCommand = async (
  input: ScheduleKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ScheduleKeyDeletion",
  };
  let body: any;
  body = JSON.stringify(se_ScheduleKeyDeletionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SignCommand
 */
export const se_SignCommand = async (input: SignCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Sign",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateAlias",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomKeyStoreCommand
 */
export const se_UpdateCustomKeyStoreCommand = async (
  input: UpdateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateKeyDescriptionCommand
 */
export const se_UpdateKeyDescriptionCommand = async (
  input: UpdateKeyDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateKeyDescription",
  };
  let body: any;
  body = JSON.stringify(se_UpdateKeyDescriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePrimaryRegionCommand
 */
export const se_UpdatePrimaryRegionCommand = async (
  input: UpdatePrimaryRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdatePrimaryRegion",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePrimaryRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyCommand
 */
export const se_VerifyCommand = async (input: VerifyCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Verify",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.VerifyMac",
  };
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
  contents = de_CancelKeyDeletionResponse(data, context);
  const response: CancelKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ConnectCustomKeyStoreResponse(data, context);
  const response: ConnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateCustomKeyStoreResponse(data, context);
  const response: CreateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateGrantResponse(data, context);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteCustomKeyStoreResponse(data, context);
  const response: DeleteCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisconnectCustomKeyStoreResponse(data, context);
  const response: DisconnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetKeyPolicyResponse(data, context);
  const response: GetKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetKeyRotationStatusResponse(data, context);
  const response: GetKeyRotationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ImportKeyMaterialResponse(data, context);
  const response: ImportKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListKeyPoliciesResponse(data, context);
  const response: ListKeyPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListKeysResponse(data, context);
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListResourceTagsResponse(data, context);
  const response: ListResourceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateCustomKeyStoreResponse(data, context);
  const response: UpdateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_VerifyResponse(data, context);
  const response: VerifyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_VerifyMacResponse(data, context);
  const response: VerifyMacCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AlreadyExistsException(body, context);
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
  const deserialized: any = de_CloudHsmClusterInUseException(body, context);
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
  const deserialized: any = de_CloudHsmClusterInvalidConfigurationException(body, context);
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
  const deserialized: any = de_CloudHsmClusterNotActiveException(body, context);
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
  const deserialized: any = de_CloudHsmClusterNotFoundException(body, context);
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
  const deserialized: any = de_CloudHsmClusterNotRelatedException(body, context);
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
  const deserialized: any = de_CustomKeyStoreHasCMKsException(body, context);
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
  const deserialized: any = de_CustomKeyStoreInvalidStateException(body, context);
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
  const deserialized: any = de_CustomKeyStoreNameInUseException(body, context);
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
  const deserialized: any = de_CustomKeyStoreNotFoundException(body, context);
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
  const deserialized: any = de_DependencyTimeoutException(body, context);
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
  const deserialized: any = de_DisabledException(body, context);
  const exception = new DisabledException({
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
  const deserialized: any = de_ExpiredImportTokenException(body, context);
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
  const deserialized: any = de_IncorrectKeyException(body, context);
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
  const deserialized: any = de_IncorrectKeyMaterialException(body, context);
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
  const deserialized: any = de_IncorrectTrustAnchorException(body, context);
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
  const deserialized: any = de_InvalidAliasNameException(body, context);
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
  const deserialized: any = de_InvalidArnException(body, context);
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
  const deserialized: any = de_InvalidCiphertextException(body, context);
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
  const deserialized: any = de_InvalidGrantIdException(body, context);
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
  const deserialized: any = de_InvalidGrantTokenException(body, context);
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
  const deserialized: any = de_InvalidImportTokenException(body, context);
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
  const deserialized: any = de_InvalidKeyUsageException(body, context);
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
  const deserialized: any = de_InvalidMarkerException(body, context);
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
  const deserialized: any = de_KeyUnavailableException(body, context);
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
  const deserialized: any = de_KMSInternalException(body, context);
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
  const deserialized: any = de_KMSInvalidMacException(body, context);
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
  const deserialized: any = de_KMSInvalidSignatureException(body, context);
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
  const deserialized: any = de_KMSInvalidStateException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_MalformedPolicyDocumentException(body, context);
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
  const deserialized: any = de_NotFoundException(body, context);
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
  const deserialized: any = de_TagException(body, context);
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
  const deserialized: any = de_UnsupportedOperationException(body, context);
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
  const deserialized: any = de_XksKeyAlreadyInUseException(body, context);
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
  const deserialized: any = de_XksKeyInvalidConfigurationException(body, context);
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
  const deserialized: any = de_XksKeyNotFoundException(body, context);
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
  const deserialized: any = de_XksProxyIncorrectAuthenticationCredentialException(body, context);
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
  const deserialized: any = de_XksProxyInvalidConfigurationException(body, context);
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
  const deserialized: any = de_XksProxyInvalidResponseException(body, context);
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
  const deserialized: any = de_XksProxyUriEndpointInUseException(body, context);
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
  const deserialized: any = de_XksProxyUriInUseException(body, context);
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
  const deserialized: any = de_XksProxyUriUnreachableException(body, context);
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
  const deserialized: any = de_XksProxyVpcEndpointServiceInUseException(body, context);
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
  const deserialized: any = de_XksProxyVpcEndpointServiceInvalidConfigurationException(body, context);
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
  const deserialized: any = de_XksProxyVpcEndpointServiceNotFoundException(body, context);
  const exception = new XksProxyVpcEndpointServiceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1CancelKeyDeletionRequest
 */
const se_CancelKeyDeletionRequest = (input: CancelKeyDeletionRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1ConnectCustomKeyStoreRequest
 */
const se_ConnectCustomKeyStoreRequest = (input: ConnectCustomKeyStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

/**
 * serializeAws_json1_1CreateAliasRequest
 */
const se_CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId != null && { TargetKeyId: input.TargetKeyId }),
  };
};

/**
 * serializeAws_json1_1CreateCustomKeyStoreRequest
 */
const se_CreateCustomKeyStoreRequest = (input: CreateCustomKeyStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudHsmClusterId != null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreName != null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.CustomKeyStoreType != null && { CustomKeyStoreType: input.CustomKeyStoreType }),
    ...(input.KeyStorePassword != null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.TrustAnchorCertificate != null && { TrustAnchorCertificate: input.TrustAnchorCertificate }),
    ...(input.XksProxyAuthenticationCredential != null && {
      XksProxyAuthenticationCredential: se_XksProxyAuthenticationCredentialType(
        input.XksProxyAuthenticationCredential,
        context
      ),
    }),
    ...(input.XksProxyConnectivity != null && { XksProxyConnectivity: input.XksProxyConnectivity }),
    ...(input.XksProxyUriEndpoint != null && { XksProxyUriEndpoint: input.XksProxyUriEndpoint }),
    ...(input.XksProxyUriPath != null && { XksProxyUriPath: input.XksProxyUriPath }),
    ...(input.XksProxyVpcEndpointServiceName != null && {
      XksProxyVpcEndpointServiceName: input.XksProxyVpcEndpointServiceName,
    }),
  };
};

/**
 * serializeAws_json1_1CreateGrantRequest
 */
const se_CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.Constraints != null && { Constraints: se_GrantConstraints(input.Constraints, context) }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.GranteePrincipal != null && { GranteePrincipal: input.GranteePrincipal }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operations != null && { Operations: se_GrantOperationList(input.Operations, context) }),
    ...(input.RetiringPrincipal != null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

/**
 * serializeAws_json1_1CreateKeyRequest
 */
const se_CreateKeyRequest = (input: CreateKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.CustomerMasterKeySpec != null && { CustomerMasterKeySpec: input.CustomerMasterKeySpec }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeySpec != null && { KeySpec: input.KeySpec }),
    ...(input.KeyUsage != null && { KeyUsage: input.KeyUsage }),
    ...(input.MultiRegion != null && { MultiRegion: input.MultiRegion }),
    ...(input.Origin != null && { Origin: input.Origin }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.XksKeyId != null && { XksKeyId: input.XksKeyId }),
  };
};

/**
 * serializeAws_json1_1DecryptRequest
 */
const se_DecryptRequest = (input: DecryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob != null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.EncryptionAlgorithm != null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1DeleteAliasRequest
 */
const se_DeleteAliasRequest = (input: DeleteAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
  };
};

/**
 * serializeAws_json1_1DeleteCustomKeyStoreRequest
 */
const se_DeleteCustomKeyStoreRequest = (input: DeleteCustomKeyStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

/**
 * serializeAws_json1_1DeleteImportedKeyMaterialRequest
 */
const se_DeleteImportedKeyMaterialRequest = (input: DeleteImportedKeyMaterialRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1DescribeCustomKeyStoresRequest
 */
const se_DescribeCustomKeyStoresRequest = (input: DescribeCustomKeyStoresRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.CustomKeyStoreName != null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1DescribeKeyRequest
 */
const se_DescribeKeyRequest = (input: DescribeKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1DisableKeyRequest
 */
const se_DisableKeyRequest = (input: DisableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1DisableKeyRotationRequest
 */
const se_DisableKeyRotationRequest = (input: DisableKeyRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1DisconnectCustomKeyStoreRequest
 */
const se_DisconnectCustomKeyStoreRequest = (input: DisconnectCustomKeyStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

/**
 * serializeAws_json1_1EnableKeyRequest
 */
const se_EnableKeyRequest = (input: EnableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1EnableKeyRotationRequest
 */
const se_EnableKeyRotationRequest = (input: EnableKeyRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1EncryptionContextType
 */
const se_EncryptionContextType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1EncryptRequest
 */
const se_EncryptRequest = (input: EncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionAlgorithm != null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Plaintext != null && { Plaintext: context.base64Encoder(input.Plaintext) }),
  };
};

/**
 * serializeAws_json1_1GenerateDataKeyPairRequest
 */
const se_GenerateDataKeyPairRequest = (input: GenerateDataKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec != null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

/**
 * serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest
 */
const se_GenerateDataKeyPairWithoutPlaintextRequest = (
  input: GenerateDataKeyPairWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec != null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

/**
 * serializeAws_json1_1GenerateDataKeyRequest
 */
const se_GenerateDataKeyRequest = (input: GenerateDataKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeySpec != null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

/**
 * serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest
 */
const se_GenerateDataKeyWithoutPlaintextRequest = (
  input: GenerateDataKeyWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: se_EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeySpec != null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

/**
 * serializeAws_json1_1GenerateMacRequest
 */
const se_GenerateMacRequest = (input: GenerateMacRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.MacAlgorithm != null && { MacAlgorithm: input.MacAlgorithm }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
  };
};

/**
 * serializeAws_json1_1GenerateRandomRequest
 */
const se_GenerateRandomRequest = (input: GenerateRandomRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

/**
 * serializeAws_json1_1GetKeyPolicyRequest
 */
const se_GetKeyPolicyRequest = (input: GetKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

/**
 * serializeAws_json1_1GetKeyRotationStatusRequest
 */
const se_GetKeyRotationStatusRequest = (input: GetKeyRotationStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1GetParametersForImportRequest
 */
const se_GetParametersForImportRequest = (input: GetParametersForImportRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.WrappingAlgorithm != null && { WrappingAlgorithm: input.WrappingAlgorithm }),
    ...(input.WrappingKeySpec != null && { WrappingKeySpec: input.WrappingKeySpec }),
  };
};

/**
 * serializeAws_json1_1GetPublicKeyRequest
 */
const se_GetPublicKeyRequest = (input: GetPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1GrantConstraints
 */
const se_GrantConstraints = (input: GrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContextEquals != null && {
      EncryptionContextEquals: se_EncryptionContextType(input.EncryptionContextEquals, context),
    }),
    ...(input.EncryptionContextSubset != null && {
      EncryptionContextSubset: se_EncryptionContextType(input.EncryptionContextSubset, context),
    }),
  };
};

/**
 * serializeAws_json1_1GrantOperationList
 */
const se_GrantOperationList = (input: (GrantOperation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GrantTokenList
 */
const se_GrantTokenList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ImportKeyMaterialRequest
 */
const se_ImportKeyMaterialRequest = (input: ImportKeyMaterialRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptedKeyMaterial != null && {
      EncryptedKeyMaterial: context.base64Encoder(input.EncryptedKeyMaterial),
    }),
    ...(input.ExpirationModel != null && { ExpirationModel: input.ExpirationModel }),
    ...(input.ImportToken != null && { ImportToken: context.base64Encoder(input.ImportToken) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.ValidTo != null && { ValidTo: Math.round(input.ValidTo.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListAliasesRequest
 */
const se_ListAliasesRequest = (input: ListAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListGrantsRequest
 */
const se_ListGrantsRequest = (input: ListGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.GranteePrincipal != null && { GranteePrincipal: input.GranteePrincipal }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListKeyPoliciesRequest
 */
const se_ListKeyPoliciesRequest = (input: ListKeyPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListKeysRequest
 */
const se_ListKeysRequest = (input: ListKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListResourceTagsRequest
 */
const se_ListResourceTagsRequest = (input: ListResourceTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListRetirableGrantsRequest
 */
const se_ListRetirableGrantsRequest = (input: ListRetirableGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.RetiringPrincipal != null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

/**
 * serializeAws_json1_1PutKeyPolicyRequest
 */
const se_PutKeyPolicyRequest = (input: PutKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

/**
 * serializeAws_json1_1ReEncryptRequest
 */
const se_ReEncryptRequest = (input: ReEncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob != null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.DestinationEncryptionAlgorithm != null && {
      DestinationEncryptionAlgorithm: input.DestinationEncryptionAlgorithm,
    }),
    ...(input.DestinationEncryptionContext != null && {
      DestinationEncryptionContext: se_EncryptionContextType(input.DestinationEncryptionContext, context),
    }),
    ...(input.DestinationKeyId != null && { DestinationKeyId: input.DestinationKeyId }),
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.SourceEncryptionAlgorithm != null && { SourceEncryptionAlgorithm: input.SourceEncryptionAlgorithm }),
    ...(input.SourceEncryptionContext != null && {
      SourceEncryptionContext: se_EncryptionContextType(input.SourceEncryptionContext, context),
    }),
    ...(input.SourceKeyId != null && { SourceKeyId: input.SourceKeyId }),
  };
};

/**
 * serializeAws_json1_1ReplicateKeyRequest
 */
const se_ReplicateKeyRequest = (input: ReplicateKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ReplicaRegion != null && { ReplicaRegion: input.ReplicaRegion }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1RetireGrantRequest
 */
const se_RetireGrantRequest = (input: RetireGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.GrantToken != null && { GrantToken: input.GrantToken }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1RevokeGrantRequest
 */
const se_RevokeGrantRequest = (input: RevokeGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1ScheduleKeyDeletionRequest
 */
const se_ScheduleKeyDeletionRequest = (input: ScheduleKeyDeletionRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PendingWindowInDays != null && { PendingWindowInDays: input.PendingWindowInDays }),
  };
};

/**
 * serializeAws_json1_1SignRequest
 */
const se_SignRequest = (input: SignRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAliasRequest
 */
const se_UpdateAliasRequest = (input: UpdateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId != null && { TargetKeyId: input.TargetKeyId }),
  };
};

/**
 * serializeAws_json1_1UpdateCustomKeyStoreRequest
 */
const se_UpdateCustomKeyStoreRequest = (input: UpdateCustomKeyStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudHsmClusterId != null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.KeyStorePassword != null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.NewCustomKeyStoreName != null && { NewCustomKeyStoreName: input.NewCustomKeyStoreName }),
    ...(input.XksProxyAuthenticationCredential != null && {
      XksProxyAuthenticationCredential: se_XksProxyAuthenticationCredentialType(
        input.XksProxyAuthenticationCredential,
        context
      ),
    }),
    ...(input.XksProxyConnectivity != null && { XksProxyConnectivity: input.XksProxyConnectivity }),
    ...(input.XksProxyUriEndpoint != null && { XksProxyUriEndpoint: input.XksProxyUriEndpoint }),
    ...(input.XksProxyUriPath != null && { XksProxyUriPath: input.XksProxyUriPath }),
    ...(input.XksProxyVpcEndpointServiceName != null && {
      XksProxyVpcEndpointServiceName: input.XksProxyVpcEndpointServiceName,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateKeyDescriptionRequest
 */
const se_UpdateKeyDescriptionRequest = (input: UpdateKeyDescriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_json1_1UpdatePrimaryRegionRequest
 */
const se_UpdatePrimaryRegionRequest = (input: UpdatePrimaryRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PrimaryRegion != null && { PrimaryRegion: input.PrimaryRegion }),
  };
};

/**
 * serializeAws_json1_1VerifyMacRequest
 */
const se_VerifyMacRequest = (input: VerifyMacRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Mac != null && { Mac: context.base64Encoder(input.Mac) }),
    ...(input.MacAlgorithm != null && { MacAlgorithm: input.MacAlgorithm }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
  };
};

/**
 * serializeAws_json1_1VerifyRequest
 */
const se_VerifyRequest = (input: VerifyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: se_GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.Signature != null && { Signature: context.base64Encoder(input.Signature) }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

/**
 * serializeAws_json1_1XksProxyAuthenticationCredentialType
 */
const se_XksProxyAuthenticationCredentialType = (
  input: XksProxyAuthenticationCredentialType,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKeyId != null && { AccessKeyId: input.AccessKeyId }),
    ...(input.RawSecretAccessKey != null && { RawSecretAccessKey: input.RawSecretAccessKey }),
  };
};

/**
 * deserializeAws_json1_1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): AliasListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AliasListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AliasListEntry
 */
const de_AliasListEntry = (output: any, context: __SerdeContext): AliasListEntry => {
  return {
    AliasArn: __expectString(output.AliasArn),
    AliasName: __expectString(output.AliasName),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    LastUpdatedDate:
      output.LastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDate)))
        : undefined,
    TargetKeyId: __expectString(output.TargetKeyId),
  } as any;
};

/**
 * deserializeAws_json1_1AlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CancelKeyDeletionResponse
 */
const de_CancelKeyDeletionResponse = (output: any, context: __SerdeContext): CancelKeyDeletionResponse => {
  return {
    KeyId: __expectString(output.KeyId),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmClusterInUseException
 */
const de_CloudHsmClusterInUseException = (output: any, context: __SerdeContext): CloudHsmClusterInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException
 */
const de_CloudHsmClusterInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotActiveException
 */
const de_CloudHsmClusterNotActiveException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotActiveException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotFoundException
 */
const de_CloudHsmClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmClusterNotRelatedException
 */
const de_CloudHsmClusterNotRelatedException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotRelatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectCustomKeyStoreResponse
 */
const de_ConnectCustomKeyStoreResponse = (output: any, context: __SerdeContext): ConnectCustomKeyStoreResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateCustomKeyStoreResponse
 */
const de_CreateCustomKeyStoreResponse = (output: any, context: __SerdeContext): CreateCustomKeyStoreResponse => {
  return {
    CustomKeyStoreId: __expectString(output.CustomKeyStoreId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGrantResponse
 */
const de_CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantId: __expectString(output.GrantId),
    GrantToken: __expectString(output.GrantToken),
  } as any;
};

/**
 * deserializeAws_json1_1CreateKeyResponse
 */
const de_CreateKeyResponse = (output: any, context: __SerdeContext): CreateKeyResponse => {
  return {
    KeyMetadata: output.KeyMetadata != null ? de_KeyMetadata(output.KeyMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomKeyStoreHasCMKsException
 */
const de_CustomKeyStoreHasCMKsException = (output: any, context: __SerdeContext): CustomKeyStoreHasCMKsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CustomKeyStoreInvalidStateException
 */
const de_CustomKeyStoreInvalidStateException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CustomKeyStoreNameInUseException
 */
const de_CustomKeyStoreNameInUseException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNameInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CustomKeyStoreNotFoundException
 */
const de_CustomKeyStoreNotFoundException = (output: any, context: __SerdeContext): CustomKeyStoreNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CustomKeyStoresList
 */
const de_CustomKeyStoresList = (output: any, context: __SerdeContext): CustomKeyStoresListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomKeyStoresListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomKeyStoresListEntry
 */
const de_CustomKeyStoresListEntry = (output: any, context: __SerdeContext): CustomKeyStoresListEntry => {
  return {
    CloudHsmClusterId: __expectString(output.CloudHsmClusterId),
    ConnectionErrorCode: __expectString(output.ConnectionErrorCode),
    ConnectionState: __expectString(output.ConnectionState),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CustomKeyStoreId: __expectString(output.CustomKeyStoreId),
    CustomKeyStoreName: __expectString(output.CustomKeyStoreName),
    CustomKeyStoreType: __expectString(output.CustomKeyStoreType),
    TrustAnchorCertificate: __expectString(output.TrustAnchorCertificate),
    XksProxyConfiguration:
      output.XksProxyConfiguration != null
        ? de_XksProxyConfigurationType(output.XksProxyConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DecryptResponse
 */
const de_DecryptResponse = (output: any, context: __SerdeContext): DecryptResponse => {
  return {
    EncryptionAlgorithm: __expectString(output.EncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCustomKeyStoreResponse
 */
const de_DeleteCustomKeyStoreResponse = (output: any, context: __SerdeContext): DeleteCustomKeyStoreResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DependencyTimeoutException
 */
const de_DependencyTimeoutException = (output: any, context: __SerdeContext): DependencyTimeoutException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomKeyStoresResponse
 */
const de_DescribeCustomKeyStoresResponse = (output: any, context: __SerdeContext): DescribeCustomKeyStoresResponse => {
  return {
    CustomKeyStores:
      output.CustomKeyStores != null ? de_CustomKeyStoresList(output.CustomKeyStores, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeKeyResponse
 */
const de_DescribeKeyResponse = (output: any, context: __SerdeContext): DescribeKeyResponse => {
  return {
    KeyMetadata: output.KeyMetadata != null ? de_KeyMetadata(output.KeyMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisabledException
 */
const de_DisabledException = (output: any, context: __SerdeContext): DisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DisconnectCustomKeyStoreResponse
 */
const de_DisconnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DisconnectCustomKeyStoreResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EncryptionAlgorithmSpecList
 */
const de_EncryptionAlgorithmSpecList = (output: any, context: __SerdeContext): (EncryptionAlgorithmSpec | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EncryptionContextType
 */
const de_EncryptionContextType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1EncryptResponse
 */
const de_EncryptResponse = (output: any, context: __SerdeContext): EncryptResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    EncryptionAlgorithm: __expectString(output.EncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredImportTokenException
 */
const de_ExpiredImportTokenException = (output: any, context: __SerdeContext): ExpiredImportTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairResponse
 */
const de_GenerateDataKeyPairResponse = (output: any, context: __SerdeContext): GenerateDataKeyPairResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    KeyPairSpec: __expectString(output.KeyPairSpec),
    PrivateKeyCiphertextBlob:
      output.PrivateKeyCiphertextBlob != null ? context.base64Decoder(output.PrivateKeyCiphertextBlob) : undefined,
    PrivateKeyPlaintext:
      output.PrivateKeyPlaintext != null ? context.base64Decoder(output.PrivateKeyPlaintext) : undefined,
    PublicKey: output.PublicKey != null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse
 */
const de_GenerateDataKeyPairWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairWithoutPlaintextResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    KeyPairSpec: __expectString(output.KeyPairSpec),
    PrivateKeyCiphertextBlob:
      output.PrivateKeyCiphertextBlob != null ? context.base64Decoder(output.PrivateKeyCiphertextBlob) : undefined,
    PublicKey: output.PublicKey != null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyResponse
 */
const de_GenerateDataKeyResponse = (output: any, context: __SerdeContext): GenerateDataKeyResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    KeyId: __expectString(output.KeyId),
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse
 */
const de_GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    KeyId: __expectString(output.KeyId),
  } as any;
};

/**
 * deserializeAws_json1_1GenerateMacResponse
 */
const de_GenerateMacResponse = (output: any, context: __SerdeContext): GenerateMacResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    Mac: output.Mac != null ? context.base64Decoder(output.Mac) : undefined,
    MacAlgorithm: __expectString(output.MacAlgorithm),
  } as any;
};

/**
 * deserializeAws_json1_1GenerateRandomResponse
 */
const de_GenerateRandomResponse = (output: any, context: __SerdeContext): GenerateRandomResponse => {
  return {
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetKeyPolicyResponse
 */
const de_GetKeyPolicyResponse = (output: any, context: __SerdeContext): GetKeyPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1GetKeyRotationStatusResponse
 */
const de_GetKeyRotationStatusResponse = (output: any, context: __SerdeContext): GetKeyRotationStatusResponse => {
  return {
    KeyRotationEnabled: __expectBoolean(output.KeyRotationEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1GetParametersForImportResponse
 */
const de_GetParametersForImportResponse = (output: any, context: __SerdeContext): GetParametersForImportResponse => {
  return {
    ImportToken: output.ImportToken != null ? context.base64Decoder(output.ImportToken) : undefined,
    KeyId: __expectString(output.KeyId),
    ParametersValidTo:
      output.ParametersValidTo != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ParametersValidTo)))
        : undefined,
    PublicKey: output.PublicKey != null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPublicKeyResponse
 */
const de_GetPublicKeyResponse = (output: any, context: __SerdeContext): GetPublicKeyResponse => {
  return {
    CustomerMasterKeySpec: __expectString(output.CustomerMasterKeySpec),
    EncryptionAlgorithms:
      output.EncryptionAlgorithms != null
        ? de_EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    KeyId: __expectString(output.KeyId),
    KeySpec: __expectString(output.KeySpec),
    KeyUsage: __expectString(output.KeyUsage),
    PublicKey: output.PublicKey != null ? context.base64Decoder(output.PublicKey) : undefined,
    SigningAlgorithms:
      output.SigningAlgorithms != null ? de_SigningAlgorithmSpecList(output.SigningAlgorithms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GrantConstraints
 */
const de_GrantConstraints = (output: any, context: __SerdeContext): GrantConstraints => {
  return {
    EncryptionContextEquals:
      output.EncryptionContextEquals != null
        ? de_EncryptionContextType(output.EncryptionContextEquals, context)
        : undefined,
    EncryptionContextSubset:
      output.EncryptionContextSubset != null
        ? de_EncryptionContextType(output.EncryptionContextSubset, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GrantList
 */
const de_GrantList = (output: any, context: __SerdeContext): GrantListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GrantListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GrantListEntry
 */
const de_GrantListEntry = (output: any, context: __SerdeContext): GrantListEntry => {
  return {
    Constraints: output.Constraints != null ? de_GrantConstraints(output.Constraints, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    GrantId: __expectString(output.GrantId),
    GranteePrincipal: __expectString(output.GranteePrincipal),
    IssuingAccount: __expectString(output.IssuingAccount),
    KeyId: __expectString(output.KeyId),
    Name: __expectString(output.Name),
    Operations: output.Operations != null ? de_GrantOperationList(output.Operations, context) : undefined,
    RetiringPrincipal: __expectString(output.RetiringPrincipal),
  } as any;
};

/**
 * deserializeAws_json1_1GrantOperationList
 */
const de_GrantOperationList = (output: any, context: __SerdeContext): (GrantOperation | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportKeyMaterialResponse
 */
const de_ImportKeyMaterialResponse = (output: any, context: __SerdeContext): ImportKeyMaterialResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1IncorrectKeyException
 */
const de_IncorrectKeyException = (output: any, context: __SerdeContext): IncorrectKeyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IncorrectKeyMaterialException
 */
const de_IncorrectKeyMaterialException = (output: any, context: __SerdeContext): IncorrectKeyMaterialException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IncorrectTrustAnchorException
 */
const de_IncorrectTrustAnchorException = (output: any, context: __SerdeContext): IncorrectTrustAnchorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAliasNameException
 */
const de_InvalidAliasNameException = (output: any, context: __SerdeContext): InvalidAliasNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArnException
 */
const de_InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCiphertextException
 */
const de_InvalidCiphertextException = (output: any, context: __SerdeContext): InvalidCiphertextException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGrantIdException
 */
const de_InvalidGrantIdException = (output: any, context: __SerdeContext): InvalidGrantIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGrantTokenException
 */
const de_InvalidGrantTokenException = (output: any, context: __SerdeContext): InvalidGrantTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidImportTokenException
 */
const de_InvalidImportTokenException = (output: any, context: __SerdeContext): InvalidImportTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKeyUsageException
 */
const de_InvalidKeyUsageException = (output: any, context: __SerdeContext): InvalidKeyUsageException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMarkerException
 */
const de_InvalidMarkerException = (output: any, context: __SerdeContext): InvalidMarkerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KeyList
 */
const de_KeyList = (output: any, context: __SerdeContext): KeyListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1KeyListEntry
 */
const de_KeyListEntry = (output: any, context: __SerdeContext): KeyListEntry => {
  return {
    KeyArn: __expectString(output.KeyArn),
    KeyId: __expectString(output.KeyId),
  } as any;
};

/**
 * deserializeAws_json1_1KeyMetadata
 */
const de_KeyMetadata = (output: any, context: __SerdeContext): KeyMetadata => {
  return {
    AWSAccountId: __expectString(output.AWSAccountId),
    Arn: __expectString(output.Arn),
    CloudHsmClusterId: __expectString(output.CloudHsmClusterId),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CustomKeyStoreId: __expectString(output.CustomKeyStoreId),
    CustomerMasterKeySpec: __expectString(output.CustomerMasterKeySpec),
    DeletionDate:
      output.DeletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionDate)))
        : undefined,
    Description: __expectString(output.Description),
    Enabled: __expectBoolean(output.Enabled),
    EncryptionAlgorithms:
      output.EncryptionAlgorithms != null
        ? de_EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    ExpirationModel: __expectString(output.ExpirationModel),
    KeyId: __expectString(output.KeyId),
    KeyManager: __expectString(output.KeyManager),
    KeySpec: __expectString(output.KeySpec),
    KeyState: __expectString(output.KeyState),
    KeyUsage: __expectString(output.KeyUsage),
    MacAlgorithms: output.MacAlgorithms != null ? de_MacAlgorithmSpecList(output.MacAlgorithms, context) : undefined,
    MultiRegion: __expectBoolean(output.MultiRegion),
    MultiRegionConfiguration:
      output.MultiRegionConfiguration != null
        ? de_MultiRegionConfiguration(output.MultiRegionConfiguration, context)
        : undefined,
    Origin: __expectString(output.Origin),
    PendingDeletionWindowInDays: __expectInt32(output.PendingDeletionWindowInDays),
    SigningAlgorithms:
      output.SigningAlgorithms != null ? de_SigningAlgorithmSpecList(output.SigningAlgorithms, context) : undefined,
    ValidTo:
      output.ValidTo != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidTo))) : undefined,
    XksKeyConfiguration:
      output.XksKeyConfiguration != null ? de_XksKeyConfigurationType(output.XksKeyConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1KeyUnavailableException
 */
const de_KeyUnavailableException = (output: any, context: __SerdeContext): KeyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInternalException
 */
const de_KMSInternalException = (output: any, context: __SerdeContext): KMSInternalException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInvalidMacException
 */
const de_KMSInvalidMacException = (output: any, context: __SerdeContext): KMSInvalidMacException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInvalidSignatureException
 */
const de_KMSInvalidSignatureException = (output: any, context: __SerdeContext): KMSInvalidSignatureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInvalidStateException
 */
const de_KMSInvalidStateException = (output: any, context: __SerdeContext): KMSInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAliasesResponse
 */
const de_ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? de_AliasList(output.Aliases, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1ListGrantsResponse
 */
const de_ListGrantsResponse = (output: any, context: __SerdeContext): ListGrantsResponse => {
  return {
    Grants: output.Grants != null ? de_GrantList(output.Grants, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1ListKeyPoliciesResponse
 */
const de_ListKeyPoliciesResponse = (output: any, context: __SerdeContext): ListKeyPoliciesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    PolicyNames: output.PolicyNames != null ? de_PolicyNameList(output.PolicyNames, context) : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1ListKeysResponse
 */
const de_ListKeysResponse = (output: any, context: __SerdeContext): ListKeysResponse => {
  return {
    Keys: output.Keys != null ? de_KeyList(output.Keys, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceTagsResponse
 */
const de_ListResourceTagsResponse = (output: any, context: __SerdeContext): ListResourceTagsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

/**
 * deserializeAws_json1_1MacAlgorithmSpecList
 */
const de_MacAlgorithmSpecList = (output: any, context: __SerdeContext): (MacAlgorithmSpec | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MultiRegionConfiguration
 */
const de_MultiRegionConfiguration = (output: any, context: __SerdeContext): MultiRegionConfiguration => {
  return {
    MultiRegionKeyType: __expectString(output.MultiRegionKeyType),
    PrimaryKey: output.PrimaryKey != null ? de_MultiRegionKey(output.PrimaryKey, context) : undefined,
    ReplicaKeys: output.ReplicaKeys != null ? de_MultiRegionKeyList(output.ReplicaKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MultiRegionKey
 */
const de_MultiRegionKey = (output: any, context: __SerdeContext): MultiRegionKey => {
  return {
    Arn: __expectString(output.Arn),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_json1_1MultiRegionKeyList
 */
const de_MultiRegionKeyList = (output: any, context: __SerdeContext): MultiRegionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiRegionKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyNameList
 */
const de_PolicyNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReEncryptResponse
 */
const de_ReEncryptResponse = (output: any, context: __SerdeContext): ReEncryptResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    DestinationEncryptionAlgorithm: __expectString(output.DestinationEncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
    SourceEncryptionAlgorithm: __expectString(output.SourceEncryptionAlgorithm),
    SourceKeyId: __expectString(output.SourceKeyId),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicateKeyResponse
 */
const de_ReplicateKeyResponse = (output: any, context: __SerdeContext): ReplicateKeyResponse => {
  return {
    ReplicaKeyMetadata:
      output.ReplicaKeyMetadata != null ? de_KeyMetadata(output.ReplicaKeyMetadata, context) : undefined,
    ReplicaPolicy: __expectString(output.ReplicaPolicy),
    ReplicaTags: output.ReplicaTags != null ? de_TagList(output.ReplicaTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScheduleKeyDeletionResponse
 */
const de_ScheduleKeyDeletionResponse = (output: any, context: __SerdeContext): ScheduleKeyDeletionResponse => {
  return {
    DeletionDate:
      output.DeletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionDate)))
        : undefined,
    KeyId: __expectString(output.KeyId),
    KeyState: __expectString(output.KeyState),
    PendingWindowInDays: __expectInt32(output.PendingWindowInDays),
  } as any;
};

/**
 * deserializeAws_json1_1SigningAlgorithmSpecList
 */
const de_SigningAlgorithmSpecList = (output: any, context: __SerdeContext): (SigningAlgorithmSpec | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SignResponse
 */
const de_SignResponse = (output: any, context: __SerdeContext): SignResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    Signature: output.Signature != null ? context.base64Decoder(output.Signature) : undefined,
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValue: __expectString(output.TagValue),
  } as any;
};

/**
 * deserializeAws_json1_1TagException
 */
const de_TagException = (output: any, context: __SerdeContext): TagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCustomKeyStoreResponse
 */
const de_UpdateCustomKeyStoreResponse = (output: any, context: __SerdeContext): UpdateCustomKeyStoreResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1VerifyMacResponse
 */
const de_VerifyMacResponse = (output: any, context: __SerdeContext): VerifyMacResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    MacAlgorithm: __expectString(output.MacAlgorithm),
    MacValid: __expectBoolean(output.MacValid),
  } as any;
};

/**
 * deserializeAws_json1_1VerifyResponse
 */
const de_VerifyResponse = (output: any, context: __SerdeContext): VerifyResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    SignatureValid: __expectBoolean(output.SignatureValid),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
  } as any;
};

/**
 * deserializeAws_json1_1XksKeyAlreadyInUseException
 */
const de_XksKeyAlreadyInUseException = (output: any, context: __SerdeContext): XksKeyAlreadyInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksKeyConfigurationType
 */
const de_XksKeyConfigurationType = (output: any, context: __SerdeContext): XksKeyConfigurationType => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1XksKeyInvalidConfigurationException
 */
const de_XksKeyInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksKeyInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksKeyNotFoundException
 */
const de_XksKeyNotFoundException = (output: any, context: __SerdeContext): XksKeyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyConfigurationType
 */
const de_XksProxyConfigurationType = (output: any, context: __SerdeContext): XksProxyConfigurationType => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    Connectivity: __expectString(output.Connectivity),
    UriEndpoint: __expectString(output.UriEndpoint),
    UriPath: __expectString(output.UriPath),
    VpcEndpointServiceName: __expectString(output.VpcEndpointServiceName),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialException
 */
const de_XksProxyIncorrectAuthenticationCredentialException = (
  output: any,
  context: __SerdeContext
): XksProxyIncorrectAuthenticationCredentialException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyInvalidConfigurationException
 */
const de_XksProxyInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksProxyInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyInvalidResponseException
 */
const de_XksProxyInvalidResponseException = (
  output: any,
  context: __SerdeContext
): XksProxyInvalidResponseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyUriEndpointInUseException
 */
const de_XksProxyUriEndpointInUseException = (
  output: any,
  context: __SerdeContext
): XksProxyUriEndpointInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyUriInUseException
 */
const de_XksProxyUriInUseException = (output: any, context: __SerdeContext): XksProxyUriInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyUriUnreachableException
 */
const de_XksProxyUriUnreachableException = (output: any, context: __SerdeContext): XksProxyUriUnreachableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceInUseException
 */
const de_XksProxyVpcEndpointServiceInUseException = (
  output: any,
  context: __SerdeContext
): XksProxyVpcEndpointServiceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationException
 */
const de_XksProxyVpcEndpointServiceInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksProxyVpcEndpointServiceInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundException
 */
const de_XksProxyVpcEndpointServiceNotFoundException = (
  output: any,
  context: __SerdeContext
): XksProxyVpcEndpointServiceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
