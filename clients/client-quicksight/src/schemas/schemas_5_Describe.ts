// smithy-typescript generated code
import { list, sim, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AOc,
  _ASv,
  _CAI,
  _CANO,
  _CASPO,
  _CAURLO,
  _CIo,
  _CN,
  _CPV,
  _CVC,
  _CVu,
  _DDVL,
  _DPN,
  _DPVC,
  _DSIatae,
  _DTDVL,
  _DTV,
  _DVe,
  _I,
  _ICA,
  _ICAL,
  _ICAO,
  _ICAOL,
  _ICAT,
  _IDVL,
  _IIO,
  _IMO,
  _INV,
  _IV,
  _LNC,
  _N,
  _NOa,
  _PT,
  _PVC,
  _SAVO,
  _Scal,
  _SCour,
  _SDO,
  _SDVL,
  _SFIt,
  _SFo,
  _SIhe,
  _SII,
  _SILh,
  _SIS,
  _SISC,
  _SISFS,
  _SITC,
  _SITT,
  _SLO,
  _Sour,
  _SPN,
  _SPO,
  _SPVC,
  _SPVCL,
  _SSO,
  _St,
  _STc,
  _SVt,
  _To,
  _Tr,
  _TSI,
  _TTo,
  _URLO,
  _URLT,
  _URLTa,
  _V,
  _Vi,
  n0,
  SensitiveTimestamp,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveDoubleObject = sim(n0, _SDO, 1, 8);
export var SensitiveLongObject = sim(n0, _SLO, 1, 8);
export var SensitiveStringObject = sim(n0, _SSO, 0, 8);
export var ColumnIdentifier = struct(n0, _CIo, 0, [_DSIatae, _CN], [0, 0]);
export var CustomActionNavigationOperation = struct(n0, _CANO, 0, [_LNC], [() => LocalNavigationConfiguration]);
export var CustomActionSetParametersOperation = struct(
  n0,
  _CASPO,
  0,
  [_PVC],
  [() => SetParameterValueConfigurationList]
);
export var CustomActionURLOperation = struct(n0, _CAURLO, 0, [_URLT, _URLTa], [0, 0]);
export var CustomParameterValues = struct(
  n0,
  _CPV,
  0,
  [_SVt, _IV, _DVe, _DTV],
  [
    [() => StringDefaultValueList, 0],
    [() => IntegerDefaultValueList, 0],
    [() => DecimalDefaultValueList, 0],
    [() => DateTimeDefaultValueList, 0],
  ]
);
export var CustomValuesConfiguration = struct(n0, _CVC, 0, [_INV, _CVu], [2, [() => CustomParameterValues, 0]]);
export var DestinationParameterValueConfiguration = struct(
  n0,
  _DPVC,
  0,
  [_CVC, _SAVO, _SPN, _SFo, _SCour],
  [[() => CustomValuesConfiguration, 0], 0, 0, 0, () => ColumnIdentifier]
);
export var ImageCustomAction = struct(
  n0,
  _ICA,
  0,
  [_CAI, _N, _St, _Tr, _AOc],
  [0, 0, 0, 0, () => ImageCustomActionOperationList]
);
export var ImageCustomActionOperation = struct(
  n0,
  _ICAO,
  0,
  [_NOa, _URLO, _SPO],
  [() => CustomActionNavigationOperation, () => CustomActionURLOperation, () => CustomActionSetParametersOperation]
);
export var ImageInteractionOptions = struct(n0, _IIO, 0, [_IMO], [() => ImageMenuOption]);
export var ImageMenuOption = struct(n0, _IMO, 0, [_ASv], [0]);
export var LocalNavigationConfiguration = struct(n0, _LNC, 0, [_TSI], [0]);
export var SetParameterValueConfiguration = struct(
  n0,
  _SPVC,
  0,
  [_DPN, _V],
  [0, [() => DestinationParameterValueConfiguration, 0]]
);
export var SheetImage = struct(
  n0,
  _SIhe,
  0,
  [_SII, _Sour, _Scal, _To, _ICAT, _I, _Ac],
  [
    0,
    () => SheetImageSource,
    () => SheetImageScalingConfiguration,
    () => SheetImageTooltipConfiguration,
    0,
    () => ImageInteractionOptions,
    () => ImageCustomActionList,
  ]
);
export var SheetImageScalingConfiguration = struct(n0, _SISC, 0, [_STc], [0]);
export var SheetImageSource = struct(n0, _SIS, 0, [_SISFS], [() => SheetImageStaticFileSource]);
export var SheetImageStaticFileSource = struct(n0, _SISFS, 0, [_SFIt], [0]);
export var SheetImageTooltipConfiguration = struct(n0, _SITC, 0, [_TTo, _Vi], [() => SheetImageTooltipText, 0]);
export var SheetImageTooltipText = struct(n0, _SITT, 0, [_PT], [0]);
export var DateTimeDefaultValueList = list(n0, _DTDVL, 0, [() => SensitiveTimestamp, 0]);
export var DecimalDefaultValueList = list(n0, _DDVL, 0, [() => SensitiveDoubleObject, 0]);
export var ImageCustomActionList = list(n0, _ICAL, 0, () => ImageCustomAction);
export var ImageCustomActionOperationList = list(n0, _ICAOL, 0, () => ImageCustomActionOperation);
export var IntegerDefaultValueList = list(n0, _IDVL, 0, [() => SensitiveLongObject, 0]);
export var SetParameterValueConfigurationList = list(n0, _SPVCL, 0, [() => SetParameterValueConfiguration, 0]);
export var SheetImageList = list(n0, _SILh, 0, () => SheetImage);
export var StringDefaultValueList = list(n0, _SDVL, 0, [() => SensitiveStringObject, 0]);
