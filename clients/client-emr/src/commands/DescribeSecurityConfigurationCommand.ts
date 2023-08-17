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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import {
  de_DescribeSecurityConfigurationCommand,
  se_DescribeSecurityConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandInput extends DescribeSecurityConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandOutput
  extends DescribeSecurityConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides the details of a security configuration by returning the configuration
 *          JSON.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeSecurityConfigurationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityConfigurationOutput
 * //   Name: "STRING_VALUE",
 * //   SecurityConfiguration: "STRING_VALUE",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeSecurityConfigurationCommandInput - {@link DescribeSecurityConfigurationCommandInput}
 * @returns {@link DescribeSecurityConfigurationCommandOutput}
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class DescribeSecurityConfigurationCommand extends $Command<
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: DescribeSecurityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSecurityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeSecurityConfigurationCommand";
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
  private serialize(input: DescribeSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSecurityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSecurityConfigurationCommandOutput> {
    return de_DescribeSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
