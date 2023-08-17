// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { CreateDataIntegrationRequest, CreateDataIntegrationResponse } from "../models/models_0";
import { de_CreateDataIntegrationCommand, se_CreateDataIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates and persists a DataIntegration resource.</p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been
 *         previously associated. Use a different DataIntegration, or recreate the DataIntegration
 *         using the <code>CreateDataIntegration</code> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateDataIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateDataIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // CreateDataIntegrationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   KmsKey: "STRING_VALUE", // required
 *   SourceURI: "STRING_VALUE", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *  <p>The allowed quota for the resource has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 */
export class CreateDataIntegrationCommand extends $Command<
  CreateDataIntegrationCommandInput,
  CreateDataIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateDataIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataIntegrationCommandInput, CreateDataIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "CreateDataIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateDataIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataIntegrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataIntegrationCommandOutput> {
    return de_CreateDataIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
