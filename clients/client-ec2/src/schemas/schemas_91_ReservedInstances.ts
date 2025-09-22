// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARIEQ,
  _ARIEQR,
  _ARIEQRc,
  _CC,
  _cC,
  _Co,
  _co,
  _CT,
  _cT,
  _DQRI,
  _DQRIE,
  _DQRIIL,
  _DQRIR,
  _DQRIRe,
  _DR,
  _EI,
  _eI,
  _eQN,
  _Er,
  _er,
  _FQPD,
  _FQPDa,
  _FQPDS,
  _fQPDS,
  _GRIEQ,
  _GRIEQR,
  _GRIEQRe,
  _HPo,
  _hPo,
  _IC,
  _iC,
  _it,
  _IVE,
  _iVE,
  _Me,
  _me,
  _MRI,
  _MRIR,
  _MRIRo,
  _OIf,
  _oIf,
  _ORIWEA,
  _oRIWEA,
  _PDa,
  _pDa,
  _RICL,
  _RICSIT,
  _RII,
  _rII,
  _RIIe,
  _rIIe,
  _RIIes,
  _RIIese,
  _RIIS,
  _RIISL,
  _rIMI,
  _RIMIe,
  _RIRV,
  _RIRVS,
  _RIVR,
  _rIVR,
  _RIVS,
  _rIVS,
  _RTV,
  _rTV,
  _RUV,
  _rUV,
  _RVe,
  _rVe,
  _SQPD,
  _SQPDS,
  _sQPDS,
  _SQPDu,
  _TC,
  _TCa,
  _tCar,
  _TCR,
  _TCRS,
  _TCVR,
  _tCVR,
  _TCVS,
  _tCVS,
  _TRV,
  _TRVS,
  _VFR,
  _vFR,
  _xN,
  n0,
} from "./schemas_0";
import { ReservedInstancesConfiguration } from "./schemas_183_Instances";

/* eslint no-var: 0 */

