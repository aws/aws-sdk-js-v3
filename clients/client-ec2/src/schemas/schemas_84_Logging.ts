// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ALc,
  _aLc,
  _BN,
  _bN,
  _BOu,
  _bOu,
  _Co,
  _co,
  _CT,
  _CWL,
  _cWL,
  _DR,
  _DSe,
  _DSel,
  _dSel,
  _dSeli,
  _DVAILC,
  _DVAILCR,
  _DVAILCRe,
  _En,
  _en,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _ITCn,
  _iTCn,
  _KDF,
  _kDF,
  _LC,
  _lC,
  _LCo,
  _lCS,
  _lGo,
  _LGog,
  _LV,
  _lV,
  _Me,
  _me,
  _MR,
  _MVAILC,
  _MVAILCR,
  _MVAILCRo,
  _NTe,
  _nTe,
  _Pre,
  _pre,
  _S_,
  _s_,
  _VAII,
  _vAII,
  _VAIIe,
  _VAILC,
  _VAILCL,
  _VAL,
  _VALCWLD,
  _VALCWLDO,
  _VALDS,
  _VALKDFD,
  _VALKDFDO,
  _VALO,
  _VALSD,
  _VALSDO,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { VerifiedAccessInstanceIdList } from "./schemas_320_Describe";

/* eslint no-var: 0 */

export var DescribeVerifiedAccessInstanceLoggingConfigurationsRequest = struct(
  n0,
  _DVAILCR,
  0,
  [_VAIIe, _MR, _NTe, _Fi, _DR],
  [
    [
      () => VerifiedAccessInstanceIdList,
      {
        [_xN]: _VAII,
      },
    ],
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeVerifiedAccessInstanceLoggingConfigurationsResult = struct(
  n0,
  _DVAILCRe,
  0,
  [_LC, _NTe],
  [
    [
      () => VerifiedAccessInstanceLoggingConfigurationList,
      {
        [_eQN]: `LoggingConfigurationSet`,
        [_xN]: _lCS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var ModifyVerifiedAccessInstanceLoggingConfigurationRequest = struct(
  n0,
  _MVAILCR,
  0,
  [_VAII, _ALc, _DR, _CT],
  [0, () => VerifiedAccessLogOptions, 2, [0, 4]]
);
export var ModifyVerifiedAccessInstanceLoggingConfigurationResult = struct(
  n0,
  _MVAILCRo,
  0,
  [_LCo],
  [
    [
      () => VerifiedAccessInstanceLoggingConfiguration,
      {
        [_eQN]: `LoggingConfiguration`,
        [_xN]: _lC,
      },
    ],
  ]
);
export var VerifiedAccessInstanceLoggingConfiguration = struct(
  n0,
  _VAILC,
  0,
  [_VAII, _ALc],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessInstanceId`,
        [_xN]: _vAII,
      },
    ],
    [
      () => VerifiedAccessLogs,
      {
        [_eQN]: `AccessLogs`,
        [_xN]: _aLc,
      },
    ],
  ]
);
export var VerifiedAccessLogCloudWatchLogsDestination = struct(
  n0,
  _VALCWLD,
  0,
  [_En, _DSe, _LGog],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
    [
      () => VerifiedAccessLogDeliveryStatus,
      {
        [_eQN]: `DeliveryStatus`,
        [_xN]: _dSel,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogGroup`,
        [_xN]: _lGo,
      },
    ],
  ]
);
export var VerifiedAccessLogCloudWatchLogsDestinationOptions = struct(n0, _VALCWLDO, 0, [_En, _LGog], [2, 0]);
export var VerifiedAccessLogDeliveryStatus = struct(
  n0,
  _VALDS,
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
export var VerifiedAccessLogKinesisDataFirehoseDestination = struct(
  n0,
  _VALKDFD,
  0,
  [_En, _DSe, _DSel],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
    [
      () => VerifiedAccessLogDeliveryStatus,
      {
        [_eQN]: `DeliveryStatus`,
        [_xN]: _dSel,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliveryStream`,
        [_xN]: _dSeli,
      },
    ],
  ]
);
export var VerifiedAccessLogKinesisDataFirehoseDestinationOptions = struct(n0, _VALKDFDO, 0, [_En, _DSel], [2, 0]);
export var VerifiedAccessLogOptions = struct(
  n0,
  _VALO,
  0,
  [_S_, _CWL, _KDF, _LV, _ITCn],
  [
    () => VerifiedAccessLogS3DestinationOptions,
    () => VerifiedAccessLogCloudWatchLogsDestinationOptions,
    () => VerifiedAccessLogKinesisDataFirehoseDestinationOptions,
    0,
    2,
  ]
);
export var VerifiedAccessLogs = struct(
  n0,
  _VAL,
  0,
  [_S_, _CWL, _KDF, _LV, _ITCn],
  [
    [
      () => VerifiedAccessLogS3Destination,
      {
        [_eQN]: `S3`,
        [_xN]: _s_,
      },
    ],
    [
      () => VerifiedAccessLogCloudWatchLogsDestination,
      {
        [_eQN]: `CloudWatchLogs`,
        [_xN]: _cWL,
      },
    ],
    [
      () => VerifiedAccessLogKinesisDataFirehoseDestination,
      {
        [_eQN]: `KinesisDataFirehose`,
        [_xN]: _kDF,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogVersion`,
        [_xN]: _lV,
      },
    ],
    [
      2,
      {
        [_eQN]: `IncludeTrustContext`,
        [_xN]: _iTCn,
      },
    ],
  ]
);
export var VerifiedAccessLogS3Destination = struct(
  n0,
  _VALSD,
  0,
  [_En, _DSe, _BN, _Pre, _BOu],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
    [
      () => VerifiedAccessLogDeliveryStatus,
      {
        [_eQN]: `DeliveryStatus`,
        [_xN]: _dSel,
      },
    ],
    [
      0,
      {
        [_eQN]: `BucketName`,
        [_xN]: _bN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Prefix`,
        [_xN]: _pre,
      },
    ],
    [
      0,
      {
        [_eQN]: `BucketOwner`,
        [_xN]: _bOu,
      },
    ],
  ]
);
export var VerifiedAccessLogS3DestinationOptions = struct(n0, _VALSDO, 0, [_En, _BN, _Pre, _BOu], [2, 0, 0, 0]);
export var VerifiedAccessInstanceLoggingConfigurationList = list(n0, _VAILCL, 0, [
  () => VerifiedAccessInstanceLoggingConfiguration,
  {
    [_xN]: _it,
  },
]);
export var DescribeVerifiedAccessInstanceLoggingConfigurations = op(
  n0,
  _DVAILC,
  0,
  () => DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
  () => DescribeVerifiedAccessInstanceLoggingConfigurationsResult
);
export var ModifyVerifiedAccessInstanceLoggingConfiguration = op(
  n0,
  _MVAILC,
  0,
  () => ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
  () => ModifyVerifiedAccessInstanceLoggingConfigurationResult
);
