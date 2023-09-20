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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import { de_SwapEnvironmentCNAMEsCommand, se_SwapEnvironmentCNAMEsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SwapEnvironmentCNAMEsCommand}.
 */
export interface SwapEnvironmentCNAMEsCommandInput extends SwapEnvironmentCNAMEsMessage {}
/**
 * @public
 *
 * The output of {@link SwapEnvironmentCNAMEsCommand}.
 */
export interface SwapEnvironmentCNAMEsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Swaps the CNAMEs of two environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // SwapEnvironmentCNAMEsMessage
 *   SourceEnvironmentId: "STRING_VALUE",
 *   SourceEnvironmentName: "STRING_VALUE",
 *   DestinationEnvironmentId: "STRING_VALUE",
 *   DestinationEnvironmentName: "STRING_VALUE",
 * };
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SwapEnvironmentCNAMEsCommandInput - {@link SwapEnvironmentCNAMEsCommandInput}
 * @returns {@link SwapEnvironmentCNAMEsCommandOutput}
 * @see {@link SwapEnvironmentCNAMEsCommandInput} for command's `input` shape.
 * @see {@link SwapEnvironmentCNAMEsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To swap environment CNAMES
 * ```javascript
 * // The following operation swaps the assigned subdomains of two environments:
 * const input = {
 *   "DestinationEnvironmentName": "my-env-green",
 *   "SourceEnvironmentName": "my-env-blue"
 * };
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * await client.send(command);
 * // example id: to-swap-environment-cnames-1456277839438
 * ```
 *
 */
export class SwapEnvironmentCNAMEsCommand extends $Command<
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: SwapEnvironmentCNAMEsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SwapEnvironmentCNAMEsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "SwapEnvironmentCNAMEsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "SwapEnvironmentCNAMEs",
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
  private serialize(input: SwapEnvironmentCNAMEsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SwapEnvironmentCNAMEsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SwapEnvironmentCNAMEsCommandOutput> {
    return de_SwapEnvironmentCNAMEsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
