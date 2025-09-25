// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _aAI,
  _AL,
  _aL,
  _ARw,
  _aRw,
  _CDC,
  _cDC,
  _DR,
  _DTC,
  _dTC,
  _DVBPAO,
  _DVBPAOR,
  _DVBPAORe,
  _EAx,
  _eAx,
  _eQN,
  _GAIS,
  _GAISR,
  _GAISRe,
  _GIBPAS,
  _GIBPASR,
  _GIBPASRe,
  _GIMD,
  _GIMDR,
  _GIMDRe,
  _GSBPAS,
  _GSBPASR,
  _GSBPASRe,
  _GSCAS,
  _GSCASR,
  _GSCASRe,
  _HE,
  _hE,
  _HPRHL,
  _hPRHL,
  _HT,
  _hT,
  _IBPAS,
  _iBPAS,
  _ICL,
  _ICm,
  _ICma,
  _iCS,
  _IGBM,
  _iGBM,
  _IMDR,
  _IMT,
  _iMT,
  _INLm,
  _INm,
  _iNS,
  _IPL,
  _IPm,
  _iPSm,
  _it,
  _LUTas,
  _lUTas,
  _MB,
  _mB,
  _MDSC,
  _mDSC,
  _MDSD,
  _mDSD,
  _MEM,
  _mEM,
  _MPC,
  _MPCL,
  _mPCS,
  _MVBPAO,
  _MVBPAOR,
  _MVBPAORo,
  _Rea,
  _rea,
  _SCAE,
  _sCAE,
  _St,
  _st,
  _VBPAO,
  _vBPAO,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreationDateCondition = struct(
  n0,
  _CDC,
  0,
  [_MDSC],
  [
    [
      1,
      {
        [_eQN]: `MaximumDaysSinceCreated`,
        [_xN]: _mDSC,
      },
    ],
  ]
);
export var DeprecationTimeCondition = struct(
  n0,
  _DTC,
  0,
  [_MDSD],
  [
    [
      1,
      {
        [_eQN]: `MaximumDaysSinceDeprecated`,
        [_xN]: _mDSD,
      },
    ],
  ]
);
export var DescribeVpcBlockPublicAccessOptionsRequest = struct(n0, _DVBPAOR, 0, [_DR], [2]);
export var DescribeVpcBlockPublicAccessOptionsResult = struct(
  n0,
  _DVBPAORe,
  0,
  [_VBPAO],
  [
    [
      () => VpcBlockPublicAccessOptions,
      {
        [_eQN]: `VpcBlockPublicAccessOptions`,
        [_xN]: _vBPAO,
      },
    ],
  ]
);
export var GetAllowedImagesSettingsRequest = struct(n0, _GAISR, 0, [_DR], [2]);
export var GetAllowedImagesSettingsResult = struct(
  n0,
  _GAISRe,
  0,
  [_St, _ICm, _MB],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      () => ImageCriterionList,
      {
        [_eQN]: `ImageCriterionSet`,
        [_xN]: _iCS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
  ]
);
export var GetImageBlockPublicAccessStateRequest = struct(n0, _GIBPASR, 0, [_DR], [2]);
export var GetImageBlockPublicAccessStateResult = struct(
  n0,
  _GIBPASRe,
  0,
  [_IBPAS, _MB],
  [
    [
      0,
      {
        [_eQN]: `ImageBlockPublicAccessState`,
        [_xN]: _iBPAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
  ]
);
export var GetInstanceMetadataDefaultsRequest = struct(n0, _GIMDR, 0, [_DR], [2]);
export var GetInstanceMetadataDefaultsResult = struct(
  n0,
  _GIMDRe,
  0,
  [_AL],
  [
    [
      () => InstanceMetadataDefaultsResponse,
      {
        [_eQN]: `AccountLevel`,
        [_xN]: _aL,
      },
    ],
  ]
);
export var GetSerialConsoleAccessStatusRequest = struct(n0, _GSCASR, 0, [_DR], [2]);
export var GetSerialConsoleAccessStatusResult = struct(
  n0,
  _GSCASRe,
  0,
  [_SCAE, _MB],
  [
    [
      2,
      {
        [_eQN]: `SerialConsoleAccessEnabled`,
        [_xN]: _sCAE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
  ]
);
export var GetSnapshotBlockPublicAccessStateRequest = struct(n0, _GSBPASR, 0, [_DR], [2]);
export var GetSnapshotBlockPublicAccessStateResult = struct(
  n0,
  _GSBPASRe,
  0,
  [_St, _MB],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
  ]
);
export var ImageCriterion = struct(
  n0,
  _ICma,
  0,
  [_IPm, _MPC, _INm, _DTC, _CDC],
  [
    [
      () => ImageProviderList,
      {
        [_eQN]: `ImageProviderSet`,
        [_xN]: _iPSm,
      },
    ],
    [
      () => MarketplaceProductCodeList,
      {
        [_eQN]: `MarketplaceProductCodeSet`,
        [_xN]: _mPCS,
      },
    ],
    [
      () => ImageNameList,
      {
        [_eQN]: `ImageNameSet`,
        [_xN]: _iNS,
      },
    ],
    [
      () => DeprecationTimeCondition,
      {
        [_eQN]: `DeprecationTimeCondition`,
        [_xN]: _dTC,
      },
    ],
    [
      () => CreationDateCondition,
      {
        [_eQN]: `CreationDateCondition`,
        [_xN]: _cDC,
      },
    ],
  ]
);
export var InstanceMetadataDefaultsResponse = struct(
  n0,
  _IMDR,
  0,
  [_HT, _HPRHL, _HE, _IMT, _MB, _MEM],
  [
    [
      0,
      {
        [_eQN]: `HttpTokens`,
        [_xN]: _hT,
      },
    ],
    [
      1,
      {
        [_eQN]: `HttpPutResponseHopLimit`,
        [_xN]: _hPRHL,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpEndpoint`,
        [_xN]: _hE,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceMetadataTags`,
        [_xN]: _iMT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedExceptionMessage`,
        [_xN]: _mEM,
      },
    ],
  ]
);
export var ModifyVpcBlockPublicAccessOptionsRequest = struct(n0, _MVBPAOR, 0, [_DR, _IGBM], [2, 0]);
export var ModifyVpcBlockPublicAccessOptionsResult = struct(
  n0,
  _MVBPAORo,
  0,
  [_VBPAO],
  [
    [
      () => VpcBlockPublicAccessOptions,
      {
        [_eQN]: `VpcBlockPublicAccessOptions`,
        [_xN]: _vBPAO,
      },
    ],
  ]
);
export var VpcBlockPublicAccessOptions = struct(
  n0,
  _VBPAO,
  0,
  [_AAI, _ARw, _St, _IGBM, _Rea, _LUTas, _MB, _EAx],
  [
    [
      0,
      {
        [_eQN]: `AwsAccountId`,
        [_xN]: _aAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AwsRegion`,
        [_xN]: _aRw,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `InternetGatewayBlockMode`,
        [_xN]: _iGBM,
      },
    ],
    [
      0,
      {
        [_eQN]: `Reason`,
        [_xN]: _rea,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastUpdateTimestamp`,
        [_xN]: _lUTas,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagedBy`,
        [_xN]: _mB,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExclusionsAllowed`,
        [_xN]: _eAx,
      },
    ],
  ]
);
export var ImageCriterionList = list(n0, _ICL, 0, [
  () => ImageCriterion,
  {
    [_xN]: _it,
  },
]);
export var ImageNameList = list(n0, _INLm, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ImageProviderList = list(n0, _IPL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var MarketplaceProductCodeList = list(n0, _MPCL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeVpcBlockPublicAccessOptions = op(
  n0,
  _DVBPAO,
  0,
  () => DescribeVpcBlockPublicAccessOptionsRequest,
  () => DescribeVpcBlockPublicAccessOptionsResult
);
export var GetAllowedImagesSettings = op(
  n0,
  _GAIS,
  0,
  () => GetAllowedImagesSettingsRequest,
  () => GetAllowedImagesSettingsResult
);
export var GetImageBlockPublicAccessState = op(
  n0,
  _GIBPAS,
  0,
  () => GetImageBlockPublicAccessStateRequest,
  () => GetImageBlockPublicAccessStateResult
);
export var GetInstanceMetadataDefaults = op(
  n0,
  _GIMD,
  0,
  () => GetInstanceMetadataDefaultsRequest,
  () => GetInstanceMetadataDefaultsResult
);
export var GetSerialConsoleAccessStatus = op(
  n0,
  _GSCAS,
  0,
  () => GetSerialConsoleAccessStatusRequest,
  () => GetSerialConsoleAccessStatusResult
);
export var GetSnapshotBlockPublicAccessState = op(
  n0,
  _GSBPAS,
  0,
  () => GetSnapshotBlockPublicAccessStateRequest,
  () => GetSnapshotBlockPublicAccessStateResult
);
export var ModifyVpcBlockPublicAccessOptions = op(
  n0,
  _MVBPAO,
  0,
  () => ModifyVpcBlockPublicAccessOptionsRequest,
  () => ModifyVpcBlockPublicAccessOptionsResult
);
