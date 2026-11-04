// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImportRequest, GetImportResponse } from "../models/models_0";
import { GetImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImportCommand}.
 */
export interface GetImportCommandInput extends GetImportRequest {}
/**
 * @public
 *
 * The output of {@link GetImportCommand}.
 */
export interface GetImportCommandOutput extends GetImportResponse, __MetadataBearer {}

/**
 * Gets information about an import job started with the `StartImport` operation.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetImportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetImportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetImportRequest
 *   importId: "STRING_VALUE", // required
 * };
 * const command = new GetImportCommand(input);
 * const response = await client.send(command);
 * // { // GetImportResponse
 * //   name: "STRING_VALUE",
 * //   resourceType: "BOT" || "INTENT" || "SLOT_TYPE",
 * //   mergeStrategy: "OVERWRITE_LATEST" || "FAIL_ON_CONFLICT",
 * //   importId: "STRING_VALUE",
 * //   importStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   failureReason: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetImportCommandInput - {@link GetImportCommandInput}
 * @returns {@link GetImportCommandOutput}
 * @see {@link GetImportCommandInput} for command's `input` shape.
 * @see {@link GetImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class GetImportCommand extends command<GetImportCommandInput, GetImportCommandOutput>(
  _ep0,
  _mw0,
  "GetImport",
  GetImport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportRequest;
      output: GetImportResponse;
    };
    sdk: {
      input: GetImportCommandInput;
      output: GetImportCommandOutput;
    };
  };
}
