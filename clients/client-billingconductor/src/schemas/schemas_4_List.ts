// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAI,
  _AAO,
  _AAs,
  _AG,
  _AI,
  _AIc,
  _AV,
  _BGA,
  _BGD,
  _BGN,
  _BPR,
  _CBG,
  _CBGI,
  _CBGO,
  _CCLI,
  _CCLII,
  _CCLIO,
  _CD,
  _CLICD,
  _CLIFCD,
  _CLIPCD,
  _CP,
  _CTl,
  _CV,
  _D,
  _DA,
  _DAI,
  _DAO,
  _F,
  _h,
  _hH,
  _iT,
  _LAI,
  _LIF,
  _LMT,
  _N,
  _P,
  _PAI,
  _PPA,
  _PV,
  _S,
  _SR,
  _St,
  _T,
  _Ty,
  _UBG,
  _UBGAG,
  _UBGI,
  _UBGO,
  _XACT,
  n0,
} from "./schemas_0";
import {
  CustomLineItemBillingPeriodRange,
  CustomLineItemDescription,
  CustomLineItemName,
  LineItemFiltersList,
} from "./schemas_2_CustomLine";

/* eslint no-var: 0 */

export var BillingGroupDescription = sim(n0, _BGD, 0, 8);
export var BillingGroupName = sim(n0, _BGN, 0, 8);
export var AccountGrouping = struct(n0, _AG, 0, [_LAI, _AA], [64 | 0, 2]);
export var AssociateAccountsInput = struct(n0, _AAI, 0, [_A, _AIc], [0, 64 | 0]);
export var AssociateAccountsOutput = struct(n0, _AAO, 0, [_A], [0]);
export var ComputationPreference = struct(n0, _CP, 0, [_PPA], [0]);
export var CreateBillingGroupInput = struct(
  n0,
  _CBGI,
  0,
  [_CTl, _N, _AG, _CP, _PAI, _D, _T],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [() => BillingGroupName, 0],
    () => AccountGrouping,
    () => ComputationPreference,
    0,
    [() => BillingGroupDescription, 0],
    128 | 0,
  ]
);
export var CreateBillingGroupOutput = struct(n0, _CBGO, 0, [_A], [0]);
export var CreateCustomLineItemInput = struct(
  n0,
  _CCLII,
  0,
  [_CTl, _N, _D, _BGA, _BPR, _T, _CD, _AI],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [() => CustomLineItemName, 0],
    [() => CustomLineItemDescription, 0],
    0,
    () => CustomLineItemBillingPeriodRange,
    128 | 0,
    () => CustomLineItemChargeDetails,
    0,
  ]
);
export var CreateCustomLineItemOutput = struct(n0, _CCLIO, 0, [_A], [0]);
export var CustomLineItemChargeDetails = struct(
  n0,
  _CLICD,
  0,
  [_F, _P, _Ty, _LIF],
  [() => CustomLineItemFlatChargeDetails, () => CustomLineItemPercentageChargeDetails, 0, () => LineItemFiltersList]
);
export var CustomLineItemFlatChargeDetails = struct(n0, _CLIFCD, 0, [_CV], [1]);
export var CustomLineItemPercentageChargeDetails = struct(n0, _CLIPCD, 0, [_PV, _AV], [1, 64 | 0]);
export var DisassociateAccountsInput = struct(n0, _DAI, 0, [_A, _AIc], [0, 64 | 0]);
export var DisassociateAccountsOutput = struct(n0, _DAO, 0, [_A], [0]);
export var UpdateBillingGroupAccountGrouping = struct(n0, _UBGAG, 0, [_AA], [2]);
export var UpdateBillingGroupInput = struct(
  n0,
  _UBGI,
  0,
  [_A, _N, _St, _CP, _D, _AG],
  [
    0,
    [() => BillingGroupName, 0],
    0,
    () => ComputationPreference,
    [() => BillingGroupDescription, 0],
    () => UpdateBillingGroupAccountGrouping,
  ]
);
export var UpdateBillingGroupOutput = struct(
  n0,
  _UBGO,
  0,
  [_A, _N, _D, _PAI, _PPA, _S, _LMT, _St, _SR, _AG],
  [
    0,
    [() => BillingGroupName, 0],
    [() => BillingGroupDescription, 0],
    0,
    0,
    1,
    1,
    0,
    0,
    () => UpdateBillingGroupAccountGrouping,
  ]
);
export var AccountIdList = 64 | 0;

export var CustomLineItemAssociationsList = 64 | 0;

export var AssociateAccounts = op(
  n0,
  _AAs,
  {
    [_h]: ["POST", "/associate-accounts", 200],
  },
  () => AssociateAccountsInput,
  () => AssociateAccountsOutput
);
export var CreateBillingGroup = op(
  n0,
  _CBG,
  {
    [_h]: ["POST", "/create-billing-group", 200],
  },
  () => CreateBillingGroupInput,
  () => CreateBillingGroupOutput
);
export var CreateCustomLineItem = op(
  n0,
  _CCLI,
  {
    [_h]: ["POST", "/create-custom-line-item", 200],
  },
  () => CreateCustomLineItemInput,
  () => CreateCustomLineItemOutput
);
export var DisassociateAccounts = op(
  n0,
  _DA,
  {
    [_h]: ["POST", "/disassociate-accounts", 200],
  },
  () => DisassociateAccountsInput,
  () => DisassociateAccountsOutput
);
export var UpdateBillingGroup = op(
  n0,
  _UBG,
  {
    [_h]: ["POST", "/update-billing-group", 200],
  },
  () => UpdateBillingGroupInput,
  () => UpdateBillingGroupOutput
);
