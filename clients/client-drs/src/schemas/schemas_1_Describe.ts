// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aDSG,
  _aLSBSDT,
  _aRND,
  _aVg,
  _b,
  _bSB,
  _bT,
  _CP,
  _cP,
  _cp,
  _cPIP,
  _CRCT,
  _CRCTR,
  _cSID,
  _di,
  _DJe,
  _DJLI,
  _DJLIR,
  _DJLIRe,
  _DJRes,
  _DJResc,
  _DJRF,
  _dLSDT,
  _dN,
  _dPR,
  _DRCTe,
  _DRCTRes,
  _DRCTResc,
  _dRE,
  _dRI,
  _dRIa,
  _DRIes,
  _DRII,
  _DRIRe,
  _DRIRes,
  _DRIRF,
  _DRS,
  _dRS,
  _DRSR,
  _DRSRe,
  _DRSRF,
  _DSNe,
  _DSNRes,
  _DSNResc,
  _DSNRF,
  _DSSe,
  _DSSRes,
  _DSSResc,
  _DSSRF,
  _dT,
  _e,
  _eD,
  _eDT,
  _eE,
  _eEKA,
  _eIID,
  _eIS,
  _en,
  _ERD,
  _eRD,
  _eRDl,
  _eS,
  _eT,
  _ev,
  _eVID,
  _f,
  _fa,
  _fBDT,
  _fCID,
  _fCLSBSDT,
  _fD,
  _fDT,
  _fIT,
  _fJID,
  _fLT,
  _fTOS,
  _fU,
  _GRC,
  _GRCR,
  _hI,
  _ht,
  _i,
  _iBD,
  _iD,
  _iDN,
  _iH,
  _int,
  _io,
  _jID,
  _jIDo,
  _JL,
  _JLED,
  _JLo,
  _JLob,
  _lDa,
  _lDT,
  _lUDT,
  _mR,
  _n,
  _nI,
  _nT,
  _o,
  _oAID,
  _oAZ,
  _oE,
  _oR,
  _os,
  _oSDT,
  _PC,
  _pCI,
  _pCM,
  _PCr,
  _PITP,
  _PITPR,
  _pITSDT,
  _pP,
  _rB,
  _RC,
  _RCRD,
  _RCRDe,
  _RCT,
  _RCTe,
  _rCTID,
  _rCTIDe,
  _rD,
  _rDe,
  _rE,
  _RI,
  _RID,
  _rID,
  _RIDe,
  _RIDRE,
  _RIDRI,
  _RIDRIe,
  _RIDRIRD,
  _RIDRIRDe,
  _RIDRIS,
  _RIDRISe,
  _RIF,
  _rIID,
  _rIIDe,
  _RIP,
  _rIP,
  _RS,
  _rSB,
  _rSBe,
  _rSIT,
  _RSL,
  _rSSGID,
  _rVN,
  _s,
  _sAID,
  _sASI,
  _sAT,
  _sAZ,
  _sDT,
  _sDTt,
  _sID,
  _sN,
  _SND,
  _sND,
  _sNID,
  _sNIDo,
  _SNL,
  _sOA,
  _sOAo,
  _sSID,
  _sSIDo,
  _SSL,
  _st,
  _sta,
  _sV,
  _t,
  _tD,
  _tDT,
  _th,
  _ti,
  _tIID,
  _tSB,
  _tV,
  _u,
  _uDRS,
  _URC,
  _URCR,
  _URCT,
  _URCTR,
  _VTCM,
  _vTCM,
  _VTPC,
  _vTPC,
  _vTVS,
  n0,
  TagsMap,
} from "./schemas_0";
import { SourceServer } from "./schemas_2_Replication";
import { Cpus, IdentificationHints, NetworkInterfaces, OS } from "./schemas_5_Describe";
import { Job } from "./schemas_7_Launch";
import { SourceNetwork } from "./schemas_8_Source";

/* eslint no-var: 0 */

