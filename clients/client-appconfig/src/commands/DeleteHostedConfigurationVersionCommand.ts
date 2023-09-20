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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeleteHostedConfigurationVersionRequest } from "../models/models_0";
import {
  de_DeleteHostedConfigurationVersionCommand,
  se_DeleteHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteHostedConfigurationVersionCommand}.
 */
export interface DeleteHostedConfigurationVersionCommandInput extends DeleteHostedConfigurationVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHostedConfigurationVersionCommand}.
 */
export interface DeleteHostedConfigurationVersionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a version of a configuration from the AppConfig hosted configuration
 *          store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // DeleteHostedConfigurationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   VersionNumber: Number("int"), // required
 * };
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHostedConfigurationVersionCommandInput - {@link DeleteHostedConfigurationVersionCommandInput}
 * @returns {@link DeleteHostedConfigurationVersionCommandOutput}
 * @see {@link DeleteHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To delete a hosted configuration version
 * ```javascript
 * // The following delete-hosted-configuration-version example deletes a configuration version hosted in the AWS AppConfig configuration store.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "VersionNumber": 1
 * };
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-hosted-configuration-version-1632265720740
 * ```
 *
 */
export class DeleteHostedConfigurationVersionCommand extends $Command<
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: DeleteHostedConfigurationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHostedConfigurationVersionCommandInput, DeleteHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteHostedConfigurationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "DeleteHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "DeleteHostedConfigurationVersion",
      },
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
  private serialize(
    input: DeleteHostedConfigurationVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteHostedConfigurationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteHostedConfigurationVersionCommandOutput> {
    return de_DeleteHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
