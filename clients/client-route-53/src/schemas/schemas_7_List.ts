// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _d,
  _de,
  _DNSN,
  _DS,
  _DSe,
  _DSI,
  _GLD,
  _GLDL,
  _h,
  _HC,
  _HCe,
  _ho,
  _hQ,
  _ht,
  _HZ,
  _HZI,
  _HZIM,
  _HZo,
  _HZT,
  _I,
  _i,
  _id,
  _IT,
  _LGL,
  _LGLR,
  _LGLRi,
  _LHC,
  _LHCR,
  _LHCRi,
  _LHZ,
  _LHZBN,
  _LHZBNR,
  _LHZBNRi,
  _LHZR,
  _LHZRi,
  _LRDS,
  _LRDSR,
  _LRDSRi,
  _LRRS,
  _LRRSR,
  _LRRSRi,
  _LTP,
  _LTPI,
  _LTPIBHZ,
  _LTPIBHZR,
  _LTPIBHZRi,
  _LTPIBP,
  _LTPIBPR,
  _LTPIBPRi,
  _LTPIR,
  _LTPIRi,
  _LTPR,
  _LTPRi,
  _LTPV,
  _LTPVR,
  _LTPVRi,
  _LV,
  _Ma,
  _mar,
  _max,
  _MI,
  _N,
  _na,
  _NCC,
  _NCCe,
  _NDNSN,
  _NHZI,
  _NM,
  _NRI,
  _NRN,
  _NRT,
  _NSC,
  _RRS,
  _RRSe,
  _SCC,
  _SCCt,
  _SRI,
  _SRN,
  _SRT,
  _SSC,
  _st,
  _sta,
  _star,
  _T,
  _t,
  _TP,
  _TPC,
  _TPI,
  _TPIM,
  _TPINM,
  _TPIr,
  _TPIra,
  _TPITM,
  _TPr,
  _TPS,
  _TPSr,
  _TPV,
  _TPVM,
  _tr,
  _tra,
  _traf,
  _traff,
  _ve,
  _xN,
  n0,
} from "./schemas_0";
import { ResourceRecordSet, TrafficPolicyInstance } from "./schemas_4_Policy";
import { HealthCheck } from "./schemas_5_Hosted";
import { DelegationSet, HostedZone } from "./schemas_9_Hosted";
import { GeoLocationDetails } from "./schemas_20_Geo";
import { TrafficPolicy } from "./schemas_28_Traffic";

/* eslint no-var: 0 */

