// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExtractionDefinitionRequest, CreateExtractionDefinitionResponse } from "../models/models_0";
import { CreateExtractionDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExtractionDefinitionCommand}.
 */
export interface CreateExtractionDefinitionCommandInput extends CreateExtractionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtractionDefinitionCommand}.
 */
export interface CreateExtractionDefinitionCommandOutput extends CreateExtractionDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates an extraction definition in the specified Connect Customer instance. An extraction
 *    definition specifies how structured data is extracted from customer interactions using generative
 *    AI, including the prompt hint that guides extraction and the behavior when a value cannot be
 *    found.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateExtractionDefinitionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateExtractionDefinitionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateExtractionDefinitionRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ExtractionConfiguration: { // ExtractionConfiguration
 *     PromptHint: "STRING_VALUE", // required
 *     NotFoundBehavior: { // ExtractionDefinitionNotFoundBehavior
 *       Behavior: "USE_DEFAULT_VALUE" || "OMIT", // required
 *       DefaultValue: "STRING_VALUE",
 *     },
 *   },
 *   Display: { // ExtractionDefinitionDisplay
 *     Label: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExtractionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateExtractionDefinitionResponse
 * //   ExtractionDefinitionArn: "STRING_VALUE", // required
 * //   ExtractionDefinitionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateExtractionDefinitionCommandInput - {@link CreateExtractionDefinitionCommandInput}
 * @returns {@link CreateExtractionDefinitionCommandOutput}
 * @see {@link CreateExtractionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateExtractionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateExtractionDefinitionCommand extends command<CreateExtractionDefinitionCommandInput, CreateExtractionDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "CreateExtractionDefinition",
  CreateExtractionDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExtractionDefinitionRequest;
      output: CreateExtractionDefinitionResponse;
    };
    sdk: {
      input: CreateExtractionDefinitionCommandInput;
      output: CreateExtractionDefinitionCommandOutput;
    };
  };
}
