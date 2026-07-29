// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import { CancelQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandInput extends CancelQueryRequest {}
/**
 * @public
 *
 * The output of {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandOutput extends CancelQueryResponse, __MetadataBearer {}

/**
 * <p>Cancels a running query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CancelQueryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CancelQueryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CancelQueryRequest
 *   workspaceName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * // { // CancelQueryResponse
 * //   queryId: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELED" || "CANCELING", // required
 * // };
 *
 * ```
 *
 * @param CancelQueryCommandInput - {@link CancelQueryCommandInput}
 * @returns {@link CancelQueryCommandOutput}
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CancelQueryCommand extends command<CancelQueryCommandInput, CancelQueryCommandOutput>(
  _ep0,
  _mw0,
  "CancelQuery",
  CancelQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelQueryRequest;
      output: CancelQueryResponse;
    };
    sdk: {
      input: CancelQueryCommandInput;
      output: CancelQueryCommandOutput;
    };
  };
}
