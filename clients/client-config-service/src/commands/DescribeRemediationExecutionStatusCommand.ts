// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeRemediationExecutionStatusRequest,
  DescribeRemediationExecutionStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRemediationExecutionStatusCommand,
  serializeAws_json1_1DescribeRemediationExecutionStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeRemediationExecutionStatusCommand}.
 */
export interface DescribeRemediationExecutionStatusCommandInput extends DescribeRemediationExecutionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRemediationExecutionStatusCommand}.
 */
export interface DescribeRemediationExecutionStatusCommandOutput
  extends DescribeRemediationExecutionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed.
 * 			When you specify the limit and the next token, you receive a paginated response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExecutionStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExecutionStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationExecutionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeRemediationExecutionStatusCommandInput - {@link DescribeRemediationExecutionStatusCommandInput}
 * @returns {@link DescribeRemediationExecutionStatusCommandOutput}
 * @see {@link DescribeRemediationExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchRemediationConfigurationException} (client fault)
 *  <p>You specified an Config rule without a remediation configuration.</p>
 *
 *
 */
export class DescribeRemediationExecutionStatusCommand extends $Command<
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DescribeRemediationExecutionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRemediationExecutionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRemediationExecutionStatusCommand";
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
  private serialize(
    input: DescribeRemediationExecutionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRemediationExecutionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRemediationExecutionStatusCommandOutput> {
    return deserializeAws_json1_1DescribeRemediationExecutionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
