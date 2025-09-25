// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListComponentVersionsRequest, ListComponentVersionsResponse } from "../models/models_0";
import { ListComponentVersions } from "../schemas/schemas_5_Component";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComponentVersionsCommand}.
 */
export interface ListComponentVersionsCommandInput extends ListComponentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentVersionsCommand}.
 */
export interface ListComponentVersionsCommandOutput extends ListComponentVersionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of all versions for a component. Greater versions are listed
 *       first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListComponentVersionsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListComponentVersionsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // ListComponentVersionsRequest
 *   arn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComponentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentVersionsResponse
 * //   componentVersions: [ // ComponentVersionList
 * //     { // ComponentVersionListItem
 * //       componentName: "STRING_VALUE",
 * //       componentVersion: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentVersionsCommandInput - {@link ListComponentVersionsCommandInput}
 * @returns {@link ListComponentVersionsCommandOutput}
 * @see {@link ListComponentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class ListComponentVersionsCommand extends $Command
  .classBuilder<
    ListComponentVersionsCommandInput,
    ListComponentVersionsCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "ListComponentVersions", {})
  .n("GreengrassV2Client", "ListComponentVersionsCommand")
  .sc(ListComponentVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentVersionsRequest;
      output: ListComponentVersionsResponse;
    };
    sdk: {
      input: ListComponentVersionsCommandInput;
      output: ListComponentVersionsCommandOutput;
    };
  };
}
