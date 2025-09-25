// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AI, _GSTSVA, _GSTSVAR, _GSTSVARe, _h, _STSVA, _VCA, Attachment, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSiteToSiteVpnAttachmentRequest = struct(n0, _GSTSVAR, 0, [_AI], [[0, 1]]);
export var GetSiteToSiteVpnAttachmentResponse = struct(n0, _GSTSVARe, 0, [_STSVA], [() => SiteToSiteVpnAttachment]);
export var SiteToSiteVpnAttachment = struct(n0, _STSVA, 0, [_A, _VCA], [() => Attachment, 0]);
export var GetSiteToSiteVpnAttachment = op(
  n0,
  _GSTSVA,
  {
    [_h]: ["GET", "/site-to-site-vpn-attachments/{AttachmentId}", 200],
  },
  () => GetSiteToSiteVpnAttachmentRequest,
  () => GetSiteToSiteVpnAttachmentResponse
);
