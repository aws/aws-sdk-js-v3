// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { GetComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {}

/**
 * Gets the recipe for a version of a component.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // GetComponentRequest
 *   recipeOutputFormat: "JSON" || "YAML",
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentResponse
 * //   recipeOutputFormat: "JSON" || "YAML", // required
 * //   recipe: new Uint8Array(), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * IoT Greengrass can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a request rate quota. For example, you might have exceeded the amount of times that you can retrieve device or deployment status per second.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link GreengrassV2ServiceException}
 *
 * Base exception class for all service exceptions from GreengrassV2 service.
 *
 * @public
 */
export class GetComponentCommand extends command<GetComponentCommandInput, GetComponentCommandOutput>(
  _ep0,
  _mw0,
  "GetComponent",
  GetComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentRequest;
      output: GetComponentResponse;
    };
    sdk: {
      input: GetComponentCommandInput;
      output: GetComponentCommandOutput;
    };
  };
}
