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
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_0";
import { de_DescribeInputCommand, se_DescribeInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandInput extends DescribeInputRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // DescribeInputRequest
 *   inputName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputResponse
 * //   input: { // Input
 * //     inputConfiguration: { // InputConfiguration
 * //       inputName: "STRING_VALUE", // required
 * //       inputDescription: "STRING_VALUE",
 * //       inputArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastUpdateTime: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //     },
 * //     inputDefinition: { // InputDefinition
 * //       attributes: [ // Attributes // required
 * //         { // Attribute
 * //           jsonPath: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInputCommandInput - {@link DescribeInputCommandInput}
 * @returns {@link DescribeInputCommandOutput}
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
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
export class DescribeInputCommand extends $Command<
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
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
  constructor(readonly input: DescribeInputCommandInput) {
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
  ): Handler<DescribeInputCommandInput, DescribeInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeInputCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeInputCommand";
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
  private serialize(input: DescribeInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInputCommandOutput> {
    return de_DescribeInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
