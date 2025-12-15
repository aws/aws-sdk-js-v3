// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import type { GetSlotTypeVersionsRequest, GetSlotTypeVersionsResponse } from "../models/models_0";
import { GetSlotTypeVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSlotTypeVersionsCommand}.
 */
export interface GetSlotTypeVersionsCommandInput extends GetSlotTypeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetSlotTypeVersionsCommand}.
 */
export interface GetSlotTypeVersionsCommandOutput extends GetSlotTypeVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all versions of a slot type.</p>
 *          <p>The <code>GetSlotTypeVersions</code> operation returns a
 *         <code>SlotTypeMetadata</code> object for each version of a slot type.
 *       For example, if a slot type has three numbered versions, the
 *         <code>GetSlotTypeVersions</code> operation returns four
 *         <code>SlotTypeMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotTypeVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetSlotTypeVersionsRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetSlotTypeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetSlotTypeVersionsResponse
 * //   slotTypes: [ // SlotTypeMetadataList
 * //     { // SlotTypeMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSlotTypeVersionsCommandInput - {@link GetSlotTypeVersionsCommandInput}
 * @returns {@link GetSlotTypeVersionsCommandOutput}
 * @see {@link GetSlotTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class GetSlotTypeVersionsCommand extends $Command
  .classBuilder<
    GetSlotTypeVersionsCommandInput,
    GetSlotTypeVersionsCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetSlotTypeVersions", {})
  .n("LexModelBuildingServiceClient", "GetSlotTypeVersionsCommand")
  .sc(GetSlotTypeVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSlotTypeVersionsRequest;
      output: GetSlotTypeVersionsResponse;
    };
    sdk: {
      input: GetSlotTypeVersionsCommandInput;
      output: GetSlotTypeVersionsCommandOutput;
    };
  };
}
