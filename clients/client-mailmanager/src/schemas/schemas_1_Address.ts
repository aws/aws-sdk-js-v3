// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ad,
  _AF,
  _AL,
  _ALA,
  _ALd,
  _ALI,
  _ALN,
  _AP,
  _CAL,
  _CALIJ,
  _CALIJR,
  _CALIJRr,
  _CALR,
  _CALRr,
  _CT,
  _CTl,
  _CTom,
  _DAL,
  _DALR,
  _DALRe,
  _DMFAL,
  _DMFALR,
  _DMFALRe,
  _Er,
  _FIC,
  _Fil,
  _GAL,
  _GALIJ,
  _GALIJR,
  _GALIJRe,
  _GALR,
  _GALRe,
  _GMOAL,
  _GMOALR,
  _GMOALRe,
  _IDF,
  _IDT,
  _IIC,
  _IJ,
  _IJm,
  _JI,
  _LAL,
  _LALIJ,
  _LALIJR,
  _LALIJRi,
  _LALR,
  _LALRi,
  _LMOAL,
  _LMOALR,
  _LMOALRi,
  _LUT,
  _N,
  _NT,
  _PSa,
  _PSU,
  _RMTAL,
  _RMTALR,
  _RMTALRe,
  _SAa,
  _SAav,
  _St,
  _STt,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_4_Create";

/* eslint no-var: 0 */

