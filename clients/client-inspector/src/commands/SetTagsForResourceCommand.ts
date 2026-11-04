// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetTagsForResourceRequest } from "../models/models_0";
import { SetTagsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
 *
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
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *
 * The serice is temporary unavailable.
 *
 * @throws {@link InspectorServiceException}
 *
 * Base exception class for all service exceptions from Inspector service.
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
export class SetTagsForResourceCommand extends command<SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "SetTagsForResource",
  SetTagsForResource$
) {
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
