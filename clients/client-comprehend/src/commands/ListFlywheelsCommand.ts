// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlywheelsRequest, ListFlywheelsResponse } from "../models/models_0";
import { ListFlywheels } from "../schemas/schemas_10_Flywheel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandInput extends ListFlywheelsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandOutput extends ListFlywheelsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the flywheels that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListFlywheelsRequest
 *   Filter: { // FlywheelFilter
 *     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlywheelsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlywheelsResponse
 * //   FlywheelSummaryList: [ // FlywheelSummaryList
 * //     { // FlywheelSummary
 * //       FlywheelArn: "STRING_VALUE",
 * //       ActiveModelArn: "STRING_VALUE",
 * //       DataLakeS3Uri: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //       ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LatestFlywheelIteration: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlywheelsCommandInput - {@link ListFlywheelsCommandInput}
 * @returns {@link ListFlywheelsCommandOutput}
 * @see {@link ListFlywheelsCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ListFlywheelsCommand extends $Command
  .classBuilder<
    ListFlywheelsCommandInput,
    ListFlywheelsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListFlywheels", {})
  .n("ComprehendClient", "ListFlywheelsCommand")
  .sc(ListFlywheels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlywheelsRequest;
      output: ListFlywheelsResponse;
    };
    sdk: {
      input: ListFlywheelsCommandInput;
      output: ListFlywheelsCommandOutput;
    };
  };
}
