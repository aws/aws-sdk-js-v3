// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _AZ,
  _AZI,
  _COIre,
  _COOre,
  _COre,
  _CS,
  _CSI,
  _CSO,
  _D,
  _FOCT,
  _GOe,
  _GOIe,
  _GOOe,
  _GS,
  _GSI,
  _GSO,
  _h,
  _LCS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MSWL,
  _N,
  _No,
  _OA,
  _OAC,
  _OACC,
  _OASOR,
  _OAu,
  _OIu,
  _OIw,
  _OSp,
  _Ou,
  _PCo,
  _PDK,
  _PFD,
  _PP,
  _RA,
  _RPP,
  _SA,
  _SAi,
  _SHT,
  _SI,
  _Si,
  _Ta,
  _TR,
  _TRR,
  _TRRa,
  _UC,
  _UG,
  _UO,
  _UOI,
  _UOO,
  _US,
  _USI,
  _USO,
  _USRPP,
  _USRPPI,
  _USRPPO,
  n0,
} from "./schemas_0";
import { Address } from "./schemas_7_Site";

/* eslint no-var: 0 */

export var CreateOutpostInput = struct(n0, _COIre, 0, [_N, _D, _SI, _AZ, _AZI, _Ta, _SHT], [0, 0, 0, 0, 0, 128 | 0, 0]);
export var CreateOutpostOutput = struct(n0, _COOre, 0, [_Ou], [() => Outpost]);
export var CreateSiteInput = struct(
  n0,
  _CSI,
  0,
  [_N, _D, _No, _Ta, _OA, _SA, _RPP],
  [0, 0, 0, 128 | 0, () => Address, () => Address, () => RackPhysicalProperties]
);
export var CreateSiteOutput = struct(n0, _CSO, 0, [_Si], [() => Site]);
export var GetOutpostInput = struct(n0, _GOIe, 0, [_OIu], [[0, 1]]);
export var GetOutpostOutput = struct(n0, _GOOe, 0, [_Ou], [() => Outpost]);
export var GetSiteInput = struct(n0, _GSI, 0, [_SI], [[0, 1]]);
export var GetSiteOutput = struct(n0, _GSO, 0, [_Si], [() => Site]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var Outpost = struct(
  n0,
  _Ou,
  0,
  [_OIu, _OIw, _OAu, _SI, _N, _D, _LCS, _AZ, _AZI, _Ta, _SAi, _SHT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 0, 0]
);
export var RackPhysicalProperties = struct(
  n0,
  _RPP,
  0,
  [_PDK, _PP, _PCo, _PFD, _UG, _UC, _FOCT, _OSp, _MSWL],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var Site = struct(
  n0,
  _Si,
  0,
  [_SI, _AIc, _N, _D, _Ta, _SAi, _No, _OACC, _OASOR, _OAC, _RPP],
  [0, 0, 0, 0, 128 | 0, 0, 0, 0, 0, 0, () => RackPhysicalProperties]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UpdateOutpostInput = struct(n0, _UOI, 0, [_OIu, _N, _D, _SHT], [[0, 1], 0, 0, 0]);
export var UpdateOutpostOutput = struct(n0, _UOO, 0, [_Ou], [() => Outpost]);
export var UpdateSiteInput = struct(n0, _USI, 0, [_SI, _N, _D, _No], [[0, 1], 0, 0, 0]);
export var UpdateSiteOutput = struct(n0, _USO, 0, [_Si], [() => Site]);
export var UpdateSiteRackPhysicalPropertiesInput = struct(
  n0,
  _USRPPI,
  0,
  [_SI, _PDK, _PP, _PCo, _PFD, _UG, _UC, _FOCT, _OSp, _MSWL],
  [[0, 1], 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateSiteRackPhysicalPropertiesOutput = struct(n0, _USRPPO, 0, [_Si], [() => Site]);
export var TagMap = 128 | 0;

export var CreateOutpost = op(
  n0,
  _COre,
  {
    [_h]: ["POST", "/outposts", 200],
  },
  () => CreateOutpostInput,
  () => CreateOutpostOutput
);
export var CreateSite = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/sites", 200],
  },
  () => CreateSiteInput,
  () => CreateSiteOutput
);
export var GetOutpost = op(
  n0,
  _GOe,
  {
    [_h]: ["GET", "/outposts/{OutpostId}", 200],
  },
  () => GetOutpostInput,
  () => GetOutpostOutput
);
export var GetSite = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/sites/{SiteId}", 200],
  },
  () => GetSiteInput,
  () => GetSiteOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UpdateOutpost = op(
  n0,
  _UO,
  {
    [_h]: ["PATCH", "/outposts/{OutpostId}", 200],
  },
  () => UpdateOutpostInput,
  () => UpdateOutpostOutput
);
export var UpdateSite = op(
  n0,
  _US,
  {
    [_h]: ["PATCH", "/sites/{SiteId}", 200],
  },
  () => UpdateSiteInput,
  () => UpdateSiteOutput
);
export var UpdateSiteRackPhysicalProperties = op(
  n0,
  _USRPP,
  {
    [_h]: ["PATCH", "/sites/{SiteId}/rackPhysicalProperties", 200],
  },
  () => UpdateSiteRackPhysicalPropertiesInput,
  () => UpdateSiteRackPhysicalPropertiesOutput
);
