// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAs,
  _aIs,
  _de,
  _DMGA,
  _DMGAR,
  _DMGARi,
  _DSGA,
  _DSGAR,
  _DSGARi,
  _GSAA,
  _GSAAR,
  _GSAARe,
  _h,
  _lSMD,
  _mAA,
  _mAI,
  _mAIe,
  _mT,
  _SAA,
  _sAA,
  _SAAC,
  _sAAC,
  _sAAo,
  _sAAS,
  _sAASD,
  _sAI,
  _sAIo,
  _SSM,
  _SSMR,
  _SSMRt,
  _USAA,
  _USAAR,
  _USAARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMergedGraphqlApiRequest = struct(
  n0,
  _DMGAR,
  0,
  [_sAI, _aIs],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMergedGraphqlApiResponse = struct(n0, _DMGARi, 0, [_sAAS], [0]);
export var DisassociateSourceGraphqlApiRequest = struct(
  n0,
  _DSGAR,
  0,
  [_mAI, _aIs],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateSourceGraphqlApiResponse = struct(n0, _DSGARi, 0, [_sAAS], [0]);
export var GetSourceApiAssociationRequest = struct(
  n0,
  _GSAAR,
  0,
  [_mAI, _aIs],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSourceApiAssociationResponse = struct(n0, _GSAARe, 0, [_sAA], [() => SourceApiAssociation]);
export var SourceApiAssociation = struct(
  n0,
  _SAA,
  0,
  [_aIs, _aAs, _sAIo, _sAAo, _mAA, _mAIe, _de, _sAAC, _sAAS, _sAASD, _lSMD],
  [0, 0, 0, 0, 0, 0, 0, () => SourceApiAssociationConfig, 0, 0, 4]
);
export var SourceApiAssociationConfig = struct(n0, _SAAC, 0, [_mT], [0]);
export var StartSchemaMergeRequest = struct(
  n0,
  _SSMR,
  0,
  [_aIs, _mAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StartSchemaMergeResponse = struct(n0, _SSMRt, 0, [_sAAS], [0]);
export var UpdateSourceApiAssociationRequest = struct(
  n0,
  _USAAR,
  0,
  [_aIs, _mAI, _de, _sAAC],
  [[0, 1], [0, 1], 0, () => SourceApiAssociationConfig]
);
export var UpdateSourceApiAssociationResponse = struct(n0, _USAARp, 0, [_sAA], [() => SourceApiAssociation]);
export var DisassociateMergedGraphqlApi = op(
  n0,
  _DMGA,
  {
    [_h]: ["DELETE", "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}", 200],
  },
  () => DisassociateMergedGraphqlApiRequest,
  () => DisassociateMergedGraphqlApiResponse
);
export var DisassociateSourceGraphqlApi = op(
  n0,
  _DSGA,
  {
    [_h]: ["DELETE", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", 200],
  },
  () => DisassociateSourceGraphqlApiRequest,
  () => DisassociateSourceGraphqlApiResponse
);
export var GetSourceApiAssociation = op(
  n0,
  _GSAA,
  {
    [_h]: ["GET", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", 200],
  },
  () => GetSourceApiAssociationRequest,
  () => GetSourceApiAssociationResponse
);
export var StartSchemaMerge = op(
  n0,
  _SSM,
  {
    [_h]: ["POST", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge", 200],
  },
  () => StartSchemaMergeRequest,
  () => StartSchemaMergeResponse
);
export var UpdateSourceApiAssociation = op(
  n0,
  _USAA,
  {
    [_h]: ["POST", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", 200],
  },
  () => UpdateSourceApiAssociationRequest,
  () => UpdateSourceApiAssociationResponse
);