export var AcceptReservedInstancesExchangeQuoteRequest = struct(
  n0,
  _ARIEQR,
  0,
  [_DR, _RII, _TC],
  [
    2,
    [
      () => ReservedInstanceIdSet,
      {
        [_xN]: _RIIe,
      },
    ],
    [
      () => TargetConfigurationRequestSet,
      {
        [_xN]: _TCa,
      },
    ],
  ]
);
export var AcceptReservedInstancesExchangeQuoteResult = struct(
  n0,
  _ARIEQRc,
  0,
  [_EI],
  [
    [
      0,
      {
        [_eQN]: `ExchangeId`,
        [_xN]: _eI,
      },
    ],
  ]
);
export var DeleteQueuedReservedInstancesError = struct(
  n0,
  _DQRIE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DeleteQueuedReservedInstancesRequest = struct(
  n0,
  _DQRIR,
  0,
  [_DR, _RIIese],
  [
    2,
    [
      () => DeleteQueuedReservedInstancesIdList,
      {
        [_xN]: _RIIes,
      },
    ],
  ]
);
export var DeleteQueuedReservedInstancesResult = struct(
  n0,
  _DQRIRe,
  0,
  [_SQPD, _FQPD],
  [
    [
      () => SuccessfulQueuedPurchaseDeletionSet,
      {
        [_eQN]: `SuccessfulQueuedPurchaseDeletionSet`,
        [_xN]: _sQPDS,
      },
    ],
    [
      () => FailedQueuedPurchaseDeletionSet,
      {
        [_eQN]: `FailedQueuedPurchaseDeletionSet`,
        [_xN]: _fQPDS,
      },
    ],
  ]
);
export var FailedQueuedPurchaseDeletion = struct(
  n0,
  _FQPDa,
  0,
  [_Er, _RIIes],
  [
    [
      () => DeleteQueuedReservedInstancesError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
  ]
);
export var GetReservedInstancesExchangeQuoteRequest = struct(
  n0,
  _GRIEQR,
  0,
  [_DR, _RII, _TC],
  [
    2,
    [
      () => ReservedInstanceIdSet,
      {
        [_xN]: _RIIe,
      },
    ],
    [
      () => TargetConfigurationRequestSet,
      {
        [_xN]: _TCa,
      },
    ],
  ]
);
export var GetReservedInstancesExchangeQuoteResult = struct(
  n0,
  _GRIEQRe,
  0,
  [_CC, _IVE, _ORIWEA, _PDa, _RIVR, _RIVS, _TCVR, _TCVS, _VFR],
  [
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsValidExchange`,
        [_xN]: _iVE,
      },
    ],
    [
      4,
      {
        [_eQN]: `OutputReservedInstancesWillExpireAt`,
        [_xN]: _oRIWEA,
      },
    ],
    [
      0,
      {
        [_eQN]: `PaymentDue`,
        [_xN]: _pDa,
      },
    ],
    [
      () => ReservationValue,
      {
        [_eQN]: `ReservedInstanceValueRollup`,
        [_xN]: _rIVR,
      },
    ],
    [
      () => ReservedInstanceReservationValueSet,
      {
        [_eQN]: `ReservedInstanceValueSet`,
        [_xN]: _rIVS,
      },
    ],
    [
      () => ReservationValue,
      {
        [_eQN]: `TargetConfigurationValueRollup`,
        [_xN]: _tCVR,
      },
    ],
    [
      () => TargetReservationValueSet,
      {
        [_eQN]: `TargetConfigurationValueSet`,
        [_xN]: _tCVS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ValidationFailureReason`,
        [_xN]: _vFR,
      },
    ],
  ]
);
export var ModifyReservedInstancesRequest = struct(
  n0,
  _MRIR,
  0,
  [_RIIese, _CT, _TC],
  [
    [
      () => ReservedInstancesIdStringList,
      {
        [_xN]: _RIIes,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      () => ReservedInstancesConfigurationList,
      {
        [_xN]: _RICSIT,
      },
    ],
  ]
);
export var ModifyReservedInstancesResult = struct(
  n0,
  _MRIRo,
  0,
  [_RIMIe],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesModificationId`,
        [_xN]: _rIMI,
      },
    ],
  ]
);
export var ReservationValue = struct(
  n0,
  _RVe,
  0,
  [_HPo, _RTV, _RUV],
  [
    [
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
      },
    ],
    [
      0,
      {
        [_eQN]: `RemainingTotalValue`,
        [_xN]: _rTV,
      },
    ],
    [
      0,
      {
        [_eQN]: `RemainingUpfrontValue`,
        [_xN]: _rUV,
      },
    ],
  ]
);
export var ReservedInstanceReservationValue = struct(
  n0,
  _RIRV,
  0,
  [_RVe, _RIIe],
  [
    [
      () => ReservationValue,
      {
        [_eQN]: `ReservationValue`,
        [_xN]: _rVe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstanceId`,
        [_xN]: _rIIe,
      },
    ],
  ]
);
export var SuccessfulQueuedPurchaseDeletion = struct(
  n0,
  _SQPDu,
  0,
  [_RIIes],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
  ]
);
export var TargetConfiguration = struct(
  n0,
  _TCa,
  0,
  [_IC, _OIf],
  [
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingId`,
        [_xN]: _oIf,
      },
    ],
  ]
);
export var TargetConfigurationRequest = struct(n0, _TCR, 0, [_IC, _OIf], [1, 0]);
export var TargetReservationValue = struct(
  n0,
  _TRV,
  0,
  [_RVe, _TCa],
  [
    [
      () => ReservationValue,
      {
        [_eQN]: `ReservationValue`,
        [_xN]: _rVe,
      },
    ],
    [
      () => TargetConfiguration,
      {
        [_eQN]: `TargetConfiguration`,
        [_xN]: _tCar,
      },
    ],
  ]
);
export var DeleteQueuedReservedInstancesIdList = list(n0, _DQRIIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var FailedQueuedPurchaseDeletionSet = list(n0, _FQPDS, 0, [
  () => FailedQueuedPurchaseDeletion,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstanceIdSet = list(n0, _RIIS, 0, [
  0,
  {
    [_xN]: _RIIe,
  },
]);
export var ReservedInstanceReservationValueSet = list(n0, _RIRVS, 0, [
  () => ReservedInstanceReservationValue,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesConfigurationList = list(n0, _RICL, 0, [
  () => ReservedInstancesConfiguration,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesIdStringList = list(n0, _RIISL, 0, [
  0,
  {
    [_xN]: _RIIes,
  },
]);
export var SuccessfulQueuedPurchaseDeletionSet = list(n0, _SQPDS, 0, [
  () => SuccessfulQueuedPurchaseDeletion,
  {
    [_xN]: _it,
  },
]);
export var TargetConfigurationRequestSet = list(n0, _TCRS, 0, [
  () => TargetConfigurationRequest,
  {
    [_xN]: _TCR,
  },
]);
export var TargetReservationValueSet = list(n0, _TRVS, 0, [
  () => TargetReservationValue,
  {
    [_xN]: _it,
  },
]);
export var AcceptReservedInstancesExchangeQuote = op(
  n0,
  _ARIEQ,
  0,
  () => AcceptReservedInstancesExchangeQuoteRequest,
  () => AcceptReservedInstancesExchangeQuoteResult
);
export var DeleteQueuedReservedInstances = op(
  n0,
  _DQRI,
  0,
  () => DeleteQueuedReservedInstancesRequest,
  () => DeleteQueuedReservedInstancesResult
);
export var GetReservedInstancesExchangeQuote = op(
  n0,
  _GRIEQ,
  0,
  () => GetReservedInstancesExchangeQuoteRequest,
  () => GetReservedInstancesExchangeQuoteResult
);
export var ModifyReservedInstances = op(
  n0,
  _MRI,
  0,
  () => ModifyReservedInstancesRequest,
  () => ModifyReservedInstancesResult
);