export var Address = sim(n0, _A, 0, 8);
export var AddressPrefix = sim(n0, _AP, 0, 8);
export var PreSignedUrl = sim(n0, _PSU, 0, 8);
export var AddressFilter = struct(n0, _AF, 0, [_AP], [[() => AddressPrefix, 0]]);
export var AddressList = struct(n0, _AL, 0, [_ALI, _ALA, _ALN, _CT, _LUT], [0, 0, 0, 4, 4]);
export var CreateAddressListImportJobRequest = struct(
  n0,
  _CALIJR,
  0,
  [_CTl, _ALI, _N, _IDF],
  [[0, 4], 0, 0, () => ImportDataFormat]
);
export var CreateAddressListImportJobResponse = struct(n0, _CALIJRr, 0, [_JI, _PSU], [0, [() => PreSignedUrl, 0]]);
export var CreateAddressListRequest = struct(n0, _CALR, 0, [_CTl, _ALN, _T], [[0, 4], 0, () => TagList]);
export var CreateAddressListResponse = struct(n0, _CALRr, 0, [_ALI], [0]);
export var DeleteAddressListRequest = struct(n0, _DALR, 0, [_ALI], [0]);
export var DeleteAddressListResponse = struct(n0, _DALRe, 0, [], []);
export var DeregisterMemberFromAddressListRequest = struct(n0, _DMFALR, 0, [_ALI, _A], [0, [() => Address, 0]]);
export var DeregisterMemberFromAddressListResponse = struct(n0, _DMFALRe, 0, [], []);
export var GetAddressListImportJobRequest = struct(n0, _GALIJR, 0, [_JI], [0]);
export var GetAddressListImportJobResponse = struct(
  n0,
  _GALIJRe,
  0,
  [_JI, _N, _St, _PSU, _IIC, _FIC, _IDF, _ALI, _CT, _STt, _CTom, _Er],
  [0, 0, 0, [() => PreSignedUrl, 0], 1, 1, () => ImportDataFormat, 0, 4, 4, 4, 0]
);
export var GetAddressListRequest = struct(n0, _GALR, 0, [_ALI], [0]);
export var GetAddressListResponse = struct(n0, _GALRe, 0, [_ALI, _ALA, _ALN, _CT, _LUT], [0, 0, 0, 4, 4]);
export var GetMemberOfAddressListRequest = struct(n0, _GMOALR, 0, [_ALI, _A], [0, [() => Address, 0]]);
export var GetMemberOfAddressListResponse = struct(n0, _GMOALRe, 0, [_A, _CT], [[() => Address, 0], 4]);
export var ImportDataFormat = struct(n0, _IDF, 0, [_IDT], [0]);
export var ImportJob = struct(
  n0,
  _IJ,
  0,
  [_JI, _N, _St, _PSU, _IIC, _FIC, _IDF, _ALI, _CT, _STt, _CTom, _Er],
  [0, 0, 0, [() => PreSignedUrl, 0], 1, 1, () => ImportDataFormat, 0, 4, 4, 4, 0]
);
export var ListAddressListImportJobsRequest = struct(n0, _LALIJR, 0, [_ALI, _NT, _PSa], [0, 0, 1]);
export var ListAddressListImportJobsResponse = struct(n0, _LALIJRi, 0, [_IJm, _NT], [[() => ImportJobs, 0], 0]);
export var ListAddressListsRequest = struct(n0, _LALR, 0, [_NT, _PSa], [0, 1]);
export var ListAddressListsResponse = struct(n0, _LALRi, 0, [_ALd, _NT], [() => AddressLists, 0]);
export var ListMembersOfAddressListRequest = struct(
  n0,
  _LMOALR,
  0,
  [_ALI, _Fil, _NT, _PSa],
  [0, [() => AddressFilter, 0], 0, 1]
);
export var ListMembersOfAddressListResponse = struct(n0, _LMOALRi, 0, [_Ad, _NT], [[() => SavedAddresses, 0], 0]);
export var RegisterMemberToAddressListRequest = struct(n0, _RMTALR, 0, [_ALI, _A], [0, [() => Address, 0]]);
export var RegisterMemberToAddressListResponse = struct(n0, _RMTALRe, 0, [], []);
export var SavedAddress = struct(n0, _SAa, 0, [_A, _CT], [[() => Address, 0], 4]);
export var AddressLists = list(n0, _ALd, 0, () => AddressList);
export var ImportJobs = list(n0, _IJm, 0, [() => ImportJob, 0]);
export var SavedAddresses = list(n0, _SAav, 0, [() => SavedAddress, 0]);
export var CreateAddressList = op(
  n0,
  _CAL,
  2,
  () => CreateAddressListRequest,
  () => CreateAddressListResponse
);
export var CreateAddressListImportJob = op(
  n0,
  _CALIJ,
  2,
  () => CreateAddressListImportJobRequest,
  () => CreateAddressListImportJobResponse
);
export var DeleteAddressList = op(
  n0,
  _DAL,
  2,
  () => DeleteAddressListRequest,
  () => DeleteAddressListResponse
);
export var DeregisterMemberFromAddressList = op(
  n0,
  _DMFAL,
  2,
  () => DeregisterMemberFromAddressListRequest,
  () => DeregisterMemberFromAddressListResponse
);
export var GetAddressList = op(
  n0,
  _GAL,
  0,
  () => GetAddressListRequest,
  () => GetAddressListResponse
);
export var GetAddressListImportJob = op(
  n0,
  _GALIJ,
  0,
  () => GetAddressListImportJobRequest,
  () => GetAddressListImportJobResponse
);
export var GetMemberOfAddressList = op(
  n0,
  _GMOAL,
  0,
  () => GetMemberOfAddressListRequest,
  () => GetMemberOfAddressListResponse
);
export var ListAddressListImportJobs = op(
  n0,
  _LALIJ,
  0,
  () => ListAddressListImportJobsRequest,
  () => ListAddressListImportJobsResponse
);
export var ListAddressLists = op(
  n0,
  _LAL,
  0,
  () => ListAddressListsRequest,
  () => ListAddressListsResponse
);
export var ListMembersOfAddressList = op(
  n0,
  _LMOAL,
  0,
  () => ListMembersOfAddressListRequest,
  () => ListMembersOfAddressListResponse
);
export var RegisterMemberToAddressList = op(
  n0,
  _RMTAL,
  2,
  () => RegisterMemberToAddressListRequest,
  () => RegisterMemberToAddressListResponse
);
