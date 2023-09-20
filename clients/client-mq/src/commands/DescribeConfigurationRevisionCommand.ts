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

import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  de_DescribeConfigurationRevisionCommand,
  se_DescribeConfigurationRevisionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRevisionCommand}.
 */
export interface DescribeConfigurationRevisionCommandInput extends DescribeConfigurationRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRevisionCommand}.
 */
export interface DescribeConfigurationRevisionCommandOutput
  extends DescribeConfigurationRevisionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the specified configuration revision for the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeConfigurationRevisionRequest
 *   ConfigurationId: "STRING_VALUE", // required
 *   ConfigurationRevision: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRevisionResponse
 * //   ConfigurationId: "STRING_VALUE",
 * //   Created: new Date("TIMESTAMP"),
 * //   Data: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRevisionCommandInput - {@link DescribeConfigurationRevisionCommandInput}
 * @returns {@link DescribeConfigurationRevisionCommandOutput}
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class DescribeConfigurationRevisionCommand extends $Command<
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: DescribeConfigurationRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeConfigurationRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mq",
        operation: "DescribeConfigurationRevision",
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
  private serialize(input: DescribeConfigurationRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConfigurationRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRevisionCommandOutput> {
    return de_DescribeConfigurationRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
