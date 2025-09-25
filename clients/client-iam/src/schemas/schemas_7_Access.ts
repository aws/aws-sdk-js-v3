// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AK,
  _AKI,
  _AKLU,
  _AKM,
  _aKMLT,
  _aKST,
  _CAK,
  _CAKR,
  _CAKRr,
  _CD,
  _DAK,
  _DAKR,
  _GAKLU,
  _GAKLUR,
  _GAKLURe,
  _IT,
  _LAK,
  _LAKR,
  _LAKRi,
  _LUD,
  _Ma,
  _MI,
  _R,
  _S,
  _SAK,
  _SN,
  _UAK,
  _UAKR,
  _UN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var accessKeySecretType = sim(n0, _aKST, 0, 8);
export var AccessKey = struct(n0, _AK, 0, [_UN, _AKI, _S, _SAK, _CD], [0, 0, 0, [() => accessKeySecretType, 0], 4]);
export var AccessKeyLastUsed = struct(n0, _AKLU, 0, [_LUD, _SN, _R], [4, 0, 0]);
export var AccessKeyMetadata = struct(n0, _AKM, 0, [_UN, _AKI, _S, _CD], [0, 0, 0, 4]);
export var CreateAccessKeyRequest = struct(n0, _CAKR, 0, [_UN], [0]);
export var CreateAccessKeyResponse = struct(n0, _CAKRr, 0, [_AK], [[() => AccessKey, 0]]);
export var DeleteAccessKeyRequest = struct(n0, _DAKR, 0, [_UN, _AKI], [0, 0]);
export var GetAccessKeyLastUsedRequest = struct(n0, _GAKLUR, 0, [_AKI], [0]);
export var GetAccessKeyLastUsedResponse = struct(n0, _GAKLURe, 0, [_UN, _AKLU], [0, () => AccessKeyLastUsed]);
export var ListAccessKeysRequest = struct(n0, _LAKR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListAccessKeysResponse = struct(n0, _LAKRi, 0, [_AKM, _IT, _Ma], [() => accessKeyMetadataListType, 2, 0]);
export var UpdateAccessKeyRequest = struct(n0, _UAKR, 0, [_UN, _AKI, _S], [0, 0, 0]);
export var accessKeyMetadataListType = list(n0, _aKMLT, 0, () => AccessKeyMetadata);
export var CreateAccessKey = op(
  n0,
  _CAK,
  0,
  () => CreateAccessKeyRequest,
  () => CreateAccessKeyResponse
);
export var DeleteAccessKey = op(
  n0,
  _DAK,
  0,
  () => DeleteAccessKeyRequest,
  () => Unit
);
export var GetAccessKeyLastUsed = op(
  n0,
  _GAKLU,
  0,
  () => GetAccessKeyLastUsedRequest,
  () => GetAccessKeyLastUsedResponse
);
export var ListAccessKeys = op(
  n0,
  _LAK,
  0,
  () => ListAccessKeysRequest,
  () => ListAccessKeysResponse
);
export var UpdateAccessKey = op(
  n0,
  _UAK,
  0,
  () => UpdateAccessKeyRequest,
  () => Unit
);
