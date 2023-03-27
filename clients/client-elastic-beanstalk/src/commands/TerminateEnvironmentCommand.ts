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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, TerminateEnvironmentMessage } from "../models/models_0";
import {
  deserializeAws_queryTerminateEnvironmentCommand,
  serializeAws_queryTerminateEnvironmentCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link TerminateEnvironmentCommand}.
 */
export interface TerminateEnvironmentCommandInput extends TerminateEnvironmentMessage {}
/**
 * @public
 *
 * The output of {@link TerminateEnvironmentCommand}.
 */
export interface TerminateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * @public
 * <p>Terminates the specified environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, TerminateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, TerminateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // TerminateEnvironmentMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   TerminateResources: true || false,
 *   ForceTerminate: true || false,
 * };
 * const command = new TerminateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param TerminateEnvironmentCommandInput - {@link TerminateEnvironmentCommandInput}
 * @returns {@link TerminateEnvironmentCommandOutput}
 * @see {@link TerminateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link TerminateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 *
 * @example To terminate an environment
 * ```javascript
 * // The following operation terminates an Elastic Beanstalk environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env"
 * };
 * const command = new TerminateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AbortableOperationInProgress": false,
 *   "ApplicationName": "my-app",
 *   "CNAME": "my-env.elasticbeanstalk.com",
 *   "DateCreated": "2015-08-12T18:52:53.622Z",
 *   "DateUpdated": "2015-08-12T19:05:54.744Z",
 *   "EndpointURL": "awseb-e-f-AWSEBLoa-1I9XUMP4-8492WNUP202574.us-west-2.elb.amazonaws.com",
 *   "EnvironmentId": "e-fh2eravpns",
 *   "EnvironmentName": "my-env",
 *   "Health": "Grey",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "Status": "Terminating",
 *   "Tier": {
 *     "Name": "WebServer",
 *     "Type": "Standard",
 *     "Version": " "
 *   }
 * }
 * *\/
 * // example id: to-terminate-an-environment-1456277888556
 * ```
 *
 */
export class TerminateEnvironmentCommand extends $Command<
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
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
  constructor(readonly input: TerminateEnvironmentCommandInput) {
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
  ): Handler<TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "TerminateEnvironmentCommand";
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
  private serialize(input: TerminateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTerminateEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateEnvironmentCommandOutput> {
    return deserializeAws_queryTerminateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
