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
import type { CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse } from "../models/models_0";
import { CreateSlotTypeVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSlotTypeVersionCommand}.
 */
export interface CreateSlotTypeVersionCommandInput extends CreateSlotTypeVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlotTypeVersionCommand}.
 */
export interface CreateSlotTypeVersionCommandOutput extends CreateSlotTypeVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of a slot type based on the
 *         <code>$LATEST</code> version of the specified slot type. If the
 *         <code>$LATEST</code> version of this resource has not changed since the
 *       last version that you created, Amazon Lex doesn't create a new version. It
 *       returns the last version that you created. </p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of a slot
 *         type. You can't update the numbered versions that you create with the
 *           <code>CreateSlotTypeVersion</code> operation.</p>
 *          </note>
 *          <p>When you create a version of a slot type, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:CreateSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // CreateSlotTypeVersionRequest
 *   name: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 * };
 * const command = new CreateSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSlotTypeVersionResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   enumerationValues: [ // EnumerationValues
 * //     { // EnumerationValue
 * //       value: "STRING_VALUE", // required
 * //       synonyms: [ // SynonymList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   valueSelectionStrategy: "ORIGINAL_VALUE" || "TOP_RESOLUTION",
 * //   parentSlotTypeSignature: "STRING_VALUE",
 * //   slotTypeConfigurations: [ // SlotTypeConfigurations
 * //     { // SlotTypeConfiguration
 * //       regexConfiguration: { // SlotTypeRegexConfiguration
 * //         pattern: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSlotTypeVersionCommandInput - {@link CreateSlotTypeVersionCommandInput}
 * @returns {@link CreateSlotTypeVersionCommandOutput}
 * @see {@link CreateSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
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
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class CreateSlotTypeVersionCommand extends $Command
  .classBuilder<
    CreateSlotTypeVersionCommandInput,
    CreateSlotTypeVersionCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "CreateSlotTypeVersion", {})
  .n("LexModelBuildingServiceClient", "CreateSlotTypeVersionCommand")
  .sc(CreateSlotTypeVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSlotTypeVersionRequest;
      output: CreateSlotTypeVersionResponse;
    };
    sdk: {
      input: CreateSlotTypeVersionCommandInput;
      output: CreateSlotTypeVersionCommandOutput;
    };
  };
}
