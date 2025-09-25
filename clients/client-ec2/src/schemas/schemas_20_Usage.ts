// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _aIc,
  _AIcc,
  _aISc,
  _CIUR,
  _CIURR,
  _CIURRr,
  _CT,
  _CTre,
  _cTre,
  _DIUR,
  _DIURE,
  _DIURe,
  _DIURER,
  _DIURERe,
  _DIURR,
  _DIURRe,
  _DIURRes,
  _DIURResc,
  _DR,
  _eQN,
  _ET,
  _eT,
  _Fi,
  _Fil,
  _IIm,
  _IIma,
  _iIma,
  _it,
  _IUR,
  _IURE,
  _IUREL,
  _IUREm,
  _iURES,
  _IURL,
  _IURm,
  _iURS,
  _IURT,
  _IURTL,
  _IURTO,
  _IURTOL,
  _IURTOR,
  _IURTORL,
  _IURTOVL,
  _IURTR,
  _IURTRL,
  _IURUISL,
  _MR,
  _NTe,
  _nTe,
  _ON,
  _oN,
  _OV,
  _OVp,
  _oVS,
  _R,
  _r,
  _RCT,
  _rCT,
  _RI,
  _rI,
  _RIep,
  _RTe,
  _rTe,
  _RTes,
  _RTO,
  _RTOe,
  _rTOS,
  _rTSe,
  _SRt,
  _sRt,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _UCs,
  _uCs,
  _UI,
  _UILs,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateImageUsageReportRequest = struct(
  n0,
  _CIURR,
  0,
  [_IIm, _DR, _RTes, _AIc, _CT, _TS],
  [
    0,
    2,
    [
      () => ImageUsageResourceTypeRequestList,
      {
        [_xN]: _RTe,
      },
    ],
    [
      () => ImageUsageReportUserIdStringList,
      {
        [_xN]: _AIcc,
      },
    ],
    [0, 4],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateImageUsageReportResult = struct(
  n0,
  _CIURRr,
  0,
  [_RI],
  [
    [
      0,
      {
        [_eQN]: `ReportId`,
        [_xN]: _rI,
      },
    ],
  ]
);
export var DeleteImageUsageReportRequest = struct(n0, _DIURR, 0, [_RI, _DR], [0, 2]);
export var DeleteImageUsageReportResult = struct(
  n0,
  _DIURRe,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var DescribeImageUsageReportEntriesRequest = struct(
  n0,
  _DIURER,
  0,
  [_IIma, _RIep, _NTe, _Fi, _DR, _MR],
  [
    [
      64 | 0,
      {
        [_xN]: _IIm,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _RI,
      },
    ],
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
    1,
  ]
);
export var DescribeImageUsageReportEntriesResult = struct(
  n0,
  _DIURERe,
  0,
  [_NTe, _IURE],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ImageUsageReportEntryList,
      {
        [_eQN]: `ImageUsageReportEntrySet`,
        [_xN]: _iURES,
      },
    ],
  ]
);
export var DescribeImageUsageReportsRequest = struct(
  n0,
  _DIURRes,
  0,
  [_IIma, _RIep, _NTe, _Fi, _DR, _MR],
  [
    [
      64 | 0,
      {
        [_xN]: _IIm,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _RI,
      },
    ],
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
    1,
  ]
);
export var DescribeImageUsageReportsResult = struct(
  n0,
  _DIURResc,
  0,
  [_NTe, _IUR],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ImageUsageReportList,
      {
        [_eQN]: `ImageUsageReportSet`,
        [_xN]: _iURS,
      },
    ],
  ]
);
export var ImageUsageReport = struct(
  n0,
  _IURm,
  0,
  [_IIm, _RI, _RTes, _AIc, _St, _SRt, _CTre, _ET, _T],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReportId`,
        [_xN]: _rI,
      },
    ],
    [
      () => ImageUsageResourceTypeList,
      {
        [_eQN]: `ResourceTypeSet`,
        [_xN]: _rTSe,
      },
    ],
    [
      () => UserIdList,
      {
        [_eQN]: `AccountIdSet`,
        [_xN]: _aISc,
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
        [_eQN]: `StateReason`,
        [_xN]: _sRt,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
      },
    ],
    [
      4,
      {
        [_eQN]: `ExpirationTime`,
        [_xN]: _eT,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var ImageUsageReportEntry = struct(
  n0,
  _IUREm,
  0,
  [_RTe, _RI, _UCs, _AIcc, _IIm, _RCT],
  [
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReportId`,
        [_xN]: _rI,
      },
    ],
    [
      1,
      {
        [_eQN]: `UsageCount`,
        [_xN]: _uCs,
      },
    ],
    [
      0,
      {
        [_eQN]: `AccountId`,
        [_xN]: _aIc,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      4,
      {
        [_eQN]: `ReportCreationTime`,
        [_xN]: _rCT,
      },
    ],
  ]
);
export var ImageUsageResourceType = struct(
  n0,
  _IURT,
  0,
  [_RTe, _RTO],
  [
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => ImageUsageResourceTypeOptionList,
      {
        [_eQN]: `ResourceTypeOptionSet`,
        [_xN]: _rTOS,
      },
    ],
  ]
);
export var ImageUsageResourceTypeOption = struct(
  n0,
  _IURTO,
  0,
  [_ON, _OV],
  [
    [
      0,
      {
        [_eQN]: `OptionName`,
        [_xN]: _oN,
      },
    ],
    [
      () => ImageUsageResourceTypeOptionValuesList,
      {
        [_eQN]: `OptionValueSet`,
        [_xN]: _oVS,
      },
    ],
  ]
);
export var ImageUsageResourceTypeOptionRequest = struct(
  n0,
  _IURTOR,
  0,
  [_ON, _OV],
  [
    0,
    [
      () => ImageUsageResourceTypeOptionValuesList,
      {
        [_xN]: _OVp,
      },
    ],
  ]
);
export var ImageUsageResourceTypeRequest = struct(
  n0,
  _IURTR,
  0,
  [_RTe, _RTO],
  [
    0,
    [
      () => ImageUsageResourceTypeOptionRequestList,
      {
        [_xN]: _RTOe,
      },
    ],
  ]
);
export var DescribeImageUsageReportsImageIdStringList = 64 | 0;

