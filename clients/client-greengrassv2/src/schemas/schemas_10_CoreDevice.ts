// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACDWCDE,
  _ACDWCDEE,
  _ACDWCDEL,
  _ACDWCDELs,
  _BACDWCD,
  _BACDWCDR,
  _BACDWCDRa,
  _BDCDFCD,
  _BDCDFCDR,
  _BDCDFCDRa,
  _cDTN,
  _co,
  _DCDFCDE,
  _DCDFCDEE,
  _DCDFCDEL,
  _DCDFCDELi,
  _eE,
  _en,
  _h,
  _m,
  _tN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateClientDeviceWithCoreDeviceEntry = struct(n0, _ACDWCDE, 0, [_tN], [0]);
export var AssociateClientDeviceWithCoreDeviceErrorEntry = struct(n0, _ACDWCDEE, 0, [_tN, _co, _m], [0, 0, 0]);
export var BatchAssociateClientDeviceWithCoreDeviceRequest = struct(
  n0,
  _BACDWCDR,
  0,
  [_en, _cDTN],
  [() => AssociateClientDeviceWithCoreDeviceEntryList, [0, 1]]
);
export var BatchAssociateClientDeviceWithCoreDeviceResponse = struct(
  n0,
  _BACDWCDRa,
  0,
  [_eE],
  [() => AssociateClientDeviceWithCoreDeviceErrorList]
);
export var BatchDisassociateClientDeviceFromCoreDeviceRequest = struct(
  n0,
  _BDCDFCDR,
  0,
  [_en, _cDTN],
  [() => DisassociateClientDeviceFromCoreDeviceEntryList, [0, 1]]
);
export var BatchDisassociateClientDeviceFromCoreDeviceResponse = struct(
  n0,
  _BDCDFCDRa,
  0,
  [_eE],
  [() => DisassociateClientDeviceFromCoreDeviceErrorList]
);
export var DisassociateClientDeviceFromCoreDeviceEntry = struct(n0, _DCDFCDE, 0, [_tN], [0]);
export var DisassociateClientDeviceFromCoreDeviceErrorEntry = struct(n0, _DCDFCDEE, 0, [_tN, _co, _m], [0, 0, 0]);
export var AssociateClientDeviceWithCoreDeviceEntryList = list(
  n0,
  _ACDWCDEL,
  0,
  () => AssociateClientDeviceWithCoreDeviceEntry
);
export var AssociateClientDeviceWithCoreDeviceErrorList = list(
  n0,
  _ACDWCDELs,
  0,
  () => AssociateClientDeviceWithCoreDeviceErrorEntry
);
export var DisassociateClientDeviceFromCoreDeviceEntryList = list(
  n0,
  _DCDFCDEL,
  0,
  () => DisassociateClientDeviceFromCoreDeviceEntry
);
export var DisassociateClientDeviceFromCoreDeviceErrorList = list(
  n0,
  _DCDFCDELi,
  0,
  () => DisassociateClientDeviceFromCoreDeviceErrorEntry
);
export var BatchAssociateClientDeviceWithCoreDevice = op(
  n0,
  _BACDWCD,
  {
    [_h]: ["POST", "/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices", 200],
  },
  () => BatchAssociateClientDeviceWithCoreDeviceRequest,
  () => BatchAssociateClientDeviceWithCoreDeviceResponse
);
export var BatchDisassociateClientDeviceFromCoreDevice = op(
  n0,
  _BDCDFCD,
  {
    [_h]: ["POST", "/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices", 200],
  },
  () => BatchDisassociateClientDeviceFromCoreDeviceRequest,
  () => BatchDisassociateClientDeviceFromCoreDeviceResponse
);
