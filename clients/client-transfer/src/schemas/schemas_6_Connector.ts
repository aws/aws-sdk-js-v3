// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACC,
  _AR,
  _Ar,
  _BASI,
  _C,
  _CCR,
  _CCr,
  _CCRr,
  _CFTR,
  _CFTRo,
  _CI,
  _Co,
  _Con,
  _DCe,
  _DCele,
  _DCesc,
  _DCRe,
  _DCRescr,
  _DCRescri,
  _DIe,
  _DPe,
  _EA,
  _FC,
  _FM,
  _FP,
  _FTR,
  _h,
  _HK,
  _LCis,
  _LCiste,
  _LCisto,
  _LCRis,
  _LCRist,
  _LDP,
  _LFTR,
  _LFTRR,
  _LFTRRi,
  _LI,
  _LPI,
  _LR,
  _MCC,
  _MI,
  _MIo,
  _MR,
  _MRa,
  _MS,
  _MSA,
  _NT,
  _ODP,
  _OFN,
  _PCT,
  _PPI,
  _RDP,
  _RFP,
  _S,
  _SA,
  _SC,
  _SCC,
  _SCCD,
  _SCD,
  _SCf,
  _SDL,
  _SDLR,
  _SDLRt,
  _SFP,
  _SFT,
  _SFTR,
  _SFTRt,
  _SMEIA,
  _SMt,
  _SPN,
  _SPo,
  _SRD,
  _SRDR,
  _SRDRt,
  _SRM,
  _SRMR,
  _SRMRt,
  _T,
  _TCe,
  _TCR,
  _TCRe,
  _THK,
  _TI,
  _TP,
  _U,
  _UCpd,
  _UCRpd,
  _UCRpda,
  _USI,
  n0,
  Tags,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var As2ConnectorConfig = struct(
  n0,
  _ACC,
  0,
  [_LPI, _PPI, _MS, _C, _EA, _SA, _MSA, _MR, _BASI, _PCT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ConnectorFileTransferResult = struct(n0, _CFTR, 0, [_FP, _SC, _FC, _FM], [0, 0, 0, 0]);
export var CreateConnectorRequest = struct(
  n0,
  _CCR,
  0,
  [_U, _AC, _AR, _LR, _T, _SCf, _SPN],
  [0, () => As2ConnectorConfig, 0, 0, () => Tags, () => SftpConnectorConfig, 0]
);
export var CreateConnectorResponse = struct(n0, _CCRr, 0, [_CI], [0]);
export var DeleteConnectorRequest = struct(n0, _DCRe, 0, [_CI], [0]);
export var DescribeConnectorRequest = struct(n0, _DCRescr, 0, [_CI], [0]);
export var DescribeConnectorResponse = struct(n0, _DCRescri, 0, [_Co], [() => DescribedConnector]);
export var DescribedConnector = struct(
  n0,
  _DCe,
  0,
  [_Ar, _CI, _U, _AC, _AR, _LR, _T, _SCf, _SMEIA, _SPN],
  [0, 0, 0, () => As2ConnectorConfig, 0, 0, () => Tags, () => SftpConnectorConfig, 64 | 0, 0]
);
export var ListConnectorsRequest = struct(n0, _LCRis, 0, [_MRa, _NT], [1, 0]);
export var ListConnectorsResponse = struct(n0, _LCRist, 0, [_NT, _Con], [0, () => ListedConnectors]);
export var ListedConnector = struct(n0, _LCis, 0, [_Ar, _CI, _U], [0, 0, 0]);
export var ListFileTransferResultsRequest = struct(n0, _LFTRR, 0, [_CI, _TI, _NT, _MRa], [0, 0, 0, 1]);
export var ListFileTransferResultsResponse = struct(
  n0,
  _LFTRRi,
  0,
  [_FTR, _NT],
  [() => ConnectorFileTransferResults, 0]
);
export var SftpConnectorConfig = struct(n0, _SCC, 0, [_USI, _THK, _MCC], [0, 64 | 0, 1]);
export var SftpConnectorConnectionDetails = struct(n0, _SCCD, 0, [_HK], [0]);
export var StartDirectoryListingRequest = struct(n0, _SDLR, 0, [_CI, _RDP, _MI, _ODP], [0, 0, 1, 0]);
export var StartDirectoryListingResponse = struct(n0, _SDLRt, 0, [_LI, _OFN], [0, 0]);
export var StartFileTransferRequest = struct(n0, _SFTR, 0, [_CI, _SFP, _RFP, _LDP, _RDP], [0, 64 | 0, 64 | 0, 0, 0]);
export var StartFileTransferResponse = struct(n0, _SFTRt, 0, [_TI], [0]);
export var StartRemoteDeleteRequest = struct(n0, _SRDR, 0, [_CI, _DPe], [0, 0]);
export var StartRemoteDeleteResponse = struct(n0, _SRDRt, 0, [_DIe], [0]);
export var StartRemoteMoveRequest = struct(n0, _SRMR, 0, [_CI, _SPo, _TP], [0, 0, 0]);
export var StartRemoteMoveResponse = struct(n0, _SRMRt, 0, [_MIo], [0]);
export var TestConnectionRequest = struct(n0, _TCR, 0, [_CI], [0]);
export var TestConnectionResponse = struct(
  n0,
  _TCRe,
  0,
  [_CI, _S, _SMt, _SCD],
  [0, 0, 0, () => SftpConnectorConnectionDetails]
);
export var UpdateConnectorRequest = struct(
  n0,
  _UCRpd,
  0,
  [_CI, _U, _AC, _AR, _LR, _SCf, _SPN],
  [0, 0, () => As2ConnectorConfig, 0, 0, () => SftpConnectorConfig, 0]
);
export var UpdateConnectorResponse = struct(n0, _UCRpda, 0, [_CI], [0]);
export var ConnectorFileTransferResults = list(n0, _CFTRo, 0, () => ConnectorFileTransferResult);
export var FilePaths = 64 | 0;

export var ListedConnectors = list(n0, _LCiste, 0, () => ListedConnector);
export var SftpConnectorTrustedHostKeyList = 64 | 0;

export var CreateConnector = op(
  n0,
  _CCr,
  0,
  () => CreateConnectorRequest,
  () => CreateConnectorResponse
);
export var DeleteConnector = op(
  n0,
  _DCele,
  2,
  () => DeleteConnectorRequest,
  () => Unit
);
export var DescribeConnector = op(
  n0,
  _DCesc,
  0,
  () => DescribeConnectorRequest,
  () => DescribeConnectorResponse
);
export var ListConnectors = op(
  n0,
  _LCisto,
  0,
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);
export var ListFileTransferResults = op(
  n0,
  _LFTR,
  {
    [_h]: ["POST", "/listFileTransferResults", 200],
  },
  () => ListFileTransferResultsRequest,
  () => ListFileTransferResultsResponse
);
export var StartDirectoryListing = op(
  n0,
  _SDL,
  0,
  () => StartDirectoryListingRequest,
  () => StartDirectoryListingResponse
);
export var StartFileTransfer = op(
  n0,
  _SFT,
  0,
  () => StartFileTransferRequest,
  () => StartFileTransferResponse
);
export var StartRemoteDelete = op(
  n0,
  _SRD,
  {
    [_h]: ["POST", "/startRemoteDelete", 200],
  },
  () => StartRemoteDeleteRequest,
  () => StartRemoteDeleteResponse
);
export var StartRemoteMove = op(
  n0,
  _SRM,
  {
    [_h]: ["POST", "/startRemoteMove", 200],
  },
  () => StartRemoteMoveRequest,
  () => StartRemoteMoveResponse
);
export var TestConnection = op(
  n0,
  _TCe,
  0,
  () => TestConnectionRequest,
  () => TestConnectionResponse
);
export var UpdateConnector = op(
  n0,
  _UCpd,
  0,
  () => UpdateConnectorRequest,
  () => UpdateConnectorResponse
);
