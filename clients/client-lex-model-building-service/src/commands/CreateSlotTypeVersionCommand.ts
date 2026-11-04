// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse } from "../models/models_0";
import { CreateSlotTypeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new version of a slot type based on the `$LATEST` version of the specified slot type. If the `$LATEST` version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created.
 *
 * > **Note:** You can update only the `$LATEST` version of a slot type. You can't update the numbered versions that you create with the `CreateSlotTypeVersion` operation.
 *
 * When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro.
 *
 * This operation requires permissions for the `lex:CreateSlotTypeVersion` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
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
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource and try again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class CreateSlotTypeVersionCommand extends command<CreateSlotTypeVersionCommandInput, CreateSlotTypeVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSlotTypeVersion",
  CreateSlotTypeVersion$
) {
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
