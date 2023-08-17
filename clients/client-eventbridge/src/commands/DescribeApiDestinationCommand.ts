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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeApiDestinationRequest, DescribeApiDestinationResponse } from "../models/models_0";
import { de_DescribeApiDestinationCommand, se_DescribeApiDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApiDestinationCommand}.
 */
export interface DescribeApiDestinationCommandInput extends DescribeApiDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApiDestinationCommand}.
 */
export interface DescribeApiDestinationCommandOutput extends DescribeApiDestinationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeApiDestinationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApiDestinationResponse
 * //   ApiDestinationArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //   ConnectionArn: "STRING_VALUE",
 * //   InvocationEndpoint: "STRING_VALUE",
 * //   HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 * //   InvocationRateLimitPerSecond: Number("int"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeApiDestinationCommandInput - {@link DescribeApiDestinationCommandInput}
 * @returns {@link DescribeApiDestinationCommandOutput}
 * @see {@link DescribeApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class DescribeApiDestinationCommand extends $Command<
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: DescribeApiDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApiDestinationCommandInput, DescribeApiDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApiDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "DescribeApiDestinationCommand";
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
  private serialize(input: DescribeApiDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApiDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApiDestinationCommandOutput> {
    return de_DescribeApiDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
