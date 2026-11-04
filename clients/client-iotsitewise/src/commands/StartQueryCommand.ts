// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryRequest, StartQueryResponse } from "../models/models_1";
import { StartQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryCommand}.
 */
export interface StartQueryCommandInput extends StartQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryResponse, __MetadataBearer {}

/**
 * Starts an asynchronous SQL query against workspace telemetry, annotations, data segment, and dataset data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, StartQueryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, StartQueryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // StartQueryRequest
 *   clientToken: "STRING_VALUE",
 *   workspaceName: "STRING_VALUE", // required
 *   queryStatement: "STRING_VALUE", // required
 * };
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryResponse
 * //   queryId: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELED" || "CANCELING", // required
 * // };
 *
 * ```
 *
 * @param StartQueryCommandInput - {@link StartQueryCommandInput}
 * @returns {@link StartQueryCommandOutput}
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class StartQueryCommand extends command<StartQueryCommandInput, StartQueryCommandOutput>(
  _ep0,
  _mw0,
  "StartQuery",
  StartQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryRequest;
      output: StartQueryResponse;
    };
    sdk: {
      input: StartQueryCommandInput;
      output: StartQueryCommandOutput;
    };
  };
}
