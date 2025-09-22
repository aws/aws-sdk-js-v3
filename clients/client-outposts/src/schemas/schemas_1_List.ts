// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIc,
  _AICL,
  _AIF,
  _AIFc,
  _AILs,
  _AIs,
  _AIss,
  _AIsse,
  _AITC,
  _ALD,
  _ALs,
  _As,
  _ASF,
  _ASN,
  _AT,
  _AZF,
  _AZIF,
  _BD,
  _BI,
  _BIL,
  _BIl,
  _CA,
  _CD,
  _CDo,
  _CED,
  _CIa,
  _CILD,
  _Co,
  _CT,
  _CTI,
  _CTL,
  _CTS,
  _CTSa,
  _CTSF,
  _ECFF,
  _ED,
  _GOBI,
  _GOBII,
  _GOBIO,
  _GOIT,
  _GOITI,
  _GOITO,
  _GOSIT,
  _GOSITI,
  _GOSITO,
  _h,
  _HI,
  _HIF,
  _hQ,
  _ICF,
  _IF,
  _II,
  _IT,
  _ITC,
  _ITF,
  _ITI,
  _ITLD,
  _ITn,
  _LA,
  _LAI,
  _LAII,
  _LAIi,
  _LAIO,
  _LAO,
  _LBIFCT,
  _LBIFCTI,
  _LBIFCTO,
  _LCI,
  _LCII,
  _LCIO,
  _LCSF,
  _LCT,
  _LCTI,
  _LCTO,
  _LICBS,
  _LMD,
  _LO,
  _LOI,
  _LOi,
  _LOIi,
  _LOO,
  _LOOi,
  _LS,
  _LSI,
  _LSO,
  _MR,
  _MRP,
  _MV,
  _NT,
  _OACCF,
  _OACF,
  _OASORF,
  _OAu,
  _OFD,
  _OI,
  _OIF,
  _OIr,
  _OIrd,
  _OIu,
  _oLD,
  _Or,
  _OS,
  _OSD,
  _OSLD,
  _OT,
  _Out,
  _RE,
  _RI,
  _S,
  _SF,
  _Sit,
  _SIu,
  _SL,
  _sLD,
  _SSF,
  _SSu,
  _ST,
  _St,
  _Su,
  _Sub,
  _UP,
  _VCPU,
  n0,
} from "./schemas_0";
import { Outpost, Site } from "./schemas_3_Site";
import { CatalogItem } from "./schemas_6_Order";

/* eslint no-var: 0 */

