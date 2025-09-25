// smithy-typescript generated code
import { struct, struct as uni } from "@smithy/core/schema";

import { _MDS, _SDS, _sDS, _sU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var S3DataSource = struct(n0, _SDS, 0, [_sU], [0]);
export var ModelDataSource = uni(n0, _MDS, 0, [_sDS], [() => S3DataSource]);
