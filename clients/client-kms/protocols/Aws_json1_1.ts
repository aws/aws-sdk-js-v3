import {
  CancelKeyDeletionCommandInput,
  CancelKeyDeletionCommandOutput
} from "../commands/CancelKeyDeletionCommand";
import {
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput
} from "../commands/ConnectCustomKeyStoreCommand";
import {
  CreateAliasCommandInput,
  CreateAliasCommandOutput
} from "../commands/CreateAliasCommand";
import {
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput
} from "../commands/CreateCustomKeyStoreCommand";
import {
  CreateGrantCommandInput,
  CreateGrantCommandOutput
} from "../commands/CreateGrantCommand";
import {
  CreateKeyCommandInput,
  CreateKeyCommandOutput
} from "../commands/CreateKeyCommand";
import {
  DecryptCommandInput,
  DecryptCommandOutput
} from "../commands/DecryptCommand";
import {
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput
} from "../commands/DeleteAliasCommand";
import {
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput
} from "../commands/DeleteCustomKeyStoreCommand";
import {
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput
} from "../commands/DeleteImportedKeyMaterialCommand";
import {
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput
} from "../commands/DescribeCustomKeyStoresCommand";
import {
  DescribeKeyCommandInput,
  DescribeKeyCommandOutput
} from "../commands/DescribeKeyCommand";
import {
  DisableKeyCommandInput,
  DisableKeyCommandOutput
} from "../commands/DisableKeyCommand";
import {
  DisableKeyRotationCommandInput,
  DisableKeyRotationCommandOutput
} from "../commands/DisableKeyRotationCommand";
import {
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput
} from "../commands/DisconnectCustomKeyStoreCommand";
import {
  EnableKeyCommandInput,
  EnableKeyCommandOutput
} from "../commands/EnableKeyCommand";
import {
  EnableKeyRotationCommandInput,
  EnableKeyRotationCommandOutput
} from "../commands/EnableKeyRotationCommand";
import {
  EncryptCommandInput,
  EncryptCommandOutput
} from "../commands/EncryptCommand";
import {
  GenerateDataKeyCommandInput,
  GenerateDataKeyCommandOutput
} from "../commands/GenerateDataKeyCommand";
import {
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput
} from "../commands/GenerateDataKeyPairCommand";
import {
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput
} from "../commands/GenerateDataKeyPairWithoutPlaintextCommand";
import {
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput
} from "../commands/GenerateDataKeyWithoutPlaintextCommand";
import {
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput
} from "../commands/GenerateRandomCommand";
import {
  GetKeyPolicyCommandInput,
  GetKeyPolicyCommandOutput
} from "../commands/GetKeyPolicyCommand";
import {
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput
} from "../commands/GetKeyRotationStatusCommand";
import {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput
} from "../commands/GetParametersForImportCommand";
import {
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput
} from "../commands/GetPublicKeyCommand";
import {
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput
} from "../commands/ImportKeyMaterialCommand";
import {
  ListAliasesCommandInput,
  ListAliasesCommandOutput
} from "../commands/ListAliasesCommand";
import {
  ListGrantsCommandInput,
  ListGrantsCommandOutput
} from "../commands/ListGrantsCommand";
import {
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput
} from "../commands/ListKeyPoliciesCommand";
import {
  ListKeysCommandInput,
  ListKeysCommandOutput
} from "../commands/ListKeysCommand";
import {
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput
} from "../commands/ListResourceTagsCommand";
import {
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput
} from "../commands/ListRetirableGrantsCommand";
import {
  PutKeyPolicyCommandInput,
  PutKeyPolicyCommandOutput
} from "../commands/PutKeyPolicyCommand";
import {
  ReEncryptCommandInput,
  ReEncryptCommandOutput
} from "../commands/ReEncryptCommand";
import {
  RetireGrantCommandInput,
  RetireGrantCommandOutput
} from "../commands/RetireGrantCommand";
import {
  RevokeGrantCommandInput,
  RevokeGrantCommandOutput
} from "../commands/RevokeGrantCommand";
import {
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput
} from "../commands/ScheduleKeyDeletionCommand";
import { SignCommandInput, SignCommandOutput } from "../commands/SignCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput
} from "../commands/UpdateAliasCommand";
import {
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput
} from "../commands/UpdateCustomKeyStoreCommand";
import {
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput
} from "../commands/UpdateKeyDescriptionCommand";
import {
  VerifyCommandInput,
  VerifyCommandOutput
} from "../commands/VerifyCommand";
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
  VerifyResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CancelKeyDeletionCommand(
  input: CancelKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CancelKeyDeletion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelKeyDeletionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ConnectCustomKeyStoreCommand(
  input: ConnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ConnectCustomKeyStore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ConnectCustomKeyStoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAliasCommand(
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateAlias";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCustomKeyStoreCommand(
  input: CreateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateCustomKeyStore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCustomKeyStoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateGrantCommand(
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateGrant";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateKeyCommand(
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.CreateKey";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DecryptCommand(
  input: DecryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Decrypt";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DecryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAliasCommand(
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteAlias";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteCustomKeyStoreCommand(
  input: DeleteCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteCustomKeyStore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCustomKeyStoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteImportedKeyMaterialCommand(
  input: DeleteImportedKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DeleteImportedKeyMaterial";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteImportedKeyMaterialRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCustomKeyStoresCommand(
  input: DescribeCustomKeyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DescribeCustomKeyStores";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCustomKeyStoresRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeKeyCommand(
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DescribeKey";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableKeyCommand(
  input: DisableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisableKey";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableKeyRotationCommand(
  input: DisableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisableKeyRotation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableKeyRotationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisconnectCustomKeyStoreCommand(
  input: DisconnectCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.DisconnectCustomKeyStore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisconnectCustomKeyStoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableKeyCommand(
  input: EnableKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.EnableKey";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableKeyRotationCommand(
  input: EnableKeyRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.EnableKeyRotation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableKeyRotationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EncryptCommand(
  input: EncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Encrypt";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GenerateDataKeyCommand(
  input: GenerateDataKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateDataKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GenerateDataKeyPairCommand(
  input: GenerateDataKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPair";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateDataKeyPairRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(
  input: GenerateDataKeyPairWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPairWithoutPlaintext";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(
  input: GenerateDataKeyWithoutPlaintextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateDataKeyWithoutPlaintext";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GenerateRandomCommand(
  input: GenerateRandomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GenerateRandom";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateRandomRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetKeyPolicyCommand(
  input: GetKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetKeyPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetKeyPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetKeyRotationStatusCommand(
  input: GetKeyRotationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetKeyRotationStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetKeyRotationStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetParametersForImportCommand(
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetParametersForImport";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetParametersForImportRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPublicKeyCommand(
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.GetPublicKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPublicKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportKeyMaterialCommand(
  input: ImportKeyMaterialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ImportKeyMaterial";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportKeyMaterialRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAliasesCommand(
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListAliases";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListGrantsCommand(
  input: ListGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListGrants";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListKeyPoliciesCommand(
  input: ListKeyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListKeyPolicies";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListKeyPoliciesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListKeysCommand(
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListKeys";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourceTagsCommand(
  input: ListResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListResourceTags";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourceTagsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRetirableGrantsCommand(
  input: ListRetirableGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ListRetirableGrants";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRetirableGrantsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutKeyPolicyCommand(
  input: PutKeyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.PutKeyPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutKeyPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ReEncryptCommand(
  input: ReEncryptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ReEncrypt";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReEncryptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RetireGrantCommand(
  input: RetireGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.RetireGrant";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetireGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RevokeGrantCommand(
  input: RevokeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.RevokeGrant";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokeGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ScheduleKeyDeletionCommand(
  input: ScheduleKeyDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.ScheduleKeyDeletion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ScheduleKeyDeletionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SignCommand(
  input: SignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Sign";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateAliasCommand(
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateAlias";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateCustomKeyStoreCommand(
  input: UpdateCustomKeyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateCustomKeyStore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCustomKeyStoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateKeyDescriptionCommand(
  input: UpdateKeyDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.UpdateKeyDescription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateKeyDescriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1VerifyCommand(
  input: VerifyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TrentService.Verify";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1VerifyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CancelKeyDeletionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelKeyDeletionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelKeyDeletionResponse(data, context);
  const response: CancelKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelKeyDeletionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CancelKeyDeletionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelKeyDeletionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ConnectCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConnectCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(data, context);
  const response: ConnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConnectCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ConnectCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectCustomKeyStoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazon.trent#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAliasNameException":
    case "com.amazon.trent#InvalidAliasNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidAliasNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(data, context);
  const response: CreateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomKeyStoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInUseException":
    case "com.amazon.trent#CloudHsmClusterInUseException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazon.trent#CloudHsmClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazon.trent#CustomKeyStoreNameInUseException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectTrustAnchorException":
    case "com.amazon.trent#IncorrectTrustAnchorException":
      response = {
        ...(await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGrantResponse(data, context);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGrantResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyResponse(data, context);
  const response: CreateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.trent#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DecryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DecryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DecryptResponse(data, context);
  const response: DecryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DecryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectKeyException":
    case "com.amazon.trent#IncorrectKeyException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(data, context);
  const response: DeleteCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomKeyStoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreHasCMKsException":
    case "com.amazon.trent#CustomKeyStoreHasCMKsException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteImportedKeyMaterialCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteImportedKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedKeyMaterialCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeCustomKeyStoresCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCustomKeyStoresCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(
    data,
    context
  );
  const response: DescribeCustomKeyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCustomKeyStoresResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCustomKeyStoresCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomKeyStoresCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeKeyResponse(data, context);
  const response: DescribeKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DisableKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DisableKeyRotationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableKeyRotationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableKeyRotationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKeyRotationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DisconnectCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(
    data,
    context
  );
  const response: DisconnectCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisconnectCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectCustomKeyStoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1EnableKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1EnableKeyRotationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableKeyRotationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableKeyRotationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableKeyRotationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKeyRotationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1EncryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EncryptResponse(data, context);
  const response: EncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EncryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EncryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GenerateDataKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyResponse(data, context);
  const response: GenerateDataKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GenerateDataKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyPairCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairResponse(data, context);
  const response: GenerateDataKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyPairResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(
    data,
    context
  );
  const response: GenerateDataKeyPairWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyPairWithoutPlaintextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(
    data,
    context
  );
  const response: GenerateDataKeyWithoutPlaintextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataKeyWithoutPlaintextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GenerateRandomCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateRandomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateRandomResponse(data, context);
  const response: GenerateRandomCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateRandomResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateRandomCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateRandomCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetKeyPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPolicyResponse(data, context);
  const response: GetKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetKeyRotationStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyRotationStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyRotationStatusResponse(data, context);
  const response: GetKeyRotationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyRotationStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyRotationStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyRotationStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetParametersForImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetParametersForImportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParametersForImportResponse(
    data,
    context
  );
  const response: GetParametersForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetParametersForImportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetParametersForImportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPublicKeyResponse(data, context);
  const response: GetPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ImportKeyMaterialCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportKeyMaterialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyMaterialResponse(data, context);
  const response: ImportKeyMaterialCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportKeyMaterialResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportKeyMaterialCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyMaterialCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredImportTokenException":
    case "com.amazon.trent#ExpiredImportTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectKeyMaterialException":
    case "com.amazon.trent#IncorrectKeyMaterialException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidImportTokenException":
    case "com.amazon.trent#InvalidImportTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidImportTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListAliasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAliasesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAliasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListGrantsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(data, context);
  const response: ListGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGrantsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListGrantsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGrantsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListKeyPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListKeyPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeyPoliciesResponse(data, context);
  const response: ListKeyPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListKeyPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListKeyPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyPoliciesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListKeysResponse(data, context);
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListResourceTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourceTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceTagsResponse(data, context);
  const response: ListResourceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourceTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResourceTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListRetirableGrantsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRetirableGrantsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGrantsResponse(data, context);
  const response: ListRetirableGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGrantsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRetirableGrantsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetirableGrantsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMarkerException":
    case "com.amazon.trent#InvalidMarkerException":
      response = {
        ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutKeyPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutKeyPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutKeyPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutKeyPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeyPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.trent#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.trent#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ReEncryptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReEncryptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReEncryptResponse(data, context);
  const response: ReEncryptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReEncryptResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ReEncryptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectKeyException":
    case "com.amazon.trent#IncorrectKeyException":
      response = {
        ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCiphertextException":
    case "com.amazon.trent#InvalidCiphertextException":
      response = {
        ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RetireGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetireGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RetireGrantCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RetireGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetireGrantCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantIdException":
    case "com.amazon.trent#InvalidGrantIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RevokeGrantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeGrantCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeGrantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeGrantCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantIdException":
    case "com.amazon.trent#InvalidGrantIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ScheduleKeyDeletionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ScheduleKeyDeletionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(data, context);
  const response: ScheduleKeyDeletionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ScheduleKeyDeletionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ScheduleKeyDeletionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleKeyDeletionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SignResponse(data, context);
  const response: SignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SignResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.trent#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagException":
    case "com.amazon.trent#TagException":
      response = {
        ...(await deserializeAws_json1_1TagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateCustomKeyStoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCustomKeyStoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(data, context);
  const response: UpdateCustomKeyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCustomKeyStoreResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCustomKeyStoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomKeyStoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmClusterInvalidConfigurationException":
    case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotActiveException":
    case "com.amazon.trent#CloudHsmClusterNotActiveException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotFoundException":
    case "com.amazon.trent#CloudHsmClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmClusterNotRelatedException":
    case "com.amazon.trent#CloudHsmClusterNotRelatedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreInvalidStateException":
    case "com.amazon.trent#CustomKeyStoreInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNameInUseException":
    case "com.amazon.trent#CustomKeyStoreNameInUseException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CustomKeyStoreNotFoundException":
    case "com.amazon.trent#CustomKeyStoreNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateKeyDescriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateKeyDescriptionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateKeyDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateKeyDescriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyDescriptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazon.trent#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1VerifyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1VerifyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyResponse(data, context);
  const response: VerifyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VerifyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1VerifyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DependencyTimeoutException":
    case "com.amazon.trent#DependencyTimeoutException":
      response = {
        ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledException":
    case "com.amazon.trent#DisabledException":
      response = {
        ...(await deserializeAws_json1_1DisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantTokenException":
    case "com.amazon.trent#InvalidGrantTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyUsageException":
    case "com.amazon.trent#InvalidKeyUsageException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInternalException":
    case "com.amazon.trent#KMSInternalException":
      response = {
        ...(await deserializeAws_json1_1KMSInternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidSignatureException":
    case "com.amazon.trent#KMSInvalidSignatureException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazon.trent#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KeyUnavailableException":
    case "com.amazon.trent#KeyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.trent#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(
    body,
    context
  );
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInUseException(
    body,
    context
  );
  const contents: CloudHsmClusterInUseException = {
    name: "CloudHsmClusterInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterInvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(
    body,
    context
  );
  const contents: CloudHsmClusterInvalidConfigurationException = {
    name: "CloudHsmClusterInvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotActiveException(
    body,
    context
  );
  const contents: CloudHsmClusterNotActiveException = {
    name: "CloudHsmClusterNotActiveException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotFoundException(
    body,
    context
  );
  const contents: CloudHsmClusterNotFoundException = {
    name: "CloudHsmClusterNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmClusterNotRelatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmClusterNotRelatedException(
    body,
    context
  );
  const contents: CloudHsmClusterNotRelatedException = {
    name: "CloudHsmClusterNotRelatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreHasCMKsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreHasCMKsException(
    body,
    context
  );
  const contents: CustomKeyStoreHasCMKsException = {
    name: "CustomKeyStoreHasCMKsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreInvalidStateException(
    body,
    context
  );
  const contents: CustomKeyStoreInvalidStateException = {
    name: "CustomKeyStoreInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNameInUseException(
    body,
    context
  );
  const contents: CustomKeyStoreNameInUseException = {
    name: "CustomKeyStoreNameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomKeyStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomKeyStoreNotFoundException(
    body,
    context
  );
  const contents: CustomKeyStoreNotFoundException = {
    name: "CustomKeyStoreNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DependencyTimeoutException(
    body,
    context
  );
  const contents: DependencyTimeoutException = {
    name: "DependencyTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DisabledException(
    body,
    context
  );
  const contents: DisabledException = {
    name: "DisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredImportTokenException(
    body,
    context
  );
  const contents: ExpiredImportTokenException = {
    name: "ExpiredImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyException(
    body,
    context
  );
  const contents: IncorrectKeyException = {
    name: "IncorrectKeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectKeyMaterialException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectKeyMaterialException(
    body,
    context
  );
  const contents: IncorrectKeyMaterialException = {
    name: "IncorrectKeyMaterialException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectTrustAnchorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectTrustAnchorException(
    body,
    context
  );
  const contents: IncorrectTrustAnchorException = {
    name: "IncorrectTrustAnchorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAliasNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAliasNameException(
    body,
    context
  );
  const contents: InvalidAliasNameException = {
    name: "InvalidAliasNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    body,
    context
  );
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCiphertextException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCiphertextException(
    body,
    context
  );
  const contents: InvalidCiphertextException = {
    name: "InvalidCiphertextException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantIdException(
    body,
    context
  );
  const contents: InvalidGrantIdException = {
    name: "InvalidGrantIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGrantTokenException(
    body,
    context
  );
  const contents: InvalidGrantTokenException = {
    name: "InvalidGrantTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImportTokenException(
    body,
    context
  );
  const contents: InvalidImportTokenException = {
    name: "InvalidImportTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyUsageException(
    body,
    context
  );
  const contents: InvalidKeyUsageException = {
    name: "InvalidKeyUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMarkerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMarkerException(
    body,
    context
  );
  const contents: InvalidMarkerException = {
    name: "InvalidMarkerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInternalException(
    body,
    context
  );
  const contents: KMSInternalException = {
    name: "KMSInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidSignatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidSignatureException(
    body,
    context
  );
  const contents: KMSInvalidSignatureException = {
    name: "KMSInvalidSignatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(
    body,
    context
  );
  const contents: KMSInvalidStateException = {
    name: "KMSInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KeyUnavailableException(
    body,
    context
  );
  const contents: KeyUnavailableException = {
    name: "KeyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(
    body,
    context
  );
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
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
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    body,
    context
  );
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CancelKeyDeletionRequest = (
  input: CancelKeyDeletionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1ConnectCustomKeyStoreRequest = (
  input: ConnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAliasRequest = (
  input: CreateAliasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  if (input.TargetKeyId !== undefined) {
    bodyParams["TargetKeyId"] = input.TargetKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCustomKeyStoreRequest = (
  input: CreateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudHsmClusterId !== undefined) {
    bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
  }
  if (input.CustomKeyStoreName !== undefined) {
    bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
  }
  if (input.KeyStorePassword !== undefined) {
    bodyParams["KeyStorePassword"] = input.KeyStorePassword;
  }
  if (input.TrustAnchorCertificate !== undefined) {
    bodyParams["TrustAnchorCertificate"] = input.TrustAnchorCertificate;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateGrantRequest = (
  input: CreateGrantRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Constraints !== undefined) {
    bodyParams["Constraints"] = serializeAws_json1_1GrantConstraints(
      input.Constraints,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.GranteePrincipal !== undefined) {
    bodyParams["GranteePrincipal"] = input.GranteePrincipal;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Operations !== undefined) {
    bodyParams["Operations"] = serializeAws_json1_1GrantOperationList(
      input.Operations,
      context
    );
  }
  if (input.RetiringPrincipal !== undefined) {
    bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateKeyRequest = (
  input: CreateKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
    bodyParams["BypassPolicyLockoutSafetyCheck"] =
      input.BypassPolicyLockoutSafetyCheck;
  }
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.CustomerMasterKeySpec !== undefined) {
    bodyParams["CustomerMasterKeySpec"] = input.CustomerMasterKeySpec;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.KeyUsage !== undefined) {
    bodyParams["KeyUsage"] = input.KeyUsage;
  }
  if (input.Origin !== undefined) {
    bodyParams["Origin"] = input.Origin;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DecryptRequest = (
  input: DecryptRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CiphertextBlob !== undefined) {
    bodyParams["CiphertextBlob"] = context.base64Encoder(input.CiphertextBlob);
  }
  if (input.EncryptionAlgorithm !== undefined) {
    bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
  }
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAliasRequest = (
  input: DeleteAliasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCustomKeyStoreRequest = (
  input: DeleteCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (
  input: DeleteImportedKeyMaterialRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCustomKeyStoresRequest = (
  input: DescribeCustomKeyStoresRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.CustomKeyStoreName !== undefined) {
    bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeKeyRequest = (
  input: DescribeKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableKeyRequest = (
  input: DisableKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableKeyRotationRequest = (
  input: DisableKeyRotationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (
  input: DisconnectCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableKeyRequest = (
  input: EnableKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableKeyRotationRequest = (
  input: EnableKeyRotationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptRequest = (
  input: EncryptRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionAlgorithm !== undefined) {
    bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
  }
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Plaintext !== undefined) {
    bodyParams["Plaintext"] = context.base64Encoder(input.Plaintext);
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionContextType = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1GenerateDataKeyPairRequest = (
  input: GenerateDataKeyPairRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyPairSpec !== undefined) {
    bodyParams["KeyPairSpec"] = input.KeyPairSpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (
  input: GenerateDataKeyPairWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeyPairSpec !== undefined) {
    bodyParams["KeyPairSpec"] = input.KeyPairSpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyRequest = (
  input: GenerateDataKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeySpec !== undefined) {
    bodyParams["KeySpec"] = input.KeySpec;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (
  input: GenerateDataKeyWithoutPlaintextRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionContext !== undefined) {
    bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContext,
      context
    );
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.KeySpec !== undefined) {
    bodyParams["KeySpec"] = input.KeySpec;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateRandomRequest = (
  input: GenerateRandomRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.NumberOfBytes !== undefined) {
    bodyParams["NumberOfBytes"] = input.NumberOfBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyPolicyRequest = (
  input: GetKeyPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyRotationStatusRequest = (
  input: GetKeyRotationStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetParametersForImportRequest = (
  input: GetParametersForImportRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.WrappingAlgorithm !== undefined) {
    bodyParams["WrappingAlgorithm"] = input.WrappingAlgorithm;
  }
  if (input.WrappingKeySpec !== undefined) {
    bodyParams["WrappingKeySpec"] = input.WrappingKeySpec;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPublicKeyRequest = (
  input: GetPublicKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1GrantConstraints = (
  input: GrantConstraints,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionContextEquals !== undefined) {
    bodyParams[
      "EncryptionContextEquals"
    ] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContextEquals,
      context
    );
  }
  if (input.EncryptionContextSubset !== undefined) {
    bodyParams[
      "EncryptionContextSubset"
    ] = serializeAws_json1_1EncryptionContextType(
      input.EncryptionContextSubset,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GrantOperationList = (
  input: Array<GrantOperation | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GrantTokenList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ImportKeyMaterialRequest = (
  input: ImportKeyMaterialRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptedKeyMaterial !== undefined) {
    bodyParams["EncryptedKeyMaterial"] = context.base64Encoder(
      input.EncryptedKeyMaterial
    );
  }
  if (input.ExpirationModel !== undefined) {
    bodyParams["ExpirationModel"] = input.ExpirationModel;
  }
  if (input.ImportToken !== undefined) {
    bodyParams["ImportToken"] = context.base64Encoder(input.ImportToken);
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.ValidTo !== undefined) {
    bodyParams["ValidTo"] = Math.round(input.ValidTo.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1ListAliasesRequest = (
  input: ListAliasesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListGrantsRequest = (
  input: ListGrantsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListKeyPoliciesRequest = (
  input: ListKeyPoliciesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListKeysRequest = (
  input: ListKeysRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourceTagsRequest = (
  input: ListResourceTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRetirableGrantsRequest = (
  input: ListRetirableGrantsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.RetiringPrincipal !== undefined) {
    bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1PutKeyPolicyRequest = (
  input: PutKeyPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
    bodyParams["BypassPolicyLockoutSafetyCheck"] =
      input.BypassPolicyLockoutSafetyCheck;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  return bodyParams;
};

const serializeAws_json1_1ReEncryptRequest = (
  input: ReEncryptRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CiphertextBlob !== undefined) {
    bodyParams["CiphertextBlob"] = context.base64Encoder(input.CiphertextBlob);
  }
  if (input.DestinationEncryptionAlgorithm !== undefined) {
    bodyParams["DestinationEncryptionAlgorithm"] =
      input.DestinationEncryptionAlgorithm;
  }
  if (input.DestinationEncryptionContext !== undefined) {
    bodyParams[
      "DestinationEncryptionContext"
    ] = serializeAws_json1_1EncryptionContextType(
      input.DestinationEncryptionContext,
      context
    );
  }
  if (input.DestinationKeyId !== undefined) {
    bodyParams["DestinationKeyId"] = input.DestinationKeyId;
  }
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.SourceEncryptionAlgorithm !== undefined) {
    bodyParams["SourceEncryptionAlgorithm"] = input.SourceEncryptionAlgorithm;
  }
  if (input.SourceEncryptionContext !== undefined) {
    bodyParams[
      "SourceEncryptionContext"
    ] = serializeAws_json1_1EncryptionContextType(
      input.SourceEncryptionContext,
      context
    );
  }
  if (input.SourceKeyId !== undefined) {
    bodyParams["SourceKeyId"] = input.SourceKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1RetireGrantRequest = (
  input: RetireGrantRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantId !== undefined) {
    bodyParams["GrantId"] = input.GrantId;
  }
  if (input.GrantToken !== undefined) {
    bodyParams["GrantToken"] = input.GrantToken;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1RevokeGrantRequest = (
  input: RevokeGrantRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantId !== undefined) {
    bodyParams["GrantId"] = input.GrantId;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1ScheduleKeyDeletionRequest = (
  input: ScheduleKeyDeletionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.PendingWindowInDays !== undefined) {
    bodyParams["PendingWindowInDays"] = input.PendingWindowInDays;
  }
  return bodyParams;
};

const serializeAws_json1_1SignRequest = (
  input: SignRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Message !== undefined) {
    bodyParams["Message"] = context.base64Encoder(input.Message);
  }
  if (input.MessageType !== undefined) {
    bodyParams["MessageType"] = input.MessageType;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.TagKey !== undefined) {
    bodyParams["TagKey"] = input.TagKey;
  }
  if (input.TagValue !== undefined) {
    bodyParams["TagValue"] = input.TagValue;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateAliasRequest = (
  input: UpdateAliasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AliasName !== undefined) {
    bodyParams["AliasName"] = input.AliasName;
  }
  if (input.TargetKeyId !== undefined) {
    bodyParams["TargetKeyId"] = input.TargetKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCustomKeyStoreRequest = (
  input: UpdateCustomKeyStoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudHsmClusterId !== undefined) {
    bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
  }
  if (input.CustomKeyStoreId !== undefined) {
    bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
  }
  if (input.KeyStorePassword !== undefined) {
    bodyParams["KeyStorePassword"] = input.KeyStorePassword;
  }
  if (input.NewCustomKeyStoreName !== undefined) {
    bodyParams["NewCustomKeyStoreName"] = input.NewCustomKeyStoreName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateKeyDescriptionRequest = (
  input: UpdateKeyDescriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1VerifyRequest = (
  input: VerifyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GrantTokens !== undefined) {
    bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(
      input.GrantTokens,
      context
    );
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Message !== undefined) {
    bodyParams["Message"] = context.base64Encoder(input.Message);
  }
  if (input.MessageType !== undefined) {
    bodyParams["MessageType"] = input.MessageType;
  }
  if (input.Signature !== undefined) {
    bodyParams["Signature"] = context.base64Encoder(input.Signature);
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  return bodyParams;
};

const deserializeAws_json1_1AliasList = (
  output: any,
  context: __SerdeContext
): Array<AliasListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AliasListEntry(entry, context)
  );
};

const deserializeAws_json1_1AliasListEntry = (
  output: any,
  context: __SerdeContext
): AliasListEntry => {
  let contents: any = {
    __type: "AliasListEntry",
    AliasArn: undefined,
    AliasName: undefined,
    TargetKeyId: undefined
  };
  if (output.AliasArn !== undefined && output.AliasArn !== null) {
    contents.AliasArn = output.AliasArn;
  }
  if (output.AliasName !== undefined && output.AliasName !== null) {
    contents.AliasName = output.AliasName;
  }
  if (output.TargetKeyId !== undefined && output.TargetKeyId !== null) {
    contents.TargetKeyId = output.TargetKeyId;
  }
  return contents;
};

const deserializeAws_json1_1AlreadyExistsException = (
  output: any,
  context: __SerdeContext
): AlreadyExistsException => {
  let contents: any = {
    __type: "AlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CancelKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): CancelKeyDeletionResponse => {
  let contents: any = {
    __type: "CancelKeyDeletionResponse",
    KeyId: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInUseException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInUseException => {
  let contents: any = {
    __type: "CloudHsmClusterInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterInvalidConfigurationException => {
  let contents: any = {
    __type: "CloudHsmClusterInvalidConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotActiveException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotActiveException => {
  let contents: any = {
    __type: "CloudHsmClusterNotActiveException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotFoundException => {
  let contents: any = {
    __type: "CloudHsmClusterNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (
  output: any,
  context: __SerdeContext
): CloudHsmClusterNotRelatedException => {
  let contents: any = {
    __type: "CloudHsmClusterNotRelatedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ConnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): ConnectCustomKeyStoreResponse => {
  let contents: any = {
    __type: "ConnectCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomKeyStoreResponse => {
  let contents: any = {
    __type: "CreateCustomKeyStoreResponse",
    CustomKeyStoreId: undefined
  };
  if (
    output.CustomKeyStoreId !== undefined &&
    output.CustomKeyStoreId !== null
  ) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  return contents;
};

const deserializeAws_json1_1CreateGrantResponse = (
  output: any,
  context: __SerdeContext
): CreateGrantResponse => {
  let contents: any = {
    __type: "CreateGrantResponse",
    GrantId: undefined,
    GrantToken: undefined
  };
  if (output.GrantId !== undefined && output.GrantId !== null) {
    contents.GrantId = output.GrantId;
  }
  if (output.GrantToken !== undefined && output.GrantToken !== null) {
    contents.GrantToken = output.GrantToken;
  }
  return contents;
};

const deserializeAws_json1_1CreateKeyResponse = (
  output: any,
  context: __SerdeContext
): CreateKeyResponse => {
  let contents: any = {
    __type: "CreateKeyResponse",
    KeyMetadata: undefined
  };
  if (output.KeyMetadata !== undefined && output.KeyMetadata !== null) {
    contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(
      output.KeyMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreHasCMKsException => {
  let contents: any = {
    __type: "CustomKeyStoreHasCMKsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreInvalidStateException => {
  let contents: any = {
    __type: "CustomKeyStoreInvalidStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNameInUseException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNameInUseException => {
  let contents: any = {
    __type: "CustomKeyStoreNameInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoreNotFoundException = (
  output: any,
  context: __SerdeContext
): CustomKeyStoreNotFoundException => {
  let contents: any = {
    __type: "CustomKeyStoreNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CustomKeyStoresList = (
  output: any,
  context: __SerdeContext
): Array<CustomKeyStoresListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CustomKeyStoresListEntry(entry, context)
  );
};

const deserializeAws_json1_1CustomKeyStoresListEntry = (
  output: any,
  context: __SerdeContext
): CustomKeyStoresListEntry => {
  let contents: any = {
    __type: "CustomKeyStoresListEntry",
    CloudHsmClusterId: undefined,
    ConnectionErrorCode: undefined,
    ConnectionState: undefined,
    CreationDate: undefined,
    CustomKeyStoreId: undefined,
    CustomKeyStoreName: undefined,
    TrustAnchorCertificate: undefined
  };
  if (
    output.CloudHsmClusterId !== undefined &&
    output.CloudHsmClusterId !== null
  ) {
    contents.CloudHsmClusterId = output.CloudHsmClusterId;
  }
  if (
    output.ConnectionErrorCode !== undefined &&
    output.ConnectionErrorCode !== null
  ) {
    contents.ConnectionErrorCode = output.ConnectionErrorCode;
  }
  if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
    contents.ConnectionState = output.ConnectionState;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.CustomKeyStoreId !== undefined &&
    output.CustomKeyStoreId !== null
  ) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  if (
    output.CustomKeyStoreName !== undefined &&
    output.CustomKeyStoreName !== null
  ) {
    contents.CustomKeyStoreName = output.CustomKeyStoreName;
  }
  if (
    output.TrustAnchorCertificate !== undefined &&
    output.TrustAnchorCertificate !== null
  ) {
    contents.TrustAnchorCertificate = output.TrustAnchorCertificate;
  }
  return contents;
};

const deserializeAws_json1_1DecryptResponse = (
  output: any,
  context: __SerdeContext
): DecryptResponse => {
  let contents: any = {
    __type: "DecryptResponse",
    EncryptionAlgorithm: undefined,
    KeyId: undefined,
    Plaintext: undefined
  };
  if (
    output.EncryptionAlgorithm !== undefined &&
    output.EncryptionAlgorithm !== null
  ) {
    contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.Plaintext !== undefined && output.Plaintext !== null) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1DeleteCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteCustomKeyStoreResponse => {
  let contents: any = {
    __type: "DeleteCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1DependencyTimeoutException = (
  output: any,
  context: __SerdeContext
): DependencyTimeoutException => {
  let contents: any = {
    __type: "DependencyTimeoutException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomKeyStoresResponse => {
  let contents: any = {
    __type: "DescribeCustomKeyStoresResponse",
    CustomKeyStores: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.CustomKeyStores !== undefined && output.CustomKeyStores !== null) {
    contents.CustomKeyStores = deserializeAws_json1_1CustomKeyStoresList(
      output.CustomKeyStores,
      context
    );
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1DescribeKeyResponse = (
  output: any,
  context: __SerdeContext
): DescribeKeyResponse => {
  let contents: any = {
    __type: "DescribeKeyResponse",
    KeyMetadata: undefined
  };
  if (output.KeyMetadata !== undefined && output.KeyMetadata !== null) {
    contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(
      output.KeyMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisabledException = (
  output: any,
  context: __SerdeContext
): DisabledException => {
  let contents: any = {
    __type: "DisabledException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DisconnectCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): DisconnectCustomKeyStoreResponse => {
  let contents: any = {
    __type: "DisconnectCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1EncryptResponse = (
  output: any,
  context: __SerdeContext
): EncryptResponse => {
  let contents: any = {
    __type: "EncryptResponse",
    CiphertextBlob: undefined,
    EncryptionAlgorithm: undefined,
    KeyId: undefined
  };
  if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (
    output.EncryptionAlgorithm !== undefined &&
    output.EncryptionAlgorithm !== null
  ) {
    contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): Array<EncryptionAlgorithmSpec | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EncryptionContextType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ExpiredImportTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredImportTokenException => {
  let contents: any = {
    __type: "ExpiredImportTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyPairResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairResponse => {
  let contents: any = {
    __type: "GenerateDataKeyPairResponse",
    KeyId: undefined,
    KeyPairSpec: undefined,
    PrivateKeyCiphertextBlob: undefined,
    PrivateKeyPlaintext: undefined,
    PublicKey: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyPairSpec !== undefined && output.KeyPairSpec !== null) {
    contents.KeyPairSpec = output.KeyPairSpec;
  }
  if (
    output.PrivateKeyCiphertextBlob !== undefined &&
    output.PrivateKeyCiphertextBlob !== null
  ) {
    contents.PrivateKeyCiphertextBlob = context.base64Decoder(
      output.PrivateKeyCiphertextBlob
    );
  }
  if (
    output.PrivateKeyPlaintext !== undefined &&
    output.PrivateKeyPlaintext !== null
  ) {
    contents.PrivateKeyPlaintext = context.base64Decoder(
      output.PrivateKeyPlaintext
    );
  }
  if (output.PublicKey !== undefined && output.PublicKey !== null) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyPairWithoutPlaintextResponse => {
  let contents: any = {
    __type: "GenerateDataKeyPairWithoutPlaintextResponse",
    KeyId: undefined,
    KeyPairSpec: undefined,
    PrivateKeyCiphertextBlob: undefined,
    PublicKey: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyPairSpec !== undefined && output.KeyPairSpec !== null) {
    contents.KeyPairSpec = output.KeyPairSpec;
  }
  if (
    output.PrivateKeyCiphertextBlob !== undefined &&
    output.PrivateKeyCiphertextBlob !== null
  ) {
    contents.PrivateKeyCiphertextBlob = context.base64Decoder(
      output.PrivateKeyCiphertextBlob
    );
  }
  if (output.PublicKey !== undefined && output.PublicKey !== null) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyResponse => {
  let contents: any = {
    __type: "GenerateDataKeyResponse",
    CiphertextBlob: undefined,
    KeyId: undefined,
    Plaintext: undefined
  };
  if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.Plaintext !== undefined && output.Plaintext !== null) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (
  output: any,
  context: __SerdeContext
): GenerateDataKeyWithoutPlaintextResponse => {
  let contents: any = {
    __type: "GenerateDataKeyWithoutPlaintextResponse",
    CiphertextBlob: undefined,
    KeyId: undefined
  };
  if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1GenerateRandomResponse = (
  output: any,
  context: __SerdeContext
): GenerateRandomResponse => {
  let contents: any = {
    __type: "GenerateRandomResponse",
    Plaintext: undefined
  };
  if (output.Plaintext !== undefined && output.Plaintext !== null) {
    contents.Plaintext = context.base64Decoder(output.Plaintext);
  }
  return contents;
};

const deserializeAws_json1_1GetKeyPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetKeyPolicyResponse => {
  let contents: any = {
    __type: "GetKeyPolicyResponse",
    Policy: undefined
  };
  if (output.Policy !== undefined && output.Policy !== null) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_json1_1GetKeyRotationStatusResponse = (
  output: any,
  context: __SerdeContext
): GetKeyRotationStatusResponse => {
  let contents: any = {
    __type: "GetKeyRotationStatusResponse",
    KeyRotationEnabled: undefined
  };
  if (
    output.KeyRotationEnabled !== undefined &&
    output.KeyRotationEnabled !== null
  ) {
    contents.KeyRotationEnabled = output.KeyRotationEnabled;
  }
  return contents;
};

const deserializeAws_json1_1GetParametersForImportResponse = (
  output: any,
  context: __SerdeContext
): GetParametersForImportResponse => {
  let contents: any = {
    __type: "GetParametersForImportResponse",
    ImportToken: undefined,
    KeyId: undefined,
    ParametersValidTo: undefined,
    PublicKey: undefined
  };
  if (output.ImportToken !== undefined && output.ImportToken !== null) {
    contents.ImportToken = context.base64Decoder(output.ImportToken);
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (
    output.ParametersValidTo !== undefined &&
    output.ParametersValidTo !== null
  ) {
    contents.ParametersValidTo = new Date(
      Math.round(output.ParametersValidTo * 1000)
    );
  }
  if (output.PublicKey !== undefined && output.PublicKey !== null) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  return contents;
};

const deserializeAws_json1_1GetPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): GetPublicKeyResponse => {
  let contents: any = {
    __type: "GetPublicKeyResponse",
    CustomerMasterKeySpec: undefined,
    EncryptionAlgorithms: undefined,
    KeyId: undefined,
    KeyUsage: undefined,
    PublicKey: undefined,
    SigningAlgorithms: undefined
  };
  if (
    output.CustomerMasterKeySpec !== undefined &&
    output.CustomerMasterKeySpec !== null
  ) {
    contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
  }
  if (
    output.EncryptionAlgorithms !== undefined &&
    output.EncryptionAlgorithms !== null
  ) {
    contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(
      output.EncryptionAlgorithms,
      context
    );
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyUsage !== undefined && output.KeyUsage !== null) {
    contents.KeyUsage = output.KeyUsage;
  }
  if (output.PublicKey !== undefined && output.PublicKey !== null) {
    contents.PublicKey = context.base64Decoder(output.PublicKey);
  }
  if (
    output.SigningAlgorithms !== undefined &&
    output.SigningAlgorithms !== null
  ) {
    contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(
      output.SigningAlgorithms,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GrantConstraints = (
  output: any,
  context: __SerdeContext
): GrantConstraints => {
  let contents: any = {
    __type: "GrantConstraints",
    EncryptionContextEquals: undefined,
    EncryptionContextSubset: undefined
  };
  if (
    output.EncryptionContextEquals !== undefined &&
    output.EncryptionContextEquals !== null
  ) {
    contents.EncryptionContextEquals = deserializeAws_json1_1EncryptionContextType(
      output.EncryptionContextEquals,
      context
    );
  }
  if (
    output.EncryptionContextSubset !== undefined &&
    output.EncryptionContextSubset !== null
  ) {
    contents.EncryptionContextSubset = deserializeAws_json1_1EncryptionContextType(
      output.EncryptionContextSubset,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GrantList = (
  output: any,
  context: __SerdeContext
): Array<GrantListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GrantListEntry(entry, context)
  );
};

const deserializeAws_json1_1GrantListEntry = (
  output: any,
  context: __SerdeContext
): GrantListEntry => {
  let contents: any = {
    __type: "GrantListEntry",
    Constraints: undefined,
    CreationDate: undefined,
    GrantId: undefined,
    GranteePrincipal: undefined,
    IssuingAccount: undefined,
    KeyId: undefined,
    Name: undefined,
    Operations: undefined,
    RetiringPrincipal: undefined
  };
  if (output.Constraints !== undefined && output.Constraints !== null) {
    contents.Constraints = deserializeAws_json1_1GrantConstraints(
      output.Constraints,
      context
    );
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.GrantId !== undefined && output.GrantId !== null) {
    contents.GrantId = output.GrantId;
  }
  if (
    output.GranteePrincipal !== undefined &&
    output.GranteePrincipal !== null
  ) {
    contents.GranteePrincipal = output.GranteePrincipal;
  }
  if (output.IssuingAccount !== undefined && output.IssuingAccount !== null) {
    contents.IssuingAccount = output.IssuingAccount;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Operations !== undefined && output.Operations !== null) {
    contents.Operations = deserializeAws_json1_1GrantOperationList(
      output.Operations,
      context
    );
  }
  if (
    output.RetiringPrincipal !== undefined &&
    output.RetiringPrincipal !== null
  ) {
    contents.RetiringPrincipal = output.RetiringPrincipal;
  }
  return contents;
};

const deserializeAws_json1_1GrantOperationList = (
  output: any,
  context: __SerdeContext
): Array<GrantOperation | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ImportKeyMaterialResponse = (
  output: any,
  context: __SerdeContext
): ImportKeyMaterialResponse => {
  let contents: any = {
    __type: "ImportKeyMaterialResponse"
  };
  return contents;
};

const deserializeAws_json1_1IncorrectKeyException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyException => {
  let contents: any = {
    __type: "IncorrectKeyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IncorrectKeyMaterialException = (
  output: any,
  context: __SerdeContext
): IncorrectKeyMaterialException => {
  let contents: any = {
    __type: "IncorrectKeyMaterialException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IncorrectTrustAnchorException = (
  output: any,
  context: __SerdeContext
): IncorrectTrustAnchorException => {
  let contents: any = {
    __type: "IncorrectTrustAnchorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAliasNameException = (
  output: any,
  context: __SerdeContext
): InvalidAliasNameException => {
  let contents: any = {
    __type: "InvalidAliasNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCiphertextException = (
  output: any,
  context: __SerdeContext
): InvalidCiphertextException => {
  let contents: any = {
    __type: "InvalidCiphertextException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGrantIdException = (
  output: any,
  context: __SerdeContext
): InvalidGrantIdException => {
  let contents: any = {
    __type: "InvalidGrantIdException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGrantTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGrantTokenException => {
  let contents: any = {
    __type: "InvalidGrantTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidImportTokenException = (
  output: any,
  context: __SerdeContext
): InvalidImportTokenException => {
  let contents: any = {
    __type: "InvalidImportTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKeyUsageException = (
  output: any,
  context: __SerdeContext
): InvalidKeyUsageException => {
  let contents: any = {
    __type: "InvalidKeyUsageException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidMarkerException = (
  output: any,
  context: __SerdeContext
): InvalidMarkerException => {
  let contents: any = {
    __type: "InvalidMarkerException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInternalException = (
  output: any,
  context: __SerdeContext
): KMSInternalException => {
  let contents: any = {
    __type: "KMSInternalException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInvalidSignatureException = (
  output: any,
  context: __SerdeContext
): KMSInvalidSignatureException => {
  let contents: any = {
    __type: "KMSInvalidSignatureException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  let contents: any = {
    __type: "KMSInvalidStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KeyList = (
  output: any,
  context: __SerdeContext
): Array<KeyListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyListEntry(entry, context)
  );
};

const deserializeAws_json1_1KeyListEntry = (
  output: any,
  context: __SerdeContext
): KeyListEntry => {
  let contents: any = {
    __type: "KeyListEntry",
    KeyArn: undefined,
    KeyId: undefined
  };
  if (output.KeyArn !== undefined && output.KeyArn !== null) {
    contents.KeyArn = output.KeyArn;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1KeyMetadata = (
  output: any,
  context: __SerdeContext
): KeyMetadata => {
  let contents: any = {
    __type: "KeyMetadata",
    AWSAccountId: undefined,
    Arn: undefined,
    CloudHsmClusterId: undefined,
    CreationDate: undefined,
    CustomKeyStoreId: undefined,
    CustomerMasterKeySpec: undefined,
    DeletionDate: undefined,
    Description: undefined,
    Enabled: undefined,
    EncryptionAlgorithms: undefined,
    ExpirationModel: undefined,
    KeyId: undefined,
    KeyManager: undefined,
    KeyState: undefined,
    KeyUsage: undefined,
    Origin: undefined,
    SigningAlgorithms: undefined,
    ValidTo: undefined
  };
  if (output.AWSAccountId !== undefined && output.AWSAccountId !== null) {
    contents.AWSAccountId = output.AWSAccountId;
  }
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (
    output.CloudHsmClusterId !== undefined &&
    output.CloudHsmClusterId !== null
  ) {
    contents.CloudHsmClusterId = output.CloudHsmClusterId;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.CustomKeyStoreId !== undefined &&
    output.CustomKeyStoreId !== null
  ) {
    contents.CustomKeyStoreId = output.CustomKeyStoreId;
  }
  if (
    output.CustomerMasterKeySpec !== undefined &&
    output.CustomerMasterKeySpec !== null
  ) {
    contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
  }
  if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (
    output.EncryptionAlgorithms !== undefined &&
    output.EncryptionAlgorithms !== null
  ) {
    contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(
      output.EncryptionAlgorithms,
      context
    );
  }
  if (output.ExpirationModel !== undefined && output.ExpirationModel !== null) {
    contents.ExpirationModel = output.ExpirationModel;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.KeyManager !== undefined && output.KeyManager !== null) {
    contents.KeyManager = output.KeyManager;
  }
  if (output.KeyState !== undefined && output.KeyState !== null) {
    contents.KeyState = output.KeyState;
  }
  if (output.KeyUsage !== undefined && output.KeyUsage !== null) {
    contents.KeyUsage = output.KeyUsage;
  }
  if (output.Origin !== undefined && output.Origin !== null) {
    contents.Origin = output.Origin;
  }
  if (
    output.SigningAlgorithms !== undefined &&
    output.SigningAlgorithms !== null
  ) {
    contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(
      output.SigningAlgorithms,
      context
    );
  }
  if (output.ValidTo !== undefined && output.ValidTo !== null) {
    contents.ValidTo = new Date(Math.round(output.ValidTo * 1000));
  }
  return contents;
};

const deserializeAws_json1_1KeyUnavailableException = (
  output: any,
  context: __SerdeContext
): KeyUnavailableException => {
  let contents: any = {
    __type: "KeyUnavailableException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListAliasesResponse = (
  output: any,
  context: __SerdeContext
): ListAliasesResponse => {
  let contents: any = {
    __type: "ListAliasesResponse",
    Aliases: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Aliases !== undefined && output.Aliases !== null) {
    contents.Aliases = deserializeAws_json1_1AliasList(output.Aliases, context);
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListGrantsResponse => {
  let contents: any = {
    __type: "ListGrantsResponse",
    Grants: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Grants !== undefined && output.Grants !== null) {
    contents.Grants = deserializeAws_json1_1GrantList(output.Grants, context);
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListKeyPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListKeyPoliciesResponse => {
  let contents: any = {
    __type: "ListKeyPoliciesResponse",
    NextMarker: undefined,
    PolicyNames: undefined,
    Truncated: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.PolicyNames !== undefined && output.PolicyNames !== null) {
    contents.PolicyNames = deserializeAws_json1_1PolicyNameList(
      output.PolicyNames,
      context
    );
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListKeysResponse = (
  output: any,
  context: __SerdeContext
): ListKeysResponse => {
  let contents: any = {
    __type: "ListKeysResponse",
    Keys: undefined,
    NextMarker: undefined,
    Truncated: undefined
  };
  if (output.Keys !== undefined && output.Keys !== null) {
    contents.Keys = deserializeAws_json1_1KeyList(output.Keys, context);
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1ListResourceTagsResponse = (
  output: any,
  context: __SerdeContext
): ListResourceTagsResponse => {
  let contents: any = {
    __type: "ListResourceTagsResponse",
    NextMarker: undefined,
    Tags: undefined,
    Truncated: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (output.Truncated !== undefined && output.Truncated !== null) {
    contents.Truncated = output.Truncated;
  }
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    __type: "MalformedPolicyDocumentException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ReEncryptResponse = (
  output: any,
  context: __SerdeContext
): ReEncryptResponse => {
  let contents: any = {
    __type: "ReEncryptResponse",
    CiphertextBlob: undefined,
    DestinationEncryptionAlgorithm: undefined,
    KeyId: undefined,
    SourceEncryptionAlgorithm: undefined,
    SourceKeyId: undefined
  };
  if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
    contents.CiphertextBlob = context.base64Decoder(output.CiphertextBlob);
  }
  if (
    output.DestinationEncryptionAlgorithm !== undefined &&
    output.DestinationEncryptionAlgorithm !== null
  ) {
    contents.DestinationEncryptionAlgorithm =
      output.DestinationEncryptionAlgorithm;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (
    output.SourceEncryptionAlgorithm !== undefined &&
    output.SourceEncryptionAlgorithm !== null
  ) {
    contents.SourceEncryptionAlgorithm = output.SourceEncryptionAlgorithm;
  }
  if (output.SourceKeyId !== undefined && output.SourceKeyId !== null) {
    contents.SourceKeyId = output.SourceKeyId;
  }
  return contents;
};

const deserializeAws_json1_1ScheduleKeyDeletionResponse = (
  output: any,
  context: __SerdeContext
): ScheduleKeyDeletionResponse => {
  let contents: any = {
    __type: "ScheduleKeyDeletionResponse",
    DeletionDate: undefined,
    KeyId: undefined
  };
  if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  return contents;
};

const deserializeAws_json1_1SignResponse = (
  output: any,
  context: __SerdeContext
): SignResponse => {
  let contents: any = {
    __type: "SignResponse",
    KeyId: undefined,
    Signature: undefined,
    SigningAlgorithm: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.Signature !== undefined && output.Signature !== null) {
    contents.Signature = context.base64Decoder(output.Signature);
  }
  if (
    output.SigningAlgorithm !== undefined &&
    output.SigningAlgorithm !== null
  ) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  return contents;
};

const deserializeAws_json1_1SigningAlgorithmSpecList = (
  output: any,
  context: __SerdeContext
): Array<SigningAlgorithmSpec | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    TagKey: undefined,
    TagValue: undefined
  };
  if (output.TagKey !== undefined && output.TagKey !== null) {
    contents.TagKey = output.TagKey;
  }
  if (output.TagValue !== undefined && output.TagValue !== null) {
    contents.TagValue = output.TagValue;
  }
  return contents;
};

const deserializeAws_json1_1TagException = (
  output: any,
  context: __SerdeContext
): TagException => {
  let contents: any = {
    __type: "TagException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  let contents: any = {
    __type: "UnsupportedOperationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomKeyStoreResponse => {
  let contents: any = {
    __type: "UpdateCustomKeyStoreResponse"
  };
  return contents;
};

const deserializeAws_json1_1VerifyResponse = (
  output: any,
  context: __SerdeContext
): VerifyResponse => {
  let contents: any = {
    __type: "VerifyResponse",
    KeyId: undefined,
    SignatureValid: undefined,
    SigningAlgorithm: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.SignatureValid !== undefined && output.SignatureValid !== null) {
    contents.SignatureValid = output.SignatureValid;
  }
  if (
    output.SigningAlgorithm !== undefined &&
    output.SigningAlgorithm !== null
  ) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