export var ConversionProperties = struct(
  n0,
  _CP,
  0,
  [_vTCM, _rVN, _fU, _dT, _vTVS, _vTPC],
  [map(n0, _VTCM, 0, 0, 128 | 0), 0, 2, 0, 128 | 1, () => VolumeToProductCodes]
);
export var CreateReplicationConfigurationTemplateRequest = struct(
  n0,
  _CRCTR,
  0,
  [_sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _pP, _t, _aRND],
  [0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], () => PITPolicy, [() => TagsMap, 0], 2]
);
export var DescribeJobLogItemsRequest = struct(n0, _DJLIR, 0, [_jID, _mR, _nT], [0, 1, 0]);
export var DescribeJobLogItemsResponse = struct(n0, _DJLIRe, 0, [_i, _nT], [() => JobLogs, 0]);
export var DescribeJobsRequest = struct(n0, _DJRes, 0, [_f, _mR, _nT], [() => DescribeJobsRequestFilters, 1, 0]);
export var DescribeJobsRequestFilters = struct(n0, _DJRF, 0, [_jIDo, _fD, _tD], [64 | 0, 0, 0]);
export var DescribeJobsResponse = struct(n0, _DJResc, 0, [_i, _nT], [[() => JobsList, 0], 0]);
export var DescribeRecoveryInstancesRequest = struct(
  n0,
  _DRIRe,
  0,
  [_f, _mR, _nT],
  [() => DescribeRecoveryInstancesRequestFilters, 1, 0]
);
export var DescribeRecoveryInstancesRequestFilters = struct(n0, _DRIRF, 0, [_rIIDe, _sSIDo], [64 | 0, 64 | 0]);
export var DescribeRecoveryInstancesResponse = struct(
  n0,
  _DRIRes,
  0,
  [_nT, _i],
  [0, [() => DescribeRecoveryInstancesItems, 0]]
);
export var DescribeRecoverySnapshotsRequest = struct(
  n0,
  _DRSR,
  0,
  [_sSID, _f, _o, _mR, _nT],
  [0, () => DescribeRecoverySnapshotsRequestFilters, 0, 1, 0]
);
export var DescribeRecoverySnapshotsRequestFilters = struct(n0, _DRSRF, 0, [_fDT, _tDT], [0, 0]);
export var DescribeRecoverySnapshotsResponse = struct(n0, _DRSRe, 0, [_i, _nT], [() => RecoverySnapshotsList, 0]);
export var DescribeReplicationConfigurationTemplatesRequest = struct(
  n0,
  _DRCTRes,
  0,
  [_rCTIDe, _mR, _nT],
  [64 | 0, 1, 0]
);
export var DescribeReplicationConfigurationTemplatesResponse = struct(
  n0,
  _DRCTResc,
  0,
  [_i, _nT],
  [[() => ReplicationConfigurationTemplates, 0], 0]
);
export var DescribeSourceNetworksRequest = struct(
  n0,
  _DSNRes,
  0,
  [_f, _mR, _nT],
  [() => DescribeSourceNetworksRequestFilters, 1, 0]
);
export var DescribeSourceNetworksRequestFilters = struct(n0, _DSNRF, 0, [_sNIDo, _oAID, _oR], [64 | 0, 0, 0]);
export var DescribeSourceNetworksResponse = struct(n0, _DSNResc, 0, [_i, _nT], [[() => SourceNetworksList, 0], 0]);
export var DescribeSourceServersRequest = struct(
  n0,
  _DSSRes,
  0,
  [_f, _mR, _nT],
  [() => DescribeSourceServersRequestFilters, 1, 0]
);
export var DescribeSourceServersRequestFilters = struct(n0, _DSSRF, 0, [_sSIDo, _hI, _sAID], [64 | 0, 0, 64 | 0]);
export var DescribeSourceServersResponse = struct(n0, _DSSResc, 0, [_i, _nT], [[() => SourceServersList, 0], 0]);
export var GetReplicationConfigurationRequest = struct(n0, _GRCR, 0, [_sSID], [0]);
export var JobLog = struct(n0, _JL, 0, [_lDT, _ev, _eD], [0, 0, () => JobLogEventData]);
export var JobLogEventData = struct(
  n0,
  _JLED,
  0,
  [_sSID, _cSID, _tIID, _rE, _cP, _eRD],
  [0, 0, 0, 0, () => ConversionProperties, () => EventResourceData]
);
export var PITPolicyRule = struct(n0, _PITPR, 0, [_rID, _u, _int, _rDe, _en], [1, 0, 1, 1, 2]);
export var ProductCode = struct(n0, _PC, 0, [_pCI, _pCM], [0, 0]);
export var RecoveryInstance = struct(
  n0,
  _RI,
  0,
  [_eIID, _eIS, _jID, _rIID, _sSID, _a, _t, _fa, _dRIa, _rIP, _pITSDT, _iD, _oE, _oAZ, _aVg, _sOAo],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => TagsMap, 0],
    () => RecoveryInstanceFailback,
    () => RecoveryInstanceDataReplicationInfo,
    () => RecoveryInstanceProperties,
    0,
    2,
    0,
    0,
    0,
    0,
  ]
);
export var RecoveryInstanceDataReplicationError = struct(n0, _RIDRE, 0, [_e, _rE], [0, 0]);
export var RecoveryInstanceDataReplicationInfo = struct(
  n0,
  _RIDRI,
  0,
  [_lDa, _eDT, _rD, _dRS, _dRI, _dRE, _sAZ, _sOA],
  [
    0,
    0,
    () => RecoveryInstanceDataReplicationInfoReplicatedDisks,
    0,
    () => RecoveryInstanceDataReplicationInitiation,
    () => RecoveryInstanceDataReplicationError,
    0,
    0,
  ]
);
export var RecoveryInstanceDataReplicationInfoReplicatedDisk = struct(
  n0,
  _RIDRIRD,
  0,
  [_dN, _tSB, _rSB, _rSBe, _bSB],
  [0, 1, 1, 1, 1]
);
export var RecoveryInstanceDataReplicationInitiation = struct(
  n0,
  _RIDRIe,
  0,
  [_sDT, _s],
  [0, () => RecoveryInstanceDataReplicationInitiationSteps]
);
export var RecoveryInstanceDataReplicationInitiationStep = struct(n0, _RIDRIS, 0, [_n, _st], [0, 0]);
export var RecoveryInstanceDisk = struct(n0, _RID, 0, [_iDN, _b, _eVID], [0, 1, 0]);
export var RecoveryInstanceFailback = struct(
  n0,
  _RIF,
  0,
  [_fCID, _fJID, _fIT, _sta, _aLSBSDT, _fCLSBSDT, _fTOS, _fBDT, _eRDl, _fLT],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
);
export var RecoveryInstanceProperties = struct(
  n0,
  _RIP,
  0,
  [_lUDT, _iH, _nI, _di, _cp, _rB, _os],
  [0, () => IdentificationHints, () => NetworkInterfaces, () => RecoveryInstanceDisks, () => Cpus, 1, () => OS]
);
export var RecoverySnapshot = struct(n0, _RS, 0, [_sID, _sSID, _eT, _ti, _eS], [0, 0, 0, 0, 64 | 0]);
export var ReplicationConfiguration = struct(
  n0,
  _RC,
  0,
  [_sSID, _n, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _rD, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _pP, _aRND],
  [
    0,
    0,
    0,
    2,
    64 | 0,
    0,
    2,
    0,
    () => ReplicationConfigurationReplicatedDisks,
    0,
    0,
    1,
    0,
    2,
    [() => TagsMap, 0],
    () => PITPolicy,
    2,
  ]
);
export var ReplicationConfigurationReplicatedDisk = struct(
  n0,
  _RCRD,
  0,
  [_dN, _iBD, _sDTt, _io, _th, _oSDT],
  [0, 2, 0, 1, 1, 0]
);
export var ReplicationConfigurationTemplate = struct(
  n0,
  _RCT,
  0,
  [_rCTID, _a, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _t, _pP, _aRND],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], [() => TagsMap, 0], () => PITPolicy, 2]
);
export var SourceNetworkData = struct(n0, _SND, 0, [_sNID, _sV, _tV, _sN], [0, 0, 0, 0]);
export var UpdateReplicationConfigurationRequest = struct(
  n0,
  _URCR,
  0,
  [_sSID, _n, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _rD, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _pP, _aRND],
  [
    0,
    0,
    0,
    2,
    64 | 0,
    0,
    2,
    0,
    () => ReplicationConfigurationReplicatedDisks,
    0,
    0,
    1,
    0,
    2,
    [() => TagsMap, 0],
    () => PITPolicy,
    2,
  ]
);
export var UpdateReplicationConfigurationTemplateRequest = struct(
  n0,
  _URCTR,
  0,
  [_rCTID, _a, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _pP, _aRND],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], () => PITPolicy, 2]
);
export var AccountIDs = 64 | 0;

