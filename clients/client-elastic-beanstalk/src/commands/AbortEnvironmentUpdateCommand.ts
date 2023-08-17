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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { AbortEnvironmentUpdateMessage } from "../models/models_0";
import { de_AbortEnvironmentUpdateCommand, se_AbortEnvironmentUpdateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AbortEnvironmentUpdateCommand}.
 */
export interface AbortEnvironmentUpdateCommandInput extends AbortEnvironmentUpdateMessage {}
/**
 * @public
 *
 * The output of {@link AbortEnvironmentUpdateCommand}.
 */
export interface AbortEnvironmentUpdateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Cancels in-progress environment configuration update or application version
 *       deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // AbortEnvironmentUpdateMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortEnvironmentUpdateCommandInput - {@link AbortEnvironmentUpdateCommandInput}
 * @returns {@link AbortEnvironmentUpdateCommandOutput}
 * @see {@link AbortEnvironmentUpdateCommandInput} for command's `input` shape.
 * @see {@link AbortEnvironmentUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To abort a deployment
 * ```javascript
 * // The following code aborts a running application version deployment for an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env"
 * };
 * const command = new AbortEnvironmentUpdateCommand(input);
 * await client.send(command);
 * // example id: to-abort-a-deployment-1456267848227
 * ```
 *
 */
export class AbortEnvironmentUpdateCommand extends $Command<
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
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
  constructor(readonly input: AbortEnvironmentUpdateCommandInput) {
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
  ): Handler<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AbortEnvironmentUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "AbortEnvironmentUpdateCommand";
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
  private serialize(input: AbortEnvironmentUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AbortEnvironmentUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortEnvironmentUpdateCommandOutput> {
    return de_AbortEnvironmentUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
