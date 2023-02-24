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

export const serializeAws_json1_1CancelKeyDeletionCommand = async (
  input: CancelKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CancelKeyDeletion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelKeyDeletionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConnectCustomKeyStoreCommand = async (
  input: ConnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ConnectCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConnectCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomKeyStoreCommand = async (
  input: CreateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGrantCommand = async (
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.CreateKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DecryptCommand = async (
  input: DecryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Decrypt",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DecryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomKeyStoreCommand = async (
  input: DeleteCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImportedKeyMaterialCommand = async (
  input: DeleteImportedKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DeleteImportedKeyMaterial",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImportedKeyMaterialRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCustomKeyStoresCommand = async (
  input: DescribeCustomKeyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DescribeCustomKeyStores",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCustomKeyStoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeKeyCommand = async (
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DescribeKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableKeyCommand = async (
  input: DisableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisableKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableKeyRotationCommand = async (
  input: DisableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisableKeyRotation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableKeyRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisconnectCustomKeyStoreCommand = async (
  input: DisconnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.DisconnectCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisconnectCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableKeyCommand = async (
  input: EnableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.EnableKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableKeyRotationCommand = async (
  input: EnableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.EnableKeyRotation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableKeyRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EncryptCommand = async (
  input: EncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Encrypt",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateDataKeyCommand = async (
  input: GenerateDataKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateDataKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateDataKeyPairCommand = async (
  input: GenerateDataKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = async (
  input: GenerateDataKeyPairWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyPairWithoutPlaintext",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = async (
  input: GenerateDataKeyWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateDataKeyWithoutPlaintext",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateMacCommand = async (
  input: GenerateMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateMac",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateMacRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateRandomCommand = async (
  input: GenerateRandomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GenerateRandom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateRandomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyPolicyCommand = async (
  input: GetKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetKeyPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyRotationStatusCommand = async (
  input: GetKeyRotationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetKeyRotationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyRotationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParametersForImportCommand = async (
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetParametersForImport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParametersForImportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.GetPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportKeyMaterialCommand = async (
  input: ImportKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ImportKeyMaterial",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportKeyMaterialRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGrantsCommand = async (
  input: ListGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListGrants",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListKeyPoliciesCommand = async (
  input: ListKeyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListKeyPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListKeyPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceTagsCommand = async (
  input: ListResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListResourceTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRetirableGrantsCommand = async (
  input: ListRetirableGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ListRetirableGrants",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRetirableGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutKeyPolicyCommand = async (
  input: PutKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.PutKeyPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutKeyPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReEncryptCommand = async (
  input: ReEncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ReEncrypt",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReEncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReplicateKeyCommand = async (
  input: ReplicateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ReplicateKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReplicateKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetireGrantCommand = async (
  input: RetireGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.RetireGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetireGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokeGrantCommand = async (
  input: RevokeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.RevokeGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokeGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ScheduleKeyDeletionCommand = async (
  input: ScheduleKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.ScheduleKeyDeletion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ScheduleKeyDeletionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SignCommand = async (
  input: SignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Sign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCustomKeyStoreCommand = async (
  input: UpdateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateCustomKeyStore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCustomKeyStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateKeyDescriptionCommand = async (
  input: UpdateKeyDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdateKeyDescription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateKeyDescriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePrimaryRegionCommand = async (
  input: UpdatePrimaryRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.UpdatePrimaryRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePrimaryRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1VerifyCommand = async (
  input: VerifyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.Verify",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1VerifyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1VerifyMacCommand = async (
  input: VerifyMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TrentService.VerifyMac",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1VerifyMacRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelKeyDeletionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelKeyDeletionResponse(data, context);
  const response: CancelKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelKeyDeletionCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ConnectCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ConnectCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(data, context);
  const response: ConnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConnectCustomKeyStoreCommandError = async (
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
      throw await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAliasCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidAliasNameException":
    case "com.amazonaws.kms#InvalidAliasNameException":
      throw await deserializeAws_json1_1InvalidAliasNameExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(data, context);
  const response: CreateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomKeyStoreCommandError = async (
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
      throw await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      throw await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      throw await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      throw await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context);
    case "IncorrectTrustAnchorException":
    case "com.amazonaws.kms#IncorrectTrustAnchorException":
      throw await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "XksProxyIncorrectAuthenticationCredentialException":
    case "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException":
      throw await deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialExceptionResponse(
        parsedOutput,
        context
      );
    case "XksProxyInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyInvalidConfigurationException":
      throw await deserializeAws_json1_1XksProxyInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "XksProxyInvalidResponseException":
    case "com.amazonaws.kms#XksProxyInvalidResponseException":
      throw await deserializeAws_json1_1XksProxyInvalidResponseExceptionResponse(parsedOutput, context);
    case "XksProxyUriEndpointInUseException":
    case "com.amazonaws.kms#XksProxyUriEndpointInUseException":
      throw await deserializeAws_json1_1XksProxyUriEndpointInUseExceptionResponse(parsedOutput, context);
    case "XksProxyUriInUseException":
    case "com.amazonaws.kms#XksProxyUriInUseException":
      throw await deserializeAws_json1_1XksProxyUriInUseExceptionResponse(parsedOutput, context);
    case "XksProxyUriUnreachableException":
    case "com.amazonaws.kms#XksProxyUriUnreachableException":
      throw await deserializeAws_json1_1XksProxyUriUnreachableExceptionResponse(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInUseException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceInUseExceptionResponse(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
    case "XksProxyVpcEndpointServiceNotFoundException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGrantResponse(data, context);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGrantCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyResponse(data, context);
  const response: CreateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateKeyCommandError = async (
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
      throw await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
    case "XksKeyAlreadyInUseException":
    case "com.amazonaws.kms#XksKeyAlreadyInUseException":
      throw await deserializeAws_json1_1XksKeyAlreadyInUseExceptionResponse(parsedOutput, context);
    case "XksKeyInvalidConfigurationException":
    case "com.amazonaws.kms#XksKeyInvalidConfigurationException":
      throw await deserializeAws_json1_1XksKeyInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "XksKeyNotFoundException":
    case "com.amazonaws.kms#XksKeyNotFoundException":
      throw await deserializeAws_json1_1XksKeyNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DecryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DecryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DecryptResponse(data, context);
  const response: DecryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DecryptCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      throw await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAliasCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(data, context);
  const response: DeleteCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomKeyStoreCommandError = async (
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
      throw await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteImportedKeyMaterialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteImportedKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImportedKeyMaterialCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCustomKeyStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCustomKeyStoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(data, context);
  const response: DescribeCustomKeyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCustomKeyStoresCommandError = async (
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
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeKeyResponse(data, context);
  const response: DescribeKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeKeyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableKeyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableKeyRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableKeyRotationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableKeyRotationCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisconnectCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(data, context);
  const response: DisconnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisconnectCustomKeyStoreCommandError = async (
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
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableKeyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableKeyRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableKeyRotationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableKeyRotationCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EncryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EncryptResponse(data, context);
  const response: EncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EncryptCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateDataKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateDataKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyResponse(data, context);
  const response: GenerateDataKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateDataKeyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateDataKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateDataKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairResponse(data, context);
  const response: GenerateDataKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateDataKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(data, context);
  const response: GenerateDataKeyPairWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(data, context);
  const response: GenerateDataKeyWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateMacCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateMacResponse(data, context);
  const response: GenerateMacCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateMacCommandError = async (
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
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateRandomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateRandomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateRandomResponse(data, context);
  const response: GenerateRandomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateRandomCommandError = async (
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
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetKeyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetKeyPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPolicyResponse(data, context);
  const response: GetKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyPolicyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetKeyRotationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetKeyRotationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyRotationStatusResponse(data, context);
  const response: GetKeyRotationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyRotationStatusCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParametersForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParametersForImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParametersForImportResponse(data, context);
  const response: GetParametersForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParametersForImportCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPublicKeyResponse(data, context);
  const response: GetPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPublicKeyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportKeyMaterialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportKeyMaterialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyMaterialResponse(data, context);
  const response: ImportKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportKeyMaterialCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "ExpiredImportTokenException":
    case "com.amazonaws.kms#ExpiredImportTokenException":
      throw await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(parsedOutput, context);
    case "IncorrectKeyMaterialException":
    case "com.amazonaws.kms#IncorrectKeyMaterialException":
      throw await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context);
    case "InvalidImportTokenException":
    case "com.amazonaws.kms#InvalidImportTokenException":
      throw await deserializeAws_json1_1InvalidImportTokenExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAliasesCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(data, context);
  const response: ListGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGrantsCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListKeyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListKeyPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeyPoliciesResponse(data, context);
  const response: ListKeyPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListKeyPoliciesCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeysResponse(data, context);
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListKeysCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceTagsResponse(data, context);
  const response: ListResourceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceTagsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRetirableGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRetirableGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(data, context);
  const response: ListRetirableGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRetirableGrantsCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      throw await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutKeyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutKeyPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutKeyPolicyCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReEncryptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReEncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReEncryptResponse(data, context);
  const response: ReEncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReEncryptCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      throw await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context);
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      throw await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReplicateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReplicateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReplicateKeyResponse(data, context);
  const response: ReplicateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReplicateKeyCommandError = async (
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
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RetireGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetireGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RetireGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetireGrantCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RevokeGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokeGrantCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      throw await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ScheduleKeyDeletionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ScheduleKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(data, context);
  const response: ScheduleKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ScheduleKeyDeletionCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SignResponse(data, context);
  const response: SignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TagException":
    case "com.amazonaws.kms#TagException":
      throw await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAliasCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCustomKeyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCustomKeyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(data, context);
  const response: UpdateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCustomKeyStoreCommandError = async (
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
      throw await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      throw await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      throw await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context);
    case "CloudHsmClusterNotRelatedException":
    case "com.amazonaws.kms#CloudHsmClusterNotRelatedException":
      throw await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      throw await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      throw await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context);
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      throw await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "XksProxyIncorrectAuthenticationCredentialException":
    case "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException":
      throw await deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialExceptionResponse(
        parsedOutput,
        context
      );
    case "XksProxyInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyInvalidConfigurationException":
      throw await deserializeAws_json1_1XksProxyInvalidConfigurationExceptionResponse(parsedOutput, context);
    case "XksProxyInvalidResponseException":
    case "com.amazonaws.kms#XksProxyInvalidResponseException":
      throw await deserializeAws_json1_1XksProxyInvalidResponseExceptionResponse(parsedOutput, context);
    case "XksProxyUriEndpointInUseException":
    case "com.amazonaws.kms#XksProxyUriEndpointInUseException":
      throw await deserializeAws_json1_1XksProxyUriEndpointInUseExceptionResponse(parsedOutput, context);
    case "XksProxyUriInUseException":
    case "com.amazonaws.kms#XksProxyUriInUseException":
      throw await deserializeAws_json1_1XksProxyUriInUseExceptionResponse(parsedOutput, context);
    case "XksProxyUriUnreachableException":
    case "com.amazonaws.kms#XksProxyUriUnreachableException":
      throw await deserializeAws_json1_1XksProxyUriUnreachableExceptionResponse(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInUseException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceInUseExceptionResponse(parsedOutput, context);
    case "XksProxyVpcEndpointServiceInvalidConfigurationException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationExceptionResponse(
        parsedOutput,
        context
      );
    case "XksProxyVpcEndpointServiceNotFoundException":
    case "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException":
      throw await deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateKeyDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateKeyDescriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateKeyDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateKeyDescriptionCommandError = async (
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
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePrimaryRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePrimaryRegionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdatePrimaryRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePrimaryRegionCommandError = async (
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
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1VerifyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1VerifyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyResponse(data, context);
  const response: VerifyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1VerifyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      throw await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context);
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidSignatureException":
    case "com.amazonaws.kms#KMSInvalidSignatureException":
      throw await deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1VerifyMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1VerifyMacCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyMacResponse(data, context);
  const response: VerifyMacCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1VerifyMacCommandError = async (
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
      throw await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context);
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      throw await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context);
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      throw await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context);
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      throw await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context);
    case "KMSInvalidMacException":
    case "com.amazonaws.kms#KMSInvalidMacException":
      throw await deserializeAws_json1_1KMSInvalidMacExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      throw await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInUseException(body, context);
  const exception = new CloudHsmClusterInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(body, context);
  const exception = new CloudHsmClusterInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotActiveException(body, context);
  const exception = new CloudHsmClusterNotActiveException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotFoundException(body, context);
  const exception = new CloudHsmClusterNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotRelatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotRelatedException(body, context);
  const exception = new CloudHsmClusterNotRelatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreHasCMKsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreHasCMKsException(body, context);
  const exception = new CustomKeyStoreHasCMKsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreInvalidStateException(body, context);
  const exception = new CustomKeyStoreInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNameInUseException(body, context);
  const exception = new CustomKeyStoreNameInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNotFoundException(body, context);
  const exception = new CustomKeyStoreNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DependencyTimeoutException(body, context);
  const exception = new DependencyTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DisabledException(body, context);
  const exception = new DisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredImportTokenException(body, context);
  const exception = new ExpiredImportTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyException(body, context);
  const exception = new IncorrectKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyMaterialException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyMaterialException(body, context);
  const exception = new IncorrectKeyMaterialException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectTrustAnchorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectTrustAnchorException(body, context);
  const exception = new IncorrectTrustAnchorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAliasNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAliasNameException(body, context);
  const exception = new InvalidAliasNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCiphertextException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCiphertextException(body, context);
  const exception = new InvalidCiphertextException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantIdException(body, context);
  const exception = new InvalidGrantIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantTokenException(body, context);
  const exception = new InvalidGrantTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImportTokenException(body, context);
  const exception = new InvalidImportTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyUsageException(body, context);
  const exception = new InvalidKeyUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMarkerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMarkerException(body, context);
  const exception = new InvalidMarkerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KeyUnavailableException(body, context);
  const exception = new KeyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInternalException(body, context);
  const exception = new KMSInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInvalidMacExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidMacException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidMacException(body, context);
  const exception = new KMSInvalidMacException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidSignatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidSignatureException(body, context);
  const exception = new KMSInvalidSignatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(body, context);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagException(body, context);
  const exception = new TagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksKeyAlreadyInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyAlreadyInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksKeyAlreadyInUseException(body, context);
  const exception = new XksKeyAlreadyInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksKeyInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksKeyInvalidConfigurationException(body, context);
  const exception = new XksKeyInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksKeyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksKeyNotFoundException(body, context);
  const exception = new XksKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyIncorrectAuthenticationCredentialException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialException(body, context);
  const exception = new XksProxyIncorrectAuthenticationCredentialException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyInvalidConfigurationException(body, context);
  const exception = new XksProxyInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyInvalidResponseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyInvalidResponseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyInvalidResponseException(body, context);
  const exception = new XksProxyInvalidResponseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyUriEndpointInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriEndpointInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyUriEndpointInUseException(body, context);
  const exception = new XksProxyUriEndpointInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyUriInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyUriInUseException(body, context);
  const exception = new XksProxyUriInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyUriUnreachableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyUriUnreachableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyUriUnreachableException(body, context);
  const exception = new XksProxyUriUnreachableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyVpcEndpointServiceInUseException(body, context);
  const exception = new XksProxyVpcEndpointServiceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationException(
    body,
    context
  );
  const exception = new XksProxyVpcEndpointServiceInvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<XksProxyVpcEndpointServiceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundException(body, context);
  const exception = new XksProxyVpcEndpointServiceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CancelKeyDeletionRequest = (
  input: CancelKeyDeletionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1ConnectCustomKeyStoreRequest = (
  input: ConnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId != null && { TargetKeyId: input.TargetKeyId }),
  };
};

const serializeAws_json1_1CreateCustomKeyStoreRequest = (
  input: CreateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudHsmClusterId != null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreName != null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.CustomKeyStoreType != null && { CustomKeyStoreType: input.CustomKeyStoreType }),
    ...(input.KeyStorePassword != null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.TrustAnchorCertificate != null && { TrustAnchorCertificate: input.TrustAnchorCertificate }),
    ...(input.XksProxyAuthenticationCredential != null && {
      XksProxyAuthenticationCredential: serializeAws_json1_1XksProxyAuthenticationCredentialType(
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

const serializeAws_json1_1CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.Constraints != null && { Constraints: serializeAws_json1_1GrantConstraints(input.Constraints, context) }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.GranteePrincipal != null && { GranteePrincipal: input.GranteePrincipal }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operations != null && { Operations: serializeAws_json1_1GrantOperationList(input.Operations, context) }),
    ...(input.RetiringPrincipal != null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

const serializeAws_json1_1CreateKeyRequest = (input: CreateKeyRequest, context: __SerdeContext): any => {
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
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.XksKeyId != null && { XksKeyId: input.XksKeyId }),
  };
};

const serializeAws_json1_1DecryptRequest = (input: DecryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob != null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.EncryptionAlgorithm != null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DeleteAliasRequest = (input: DeleteAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
  };
};

const serializeAws_json1_1DeleteCustomKeyStoreRequest = (
  input: DeleteCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (
  input: DeleteImportedKeyMaterialRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DescribeCustomKeyStoresRequest = (
  input: DescribeCustomKeyStoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.CustomKeyStoreName != null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1DescribeKeyRequest = (input: DescribeKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisableKeyRequest = (input: DisableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisableKeyRotationRequest = (
  input: DisableKeyRotationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (
  input: DisconnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1EnableKeyRequest = (input: EnableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1EnableKeyRotationRequest = (
  input: EnableKeyRotationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1EncryptionContextType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1EncryptRequest = (input: EncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionAlgorithm != null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Plaintext != null && { Plaintext: context.base64Encoder(input.Plaintext) }),
  };
};

const serializeAws_json1_1GenerateDataKeyPairRequest = (
  input: GenerateDataKeyPairRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec != null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (
  input: GenerateDataKeyPairWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec != null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

const serializeAws_json1_1GenerateDataKeyRequest = (input: GenerateDataKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeySpec != null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (
  input: GenerateDataKeyWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext != null && {
      EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeySpec != null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GenerateMacRequest = (input: GenerateMacRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.MacAlgorithm != null && { MacAlgorithm: input.MacAlgorithm }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
  };
};

const serializeAws_json1_1GenerateRandomRequest = (input: GenerateRandomRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.NumberOfBytes != null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GetKeyPolicyRequest = (input: GetKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_json1_1GetKeyRotationStatusRequest = (
  input: GetKeyRotationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1GetParametersForImportRequest = (
  input: GetParametersForImportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.WrappingAlgorithm != null && { WrappingAlgorithm: input.WrappingAlgorithm }),
    ...(input.WrappingKeySpec != null && { WrappingKeySpec: input.WrappingKeySpec }),
  };
};

const serializeAws_json1_1GetPublicKeyRequest = (input: GetPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1GrantConstraints = (input: GrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContextEquals != null && {
      EncryptionContextEquals: serializeAws_json1_1EncryptionContextType(input.EncryptionContextEquals, context),
    }),
    ...(input.EncryptionContextSubset != null && {
      EncryptionContextSubset: serializeAws_json1_1EncryptionContextType(input.EncryptionContextSubset, context),
    }),
  };
};

const serializeAws_json1_1GrantOperationList = (input: (GrantOperation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GrantTokenList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ImportKeyMaterialRequest = (
  input: ImportKeyMaterialRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1ListAliasesRequest = (input: ListAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListGrantsRequest = (input: ListGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.GranteePrincipal != null && { GranteePrincipal: input.GranteePrincipal }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListKeyPoliciesRequest = (input: ListKeyPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListKeysRequest = (input: ListKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListResourceTagsRequest = (input: ListResourceTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListRetirableGrantsRequest = (
  input: ListRetirableGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.RetiringPrincipal != null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

const serializeAws_json1_1PutKeyPolicyRequest = (input: PutKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_json1_1ReEncryptRequest = (input: ReEncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob != null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.DestinationEncryptionAlgorithm != null && {
      DestinationEncryptionAlgorithm: input.DestinationEncryptionAlgorithm,
    }),
    ...(input.DestinationEncryptionContext != null && {
      DestinationEncryptionContext: serializeAws_json1_1EncryptionContextType(
        input.DestinationEncryptionContext,
        context
      ),
    }),
    ...(input.DestinationKeyId != null && { DestinationKeyId: input.DestinationKeyId }),
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.SourceEncryptionAlgorithm != null && { SourceEncryptionAlgorithm: input.SourceEncryptionAlgorithm }),
    ...(input.SourceEncryptionContext != null && {
      SourceEncryptionContext: serializeAws_json1_1EncryptionContextType(input.SourceEncryptionContext, context),
    }),
    ...(input.SourceKeyId != null && { SourceKeyId: input.SourceKeyId }),
  };
};

const serializeAws_json1_1ReplicateKeyRequest = (input: ReplicateKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ReplicaRegion != null && { ReplicaRegion: input.ReplicaRegion }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1RetireGrantRequest = (input: RetireGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.GrantToken != null && { GrantToken: input.GrantToken }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1RevokeGrantRequest = (input: RevokeGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId != null && { GrantId: input.GrantId }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1ScheduleKeyDeletionRequest = (
  input: ScheduleKeyDeletionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PendingWindowInDays != null && { PendingWindowInDays: input.PendingWindowInDays }),
  };
};

const serializeAws_json1_1SignRequest = (input: SignRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAliasRequest = (input: UpdateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName != null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId != null && { TargetKeyId: input.TargetKeyId }),
  };
};

const serializeAws_json1_1UpdateCustomKeyStoreRequest = (
  input: UpdateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudHsmClusterId != null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreId != null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.KeyStorePassword != null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.NewCustomKeyStoreName != null && { NewCustomKeyStoreName: input.NewCustomKeyStoreName }),
    ...(input.XksProxyAuthenticationCredential != null && {
      XksProxyAuthenticationCredential: serializeAws_json1_1XksProxyAuthenticationCredentialType(
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

const serializeAws_json1_1UpdateKeyDescriptionRequest = (
  input: UpdateKeyDescriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1UpdatePrimaryRegionRequest = (
  input: UpdatePrimaryRegionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.PrimaryRegion != null && { PrimaryRegion: input.PrimaryRegion }),
  };
};

const serializeAws_json1_1VerifyMacRequest = (input: VerifyMacRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Mac != null && { Mac: context.base64Encoder(input.Mac) }),
    ...(input.MacAlgorithm != null && { MacAlgorithm: input.MacAlgorithm }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
  };
};

const serializeAws_json1_1VerifyRequest = (input: VerifyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens != null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Message != null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.Signature != null && { Signature: context.base64Encoder(input.Signature) }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

const serializeAws_json1_1XksProxyAuthenticationCredentialType = (
  input: XksProxyAuthenticationCredentialType,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKeyId != null && { AccessKeyId: input.AccessKeyId }),
    ...(input.RawSecretAccessKey != null && { RawSecretAccessKey: input.RawSecretAccessKey }),
  };
};

const deserializeAws_json1_1AliasList = (output: any, context: __SerdeContext): AliasListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AliasListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AliasListEntry = (output: any, context: __SerdeContext): AliasListEntry => {
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

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CancelKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): CancelKeyDeletionResponse => {
  return {
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterInUseException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotActiveException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotRelatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): ConnectCustomKeyStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomKeyStoreResponse => {
  return {
    CustomKeyStoreId: __expectString(output.CustomKeyStoreId),
  } as any;
};

const deserializeAws_json1_1CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantId: __expectString(output.GrantId),
    GrantToken: __expectString(output.GrantToken),
  } as any;
};

const deserializeAws_json1_1CreateKeyResponse = (output: any, context: __SerdeContext): CreateKeyResponse => {
  return {
    KeyMetadata:
      output.KeyMetadata != null ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreHasCMKsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNameInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CustomKeyStoresList = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomKeyStoresListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CustomKeyStoresListEntry = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry => {
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
        ? deserializeAws_json1_1XksProxyConfigurationType(output.XksProxyConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DecryptResponse = (output: any, context: __SerdeContext): DecryptResponse => {
  return {
    EncryptionAlgorithm: __expectString(output.EncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteCustomKeyStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1DependencyTimeoutException = (
  output: any,
  context: __SerdeContext
): DependencyTimeoutException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomKeyStoresResponse => {
  return {
    CustomKeyStores:
      output.CustomKeyStores != null
        ? deserializeAws_json1_1CustomKeyStoresList(output.CustomKeyStores, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1DescribeKeyResponse = (output: any, context: __SerdeContext): DescribeKeyResponse => {
  return {
    KeyMetadata:
      output.KeyMetadata != null ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisabledException = (output: any, context: __SerdeContext): DisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DisconnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DisconnectCustomKeyStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1EncryptionAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): (EncryptionAlgorithmSpec | string)[] => {
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

const deserializeAws_json1_1EncryptionContextType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1EncryptResponse = (output: any, context: __SerdeContext): EncryptResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    EncryptionAlgorithm: __expectString(output.EncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_json1_1ExpiredImportTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredImportTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyPairResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairResponse => {
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

const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (
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

const deserializeAws_json1_1GenerateDataKeyResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    KeyId: __expectString(output.KeyId),
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_json1_1GenerateMacResponse = (output: any, context: __SerdeContext): GenerateMacResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    Mac: output.Mac != null ? context.base64Decoder(output.Mac) : undefined,
    MacAlgorithm: __expectString(output.MacAlgorithm),
  } as any;
};

const deserializeAws_json1_1GenerateRandomResponse = (output: any, context: __SerdeContext): GenerateRandomResponse => {
  return {
    Plaintext: output.Plaintext != null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPolicyResponse = (output: any, context: __SerdeContext): GetKeyPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1GetKeyRotationStatusResponse = (
  output: any,
  context: __SerdeContext
): GetKeyRotationStatusResponse => {
  return {
    KeyRotationEnabled: __expectBoolean(output.KeyRotationEnabled),
  } as any;
};

const deserializeAws_json1_1GetParametersForImportResponse = (
  output: any,
  context: __SerdeContext
): GetParametersForImportResponse => {
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

const deserializeAws_json1_1GetPublicKeyResponse = (output: any, context: __SerdeContext): GetPublicKeyResponse => {
  return {
    CustomerMasterKeySpec: __expectString(output.CustomerMasterKeySpec),
    EncryptionAlgorithms:
      output.EncryptionAlgorithms != null
        ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    KeyId: __expectString(output.KeyId),
    KeySpec: __expectString(output.KeySpec),
    KeyUsage: __expectString(output.KeyUsage),
    PublicKey: output.PublicKey != null ? context.base64Decoder(output.PublicKey) : undefined,
    SigningAlgorithms:
      output.SigningAlgorithms != null
        ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GrantConstraints = (output: any, context: __SerdeContext): GrantConstraints => {
  return {
    EncryptionContextEquals:
      output.EncryptionContextEquals != null
        ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextEquals, context)
        : undefined,
    EncryptionContextSubset:
      output.EncryptionContextSubset != null
        ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextSubset, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GrantList = (output: any, context: __SerdeContext): GrantListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GrantListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GrantListEntry = (output: any, context: __SerdeContext): GrantListEntry => {
  return {
    Constraints:
      output.Constraints != null ? deserializeAws_json1_1GrantConstraints(output.Constraints, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    GrantId: __expectString(output.GrantId),
    GranteePrincipal: __expectString(output.GranteePrincipal),
    IssuingAccount: __expectString(output.IssuingAccount),
    KeyId: __expectString(output.KeyId),
    Name: __expectString(output.Name),
    Operations:
      output.Operations != null ? deserializeAws_json1_1GrantOperationList(output.Operations, context) : undefined,
    RetiringPrincipal: __expectString(output.RetiringPrincipal),
  } as any;
};

const deserializeAws_json1_1GrantOperationList = (
  output: any,
  context: __SerdeContext
): (GrantOperation | string)[] => {
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

const deserializeAws_json1_1ImportKeyMaterialResponse = (
  output: any,
  context: __SerdeContext
): ImportKeyMaterialResponse => {
  return {} as any;
};

const deserializeAws_json1_1IncorrectKeyException = (output: any, context: __SerdeContext): IncorrectKeyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IncorrectKeyMaterialException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyMaterialException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IncorrectTrustAnchorException = (
  output: any,
  context: __SerdeContext
): IncorrectTrustAnchorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidAliasNameException = (
  output: any,
  context: __SerdeContext
): InvalidAliasNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCiphertextException = (
  output: any,
  context: __SerdeContext
): InvalidCiphertextException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidGrantIdException = (
  output: any,
  context: __SerdeContext
): InvalidGrantIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidGrantTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGrantTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidImportTokenException = (
  output: any,
  context: __SerdeContext
): InvalidImportTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidKeyUsageException = (
  output: any,
  context: __SerdeContext
): InvalidKeyUsageException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMarkerException = (output: any, context: __SerdeContext): InvalidMarkerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KeyList = (output: any, context: __SerdeContext): KeyListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyListEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1KeyListEntry = (output: any, context: __SerdeContext): KeyListEntry => {
  return {
    KeyArn: __expectString(output.KeyArn),
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_json1_1KeyMetadata = (output: any, context: __SerdeContext): KeyMetadata => {
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
        ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    ExpirationModel: __expectString(output.ExpirationModel),
    KeyId: __expectString(output.KeyId),
    KeyManager: __expectString(output.KeyManager),
    KeySpec: __expectString(output.KeySpec),
    KeyState: __expectString(output.KeyState),
    KeyUsage: __expectString(output.KeyUsage),
    MacAlgorithms:
      output.MacAlgorithms != null
        ? deserializeAws_json1_1MacAlgorithmSpecList(output.MacAlgorithms, context)
        : undefined,
    MultiRegion: __expectBoolean(output.MultiRegion),
    MultiRegionConfiguration:
      output.MultiRegionConfiguration != null
        ? deserializeAws_json1_1MultiRegionConfiguration(output.MultiRegionConfiguration, context)
        : undefined,
    Origin: __expectString(output.Origin),
    PendingDeletionWindowInDays: __expectInt32(output.PendingDeletionWindowInDays),
    SigningAlgorithms:
      output.SigningAlgorithms != null
        ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
        : undefined,
    ValidTo:
      output.ValidTo != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidTo))) : undefined,
    XksKeyConfiguration:
      output.XksKeyConfiguration != null
        ? deserializeAws_json1_1XksKeyConfigurationType(output.XksKeyConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1KeyUnavailableException = (
  output: any,
  context: __SerdeContext
): KeyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInternalException = (output: any, context: __SerdeContext): KMSInternalException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInvalidMacException = (output: any, context: __SerdeContext): KMSInvalidMacException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInvalidSignatureException = (
  output: any,
  context: __SerdeContext
): KMSInvalidSignatureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1AliasList(output.Aliases, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1ListGrantsResponse = (output: any, context: __SerdeContext): ListGrantsResponse => {
  return {
    Grants: output.Grants != null ? deserializeAws_json1_1GrantList(output.Grants, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1ListKeyPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPoliciesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    PolicyNames:
      output.PolicyNames != null ? deserializeAws_json1_1PolicyNameList(output.PolicyNames, context) : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1ListKeysResponse = (output: any, context: __SerdeContext): ListKeysResponse => {
  return {
    Keys: output.Keys != null ? deserializeAws_json1_1KeyList(output.Keys, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1ListResourceTagsResponse = (
  output: any,
  context: __SerdeContext
): ListResourceTagsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    Truncated: __expectBoolean(output.Truncated),
  } as any;
};

const deserializeAws_json1_1MacAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): (MacAlgorithmSpec | string)[] => {
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

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MultiRegionConfiguration = (
  output: any,
  context: __SerdeContext
): MultiRegionConfiguration => {
  return {
    MultiRegionKeyType: __expectString(output.MultiRegionKeyType),
    PrimaryKey:
      output.PrimaryKey != null ? deserializeAws_json1_1MultiRegionKey(output.PrimaryKey, context) : undefined,
    ReplicaKeys:
      output.ReplicaKeys != null ? deserializeAws_json1_1MultiRegionKeyList(output.ReplicaKeys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MultiRegionKey = (output: any, context: __SerdeContext): MultiRegionKey => {
  return {
    Arn: __expectString(output.Arn),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_json1_1MultiRegionKeyList = (output: any, context: __SerdeContext): MultiRegionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MultiRegionKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PolicyNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ReEncryptResponse = (output: any, context: __SerdeContext): ReEncryptResponse => {
  return {
    CiphertextBlob: output.CiphertextBlob != null ? context.base64Decoder(output.CiphertextBlob) : undefined,
    DestinationEncryptionAlgorithm: __expectString(output.DestinationEncryptionAlgorithm),
    KeyId: __expectString(output.KeyId),
    SourceEncryptionAlgorithm: __expectString(output.SourceEncryptionAlgorithm),
    SourceKeyId: __expectString(output.SourceKeyId),
  } as any;
};

const deserializeAws_json1_1ReplicateKeyResponse = (output: any, context: __SerdeContext): ReplicateKeyResponse => {
  return {
    ReplicaKeyMetadata:
      output.ReplicaKeyMetadata != null
        ? deserializeAws_json1_1KeyMetadata(output.ReplicaKeyMetadata, context)
        : undefined,
    ReplicaPolicy: __expectString(output.ReplicaPolicy),
    ReplicaTags: output.ReplicaTags != null ? deserializeAws_json1_1TagList(output.ReplicaTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ScheduleKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): ScheduleKeyDeletionResponse => {
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

const deserializeAws_json1_1SigningAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): (SigningAlgorithmSpec | string)[] => {
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

const deserializeAws_json1_1SignResponse = (output: any, context: __SerdeContext): SignResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    Signature: output.Signature != null ? context.base64Decoder(output.Signature) : undefined,
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValue: __expectString(output.TagValue),
  } as any;
};

const deserializeAws_json1_1TagException = (output: any, context: __SerdeContext): TagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomKeyStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1VerifyMacResponse = (output: any, context: __SerdeContext): VerifyMacResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    MacAlgorithm: __expectString(output.MacAlgorithm),
    MacValid: __expectBoolean(output.MacValid),
  } as any;
};

const deserializeAws_json1_1VerifyResponse = (output: any, context: __SerdeContext): VerifyResponse => {
  return {
    KeyId: __expectString(output.KeyId),
    SignatureValid: __expectBoolean(output.SignatureValid),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
  } as any;
};

const deserializeAws_json1_1XksKeyAlreadyInUseException = (
  output: any,
  context: __SerdeContext
): XksKeyAlreadyInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksKeyConfigurationType = (
  output: any,
  context: __SerdeContext
): XksKeyConfigurationType => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1XksKeyInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksKeyInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksKeyNotFoundException = (
  output: any,
  context: __SerdeContext
): XksKeyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyConfigurationType = (
  output: any,
  context: __SerdeContext
): XksProxyConfigurationType => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    Connectivity: __expectString(output.Connectivity),
    UriEndpoint: __expectString(output.UriEndpoint),
    UriPath: __expectString(output.UriPath),
    VpcEndpointServiceName: __expectString(output.VpcEndpointServiceName),
  } as any;
};

const deserializeAws_json1_1XksProxyIncorrectAuthenticationCredentialException = (
  output: any,
  context: __SerdeContext
): XksProxyIncorrectAuthenticationCredentialException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksProxyInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyInvalidResponseException = (
  output: any,
  context: __SerdeContext
): XksProxyInvalidResponseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyUriEndpointInUseException = (
  output: any,
  context: __SerdeContext
): XksProxyUriEndpointInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyUriInUseException = (
  output: any,
  context: __SerdeContext
): XksProxyUriInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyUriUnreachableException = (
  output: any,
  context: __SerdeContext
): XksProxyUriUnreachableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceInUseException = (
  output: any,
  context: __SerdeContext
): XksProxyVpcEndpointServiceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): XksProxyVpcEndpointServiceInvalidConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1XksProxyVpcEndpointServiceNotFoundException = (
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
