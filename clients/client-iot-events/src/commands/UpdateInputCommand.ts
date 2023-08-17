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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateInputRequest, UpdateInputResponse } from "../models/models_0";
import { de_UpdateInputCommand, se_UpdateInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandInput extends UpdateInputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandOutput extends UpdateInputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // UpdateInputRequest
 *   inputName: "STRING_VALUE", // required
 *   inputDescription: "STRING_VALUE",
 *   inputDefinition: { // InputDefinition
 *     attributes: [ // Attributes // required
 *       { // Attribute
 *         jsonPath: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateInputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputResponse
 * //   inputConfiguration: { // InputConfiguration
 * //     inputName: "STRING_VALUE", // required
 * //     inputDescription: "STRING_VALUE",
 * //     inputArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     lastUpdateTime: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInputCommandInput - {@link UpdateInputCommandInput}
 * @returns {@link UpdateInputCommandOutput}
 * @see {@link UpdateInputCommandInput} for command's `input` shape.
 * @see {@link UpdateInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 */
export class UpdateInputCommand extends $Command<
  UpdateInputCommandInput,
  UpdateInputCommandOutput,
  IoTEventsClientResolvedConfig
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
  constructor(readonly input: UpdateInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInputCommandInput, UpdateInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateInputCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "UpdateInputCommand";
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
  private serialize(input: UpdateInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInputCommandOutput> {
    return de_UpdateInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
