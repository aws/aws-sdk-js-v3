// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { SetTagsForResourceRequest } from "../models/models_0";
import { SetTagsForResource } from "../schemas/schemas_2_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTagsForResourceCommand}.
 */
export interface SetTagsForResourceCommandInput extends SetTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link SetTagsForResourceCommand}.
 */
export interface SetTagsForResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets tags (key and value pairs) to the assessment template that is specified by the
 *          ARN of the assessment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SetTagsForResourceCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, SetTagsForResourceCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // SetTagsForResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SetTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTagsForResourceCommandInput - {@link SetTagsForResourceCommandInput}
 * @returns {@link SetTagsForResourceCommandOutput}
 * @see {@link SetTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link SetTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example Set tags for resource
 * ```javascript
 * // Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
 * const input = {
 *   resourceArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *   tags: [
 *     {
 *       key: "Example",
 *       value: "example"
 *     }
 *   ]
 * };
 * const command = new SetTagsForResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetTagsForResourceCommand extends $Command
  .classBuilder<
    SetTagsForResourceCommandInput,
    SetTagsForResourceCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "SetTagsForResource", {})
  .n("InspectorClient", "SetTagsForResourceCommand")
  .sc(SetTagsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTagsForResourceRequest;
      output: {};
    };
    sdk: {
      input: SetTagsForResourceCommandInput;
      output: SetTagsForResourceCommandOutput;
    };
  };
}
