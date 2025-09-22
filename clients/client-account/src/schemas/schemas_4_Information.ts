// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AI,
  _AL,
  _ALd,
  _ALdd,
  _ALddr,
  _C,
  _CC,
  _CI,
  _CIPN,
  _CN,
  _DOC,
  _FN,
  _h,
  _PC,
  _PCI,
  _PCIR,
  _PN,
  _SOR,
  _WU,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddressLine = sim(n0, _AL, 0, 8);
export var City = sim(n0, _C, 0, 8);
export var CompanyName = sim(n0, _CN, 0, 8);
export var ContactInformationPhoneNumber = sim(n0, _CIPN, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var DistrictOrCounty = sim(n0, _DOC, 0, 8);
export var FullName = sim(n0, _FN, 0, 8);
export var PostalCode = sim(n0, _PC, 0, 8);
export var StateOrRegion = sim(n0, _SOR, 0, 8);
export var WebsiteUrl = sim(n0, _WU, 0, 8);
export var ContactInformation = struct(
  n0,
  _CI,
  0,
  [_FN, _ALd, _ALdd, _ALddr, _C, _SOR, _DOC, _PC, _CC, _PN, _CN, _WU],
  [
    [() => FullName, 0],
    [() => AddressLine, 0],
    [() => AddressLine, 0],
    [() => AddressLine, 0],
    [() => City, 0],
    [() => StateOrRegion, 0],
    [() => DistrictOrCounty, 0],
    [() => PostalCode, 0],
    [() => CountryCode, 0],
    [() => ContactInformationPhoneNumber, 0],
    [() => CompanyName, 0],
    [() => WebsiteUrl, 0],
  ]
);
export var PutContactInformationRequest = struct(n0, _PCIR, 0, [_CI, _AI], [[() => ContactInformation, 0], 0]);
export var PutContactInformation = op(
  n0,
  _PCI,
  {
    [_h]: ["POST", "/putContactInformation", 200],
  },
  () => PutContactInformationRequest,
  () => Unit
);
