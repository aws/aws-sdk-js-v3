// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _At,
  _AVt,
  _CDO,
  _CDOR,
  _CDORr,
  _DCh,
  _dCh,
  _DChc,
  _DCL,
  _dCS,
  _DCVL,
  _DDOe,
  _DDORe,
  _DDORes,
  _De,
  _DO,
  _dO,
  _DOI,
  _dOI,
  _DOIh,
  _DOISL,
  _DOL,
  _dOS,
  _DR,
  _dR,
  _eQN,
  _Fi,
  _Fil,
  _g,
  _Gr,
  _IIm,
  _ISmd,
  _it,
  _K,
  _k,
  _LPau,
  _LPL,
  _LPM,
  _MIA,
  _MIAR,
  _MR,
  _NDC,
  _NDCL,
  _NTe,
  _nTe,
  _OAr,
  _oAr,
  _OArg,
  _OASL,
  _OI,
  _oI,
  _OTp,
  _OUA,
  _oUA,
  _OUAr,
  _OUASL,
  _PCr,
  _PCro,
  _Rem,
  _T,
  _TS,
  _tS,
  _TSa,
  _UG,
  _UGs,
  _UI,
  _uI,
  _UIs,
  _V,
  _v,
  _Va,
  _vSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
  ValueStringList,
} from "./schemas_0";
import { ProductCodeStringList, UserGroupStringList, UserIdStringList } from "./schemas_13_Attribute";

/* eslint no-var: 0 */

export var AttributeValue = struct(
  n0,
  _AVt,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var CreateDhcpOptionsRequest = struct(
  n0,
  _CDOR,
  0,
  [_DCh, _TS, _DR],
  [
    [
      () => NewDhcpConfigurationList,
      {
        [_eQN]: `DhcpConfiguration`,
        [_xN]: _dCh,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateDhcpOptionsResult = struct(
  n0,
  _CDORr,
  0,
  [_DO],
  [
    [
      () => DhcpOptions,
      {
        [_eQN]: `DhcpOptions`,
        [_xN]: _dO,
      },
    ],
  ]
);
export var DescribeDhcpOptionsRequest = struct(
  n0,
  _DDORe,
  0,
  [_DOIh, _NTe, _MR, _DR, _Fi],
  [
    [
      () => DhcpOptionsIdStringList,
      {
        [_xN]: _DOI,
      },
    ],
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeDhcpOptionsResult = struct(
  n0,
  _DDORes,
  0,
  [_NTe, _DO],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => DhcpOptionsList,
      {
        [_eQN]: `DhcpOptionsSet`,
        [_xN]: _dOS,
      },
    ],
  ]
);
export var DhcpConfiguration = struct(
  n0,
  _DChc,
  0,
  [_K, _Va],
  [
    [
      0,
      {
        [_eQN]: `Key`,
        [_xN]: _k,
      },
    ],
    [
      () => DhcpConfigurationValueList,
      {
        [_eQN]: `ValueSet`,
        [_xN]: _vSa,
      },
    ],
  ]
);
export var DhcpOptions = struct(
  n0,
  _DO,
  0,
  [_OI, _T, _DOI, _DCh],
  [
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `DhcpOptionsId`,
        [_xN]: _dOI,
      },
    ],
    [
      () => DhcpConfigurationList,
      {
        [_eQN]: `DhcpConfigurationSet`,
        [_xN]: _dCS,
      },
    ],
  ]
);
export var LaunchPermission = struct(
  n0,
  _LPau,
  0,
  [_OAr, _OUA, _UI, _Gr],
  [
    [
      0,
      {
        [_eQN]: `OrganizationArn`,
        [_xN]: _oAr,
      },
    ],
    [
      0,
      {
        [_eQN]: `OrganizationalUnitArn`,
        [_xN]: _oUA,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserId`,
        [_xN]: _uI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Group`,
        [_xN]: _g,
      },
    ],
  ]
);
export var LaunchPermissionModifications = struct(
  n0,
  _LPM,
  0,
  [_Ad, _Rem],
  [
    [() => LaunchPermissionList, 0],
    [() => LaunchPermissionList, 0],
  ]
);
export var ModifyImageAttributeRequest = struct(
  n0,
  _MIAR,
  0,
  [_At, _De, _IIm, _LPau, _OTp, _PCro, _UG, _UIs, _V, _OArg, _OUAr, _ISmd, _DR],
  [
    0,
    [() => AttributeValue, 0],
    0,
    [() => LaunchPermissionModifications, 0],
    0,
    [
      () => ProductCodeStringList,
      {
        [_xN]: _PCr,
      },
    ],
    [
      () => UserGroupStringList,
      {
        [_xN]: _UGs,
      },
    ],
    [
      () => UserIdStringList,
      {
        [_xN]: _UI,
      },
    ],
    0,
    [
      () => OrganizationArnStringList,
      {
        [_xN]: _OAr,
      },
    ],
    [
      () => OrganizationalUnitArnStringList,
      {
        [_xN]: _OUA,
      },
    ],
    [() => AttributeValue, 0],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var NewDhcpConfiguration = struct(
  n0,
  _NDC,
  0,
  [_K, _Va],
  [
    [
      0,
      {
        [_eQN]: `Key`,
        [_xN]: _k,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _V,
      },
    ],
  ]
);
export var DhcpConfigurationList = list(n0, _DCL, 0, [
  () => DhcpConfiguration,
  {
    [_xN]: _it,
  },
]);
export var DhcpConfigurationValueList = list(n0, _DCVL, 0, [
  () => AttributeValue,
  {
    [_xN]: _it,
  },
]);
export var DhcpOptionsIdStringList = list(n0, _DOISL, 0, [
  0,
  {
    [_xN]: _DOI,
  },
]);
export var DhcpOptionsList = list(n0, _DOL, 0, [
  () => DhcpOptions,
  {
    [_xN]: _it,
  },
]);
export var LaunchPermissionList = list(n0, _LPL, 0, [
  () => LaunchPermission,
  {
    [_xN]: _it,
  },
]);
export var NewDhcpConfigurationList = list(n0, _NDCL, 0, [
  () => NewDhcpConfiguration,
  {
    [_xN]: _it,
  },
]);
export var OrganizationalUnitArnStringList = list(n0, _OUASL, 0, [
  0,
  {
    [_xN]: _OUA,
  },
]);
export var OrganizationArnStringList = list(n0, _OASL, 0, [
  0,
  {
    [_xN]: _OAr,
  },
]);
export var CreateDhcpOptions = op(
  n0,
  _CDO,
  0,
  () => CreateDhcpOptionsRequest,
  () => CreateDhcpOptionsResult
);
export var DescribeDhcpOptions = op(
  n0,
  _DDOe,
  0,
  () => DescribeDhcpOptionsRequest,
  () => DescribeDhcpOptionsResult
);
export var ModifyImageAttribute = op(
  n0,
  _MIA,
  0,
  () => ModifyImageAttributeRequest,
  () => Unit
);