export var AssetInfo = struct(
  n0,
  _AI,
  0,
  [_AIs, _RI, _AT, _CA, _ALs],
  [0, 0, 0, () => ComputeAttributes, () => AssetLocation]
);
export var AssetInstance = struct(n0, _AIss, 0, [_II, _IT, _AIs, _AIc, _ASN], [0, 0, 0, 0, 0]);
export var AssetInstanceTypeCapacity = struct(n0, _AITC, 0, [_IT, _Co], [0, 1]);
export var AssetLocation = struct(n0, _ALs, 0, [_RE], [1]);
export var BlockingInstance = struct(n0, _BI, 0, [_II, _AIc, _ASN], [0, 0, 0]);
export var CapacityTaskSummary = struct(
  n0,
  _CTS,
  0,
  [_CTI, _OIu, _OIr, _AIs, _CTSa, _CD, _CDo, _LMD],
  [0, 0, 0, 0, 0, 4, 4, 4]
);
export var ComputeAttributes = struct(
  n0,
  _CA,
  0,
  [_HI, _S, _IF, _ITC, _MV],
  [0, 0, 64 | 0, () => AssetInstanceCapacityList, 1]
);
export var GetOutpostBillingInformationInput = struct(
  n0,
  _GOBII,
  0,
  [_NT, _MR, _OI],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [0, 1],
  ]
);
export var GetOutpostBillingInformationOutput = struct(n0, _GOBIO, 0, [_NT, _Su, _CED], [0, () => SubscriptionList, 0]);
export var GetOutpostInstanceTypesInput = struct(
  n0,
  _GOITI,
  0,
  [_OIu, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var GetOutpostInstanceTypesOutput = struct(
  n0,
  _GOITO,
  0,
  [_ITn, _NT, _OIu, _OAu],
  [() => InstanceTypeListDefinition, 0, 0, 0]
);
export var GetOutpostSupportedInstanceTypesInput = struct(
  n0,
  _GOSITI,
  0,
  [_OI, _OIr, _AIs, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _OIr,
      },
    ],
    [
      0,
      {
        [_hQ]: _AIs,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetOutpostSupportedInstanceTypesOutput = struct(
  n0,
  _GOSITO,
  0,
  [_ITn, _NT],
  [() => InstanceTypeListDefinition, 0]
);
export var InstanceTypeItem = struct(n0, _ITI, 0, [_IT, _VCPU], [0, 1]);
export var ListAssetInstancesInput = struct(
  n0,
  _LAII,
  0,
  [_OI, _AIF, _ITF, _AIFc, _ASF, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _AIF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ITF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _AIFc,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ASF,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListAssetInstancesOutput = struct(n0, _LAIO, 0, [_AIsse, _NT], [() => AssetInstanceList, 0]);
export var ListAssetsInput = struct(
  n0,
  _LAI,
  0,
  [_OI, _HIF, _MR, _NT, _SF],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _HIF,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _SF,
      },
    ],
  ]
);
export var ListAssetsOutput = struct(n0, _LAO, 0, [_As, _NT], [() => AssetListDefinition, 0]);
export var ListBlockingInstancesForCapacityTaskInput = struct(
  n0,
  _LBIFCTI,
  0,
  [_OI, _CTI, _MR, _NT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListBlockingInstancesForCapacityTaskOutput = struct(
  n0,
  _LBIFCTO,
  0,
  [_BIl, _NT],
  [() => BlockingInstancesList, 0]
);
export var ListCapacityTasksInput = struct(
  n0,
  _LCTI,
  0,
  [_OIF, _MR, _NT, _CTSF],
  [
    [
      0,
      {
        [_hQ]: _OIF,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _CTSF,
      },
    ],
  ]
);
export var ListCapacityTasksOutput = struct(n0, _LCTO, 0, [_CT, _NT], [() => CapacityTaskList, 0]);
export var ListCatalogItemsInput = struct(
  n0,
  _LCII,
  0,
  [_NT, _MR, _ICF, _SSF, _ECFF],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ICF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _SSF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ECFF,
      },
    ],
  ]
);
export var ListCatalogItemsOutput = struct(n0, _LCIO, 0, [_CIa, _NT], [() => CatalogItemListDefinition, 0]);
export var ListOrdersInput = struct(
  n0,
  _LOI,
  0,
  [_OIF, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _OIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListOrdersOutput = struct(n0, _LOO, 0, [_Or, _NT], [() => OrderSummaryListDefinition, 0]);
export var ListOutpostsInput = struct(
  n0,
  _LOIi,
  0,
  [_NT, _MR, _LCSF, _AZF, _AZIF],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _LCSF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _AZF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _AZIF,
      },
    ],
  ]
);
export var ListOutpostsOutput = struct(n0, _LOOi, 0, [_Out, _NT], [() => outpostListDefinition, 0]);
export var ListSitesInput = struct(
  n0,
  _LSI,
  0,
  [_NT, _MR, _OACCF, _OASORF, _OACF],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _OACCF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _OASORF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _OACF,
      },
    ],
  ]
);
export var ListSitesOutput = struct(n0, _LSO, 0, [_Sit, _NT], [() => siteListDefinition, 0]);
export var OrderSummary = struct(n0, _OS, 0, [_OIu, _OIr, _OT, _St, _LICBS, _OSD, _OFD], [0, 0, 0, 0, 128 | 1, 4, 4]);
export var Subscription = struct(
  n0,
  _Sub,
  0,
  [_SIu, _ST, _SSu, _OIrd, _BD, _ED, _MRP, _UP],
  [0, 0, 0, 64 | 0, 4, 4, 1, 1]
);
export var AssetIdList = 64 | 0;

export var AssetInstanceCapacityList = list(n0, _AICL, 0, () => AssetInstanceTypeCapacity);
export var AssetInstanceList = list(n0, _AILs, 0, () => AssetInstance);
export var AssetListDefinition = list(n0, _ALD, 0, () => AssetInfo);
export var AvailabilityZoneIdList = 64 | 0;

