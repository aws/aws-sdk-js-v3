// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0";
import {
  de_RemoveAttributesFromFindingsCommand,
  se_RemoveAttributesFromFindingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAttributesFromFindingsCommand}.
 */
export interface RemoveAttributesFromFindingsCommandInput extends RemoveAttributesFromFindingsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAttributesFromFindingsCommand}.
 */
export interface RemoveAttributesFromFindingsCommandOutput
  extends RemoveAttributesFromFindingsResponse,
    __MetadataBearer {}

/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // RemoveAttributesFromFindingsRequest
 *   findingArns: [ // AddRemoveAttributesFindingArnList // required
 *     "STRING_VALUE",
 *   ],
 *   attributeKeys: [ // UserAttributeKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAttributesFromFindingsResponse
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveAttributesFromFindingsCommandInput - {@link RemoveAttributesFromFindingsCommandInput}
 * @returns {@link RemoveAttributesFromFindingsCommandOutput}
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
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
 * @example Remove attributes from findings
 * ```javascript
 * // Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
 * const input = {
 *   attributeKeys: [
 *     "key=Example,value=example"
 *   ],
 *   findingArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-8l1VIE0D/run/0-Z02cjjug/finding/0-T8yM9mEU"
 *   ]
 * };
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failedItems:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveAttributesFromFindingsCommand extends $Command
  .classBuilder<
    RemoveAttributesFromFindingsCommandInput,
    RemoveAttributesFromFindingsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "RemoveAttributesFromFindings", {})
  .n("InspectorClient", "RemoveAttributesFromFindingsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveAttributesFromFindingsCommand)
  .de(de_RemoveAttributesFromFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAttributesFromFindingsRequest;
      output: RemoveAttributesFromFindingsResponse;
    };
    sdk: {
      input: RemoveAttributesFromFindingsCommandInput;
      output: RemoveAttributesFromFindingsCommandOutput;
    };
  };
}
