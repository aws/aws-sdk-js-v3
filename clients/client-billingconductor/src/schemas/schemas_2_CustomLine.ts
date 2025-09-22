// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _ARE,
  _ARRE,
  _ARRL,
  _At,
  _BARTCLI,
  _BARTCLII,
  _BARTCLIO,
  _BDRFCLI,
  _BDRFCLII,
  _BDRFCLIO,
  _BPR,
  _CLIBPR,
  _CLID,
  _CLIN,
  _DCLI,
  _DCLII,
  _DCLIO,
  _DRRE,
  _DRRL,
  _E,
  _EEBP,
  _FAR,
  _FDR,
  _h,
  _ISBP,
  _LIFi,
  _LIFL,
  _M,
  _MO,
  _R,
  _RA,
  _SAR,
  _SDR,
  _TA,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomLineItemDescription = sim(n0, _CLID, 0, 8);
export var CustomLineItemName = sim(n0, _CLIN, 0, 8);
export var AssociateResourceError = struct(n0, _ARE, 0, [_M, _R], [0, 0]);
export var AssociateResourceResponseElement = struct(n0, _ARRE, 0, [_A, _E], [0, () => AssociateResourceError]);
export var BatchAssociateResourcesToCustomLineItemInput = struct(
  n0,
  _BARTCLII,
  0,
  [_TA, _RA, _BPR],
  [0, 64 | 0, () => CustomLineItemBillingPeriodRange]
);
export var BatchAssociateResourcesToCustomLineItemOutput = struct(
  n0,
  _BARTCLIO,
  0,
  [_SAR, _FAR],
  [() => AssociateResourcesResponseList, () => AssociateResourcesResponseList]
);
export var BatchDisassociateResourcesFromCustomLineItemInput = struct(
  n0,
  _BDRFCLII,
  0,
  [_TA, _RA, _BPR],
  [0, 64 | 0, () => CustomLineItemBillingPeriodRange]
);
export var BatchDisassociateResourcesFromCustomLineItemOutput = struct(
  n0,
  _BDRFCLIO,
  0,
  [_SDR, _FDR],
  [() => DisassociateResourcesResponseList, () => DisassociateResourcesResponseList]
);
export var CustomLineItemBillingPeriodRange = struct(n0, _CLIBPR, 0, [_ISBP, _EEBP], [0, 0]);
export var DeleteCustomLineItemInput = struct(n0, _DCLII, 0, [_A, _BPR], [0, () => CustomLineItemBillingPeriodRange]);
export var DeleteCustomLineItemOutput = struct(n0, _DCLIO, 0, [_A], [0]);
export var DisassociateResourceResponseElement = struct(n0, _DRRE, 0, [_A, _E], [0, () => AssociateResourceError]);
export var LineItemFilter = struct(n0, _LIFi, 0, [_At, _MO, _Va], [0, 0, 64 | 0]);
export var AssociateResourcesResponseList = list(n0, _ARRL, 0, () => AssociateResourceResponseElement);
export var CustomLineItemBatchAssociationsList = 64 | 0;

export var CustomLineItemBatchDisassociationsList = 64 | 0;

export var DisassociateResourcesResponseList = list(n0, _DRRL, 0, () => DisassociateResourceResponseElement);
export var LineItemFiltersList = list(n0, _LIFL, 0, () => LineItemFilter);
export var LineItemFilterValuesList = 64 | 0;

export var BatchAssociateResourcesToCustomLineItem = op(
  n0,
  _BARTCLI,
  {
    [_h]: ["PUT", "/batch-associate-resources-to-custom-line-item", 200],
  },
  () => BatchAssociateResourcesToCustomLineItemInput,
  () => BatchAssociateResourcesToCustomLineItemOutput
);
export var BatchDisassociateResourcesFromCustomLineItem = op(
  n0,
  _BDRFCLI,
  {
    [_h]: ["PUT", "/batch-disassociate-resources-from-custom-line-item", 200],
  },
  () => BatchDisassociateResourcesFromCustomLineItemInput,
  () => BatchDisassociateResourcesFromCustomLineItemOutput
);
export var DeleteCustomLineItem = op(
  n0,
  _DCLI,
  {
    [_h]: ["POST", "/delete-custom-line-item", 200],
  },
  () => DeleteCustomLineItemInput,
  () => DeleteCustomLineItemOutput
);
