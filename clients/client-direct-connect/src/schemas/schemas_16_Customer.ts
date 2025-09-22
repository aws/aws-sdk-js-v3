// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ag, _AL, _aN, _CA, _CCA, _CCAR, _CCARo, _DCM, _DCMR, _nPT, _s, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmCustomerAgreementRequest = struct(n0, _CCAR, 0, [_aN], [0]);
export var ConfirmCustomerAgreementResponse = struct(n0, _CCARo, 0, [_s], [0]);
export var CustomerAgreement = struct(n0, _CA, 0, [_aN, _s], [0, 0]);
export var DescribeCustomerMetadataResponse = struct(n0, _DCMR, 0, [_ag, _nPT], [() => AgreementList, 0]);
export var AgreementList = list(n0, _AL, 0, () => CustomerAgreement);
export var ConfirmCustomerAgreement = op(
  n0,
  _CCA,
  0,
  () => ConfirmCustomerAgreementRequest,
  () => ConfirmCustomerAgreementResponse
);
export var DescribeCustomerMetadata = op(
  n0,
  _DCM,
  0,
  () => Unit,
  () => DescribeCustomerMetadataResponse
);
