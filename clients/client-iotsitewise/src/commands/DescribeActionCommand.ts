// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeActionRequest, DescribeActionResponse } from "../models/models_0";
import { DescribeAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandInput extends DescribeActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandOutput extends DescribeActionResponse, __MetadataBearer {}

/**
 * Retrieves information about an action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeActionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeActionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeActionRequest
 *   actionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionResponse
 * //   actionId: "STRING_VALUE", // required
 * //   targetResource: { // TargetResource
 * //     assetId: "STRING_VALUE",
 * //     computationModelId: "STRING_VALUE",
 * //   },
 * //   actionDefinitionId: "STRING_VALUE", // required
 * //   actionPayload: { // ActionPayload
 * //     stringValue: "STRING_VALUE", // required
 * //   },
 * //   executionTime: new Date("TIMESTAMP"), // required
 * //   resolveTo: { // ResolveTo
 * //     assetId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeActionCommandInput - {@link DescribeActionCommandInput}
 * @returns {@link DescribeActionCommandOutput}
 * @see {@link DescribeActionCommandInput} for command's `input` shape.
 * @see {@link DescribeActionCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class DescribeActionCommand extends command<DescribeActionCommandInput, DescribeActionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAction",
  DescribeAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionRequest;
      output: DescribeActionResponse;
    };
    sdk: {
      input: DescribeActionCommandInput;
      output: DescribeActionCommandOutput;
    };
  };
}
