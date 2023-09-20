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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateIndexingConfigurationRequest, UpdateIndexingConfigurationResponse } from "../models/models_2";
import {
  de_UpdateIndexingConfigurationCommand,
  se_UpdateIndexingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIndexingConfigurationCommand}.
 */
export interface UpdateIndexingConfigurationCommandInput extends UpdateIndexingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIndexingConfigurationCommand}.
 */
export interface UpdateIndexingConfigurationCommandOutput
  extends UpdateIndexingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the search configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateIndexingConfigurationRequest
 *   thingIndexingConfiguration: { // ThingIndexingConfiguration
 *     thingIndexingMode: "OFF" || "REGISTRY" || "REGISTRY_AND_SHADOW", // required
 *     thingConnectivityIndexingMode: "OFF" || "STATUS",
 *     deviceDefenderIndexingMode: "OFF" || "VIOLATIONS",
 *     namedShadowIndexingMode: "OFF" || "ON",
 *     managedFields: [ // Fields
 *       { // Field
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     customFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     filter: { // IndexingFilter
 *       namedShadowNames: [ // NamedShadowNamesFilter
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   thingGroupIndexingConfiguration: { // ThingGroupIndexingConfiguration
 *     thingGroupIndexingMode: "OFF" || "ON", // required
 *     managedFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     customFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateIndexingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIndexingConfigurationCommandInput - {@link UpdateIndexingConfigurationCommandInput}
 * @returns {@link UpdateIndexingConfigurationCommandOutput}
 * @see {@link UpdateIndexingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateIndexingConfigurationCommand extends $Command<
  UpdateIndexingConfigurationCommandInput,
  UpdateIndexingConfigurationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: UpdateIndexingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIndexingConfigurationCommandInput, UpdateIndexingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIndexingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateIndexingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "UpdateIndexingConfiguration",
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
  private serialize(input: UpdateIndexingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIndexingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIndexingConfigurationCommandOutput> {
    return de_UpdateIndexingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
