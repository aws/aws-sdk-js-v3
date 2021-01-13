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
import { VerifyCommandInput, VerifyCommandOutput } from "../commands/VerifyCommand";
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
  DisableKeyRequest,
  DisableKeyRotationRequest,
  DisabledException,
  DisconnectCustomKeyStoreRequest,
  DisconnectCustomKeyStoreResponse,
  EnableKeyRequest,
  EnableKeyRotationRequest,
  EncryptRequest,
  EncryptResponse,
  EncryptionAlgorithmSpec,
  ExpiredImportTokenException,
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairResponse,
  GenerateDataKeyPairWithoutPlaintextRequest,
  GenerateDataKeyPairWithoutPlaintextResponse,
  GenerateDataKeyRequest,
  GenerateDataKeyResponse,
  GenerateDataKeyWithoutPlaintextRequest,
  GenerateDataKeyWithoutPlaintextResponse,
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
  KMSInternalException,
  KMSInvalidSignatureException,
  KMSInvalidStateException,
  KeyListEntry,
  KeyMetadata,
  KeyUnavailableException,
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
  MalformedPolicyDocumentException,
  NotFoundException,
  PutKeyPolicyRequest,
  ReEncryptRequest,
  ReEncryptResponse,
  RetireGrantRequest,
  RevokeGrantRequest,
  ScheduleKeyDeletionRequest,
  ScheduleKeyDeletionResponse,
  SignRequest,
  SignResponse,
  SigningAlgorithmSpec,
  Tag,
  TagException,
  TagResourceRequest,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateAliasRequest,
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreResponse,
  UpdateKeyDescriptionRequest,
  VerifyRequest,
  VerifyResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.kms#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAliasNameException":
    case "com.amazonaws.kms#InvalidAliasNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidAliasNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInUseException":
    case "com.amazonaws.kms#CloudHsmClusterInUseException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectTrustAnchorException":
    case "com.amazonaws.kms#IncorrectTrustAnchorException":
      response = {
        ...(await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagException":
    case "com.amazonaws.kms#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreHasCMKsException":
    case "com.amazonaws.kms#CustomKeyStoreHasCMKsException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredImportTokenException":
    case "com.amazonaws.kms#ExpiredImportTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectKeyMaterialException":
    case "com.amazonaws.kms#IncorrectKeyMaterialException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidImportTokenException":
    case "com.amazonaws.kms#InvalidImportTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidImportTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMarkerException":
    case "com.amazonaws.kms#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.kms#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kms#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectKeyException":
    case "com.amazonaws.kms#IncorrectKeyException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazonaws.kms#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantIdException":
    case "com.amazonaws.kms#InvalidGrantIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagException":
    case "com.amazonaws.kms#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagException":
    case "com.amazonaws.kms#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmClusterNotRelatedException":
    case "com.amazonaws.kms#CloudHsmClusterNotRelatedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.kms#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazonaws.kms#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledException":
    case "com.amazonaws.kms#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazonaws.kms#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazonaws.kms#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyUnavailableException":
    case "com.amazonaws.kms#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInternalException":
    case "com.amazonaws.kms#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidSignatureException":
    case "com.amazonaws.kms#KMSInvalidSignatureException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kms#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kms#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInUseException(body, context);
  const contents: CloudHsmClusterInUseException = {
    name: "CloudHsmClusterInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(body, context);
  const contents: CloudHsmClusterInvalidConfigurationException = {
    name: "CloudHsmClusterInvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotActiveException(body, context);
  const contents: CloudHsmClusterNotActiveException = {
    name: "CloudHsmClusterNotActiveException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotFoundException(body, context);
  const contents: CloudHsmClusterNotFoundException = {
    name: "CloudHsmClusterNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotRelatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotRelatedException(body, context);
  const contents: CloudHsmClusterNotRelatedException = {
    name: "CloudHsmClusterNotRelatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreHasCMKsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreHasCMKsException(body, context);
  const contents: CustomKeyStoreHasCMKsException = {
    name: "CustomKeyStoreHasCMKsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreInvalidStateException(body, context);
  const contents: CustomKeyStoreInvalidStateException = {
    name: "CustomKeyStoreInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNameInUseException(body, context);
  const contents: CustomKeyStoreNameInUseException = {
    name: "CustomKeyStoreNameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNotFoundException(body, context);
  const contents: CustomKeyStoreNotFoundException = {
    name: "CustomKeyStoreNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DependencyTimeoutException(body, context);
  const contents: DependencyTimeoutException = {
    name: "DependencyTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DisabledException(body, context);
  const contents: DisabledException = {
    name: "DisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredImportTokenException(body, context);
  const contents: ExpiredImportTokenException = {
    name: "ExpiredImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyException(body, context);
  const contents: IncorrectKeyException = {
    name: "IncorrectKeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyMaterialException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyMaterialException(body, context);
  const contents: IncorrectKeyMaterialException = {
    name: "IncorrectKeyMaterialException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectTrustAnchorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectTrustAnchorException(body, context);
  const contents: IncorrectTrustAnchorException = {
    name: "IncorrectTrustAnchorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAliasNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAliasNameException(body, context);
  const contents: InvalidAliasNameException = {
    name: "InvalidAliasNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(body, context);
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCiphertextException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCiphertextException(body, context);
  const contents: InvalidCiphertextException = {
    name: "InvalidCiphertextException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantIdException(body, context);
  const contents: InvalidGrantIdException = {
    name: "InvalidGrantIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantTokenException(body, context);
  const contents: InvalidGrantTokenException = {
    name: "InvalidGrantTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImportTokenException(body, context);
  const contents: InvalidImportTokenException = {
    name: "InvalidImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyUsageException(body, context);
  const contents: InvalidKeyUsageException = {
    name: "InvalidKeyUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMarkerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMarkerException(body, context);
  const contents: InvalidMarkerException = {
    name: "InvalidMarkerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KeyUnavailableException(body, context);
  const contents: KeyUnavailableException = {
    name: "KeyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KMSInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInternalException(body, context);
  const contents: KMSInternalException = {
    name: "KMSInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidSignatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidSignatureException(body, context);
  const contents: KMSInvalidSignatureException = {
    name: "KMSInvalidSignatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(body, context);
  const contents: KMSInvalidStateException = {
    name: "KMSInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagException(body, context);
  const contents: TagException = {
    name: "TagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CancelKeyDeletionRequest = (
  input: CancelKeyDeletionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1ConnectCustomKeyStoreRequest = (
  input: ConnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }),
  };
};

const serializeAws_json1_1CreateCustomKeyStoreRequest = (
  input: CreateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudHsmClusterId !== undefined &&
      input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreName !== undefined &&
      input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.KeyStorePassword !== undefined &&
      input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.TrustAnchorCertificate !== undefined &&
      input.TrustAnchorCertificate !== null && { TrustAnchorCertificate: input.TrustAnchorCertificate }),
  };
};

const serializeAws_json1_1CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.Constraints !== undefined &&
      input.Constraints !== null && { Constraints: serializeAws_json1_1GrantConstraints(input.Constraints, context) }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.GranteePrincipal !== undefined &&
      input.GranteePrincipal !== null && { GranteePrincipal: input.GranteePrincipal }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Operations !== undefined &&
      input.Operations !== null && { Operations: serializeAws_json1_1GrantOperationList(input.Operations, context) }),
    ...(input.RetiringPrincipal !== undefined &&
      input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

const serializeAws_json1_1CreateKeyRequest = (input: CreateKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
      input.BypassPolicyLockoutSafetyCheck !== null && {
        BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
      }),
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.CustomerMasterKeySpec !== undefined &&
      input.CustomerMasterKeySpec !== null && { CustomerMasterKeySpec: input.CustomerMasterKeySpec }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KeyUsage !== undefined && input.KeyUsage !== null && { KeyUsage: input.KeyUsage }),
    ...(input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DecryptRequest = (input: DecryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob !== undefined &&
      input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.EncryptionAlgorithm !== undefined &&
      input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DeleteAliasRequest = (input: DeleteAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
  };
};

const serializeAws_json1_1DeleteCustomKeyStoreRequest = (
  input: DeleteCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (
  input: DeleteImportedKeyMaterialRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DescribeCustomKeyStoresRequest = (
  input: DescribeCustomKeyStoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.CustomKeyStoreName !== undefined &&
      input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1DescribeKeyRequest = (input: DescribeKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisableKeyRequest = (input: DisableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisableKeyRotationRequest = (
  input: DisableKeyRotationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (
  input: DisconnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
  };
};

const serializeAws_json1_1EnableKeyRequest = (input: EnableKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1EnableKeyRotationRequest = (
  input: EnableKeyRotationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1EncryptionContextType = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1EncryptRequest = (input: EncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionAlgorithm !== undefined &&
      input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Plaintext !== undefined &&
      input.Plaintext !== null && { Plaintext: context.base64Encoder(input.Plaintext) }),
  };
};

const serializeAws_json1_1GenerateDataKeyPairRequest = (
  input: GenerateDataKeyPairRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (
  input: GenerateDataKeyPairWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }),
  };
};

const serializeAws_json1_1GenerateDataKeyRequest = (input: GenerateDataKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (
  input: GenerateDataKeyWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionContext !== undefined &&
      input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
      }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec }),
    ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GenerateRandomRequest = (input: GenerateRandomRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
  };
};

const serializeAws_json1_1GetKeyPolicyRequest = (input: GetKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_json1_1GetKeyRotationStatusRequest = (
  input: GetKeyRotationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1GetParametersForImportRequest = (
  input: GetParametersForImportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.WrappingAlgorithm !== undefined &&
      input.WrappingAlgorithm !== null && { WrappingAlgorithm: input.WrappingAlgorithm }),
    ...(input.WrappingKeySpec !== undefined &&
      input.WrappingKeySpec !== null && { WrappingKeySpec: input.WrappingKeySpec }),
  };
};

const serializeAws_json1_1GetPublicKeyRequest = (input: GetPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1GrantConstraints = (input: GrantConstraints, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContextEquals !== undefined &&
      input.EncryptionContextEquals !== null && {
        EncryptionContextEquals: serializeAws_json1_1EncryptionContextType(input.EncryptionContextEquals, context),
      }),
    ...(input.EncryptionContextSubset !== undefined &&
      input.EncryptionContextSubset !== null && {
        EncryptionContextSubset: serializeAws_json1_1EncryptionContextType(input.EncryptionContextSubset, context),
      }),
  };
};

const serializeAws_json1_1GrantOperationList = (input: (GrantOperation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GrantTokenList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ImportKeyMaterialRequest = (
  input: ImportKeyMaterialRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptedKeyMaterial !== undefined &&
      input.EncryptedKeyMaterial !== null && {
        EncryptedKeyMaterial: context.base64Encoder(input.EncryptedKeyMaterial),
      }),
    ...(input.ExpirationModel !== undefined &&
      input.ExpirationModel !== null && { ExpirationModel: input.ExpirationModel }),
    ...(input.ImportToken !== undefined &&
      input.ImportToken !== null && { ImportToken: context.base64Encoder(input.ImportToken) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.ValidTo !== undefined &&
      input.ValidTo !== null && { ValidTo: Math.round(input.ValidTo.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListAliasesRequest = (input: ListAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListGrantsRequest = (input: ListGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListKeyPoliciesRequest = (input: ListKeyPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListKeysRequest = (input: ListKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListResourceTagsRequest = (input: ListResourceTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListRetirableGrantsRequest = (
  input: ListRetirableGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.RetiringPrincipal !== undefined &&
      input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }),
  };
};

const serializeAws_json1_1PutKeyPolicyRequest = (input: PutKeyPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
      input.BypassPolicyLockoutSafetyCheck !== null && {
        BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
      }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_json1_1ReEncryptRequest = (input: ReEncryptRequest, context: __SerdeContext): any => {
  return {
    ...(input.CiphertextBlob !== undefined &&
      input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
    ...(input.DestinationEncryptionAlgorithm !== undefined &&
      input.DestinationEncryptionAlgorithm !== null && {
        DestinationEncryptionAlgorithm: input.DestinationEncryptionAlgorithm,
      }),
    ...(input.DestinationEncryptionContext !== undefined &&
      input.DestinationEncryptionContext !== null && {
        DestinationEncryptionContext: serializeAws_json1_1EncryptionContextType(
          input.DestinationEncryptionContext,
          context
        ),
      }),
    ...(input.DestinationKeyId !== undefined &&
      input.DestinationKeyId !== null && { DestinationKeyId: input.DestinationKeyId }),
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.SourceEncryptionAlgorithm !== undefined &&
      input.SourceEncryptionAlgorithm !== null && { SourceEncryptionAlgorithm: input.SourceEncryptionAlgorithm }),
    ...(input.SourceEncryptionContext !== undefined &&
      input.SourceEncryptionContext !== null && {
        SourceEncryptionContext: serializeAws_json1_1EncryptionContextType(input.SourceEncryptionContext, context),
      }),
    ...(input.SourceKeyId !== undefined && input.SourceKeyId !== null && { SourceKeyId: input.SourceKeyId }),
  };
};

const serializeAws_json1_1RetireGrantRequest = (input: RetireGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId }),
    ...(input.GrantToken !== undefined && input.GrantToken !== null && { GrantToken: input.GrantToken }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1RevokeGrantRequest = (input: RevokeGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1ScheduleKeyDeletionRequest = (
  input: ScheduleKeyDeletionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.PendingWindowInDays !== undefined &&
      input.PendingWindowInDays !== null && { PendingWindowInDays: input.PendingWindowInDays }),
  };
};

const serializeAws_json1_1SignRequest = (input: SignRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.SigningAlgorithm !== undefined &&
      input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValue !== undefined && input.TagValue !== null && { TagValue: input.TagValue }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAliasRequest = (input: UpdateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
    ...(input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }),
  };
};

const serializeAws_json1_1UpdateCustomKeyStoreRequest = (
  input: UpdateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudHsmClusterId !== undefined &&
      input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId }),
    ...(input.CustomKeyStoreId !== undefined &&
      input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    ...(input.KeyStorePassword !== undefined &&
      input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword }),
    ...(input.NewCustomKeyStoreName !== undefined &&
      input.NewCustomKeyStoreName !== null && { NewCustomKeyStoreName: input.NewCustomKeyStoreName }),
  };
};

const serializeAws_json1_1UpdateKeyDescriptionRequest = (
  input: UpdateKeyDescriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
  };
};

const serializeAws_json1_1VerifyRequest = (input: VerifyRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantTokens !== undefined &&
      input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) }),
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.Signature !== undefined &&
      input.Signature !== null && { Signature: context.base64Encoder(input.Signature) }),
    ...(input.SigningAlgorithm !== undefined &&
      input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

const deserializeAws_json1_1AliasList = (output: any, context: __SerdeContext): AliasListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AliasListEntry(entry, context);
    });
};

const deserializeAws_json1_1AliasListEntry = (output: any, context: __SerdeContext): AliasListEntry => {
  return {
    AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
    AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
    TargetKeyId: output.TargetKeyId !== undefined && output.TargetKeyId !== null ? output.TargetKeyId : undefined,
  } as any;
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CancelKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): CancelKeyDeletionResponse => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterInUseException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInUseException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInvalidConfigurationException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotActiveException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotRelatedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
    CustomKeyStoreId:
      output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantId: output.GrantId !== undefined && output.GrantId !== null ? output.GrantId : undefined,
    GrantToken: output.GrantToken !== undefined && output.GrantToken !== null ? output.GrantToken : undefined,
  } as any;
};

const deserializeAws_json1_1CreateKeyResponse = (output: any, context: __SerdeContext): CreateKeyResponse => {
  return {
    KeyMetadata:
      output.KeyMetadata !== undefined && output.KeyMetadata !== null
        ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreHasCMKsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreInvalidStateException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNameInUseException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CustomKeyStoresList = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomKeyStoresListEntry(entry, context);
    });
};

const deserializeAws_json1_1CustomKeyStoresListEntry = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry => {
  return {
    CloudHsmClusterId:
      output.CloudHsmClusterId !== undefined && output.CloudHsmClusterId !== null
        ? output.CloudHsmClusterId
        : undefined,
    ConnectionErrorCode:
      output.ConnectionErrorCode !== undefined && output.ConnectionErrorCode !== null
        ? output.ConnectionErrorCode
        : undefined,
    ConnectionState:
      output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CustomKeyStoreId:
      output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
    CustomKeyStoreName:
      output.CustomKeyStoreName !== undefined && output.CustomKeyStoreName !== null
        ? output.CustomKeyStoreName
        : undefined,
    TrustAnchorCertificate:
      output.TrustAnchorCertificate !== undefined && output.TrustAnchorCertificate !== null
        ? output.TrustAnchorCertificate
        : undefined,
  } as any;
};

const deserializeAws_json1_1DecryptResponse = (output: any, context: __SerdeContext): DecryptResponse => {
  return {
    EncryptionAlgorithm:
      output.EncryptionAlgorithm !== undefined && output.EncryptionAlgorithm !== null
        ? output.EncryptionAlgorithm
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    Plaintext:
      output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
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
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomKeyStoresResponse => {
  return {
    CustomKeyStores:
      output.CustomKeyStores !== undefined && output.CustomKeyStores !== null
        ? deserializeAws_json1_1CustomKeyStoresList(output.CustomKeyStores, context)
        : undefined,
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeKeyResponse = (output: any, context: __SerdeContext): DescribeKeyResponse => {
  return {
    KeyMetadata:
      output.KeyMetadata !== undefined && output.KeyMetadata !== null
        ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisabledException = (output: any, context: __SerdeContext): DisabledException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1EncryptionContextType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1EncryptResponse = (output: any, context: __SerdeContext): EncryptResponse => {
  return {
    CiphertextBlob:
      output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
        ? context.base64Decoder(output.CiphertextBlob)
        : undefined,
    EncryptionAlgorithm:
      output.EncryptionAlgorithm !== undefined && output.EncryptionAlgorithm !== null
        ? output.EncryptionAlgorithm
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
  } as any;
};

const deserializeAws_json1_1ExpiredImportTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredImportTokenException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyPairResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairResponse => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyPairSpec: output.KeyPairSpec !== undefined && output.KeyPairSpec !== null ? output.KeyPairSpec : undefined,
    PrivateKeyCiphertextBlob:
      output.PrivateKeyCiphertextBlob !== undefined && output.PrivateKeyCiphertextBlob !== null
        ? context.base64Decoder(output.PrivateKeyCiphertextBlob)
        : undefined,
    PrivateKeyPlaintext:
      output.PrivateKeyPlaintext !== undefined && output.PrivateKeyPlaintext !== null
        ? context.base64Decoder(output.PrivateKeyPlaintext)
        : undefined,
    PublicKey:
      output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairWithoutPlaintextResponse => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyPairSpec: output.KeyPairSpec !== undefined && output.KeyPairSpec !== null ? output.KeyPairSpec : undefined,
    PrivateKeyCiphertextBlob:
      output.PrivateKeyCiphertextBlob !== undefined && output.PrivateKeyCiphertextBlob !== null
        ? context.base64Decoder(output.PrivateKeyCiphertextBlob)
        : undefined,
    PublicKey:
      output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyResponse => {
  return {
    CiphertextBlob:
      output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
        ? context.base64Decoder(output.CiphertextBlob)
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    Plaintext:
      output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  return {
    CiphertextBlob:
      output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
        ? context.base64Decoder(output.CiphertextBlob)
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateRandomResponse = (output: any, context: __SerdeContext): GenerateRandomResponse => {
  return {
    Plaintext:
      output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPolicyResponse = (output: any, context: __SerdeContext): GetKeyPolicyResponse => {
  return {
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyRotationStatusResponse = (
  output: any,
  context: __SerdeContext
): GetKeyRotationStatusResponse => {
  return {
    KeyRotationEnabled:
      output.KeyRotationEnabled !== undefined && output.KeyRotationEnabled !== null
        ? output.KeyRotationEnabled
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetParametersForImportResponse = (
  output: any,
  context: __SerdeContext
): GetParametersForImportResponse => {
  return {
    ImportToken:
      output.ImportToken !== undefined && output.ImportToken !== null
        ? context.base64Decoder(output.ImportToken)
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    ParametersValidTo:
      output.ParametersValidTo !== undefined && output.ParametersValidTo !== null
        ? new Date(Math.round(output.ParametersValidTo * 1000))
        : undefined,
    PublicKey:
      output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPublicKeyResponse = (output: any, context: __SerdeContext): GetPublicKeyResponse => {
  return {
    CustomerMasterKeySpec:
      output.CustomerMasterKeySpec !== undefined && output.CustomerMasterKeySpec !== null
        ? output.CustomerMasterKeySpec
        : undefined,
    EncryptionAlgorithms:
      output.EncryptionAlgorithms !== undefined && output.EncryptionAlgorithms !== null
        ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyUsage: output.KeyUsage !== undefined && output.KeyUsage !== null ? output.KeyUsage : undefined,
    PublicKey:
      output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
    SigningAlgorithms:
      output.SigningAlgorithms !== undefined && output.SigningAlgorithms !== null
        ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GrantConstraints = (output: any, context: __SerdeContext): GrantConstraints => {
  return {
    EncryptionContextEquals:
      output.EncryptionContextEquals !== undefined && output.EncryptionContextEquals !== null
        ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextEquals, context)
        : undefined,
    EncryptionContextSubset:
      output.EncryptionContextSubset !== undefined && output.EncryptionContextSubset !== null
        ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextSubset, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GrantList = (output: any, context: __SerdeContext): GrantListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GrantListEntry(entry, context);
    });
};

const deserializeAws_json1_1GrantListEntry = (output: any, context: __SerdeContext): GrantListEntry => {
  return {
    Constraints:
      output.Constraints !== undefined && output.Constraints !== null
        ? deserializeAws_json1_1GrantConstraints(output.Constraints, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    GrantId: output.GrantId !== undefined && output.GrantId !== null ? output.GrantId : undefined,
    GranteePrincipal:
      output.GranteePrincipal !== undefined && output.GranteePrincipal !== null ? output.GranteePrincipal : undefined,
    IssuingAccount:
      output.IssuingAccount !== undefined && output.IssuingAccount !== null ? output.IssuingAccount : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Operations:
      output.Operations !== undefined && output.Operations !== null
        ? deserializeAws_json1_1GrantOperationList(output.Operations, context)
        : undefined,
    RetiringPrincipal:
      output.RetiringPrincipal !== undefined && output.RetiringPrincipal !== null
        ? output.RetiringPrincipal
        : undefined,
  } as any;
};

const deserializeAws_json1_1GrantOperationList = (
  output: any,
  context: __SerdeContext
): (GrantOperation | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ImportKeyMaterialResponse = (
  output: any,
  context: __SerdeContext
): ImportKeyMaterialResponse => {
  return {} as any;
};

const deserializeAws_json1_1IncorrectKeyException = (output: any, context: __SerdeContext): IncorrectKeyException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1IncorrectKeyMaterialException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyMaterialException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1IncorrectTrustAnchorException = (
  output: any,
  context: __SerdeContext
): IncorrectTrustAnchorException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidAliasNameException = (
  output: any,
  context: __SerdeContext
): InvalidAliasNameException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidCiphertextException = (
  output: any,
  context: __SerdeContext
): InvalidCiphertextException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidGrantIdException = (
  output: any,
  context: __SerdeContext
): InvalidGrantIdException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidGrantTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGrantTokenException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidImportTokenException = (
  output: any,
  context: __SerdeContext
): InvalidImportTokenException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidKeyUsageException = (
  output: any,
  context: __SerdeContext
): InvalidKeyUsageException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidMarkerException = (output: any, context: __SerdeContext): InvalidMarkerException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KeyList = (output: any, context: __SerdeContext): KeyListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyListEntry(entry, context);
    });
};

const deserializeAws_json1_1KeyListEntry = (output: any, context: __SerdeContext): KeyListEntry => {
  return {
    KeyArn: output.KeyArn !== undefined && output.KeyArn !== null ? output.KeyArn : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
  } as any;
};

const deserializeAws_json1_1KeyMetadata = (output: any, context: __SerdeContext): KeyMetadata => {
  return {
    AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CloudHsmClusterId:
      output.CloudHsmClusterId !== undefined && output.CloudHsmClusterId !== null
        ? output.CloudHsmClusterId
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CustomKeyStoreId:
      output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
    CustomerMasterKeySpec:
      output.CustomerMasterKeySpec !== undefined && output.CustomerMasterKeySpec !== null
        ? output.CustomerMasterKeySpec
        : undefined,
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    EncryptionAlgorithms:
      output.EncryptionAlgorithms !== undefined && output.EncryptionAlgorithms !== null
        ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
        : undefined,
    ExpirationModel:
      output.ExpirationModel !== undefined && output.ExpirationModel !== null ? output.ExpirationModel : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    KeyManager: output.KeyManager !== undefined && output.KeyManager !== null ? output.KeyManager : undefined,
    KeyState: output.KeyState !== undefined && output.KeyState !== null ? output.KeyState : undefined,
    KeyUsage: output.KeyUsage !== undefined && output.KeyUsage !== null ? output.KeyUsage : undefined,
    Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
    SigningAlgorithms:
      output.SigningAlgorithms !== undefined && output.SigningAlgorithms !== null
        ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
        : undefined,
    ValidTo:
      output.ValidTo !== undefined && output.ValidTo !== null ? new Date(Math.round(output.ValidTo * 1000)) : undefined,
  } as any;
};

const deserializeAws_json1_1KeyUnavailableException = (
  output: any,
  context: __SerdeContext
): KeyUnavailableException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KMSInternalException = (output: any, context: __SerdeContext): KMSInternalException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KMSInvalidSignatureException = (
  output: any,
  context: __SerdeContext
): KMSInvalidSignatureException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1AliasList(output.Aliases, context)
        : undefined,
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1ListGrantsResponse = (output: any, context: __SerdeContext): ListGrantsResponse => {
  return {
    Grants:
      output.Grants !== undefined && output.Grants !== null
        ? deserializeAws_json1_1GrantList(output.Grants, context)
        : undefined,
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1ListKeyPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPoliciesResponse => {
  return {
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    PolicyNames:
      output.PolicyNames !== undefined && output.PolicyNames !== null
        ? deserializeAws_json1_1PolicyNameList(output.PolicyNames, context)
        : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1ListKeysResponse = (output: any, context: __SerdeContext): ListKeysResponse => {
  return {
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_1KeyList(output.Keys, context)
        : undefined,
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceTagsResponse = (
  output: any,
  context: __SerdeContext
): ListResourceTagsResponse => {
  return {
    NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
  } as any;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ReEncryptResponse = (output: any, context: __SerdeContext): ReEncryptResponse => {
  return {
    CiphertextBlob:
      output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
        ? context.base64Decoder(output.CiphertextBlob)
        : undefined,
    DestinationEncryptionAlgorithm:
      output.DestinationEncryptionAlgorithm !== undefined && output.DestinationEncryptionAlgorithm !== null
        ? output.DestinationEncryptionAlgorithm
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    SourceEncryptionAlgorithm:
      output.SourceEncryptionAlgorithm !== undefined && output.SourceEncryptionAlgorithm !== null
        ? output.SourceEncryptionAlgorithm
        : undefined,
    SourceKeyId: output.SourceKeyId !== undefined && output.SourceKeyId !== null ? output.SourceKeyId : undefined,
  } as any;
};

const deserializeAws_json1_1ScheduleKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): ScheduleKeyDeletionResponse => {
  return {
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
  } as any;
};

const deserializeAws_json1_1SigningAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): (SigningAlgorithmSpec | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1SignResponse = (output: any, context: __SerdeContext): SignResponse => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    Signature:
      output.Signature !== undefined && output.Signature !== null ? context.base64Decoder(output.Signature) : undefined,
    SigningAlgorithm:
      output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
    TagValue: output.TagValue !== undefined && output.TagValue !== null ? output.TagValue : undefined,
  } as any;
};

const deserializeAws_json1_1TagException = (output: any, context: __SerdeContext): TagException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomKeyStoreResponse => {
  return {} as any;
};

const deserializeAws_json1_1VerifyResponse = (output: any, context: __SerdeContext): VerifyResponse => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    SignatureValid:
      output.SignatureValid !== undefined && output.SignatureValid !== null ? output.SignatureValid : undefined,
    SigningAlgorithm:
      output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