export var ListGeoLocationsRequest = struct(
  n0,
  _LGLR,
  0,
  [_SCC, _SCCt, _SSC, _MI],
  [
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
    [
      0,
      {
        [_hQ]: _star,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListGeoLocationsResponse = struct(
  n0,
  _LGLRi,
  0,
  [_GLDL, _IT, _NCC, _NCCe, _NSC, _MI],
  [[() => GeoLocationDetailsList, 0], 2, 0, 0, 0, 1]
);
export var ListHealthChecksRequest = struct(
  n0,
  _LHCR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _mar,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListHealthChecksResponse = struct(
  n0,
  _LHCRi,
  0,
  [_HCe, _Ma, _IT, _NM, _MI],
  [[() => HealthChecks, 0], 0, 2, 0, 1]
);
export var ListHostedZonesByNameRequest = struct(
  n0,
  _LHZBNR,
  0,
  [_DNSN, _HZI, _MI],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _h,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListHostedZonesByNameResponse = struct(
  n0,
  _LHZBNRi,
  0,
  [_HZo, _DNSN, _HZI, _IT, _NDNSN, _NHZI, _MI],
  [[() => HostedZones, 0], 0, 0, 2, 0, 0, 1]
);
export var ListHostedZonesRequest = struct(
  n0,
  _LHZR,
  0,
  [_Ma, _MI, _DSI, _HZT],
  [
    [
      0,
      {
        [_hQ]: _mar,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
    [
      0,
      {
        [_hQ]: _de,
      },
    ],
    [
      0,
      {
        [_hQ]: _ho,
      },
    ],
  ]
);
export var ListHostedZonesResponse = struct(
  n0,
  _LHZRi,
  0,
  [_HZo, _Ma, _IT, _NM, _MI],
  [[() => HostedZones, 0], 0, 2, 0, 1]
);
export var ListResourceRecordSetsRequest = struct(
  n0,
  _LRRSR,
  0,
  [_HZI, _SRN, _SRT, _SRI, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListResourceRecordSetsResponse = struct(
  n0,
  _LRRSRi,
  0,
  [_RRSe, _IT, _NRN, _NRT, _NRI, _MI],
  [[() => ResourceRecordSets, 0], 2, 0, 0, 0, 1]
);
export var ListReusableDelegationSetsRequest = struct(
  n0,
  _LRDSR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _mar,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListReusableDelegationSetsResponse = struct(
  n0,
  _LRDSRi,
  0,
  [_DSe, _Ma, _IT, _NM, _MI],
  [[() => DelegationSets, 0], 0, 2, 0, 1]
);
export var ListTrafficPoliciesRequest = struct(
  n0,
  _LTPR,
  0,
  [_TPIM, _MI],
  [
    [
      0,
      {
        [_hQ]: _tr,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListTrafficPoliciesResponse = struct(
  n0,
  _LTPRi,
  0,
  [_TPS, _IT, _TPIM, _MI],
  [[() => TrafficPolicySummaries, 0], 2, 0, 1]
);
export var ListTrafficPolicyInstancesByHostedZoneRequest = struct(
  n0,
  _LTPIBHZR,
  0,
  [_HZI, _TPINM, _TPITM, _MI],
  [
    [
      0,
      {
        [_hQ]: _id,
      },
    ],
    [
      0,
      {
        [_hQ]: _tra,
      },
    ],
    [
      0,
      {
        [_hQ]: _traf,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListTrafficPolicyInstancesByHostedZoneResponse = struct(
  n0,
  _LTPIBHZRi,
  0,
  [_TPIra, _TPINM, _TPITM, _IT, _MI],
  [[() => TrafficPolicyInstances, 0], 0, 0, 2, 1]
);
export var ListTrafficPolicyInstancesByPolicyRequest = struct(
  n0,
  _LTPIBPR,
  0,
  [_TPI, _TPV, _HZIM, _TPINM, _TPITM, _MI],
  [
    [
      0,
      {
        [_hQ]: _id,
      },
    ],
    [
      1,
      {
        [_hQ]: _ve,
      },
    ],
    [
      0,
      {
        [_hQ]: _h,
      },
    ],
    [
      0,
      {
        [_hQ]: _tra,
      },
    ],
    [
      0,
      {
        [_hQ]: _traf,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListTrafficPolicyInstancesByPolicyResponse = struct(
  n0,
  _LTPIBPRi,
  0,
  [_TPIra, _HZIM, _TPINM, _TPITM, _IT, _MI],
  [[() => TrafficPolicyInstances, 0], 0, 0, 0, 2, 1]
);
export var ListTrafficPolicyInstancesRequest = struct(
  n0,
  _LTPIR,
  0,
  [_HZIM, _TPINM, _TPITM, _MI],
  [
    [
      0,
      {
        [_hQ]: _h,
      },
    ],
    [
      0,
      {
        [_hQ]: _tra,
      },
    ],
    [
      0,
      {
        [_hQ]: _traf,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListTrafficPolicyInstancesResponse = struct(
  n0,
  _LTPIRi,
  0,
  [_TPIra, _HZIM, _TPINM, _TPITM, _IT, _MI],
  [[() => TrafficPolicyInstances, 0], 0, 0, 0, 2, 1]
);
export var ListTrafficPolicyVersionsRequest = struct(
  n0,
  _LTPVR,
  0,
  [_I, _TPVM, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _traff,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
  ]
);
export var ListTrafficPolicyVersionsResponse = struct(
  n0,
  _LTPVRi,
  0,
  [_TPr, _IT, _TPVM, _MI],
  [[() => TrafficPolicies, 0], 2, 0, 1]
);
export var TrafficPolicySummary = struct(n0, _TPSr, 0, [_I, _N, _T, _LV, _TPC], [0, 0, 0, 1, 1]);
export var DelegationSets = list(n0, _DSe, 0, [
  () => DelegationSet,
  {
    [_xN]: _DS,
  },
]);
export var GeoLocationDetailsList = list(n0, _GLDL, 0, [
  () => GeoLocationDetails,
  {
    [_xN]: _GLD,
  },
]);
export var HealthChecks = list(n0, _HCe, 0, [
  () => HealthCheck,
  {
    [_xN]: _HC,
  },
]);
export var HostedZones = list(n0, _HZo, 0, [
  () => HostedZone,
  {
    [_xN]: _HZ,
  },
]);
export var ResourceRecordSets = list(n0, _RRSe, 0, [
  () => ResourceRecordSet,
  {
    [_xN]: _RRS,
  },
]);
export var TrafficPolicies = list(n0, _TPr, 0, [
  () => TrafficPolicy,
  {
    [_xN]: _TP,
  },
]);
export var TrafficPolicyInstances = list(n0, _TPIra, 0, [
  () => TrafficPolicyInstance,
  {
    [_xN]: _TPIr,
  },
]);
export var TrafficPolicySummaries = list(n0, _TPS, 0, [
  () => TrafficPolicySummary,
  {
    [_xN]: _TPSr,
  },
]);
export var ListGeoLocations = op(
  n0,
  _LGL,
  {
    [_ht]: ["GET", "/2013-04-01/geolocations", 200],
  },
  () => ListGeoLocationsRequest,
  () => ListGeoLocationsResponse
);
export var ListHealthChecks = op(
  n0,
  _LHC,
  {
    [_ht]: ["GET", "/2013-04-01/healthcheck", 200],
  },
  () => ListHealthChecksRequest,
  () => ListHealthChecksResponse
);
export var ListHostedZones = op(
  n0,
  _LHZ,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzone", 200],
  },
  () => ListHostedZonesRequest,
  () => ListHostedZonesResponse
);
export var ListHostedZonesByName = op(
  n0,
  _LHZBN,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzonesbyname", 200],
  },
  () => ListHostedZonesByNameRequest,
  () => ListHostedZonesByNameResponse
);
export var ListResourceRecordSets = op(
  n0,
  _LRRS,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzone/{HostedZoneId}/rrset", 200],
  },
  () => ListResourceRecordSetsRequest,
  () => ListResourceRecordSetsResponse
);
export var ListReusableDelegationSets = op(
  n0,
  _LRDS,
  {
    [_ht]: ["GET", "/2013-04-01/delegationset", 200],
  },
  () => ListReusableDelegationSetsRequest,
  () => ListReusableDelegationSetsResponse
);
export var ListTrafficPolicies = op(
  n0,
  _LTP,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicies", 200],
  },
  () => ListTrafficPoliciesRequest,
  () => ListTrafficPoliciesResponse
);
export var ListTrafficPolicyInstances = op(
  n0,
  _LTPI,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicyinstances", 200],
  },
  () => ListTrafficPolicyInstancesRequest,
  () => ListTrafficPolicyInstancesResponse
);
export var ListTrafficPolicyInstancesByHostedZone = op(
  n0,
  _LTPIBHZ,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicyinstances/hostedzone", 200],
  },
  () => ListTrafficPolicyInstancesByHostedZoneRequest,
  () => ListTrafficPolicyInstancesByHostedZoneResponse
);
export var ListTrafficPolicyInstancesByPolicy = op(
  n0,
  _LTPIBP,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicyinstances/trafficpolicy", 200],
  },
  () => ListTrafficPolicyInstancesByPolicyRequest,
  () => ListTrafficPolicyInstancesByPolicyResponse
);
export var ListTrafficPolicyVersions = op(
  n0,
  _LTPV,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicies/{Id}/versions", 200],
  },
  () => ListTrafficPolicyVersionsRequest,
  () => ListTrafficPolicyVersionsResponse
);
