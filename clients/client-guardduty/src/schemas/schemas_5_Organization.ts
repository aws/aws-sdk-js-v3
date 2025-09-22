// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _AE,
  _aE,
  _AEOM,
  _aEOM,
  _AIcc,
  _aIcc,
  _AL,
  _aL,
  _DI,
  _dI,
  _DOC,
  _DOCR,
  _DOCRe,
  _DS,
  _dS,
  _EVb,
  _eVb,
  _F,
  _f,
  _hL,
  _hQ,
  _ht,
  _jN,
  _K,
  _k,
  _MAC,
  _MACem,
  _MALR,
  _mALR,
  _MFC,
  _MFCe,
  _MP,
  _mP,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _OAC,
  _OACR,
  _OACr,
  _OACRr,
  _ODSC,
  _ODSCR,
  _OEV,
  _OEVR,
  _OFC,
  _OFCR,
  _OFCr,
  _OFCRr,
  _OKALC,
  _OKALCR,
  _OKC,
  _OKCR,
  _OMPC,
  _OMPCR,
  _OSEIWF,
  _OSEIWFR,
  _OSLC,
  _OSLCR,
  _SEIWF,
  _sEIWF,
  _SL,
  _sL,
  _St,
  _st,
  _UAn,
  _uAn,
  _UMD,
  _UMDR,
  _UMDRp,
  _UOC,
  _UOCR,
  _UOCRp,
  n0,
} from "./schemas_0";
import { DataSourceConfigurations } from "./schemas_1_Detector";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var DescribeOrganizationConfigurationRequest = struct(
  n0,
  _DOCR,
  0,
  [_DI, _MR, _NT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
        [_hQ]: _nT,
      },
    ],
  ]
);
export var DescribeOrganizationConfigurationResponse = struct(
  n0,
  _DOCRe,
  0,
  [_AE, _MALR, _DS, _F, _NT, _AEOM],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _mALR,
      },
    ],
    [
      () => OrganizationDataSourceConfigurationsResult,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => OrganizationFeaturesConfigurationsResults,
      {
        [_jN]: _f,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _aEOM,
      },
    ],
  ]
);
export var MemberAdditionalConfiguration = struct(
  n0,
  _MAC,
  0,
  [_N, _St],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var MemberFeaturesConfiguration = struct(
  n0,
  _MFC,
  0,
  [_N, _St, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => MemberAdditionalConfigurations,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var OrganizationAdditionalConfiguration = struct(
  n0,
  _OAC,
  0,
  [_N, _AE],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationAdditionalConfigurationResult = struct(
  n0,
  _OACR,
  0,
  [_N, _AE],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationDataSourceConfigurations = struct(
  n0,
  _ODSC,
  0,
  [_SL, _K, _MP],
  [
    [
      () => OrganizationS3LogsConfiguration,
      {
        [_jN]: _sL,
      },
    ],
    [
      () => OrganizationKubernetesConfiguration,
      {
        [_jN]: _k,
      },
    ],
    [
      () => OrganizationMalwareProtectionConfiguration,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var OrganizationDataSourceConfigurationsResult = struct(
  n0,
  _ODSCR,
  0,
  [_SL, _K, _MP],
  [
    [
      () => OrganizationS3LogsConfigurationResult,
      {
        [_jN]: _sL,
      },
    ],
    [
      () => OrganizationKubernetesConfigurationResult,
      {
        [_jN]: _k,
      },
    ],
    [
      () => OrganizationMalwareProtectionConfigurationResult,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var OrganizationEbsVolumes = struct(
  n0,
  _OEV,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationEbsVolumesResult = struct(
  n0,
  _OEVR,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationFeatureConfiguration = struct(
  n0,
  _OFC,
  0,
  [_N, _AE, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      () => OrganizationAdditionalConfigurations,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var OrganizationFeatureConfigurationResult = struct(
  n0,
  _OFCR,
  0,
  [_N, _AE, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      () => OrganizationAdditionalConfigurationResults,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var OrganizationKubernetesAuditLogsConfiguration = struct(
  n0,
  _OKALC,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationKubernetesAuditLogsConfigurationResult = struct(
  n0,
  _OKALCR,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationKubernetesConfiguration = struct(
  n0,
  _OKC,
  0,
  [_AL],
  [
    [
      () => OrganizationKubernetesAuditLogsConfiguration,
      {
        [_jN]: _aL,
      },
    ],
  ]
);
export var OrganizationKubernetesConfigurationResult = struct(
  n0,
  _OKCR,
  0,
  [_AL],
  [
    [
      () => OrganizationKubernetesAuditLogsConfigurationResult,
      {
        [_jN]: _aL,
      },
    ],
  ]
);
export var OrganizationMalwareProtectionConfiguration = struct(
  n0,
  _OMPC,
  0,
  [_SEIWF],
  [
    [
      () => OrganizationScanEc2InstanceWithFindings,
      {
        [_jN]: _sEIWF,
      },
    ],
  ]
);
export var OrganizationMalwareProtectionConfigurationResult = struct(
  n0,
  _OMPCR,
  0,
  [_SEIWF],
  [
    [
      () => OrganizationScanEc2InstanceWithFindingsResult,
      {
        [_jN]: _sEIWF,
      },
    ],
  ]
);
export var OrganizationS3LogsConfiguration = struct(
  n0,
  _OSLC,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationS3LogsConfigurationResult = struct(
  n0,
  _OSLCR,
  0,
  [_AE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var OrganizationScanEc2InstanceWithFindings = struct(
  n0,
  _OSEIWF,
  0,
  [_EVb],
  [
    [
      () => OrganizationEbsVolumes,
      {
        [_jN]: _eVb,
      },
    ],
  ]
);
export var OrganizationScanEc2InstanceWithFindingsResult = struct(
  n0,
  _OSEIWFR,
  0,
  [_EVb],
  [
    [
      () => OrganizationEbsVolumesResult,
      {
        [_jN]: _eVb,
      },
    ],
  ]
);
export var UpdateMemberDetectorsRequest = struct(
  n0,
  _UMDR,
  0,
  [_DI, _AIcc, _DS, _F],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
    [
      () => DataSourceConfigurations,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => MemberFeaturesConfigurations,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var UpdateMemberDetectorsResponse = struct(
  n0,
  _UMDRp,
  0,
  [_UAn],
  [
    [
      () => UnprocessedAccounts,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var UpdateOrganizationConfigurationRequest = struct(
  n0,
  _UOCR,
  0,
  [_DI, _AE, _DS, _F, _AEOM],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
    [
      () => OrganizationDataSourceConfigurations,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => OrganizationFeaturesConfigurations,
      {
        [_jN]: _f,
      },
    ],
    [
      0,
      {
        [_jN]: _aEOM,
      },
    ],
  ]
);
export var UpdateOrganizationConfigurationResponse = struct(n0, _UOCRp, 0, [], []);
export var MemberAdditionalConfigurations = list(n0, _MACem, 0, [() => MemberAdditionalConfiguration, 0]);
export var MemberFeaturesConfigurations = list(n0, _MFCe, 0, [() => MemberFeaturesConfiguration, 0]);
export var OrganizationAdditionalConfigurationResults = list(n0, _OACRr, 0, [
  () => OrganizationAdditionalConfigurationResult,
  0,
]);
export var OrganizationAdditionalConfigurations = list(n0, _OACr, 0, [() => OrganizationAdditionalConfiguration, 0]);
export var OrganizationFeaturesConfigurations = list(n0, _OFCr, 0, [() => OrganizationFeatureConfiguration, 0]);
export var OrganizationFeaturesConfigurationsResults = list(n0, _OFCRr, 0, [
  () => OrganizationFeatureConfigurationResult,
  0,
]);
export var DescribeOrganizationConfiguration = op(
  n0,
  _DOC,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/admin", 200],
  },
  () => DescribeOrganizationConfigurationRequest,
  () => DescribeOrganizationConfigurationResponse
);
export var UpdateMemberDetectors = op(
  n0,
  _UMD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/detector/update", 200],
  },
  () => UpdateMemberDetectorsRequest,
  () => UpdateMemberDetectorsResponse
);
export var UpdateOrganizationConfiguration = op(
  n0,
  _UOC,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/admin", 200],
  },
  () => UpdateOrganizationConfigurationRequest,
  () => UpdateOrganizationConfigurationResponse
);