export var DescribeJobsRequestFiltersJobIDs = 64 | 0;

export var DescribeRecoveryInstancesItems = list(n0, _DRII, 0, [() => RecoveryInstance, 0]);
export var DescribeSourceNetworksRequestFiltersIDs = 64 | 0;

export var DescribeSourceServersRequestFiltersIDs = 64 | 0;

export var EbsSnapshotsList = 64 | 0;

export var JobLogs = list(n0, _JLo, 0, () => JobLog);
export var JobsList = list(n0, _JLob, 0, [() => Job, 0]);
export var PITPolicy = list(n0, _PITP, 0, () => PITPolicyRule);
export var ProductCodes = list(n0, _PCr, 0, () => ProductCode);
export var RecoveryInstanceDataReplicationInfoReplicatedDisks = list(
  n0,
  _RIDRIRDe,
  0,
  () => RecoveryInstanceDataReplicationInfoReplicatedDisk
);
export var RecoveryInstanceDataReplicationInitiationSteps = list(
  n0,
  _RIDRISe,
  0,
  () => RecoveryInstanceDataReplicationInitiationStep
);
export var RecoveryInstanceDisks = list(n0, _RIDe, 0, () => RecoveryInstanceDisk);
export var RecoveryInstanceIDs = 64 | 0;

