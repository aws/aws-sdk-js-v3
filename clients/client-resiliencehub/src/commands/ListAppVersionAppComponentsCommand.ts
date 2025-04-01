// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppVersionAppComponentsRequest, ListAppVersionAppComponentsResponse } from "../models/models_0";
import {
  de_ListAppVersionAppComponentsCommand,
  se_ListAppVersionAppComponentsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionAppComponentsCommand}.
 */
export interface ListAppVersionAppComponentsCommandInput extends ListAppVersionAppComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionAppComponentsCommand}.
 */
export interface ListAppVersionAppComponentsCommandOutput
  extends ListAppVersionAppComponentsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the Application Components in the Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionAppComponentsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionAppComponentsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionAppComponentsRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppVersionAppComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionAppComponentsResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   appComponents: [ // AppComponentList
 * //     { // AppComponent
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       id: "STRING_VALUE",
 * //       additionalInfo: { // AdditionalInfoMap
 * //         "<keys>": [ // AdditionalInfoValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionAppComponentsCommandInput - {@link ListAppVersionAppComponentsCommandInput}
 * @returns {@link ListAppVersionAppComponentsCommandOutput}
 * @see {@link ListAppVersionAppComponentsCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionAppComponentsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListAppVersionAppComponentsCommand extends $Command
  .classBuilder<
    ListAppVersionAppComponentsCommandInput,
    ListAppVersionAppComponentsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppVersionAppComponents", {})
  .n("ResiliencehubClient", "ListAppVersionAppComponentsCommand")
  .f(void 0, void 0)
  .ser(se_ListAppVersionAppComponentsCommand)
  .de(de_ListAppVersionAppComponentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppVersionAppComponentsRequest;
      output: ListAppVersionAppComponentsResponse;
    };
    sdk: {
      input: ListAppVersionAppComponentsCommandInput;
      output: ListAppVersionAppComponentsCommandOutput;
    };
  };
}