export var ImageUsageReportEntryList = list(n0, _IUREL, 0, [
  () => ImageUsageReportEntry,
  {
    [_xN]: _it,
  },
]);
export var ImageUsageReportIdStringList = 64 | 0;

export var ImageUsageReportList = list(n0, _IURL, 0, [
  () => ImageUsageReport,
  {
    [_xN]: _it,
  },
]);
export var ImageUsageReportUserIdStringList = list(n0, _IURUISL, 0, [
  0,
  {
    [_xN]: _UI,
  },
]);
export var ImageUsageResourceTypeList = list(n0, _IURTL, 0, [
  () => ImageUsageResourceType,
  {
    [_xN]: _it,
  },
]);
export var ImageUsageResourceTypeOptionList = list(n0, _IURTOL, 0, [
  () => ImageUsageResourceTypeOption,
  {
    [_xN]: _it,
  },
]);
export var ImageUsageResourceTypeOptionRequestList = list(n0, _IURTORL, 0, [
  () => ImageUsageResourceTypeOptionRequest,
  0,
]);
export var ImageUsageResourceTypeOptionValuesList = list(n0, _IURTOVL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ImageUsageResourceTypeRequestList = list(n0, _IURTRL, 0, [() => ImageUsageResourceTypeRequest, 0]);
export var UserIdList = list(n0, _UILs, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CreateImageUsageReport = op(
  n0,
  _CIUR,
  0,
  () => CreateImageUsageReportRequest,
  () => CreateImageUsageReportResult
);
export var DeleteImageUsageReport = op(
  n0,
  _DIUR,
  0,
  () => DeleteImageUsageReportRequest,
  () => DeleteImageUsageReportResult
);
export var DescribeImageUsageReportEntries = op(
  n0,
  _DIURE,
  0,
  () => DescribeImageUsageReportEntriesRequest,
  () => DescribeImageUsageReportEntriesResult
);
export var DescribeImageUsageReports = op(
  n0,
  _DIURe,
  0,
  () => DescribeImageUsageReportsRequest,
  () => DescribeImageUsageReportsResult
);
