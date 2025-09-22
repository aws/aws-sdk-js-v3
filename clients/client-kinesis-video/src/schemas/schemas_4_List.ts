// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ARN, _DMRC, _DMRCI, _DMRCO, _h, _MR, _MRCL, _MRCLI, _NT, _SARN, _SN, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMappedResourceConfigurationInput = struct(n0, _DMRCI, 0, [_SN, _SARN, _MR, _NT], [0, 0, 1, 0]);
export var DescribeMappedResourceConfigurationOutput = struct(
  n0,
  _DMRCO,
  0,
  [_MRCL, _NT],
  [() => MappedResourceConfigurationList, 0]
);
export var MappedResourceConfigurationListItem = struct(n0, _MRCLI, 0, [_Ty, _ARN], [0, 0]);
export var MappedResourceConfigurationList = list(n0, _MRCL, 0, () => MappedResourceConfigurationListItem);
export var DescribeMappedResourceConfiguration = op(
  n0,
  _DMRC,
  {
    [_h]: ["POST", "/describeMappedResourceConfiguration", 200],
  },
  () => DescribeMappedResourceConfigurationInput,
  () => DescribeMappedResourceConfigurationOutput
);
