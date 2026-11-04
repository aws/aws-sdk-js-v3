// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataIntegrationRequest, CreateDataIntegrationResponse } from "../models/models_0";
import { CreateDataIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataIntegrationCommand}.
 */
export interface CreateDataIntegrationCommandInput extends CreateDataIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataIntegrationCommand}.
 */
export interface CreateDataIntegrationCommandOutput extends CreateDataIntegrationResponse, __MetadataBearer {}

/**
 * Creates and persists a DataIntegration resource.
 *
 * > **Note:** You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the `CreateDataIntegration` API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateDataIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateDataIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // CreateDataIntegrationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   KmsKey: "STRING_VALUE", // required
 *   SourceURI: "STRING_VALUE",
 *   ScheduleConfig: { // ScheduleConfiguration
 *     FirstExecutionFrom: "STRING_VALUE",
 *     Object: "STRING_VALUE",
 *     ScheduleExpression: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 *   FileConfiguration: { // FileConfiguration
 *     Folders: [ // FolderList // required
 *       "STRING_VALUE",
 *     ],
 *     Filters: { // FieldsMap
 *       "<keys>": [ // FieldsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ObjectConfiguration: { // ObjectConfiguration
 *     "<keys>": {
 *       "<keys>": [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateDataIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataIntegrationResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   KmsKey: "STRING_VALUE",
 * //   SourceURI: "STRING_VALUE",
 * //   ScheduleConfiguration: { // ScheduleConfiguration
 * //     FirstExecutionFrom: "STRING_VALUE",
 * //     Object: "STRING_VALUE",
 * //     ScheduleExpression: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * //   FileConfiguration: { // FileConfiguration
 * //     Folders: [ // FolderList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Filters: { // FieldsMap
 * //       "<keys>": [ // FieldsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   ObjectConfiguration: { // ObjectConfiguration
 * //     "<keys>": {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataIntegrationCommandInput - {@link CreateDataIntegrationCommandInput}
 * @returns {@link CreateDataIntegrationCommandOutput}
 * @see {@link CreateDataIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateDataIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * Request processing failed due to an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *
 * The allowed quota for the resource has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link AppIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from AppIntegrations service.
 *
 * @public
 */
export class CreateDataIntegrationCommand extends command<CreateDataIntegrationCommandInput, CreateDataIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataIntegration",
  CreateDataIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataIntegrationRequest;
      output: CreateDataIntegrationResponse;
    };
    sdk: {
      input: CreateDataIntegrationCommandInput;
      output: CreateDataIntegrationCommandOutput;
    };
  };
}
