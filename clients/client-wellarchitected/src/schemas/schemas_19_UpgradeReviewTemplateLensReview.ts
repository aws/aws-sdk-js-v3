// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _h, _LAen, _TA, _URTLRIp, _URTLRp, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpgradeReviewTemplateLensReviewInput = struct(n0, _URTLRIp, 0, [_TA, _LAen, _CRT], [[0, 1], [0, 1], 0]);
export var UpgradeReviewTemplateLensReview = op(
  n0,
  _URTLRp,
  {
    [_h]: ["PUT", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade", 200],
  },
  () => UpgradeReviewTemplateLensReviewInput,
  () => Unit
);
