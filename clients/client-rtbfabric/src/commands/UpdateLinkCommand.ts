// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLinkRequest, UpdateLinkResponse } from "../models/models_0";
import { UpdateLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandInput extends UpdateLinkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLinkCommand}.
 */
export interface UpdateLinkCommandOutput extends UpdateLinkResponse, __MetadataBearer {}

/**
 * Updates the configuration of a link between gateways.
 *
 * Allows you to modify settings and parameters for an existing link.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, UpdateLinkCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, UpdateLinkCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // UpdateLinkRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   logSettings: { // LinkLogSettings
 *     applicationLogs: { // LinkApplicationLogConfiguration
 *       sampling: { // LinkApplicationLogSampling
 *         errorLog: Number("double"), // required
 *         filterLog: Number("double"), // required
 *       },
 *     },
 *   },
 *   timeoutInMillis: Number("long"),
 * };
 * const command = new UpdateLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkResponse
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param UpdateLinkCommandInput - {@link UpdateLinkCommandInput}
 * @returns {@link UpdateLinkCommandOutput}
 * @see {@link UpdateLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed because of a conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request could not be completed because it fails satisfy the constraints specified by the service.
 *
 * @throws {@link RTBFabricServiceException}
 *
 * Base exception class for all service exceptions from RTBFabric service.
 *
 * @example Update link settings
 * ```javascript
 * // Updates configuration settings for an existing link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   logSettings: {
 *     applicationLogs: {
 *       sampling: {
 *         errorLog: 100.0,
 *         filterLog: 10.0
 *       }
 *     }
 *   }
 * };
 * const command = new UpdateLinkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   linkId: "link-87654321",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLinkCommand extends command<UpdateLinkCommandInput, UpdateLinkCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLink",
  UpdateLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLinkRequest;
      output: UpdateLinkResponse;
    };
    sdk: {
      input: UpdateLinkCommandInput;
      output: UpdateLinkCommandOutput;
    };
  };
}