export var AvailabilityZoneList = 64 | 0;

export var BlockingInstancesList = list(n0, _BIL, 0, () => BlockingInstance);
export var CapacityTaskList = list(n0, _CTL, 0, () => CapacityTaskSummary);
export var CapacityTaskStatusList = 64 | 0;

export var CatalogItemClassList = 64 | 0;

export var CatalogItemListDefinition = list(n0, _CILD, 0, () => CatalogItem);
export var CityList = 64 | 0;

export var CountryCodeList = 64 | 0;

export var EC2FamilyList = 64 | 0;

export var HostIdList = 64 | 0;

export var InstanceFamilies = 64 | 0;

export var InstanceTypeListDefinition = list(n0, _ITLD, 0, () => InstanceTypeItem);
export var LifeCycleStatusList = 64 | 0;

export var OrderIdList = 64 | 0;

export var OrderSummaryListDefinition = list(n0, _OSLD, 0, () => OrderSummary);
export var OutpostInstanceTypeList = 64 | 0;

export var outpostListDefinition = list(n0, _oLD, 0, () => Outpost);
export var siteListDefinition = list(n0, _sLD, 0, () => Site);
export var StateOrRegionList = 64 | 0;

export var StatusList = 64 | 0;

export var SubscriptionList = list(n0, _SL, 0, () => Subscription);
export var LineItemStatusCounts = 128 | 1;

export var GetOutpostBillingInformation = op(
  n0,
  _GOBI,
  {
    [_h]: ["GET", "/outpost/{OutpostIdentifier}/billing-information", 200],
  },
  () => GetOutpostBillingInformationInput,
  () => GetOutpostBillingInformationOutput
);
export var GetOutpostInstanceTypes = op(
  n0,
  _GOIT,
  {
    [_h]: ["GET", "/outposts/{OutpostId}/instanceTypes", 200],
  },
  () => GetOutpostInstanceTypesInput,
  () => GetOutpostInstanceTypesOutput
);
export var GetOutpostSupportedInstanceTypes = op(
  n0,
  _GOSIT,
  {
    [_h]: ["GET", "/outposts/{OutpostIdentifier}/supportedInstanceTypes", 200],
  },
  () => GetOutpostSupportedInstanceTypesInput,
  () => GetOutpostSupportedInstanceTypesOutput
);
export var ListAssetInstances = op(
  n0,
  _LAIi,
  {
    [_h]: ["GET", "/outposts/{OutpostIdentifier}/assetInstances", 200],
  },
  () => ListAssetInstancesInput,
  () => ListAssetInstancesOutput
);
export var ListAssets = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/outposts/{OutpostIdentifier}/assets", 200],
  },
  () => ListAssetsInput,
  () => ListAssetsOutput
);
export var ListBlockingInstancesForCapacityTask = op(
  n0,
  _LBIFCT,
  {
    [_h]: ["GET", "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}/blockingInstances", 200],
  },
  () => ListBlockingInstancesForCapacityTaskInput,
  () => ListBlockingInstancesForCapacityTaskOutput
);
export var ListCapacityTasks = op(
  n0,
  _LCT,
  {
    [_h]: ["GET", "/capacity/tasks", 200],
  },
  () => ListCapacityTasksInput,
  () => ListCapacityTasksOutput
);
export var ListCatalogItems = op(
  n0,
  _LCI,
  {
    [_h]: ["GET", "/catalog/items", 200],
  },
  () => ListCatalogItemsInput,
  () => ListCatalogItemsOutput
);
export var ListOrders = op(
  n0,
  _LO,
  {
    [_h]: ["GET", "/list-orders", 200],
  },
  () => ListOrdersInput,
  () => ListOrdersOutput
);
export var ListOutposts = op(
  n0,
  _LOi,
  {
    [_h]: ["GET", "/outposts", 200],
  },
  () => ListOutpostsInput,
  () => ListOutpostsOutput
);
export var ListSites = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/sites", 200],
  },
  () => ListSitesInput,
  () => ListSitesOutput
);
