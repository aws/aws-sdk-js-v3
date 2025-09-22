// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACD,
  _ACDR,
  _ACDRs,
  _CD,
  _CDL,
  _CDu,
  _CVR,
  _CVRe,
  _CVRL,
  _DCD,
  _DCDi,
  _DCDR,
  _DCDRe,
  _DCDRi,
  _DCDRis,
  _DN,
  _DNST,
  _EWWWS,
  _MR,
  _N,
  _NT,
  _S,
  _SA,
  _T,
  _V,
  _VDNST,
  _VDNSTL,
  _VDNSTp,
  _VI,
  _VICA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateCustomDomainRequest = struct(n0, _ACDR, 0, [_SA, _DN, _EWWWS], [0, 0, 2]);
export var AssociateCustomDomainResponse = struct(
  n0,
  _ACDRs,
  0,
  [_DNST, _SA, _CD, _VDNST],
  [0, 0, () => CustomDomain, () => VpcDNSTargetList]
);
export var CertificateValidationRecord = struct(n0, _CVR, 0, [_N, _T, _V, _S], [0, 0, 0, 0]);
export var CustomDomain = struct(
  n0,
  _CD,
  0,
  [_DN, _EWWWS, _CVRe, _S],
  [0, 2, () => CertificateValidationRecordList, 0]
);
export var DescribeCustomDomainsRequest = struct(n0, _DCDR, 0, [_SA, _NT, _MR], [0, 0, 1]);
export var DescribeCustomDomainsResponse = struct(
  n0,
  _DCDRe,
  0,
  [_DNST, _SA, _CDu, _VDNST, _NT],
  [0, 0, () => CustomDomainList, () => VpcDNSTargetList, 0]
);
export var DisassociateCustomDomainRequest = struct(n0, _DCDRi, 0, [_SA, _DN], [0, 0]);
export var DisassociateCustomDomainResponse = struct(
  n0,
  _DCDRis,
  0,
  [_DNST, _SA, _CD, _VDNST],
  [0, 0, () => CustomDomain, () => VpcDNSTargetList]
);
export var VpcDNSTarget = struct(n0, _VDNSTp, 0, [_VICA, _VI, _DN], [0, 0, 0]);
export var CertificateValidationRecordList = list(n0, _CVRL, 0, () => CertificateValidationRecord);
export var CustomDomainList = list(n0, _CDL, 0, () => CustomDomain);
export var VpcDNSTargetList = list(n0, _VDNSTL, 0, () => VpcDNSTarget);
export var AssociateCustomDomain = op(
  n0,
  _ACD,
  0,
  () => AssociateCustomDomainRequest,
  () => AssociateCustomDomainResponse
);
export var DescribeCustomDomains = op(
  n0,
  _DCD,
  0,
  () => DescribeCustomDomainsRequest,
  () => DescribeCustomDomainsResponse
);
export var DisassociateCustomDomain = op(
  n0,
  _DCDi,
  0,
  () => DisassociateCustomDomainRequest,
  () => DisassociateCustomDomainResponse
);
