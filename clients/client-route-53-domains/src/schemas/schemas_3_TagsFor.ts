// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DN,
  _DTFD,
  _DTFDR,
  _DTFDRe,
  _K,
  _LTFD,
  _LTFDR,
  _LTFDRi,
  _Tag,
  _TLa,
  _TTD,
  _TTU,
  _UTFD,
  _UTFDR,
  _UTFDRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTagsForDomainRequest = struct(n0, _DTFDR, 0, [_DN, _TTD], [0, 64 | 0]);
export var DeleteTagsForDomainResponse = struct(n0, _DTFDRe, 0, [], []);
export var ListTagsForDomainRequest = struct(n0, _LTFDR, 0, [_DN], [0]);
export var ListTagsForDomainResponse = struct(n0, _LTFDRi, 0, [_TLa], [() => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var UpdateTagsForDomainRequest = struct(n0, _UTFDR, 0, [_DN, _TTU], [0, () => TagList]);
export var UpdateTagsForDomainResponse = struct(n0, _UTFDRp, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TLa, 0, () => Tag);
export var DeleteTagsForDomain = op(
  n0,
  _DTFD,
  0,
  () => DeleteTagsForDomainRequest,
  () => DeleteTagsForDomainResponse
);
export var ListTagsForDomain = op(
  n0,
  _LTFD,
  0,
  () => ListTagsForDomainRequest,
  () => ListTagsForDomainResponse
);
export var UpdateTagsForDomain = op(
  n0,
  _UTFD,
  0,
  () => UpdateTagsForDomainRequest,
  () => UpdateTagsForDomainResponse
);
