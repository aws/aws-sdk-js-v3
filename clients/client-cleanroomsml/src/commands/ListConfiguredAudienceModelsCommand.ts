// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfiguredAudienceModelsRequest, ListConfiguredAudienceModelsResponse } from "../models/models_0";
import { ListConfiguredAudienceModels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredAudienceModelsCommand}.
 */
export interface ListConfiguredAudienceModelsCommandInput extends ListConfiguredAudienceModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfiguredAudienceModelsCommand}.
 */
export interface ListConfiguredAudienceModelsCommandOutput
  extends ListConfiguredAudienceModelsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the configured audience models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListConfiguredAudienceModelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListConfiguredAudienceModelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListConfiguredAudienceModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredAudienceModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredAudienceModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   configuredAudienceModels: [ // ConfiguredAudienceModelList // required
 * //     { // ConfiguredAudienceModelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE", // required
 * //       audienceModelArn: "STRING_VALUE", // required
 * //       outputConfig: { // ConfiguredAudienceModelOutputConfig
 * //         destination: { // AudienceDestination
 * //           s3Destination: { // S3ConfigMap
 * //             s3Uri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       status: "ACTIVE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfiguredAudienceModelsCommandInput - {@link ListConfiguredAudienceModelsCommandInput}
 * @returns {@link ListConfiguredAudienceModelsCommandOutput}
 * @see {@link ListConfiguredAudienceModelsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredAudienceModelsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class ListConfiguredAudienceModelsCommand extends $Command
  .classBuilder<
    ListConfiguredAudienceModelsCommandInput,
    ListConfiguredAudienceModelsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListConfiguredAudienceModels", {})
  .n("CleanRoomsMLClient", "ListConfiguredAudienceModelsCommand")
  .sc(ListConfiguredAudienceModels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredAudienceModelsRequest;
      output: ListConfiguredAudienceModelsResponse;
    };
    sdk: {
      input: ListConfiguredAudienceModelsCommandInput;
      output: ListConfiguredAudienceModelsCommandOutput;
    };
  };
}
