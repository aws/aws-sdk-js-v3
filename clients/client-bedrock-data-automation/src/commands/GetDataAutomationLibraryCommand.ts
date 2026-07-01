// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataAutomationLibraryRequest, GetDataAutomationLibraryResponse } from "../models/models_0";
import { GetDataAutomationLibrary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataAutomationLibraryCommand}.
 */
export interface GetDataAutomationLibraryCommandInput extends GetDataAutomationLibraryRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAutomationLibraryCommand}.
 */
export interface GetDataAutomationLibraryCommandOutput extends GetDataAutomationLibraryResponse, __MetadataBearer {}

/**
 * Gets an existing Amazon Bedrock Data Automation Library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetDataAutomationLibraryCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetDataAutomationLibraryCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetDataAutomationLibraryRequest
 *   libraryArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataAutomationLibraryCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAutomationLibraryResponse
 * //   library: { // DataAutomationLibrary
 * //     libraryArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     libraryName: "STRING_VALUE", // required
 * //     libraryDescription: "STRING_VALUE",
 * //     status: "ACTIVE" || "DELETING", // required
 * //     entityTypes: [ // EntityTypeInfoList
 * //       { // EntityTypeInfo
 * //         entityType: "VOCABULARY", // required
 * //         entityMetadata: "STRING_VALUE",
 * //       },
 * //     ],
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsEncryptionContext: { // KmsEncryptionContext
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAutomationLibraryCommandInput - {@link GetDataAutomationLibraryCommandInput}
 * @returns {@link GetDataAutomationLibraryCommandOutput}
 * @see {@link GetDataAutomationLibraryCommandInput} for command's `input` shape.
 * @see {@link GetDataAutomationLibraryCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class GetDataAutomationLibraryCommand extends command<GetDataAutomationLibraryCommandInput, GetDataAutomationLibraryCommandOutput>(
  _ep0,
  _mw0,
  "GetDataAutomationLibrary",
  GetDataAutomationLibrary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAutomationLibraryRequest;
      output: GetDataAutomationLibraryResponse;
    };
    sdk: {
      input: GetDataAutomationLibraryCommandInput;
      output: GetDataAutomationLibraryCommandOutput;
    };
  };
}
