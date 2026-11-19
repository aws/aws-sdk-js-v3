// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateSocialConnectionAuthorizationUrlRequest,
  CreateSocialConnectionAuthorizationUrlResponse,
} from "../models/models_0";
import { CreateSocialConnectionAuthorizationUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSocialConnectionAuthorizationUrlCommand}.
 */
export interface CreateSocialConnectionAuthorizationUrlCommandInput extends CreateSocialConnectionAuthorizationUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateSocialConnectionAuthorizationUrlCommand}.
 */
export interface CreateSocialConnectionAuthorizationUrlCommandOutput extends CreateSocialConnectionAuthorizationUrlResponse, __MetadataBearer {}

/**
 * Creates a single-use URL the partner visits to authorize publishing on a
 * platform. Serves a first connect, connecting a further account, and
 * re-authorizing an expired one: consenting with an account that is already
 * connected re-authorizes that connection and keeps its id; any other account
 * adds a connection. Poll ListSocialConnections for the outcome. Deliberately not
 * idempotent and takes no client token: every call must mint a fresh single-use
 * URL, so replaying a cached response would hand back a dead one.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, CreateSocialConnectionAuthorizationUrlCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, CreateSocialConnectionAuthorizationUrlCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // CreateSocialConnectionAuthorizationUrlRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   Platform: "FACEBOOK" || "LINKEDIN" || "X", // required
 * };
 * const command = new CreateSocialConnectionAuthorizationUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateSocialConnectionAuthorizationUrlResponse
 * //   Platform: "FACEBOOK" || "LINKEDIN" || "X", // required
 * //   AuthorizationUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSocialConnectionAuthorizationUrlCommandInput - {@link CreateSocialConnectionAuthorizationUrlCommandInput}
 * @returns {@link CreateSocialConnectionAuthorizationUrlCommandOutput}
 * @see {@link CreateSocialConnectionAuthorizationUrlCommandInput} for command's `input` shape.
 * @see {@link CreateSocialConnectionAuthorizationUrlCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * An IAM denial carries no `Reason`. A refusal for the caller's Partner Central state carries one, so a client tells
 * the two apart by its presence.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
 *
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @public
 */
export class CreateSocialConnectionAuthorizationUrlCommand extends command<CreateSocialConnectionAuthorizationUrlCommandInput, CreateSocialConnectionAuthorizationUrlCommandOutput>(
  _ep0,
  _mw0,
  "CreateSocialConnectionAuthorizationUrl",
  CreateSocialConnectionAuthorizationUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSocialConnectionAuthorizationUrlRequest;
      output: CreateSocialConnectionAuthorizationUrlResponse;
    };
    sdk: {
      input: CreateSocialConnectionAuthorizationUrlCommandInput;
      output: CreateSocialConnectionAuthorizationUrlCommandOutput;
    };
  };
}
