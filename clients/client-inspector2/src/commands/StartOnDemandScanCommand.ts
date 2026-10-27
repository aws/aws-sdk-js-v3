// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartOnDemandScanRequest, StartOnDemandScanResponse } from "../models/models_1";
import { StartOnDemandScan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartOnDemandScanCommand}.
 */
export interface StartOnDemandScanCommandInput extends StartOnDemandScanRequest {}
/**
 * @public
 *
 * The output of {@link StartOnDemandScanCommand}.
 */
export interface StartOnDemandScanCommandOutput extends StartOnDemandScanResponse, __MetadataBearer {}

/**
 * <p>Starts an on-demand scan of the specified resource, such as an Amazon Machine Image (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, StartOnDemandScanCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, StartOnDemandScanCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // StartOnDemandScanRequest
 *   resourceId: "STRING_VALUE", // required
 *   resourceType: "AMI", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartOnDemandScanCommand(input);
 * const response = await client.send(command);
 * // { // StartOnDemandScanResponse
 * //   scanId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartOnDemandScanCommandInput - {@link StartOnDemandScanCommandInput}
 * @returns {@link StartOnDemandScanCommandOutput}
 * @see {@link StartOnDemandScanCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandScanCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class StartOnDemandScanCommand extends command<StartOnDemandScanCommandInput, StartOnDemandScanCommandOutput>(
  _ep0,
  _mw0,
  "StartOnDemandScan",
  StartOnDemandScan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOnDemandScanRequest;
      output: StartOnDemandScanResponse;
    };
    sdk: {
      input: StartOnDemandScanCommandInput;
      output: StartOnDemandScanCommandOutput;
    };
  };
}