export var RecoverySnapshotsList = list(n0, _RSL, 0, () => RecoverySnapshot);
export var ReplicationConfigurationReplicatedDisks = list(n0, _RCRDe, 0, () => ReplicationConfigurationReplicatedDisk);
export var ReplicationConfigurationTemplateIDs = 64 | 0;

export var ReplicationConfigurationTemplates = list(n0, _RCTe, 0, [() => ReplicationConfigurationTemplate, 0]);
export var ReplicationServersSecurityGroupsIDs = 64 | 0;

export var SourceNetworksList = list(n0, _SNL, 0, [() => SourceNetwork, 0]);
export var SourceServerIDs = 64 | 0;

export var SourceServersList = list(n0, _SSL, 0, [() => SourceServer, 0]);
export var ConversionMap = 128 | 0;

export var VolumeToConversionMap = map(n0, _VTCM, 0, 0, 128 | 0);
export var VolumeToProductCodes = map(n0, _VTPC, 0, 0, () => ProductCodes);
export var VolumeToSizeMap = 128 | 1;

export var EventResourceData = uni(n0, _ERD, 0, [_sND], [() => SourceNetworkData]);
export var CreateReplicationConfigurationTemplate = op(
  n0,
  _CRCT,
  {
    [_ht]: ["POST", "/CreateReplicationConfigurationTemplate", 201],
  },
  () => CreateReplicationConfigurationTemplateRequest,
  () => ReplicationConfigurationTemplate
);
export var DescribeJobLogItems = op(
  n0,
  _DJLI,
  {
    [_ht]: ["POST", "/DescribeJobLogItems", 200],
  },
  () => DescribeJobLogItemsRequest,
  () => DescribeJobLogItemsResponse
);
export var DescribeJobs = op(
  n0,
  _DJe,
  {
    [_ht]: ["POST", "/DescribeJobs", 200],
  },
  () => DescribeJobsRequest,
  () => DescribeJobsResponse
);
export var DescribeRecoveryInstances = op(
  n0,
  _DRIes,
  {
    [_ht]: ["POST", "/DescribeRecoveryInstances", 200],
  },
  () => DescribeRecoveryInstancesRequest,
  () => DescribeRecoveryInstancesResponse
);
export var DescribeRecoverySnapshots = op(
  n0,
  _DRS,
  {
    [_ht]: ["POST", "/DescribeRecoverySnapshots", 200],
  },
  () => DescribeRecoverySnapshotsRequest,
  () => DescribeRecoverySnapshotsResponse
);
export var DescribeReplicationConfigurationTemplates = op(
  n0,
  _DRCTe,
  {
    [_ht]: ["POST", "/DescribeReplicationConfigurationTemplates", 200],
  },
  () => DescribeReplicationConfigurationTemplatesRequest,
  () => DescribeReplicationConfigurationTemplatesResponse
);
export var DescribeSourceNetworks = op(
  n0,
  _DSNe,
  {
    [_ht]: ["POST", "/DescribeSourceNetworks", 200],
  },
  () => DescribeSourceNetworksRequest,
  () => DescribeSourceNetworksResponse
);
export var DescribeSourceServers = op(
  n0,
  _DSSe,
  {
    [_ht]: ["POST", "/DescribeSourceServers", 200],
  },
  () => DescribeSourceServersRequest,
  () => DescribeSourceServersResponse
);
export var GetReplicationConfiguration = op(
  n0,
  _GRC,
  {
    [_ht]: ["POST", "/GetReplicationConfiguration", 200],
  },
  () => GetReplicationConfigurationRequest,
  () => ReplicationConfiguration
);
export var UpdateReplicationConfiguration = op(
  n0,
  _URC,
  {
    [_ht]: ["POST", "/UpdateReplicationConfiguration", 200],
  },
  () => UpdateReplicationConfigurationRequest,
  () => ReplicationConfiguration
);
export var UpdateReplicationConfigurationTemplate = op(
  n0,
  _URCT,
  {
    [_ht]: ["POST", "/UpdateReplicationConfigurationTemplate", 200],
  },
  () => UpdateReplicationConfigurationTemplateRequest,
  () => ReplicationConfigurationTemplate
);
