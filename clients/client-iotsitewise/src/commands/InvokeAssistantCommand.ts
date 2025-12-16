// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { InvokeAssistantRequest, InvokeAssistantResponse } from "../models/models_0";
import { InvokeAssistant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeAssistantCommand}.
 */
export interface InvokeAssistantCommandInput extends InvokeAssistantRequest {}
/**
 * @public
 *
 * The output of {@link InvokeAssistantCommand}.
 */
export interface InvokeAssistantCommandOutput extends InvokeAssistantResponse, __MetadataBearer {}

/**
 * <p>Invokes SiteWise Assistant to start or continue a conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, InvokeAssistantCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, InvokeAssistantCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // InvokeAssistantRequest
 *   conversationId: "STRING_VALUE",
 *   message: "STRING_VALUE", // required
 *   enableTrace: true || false,
 * };
 * const command = new InvokeAssistantCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAssistantResponse
 * //   body: { // ResponseStream Union: only one key present
 * //     trace: { // Trace
 * //       text: "STRING_VALUE",
 * //     },
 * //     output: { // InvocationOutput
 * //       message: "STRING_VALUE",
 * //       citations: [ // Citations
 * //         { // Citation
 * //           reference: { // Reference
 * //             dataset: { // DataSetReference
 * //               datasetArn: "STRING_VALUE",
 * //               source: { // Source
 * //                 arn: "STRING_VALUE",
 * //                 location: { // Location
 * //                   uri: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           content: { // Content
 * //             text: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     conflictingOperationException: { // ConflictingOperationException
 * //       message: "STRING_VALUE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //     },
 * //     internalFailureException: { // InternalFailureException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     invalidRequestException: { // InvalidRequestException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     limitExceededException: { // LimitExceededException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     resourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   conversationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeAssistantCommandInput - {@link InvokeAssistantCommandInput}
 * @returns {@link InvokeAssistantCommandOutput}
 * @see {@link InvokeAssistantCommandInput} for command's `input` shape.
 * @see {@link InvokeAssistantCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
export class InvokeAssistantCommand extends $Command
  .classBuilder<
    InvokeAssistantCommandInput,
    InvokeAssistantCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "InvokeAssistant", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("IoTSiteWiseClient", "InvokeAssistantCommand")
  .sc(InvokeAssistant$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeAssistantRequest;
      output: InvokeAssistantResponse;
    };
    sdk: {
      input: InvokeAssistantCommandInput;
      output: InvokeAssistantCommandOutput;
    };
  };
}
