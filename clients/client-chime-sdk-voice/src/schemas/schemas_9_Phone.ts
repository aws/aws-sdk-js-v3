// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ac,
  _CC,
  _Ci,
  _ci,
  _Co,
  _co,
  _DNIS,
  _DNISECC,
  _DNISECCL,
  _ECC,
  _EPNh,
  _EPNm,
  _GVCECC,
  _GVCECCR,
  _GVCECCRe,
  _h,
  _hQ,
  _MR,
  _mr,
  _NT,
  _nt,
  _PNT,
  _pnt,
  _PVCECC,
  _PVCECCR,
  _PVCECCRu,
  _s,
  _SAPN,
  _SAPNR,
  _SAPNRe,
  _St,
  _TFP,
  _tfp,
  _TPNe,
  _VCI,
  E164PhoneNumber,
  n0,
} from "./schemas_0";
import { E164PhoneNumberList } from "./schemas_43_Phone";

/* eslint no-var: 0 */

export var DNISEmergencyCallingConfiguration = struct(
  n0,
  _DNISECC,
  0,
  [_EPNm, _TPNe, _CC],
  [[() => E164PhoneNumber, 0], [() => E164PhoneNumber, 0], 0]
);
export var EmergencyCallingConfiguration = struct(
  n0,
  _ECC,
  0,
  [_DNIS],
  [[() => DNISEmergencyCallingConfigurationList, 0]]
);
export var GetVoiceConnectorEmergencyCallingConfigurationRequest = struct(n0, _GVCECCR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorEmergencyCallingConfigurationResponse = struct(
  n0,
  _GVCECCRe,
  0,
  [_ECC],
  [[() => EmergencyCallingConfiguration, 0]]
);
export var PutVoiceConnectorEmergencyCallingConfigurationRequest = struct(
  n0,
  _PVCECCR,
  0,
  [_VCI, _ECC],
  [
    [0, 1],
    [() => EmergencyCallingConfiguration, 0],
  ]
);
export var PutVoiceConnectorEmergencyCallingConfigurationResponse = struct(
  n0,
  _PVCECCRu,
  0,
  [_ECC],
  [[() => EmergencyCallingConfiguration, 0]]
);
export var SearchAvailablePhoneNumbersRequest = struct(
  n0,
  _SAPNR,
  0,
  [_AC, _Ci, _Co, _St, _TFP, _PNT, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _ac,
      },
    ],
    [
      0,
      {
        [_hQ]: _ci,
      },
    ],
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _tfp,
      },
    ],
    [
      0,
      {
        [_hQ]: _pnt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var SearchAvailablePhoneNumbersResponse = struct(
  n0,
  _SAPNRe,
  0,
  [_EPNh, _NT],
  [[() => E164PhoneNumberList, 0], 0]
);
export var DNISEmergencyCallingConfigurationList = list(n0, _DNISECCL, 0, [() => DNISEmergencyCallingConfiguration, 0]);
export var GetVoiceConnectorEmergencyCallingConfiguration = op(
  n0,
  _GVCECC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", 200],
  },
  () => GetVoiceConnectorEmergencyCallingConfigurationRequest,
  () => GetVoiceConnectorEmergencyCallingConfigurationResponse
);
export var PutVoiceConnectorEmergencyCallingConfiguration = op(
  n0,
  _PVCECC,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", 200],
  },
  () => PutVoiceConnectorEmergencyCallingConfigurationRequest,
  () => PutVoiceConnectorEmergencyCallingConfigurationResponse
);
export var SearchAvailablePhoneNumbers = op(
  n0,
  _SAPN,
  {
    [_h]: ["GET", "/search?type=phone-numbers", 200],
  },
  () => SearchAvailablePhoneNumbersRequest,
  () => SearchAvailablePhoneNumbersResponse
);
