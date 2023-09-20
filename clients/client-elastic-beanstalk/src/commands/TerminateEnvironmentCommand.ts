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
import { EnvironmentDescription, TerminateEnvironmentMessage } from "../models/models_0";
import { de_TerminateEnvironmentCommand, se_TerminateEnvironmentCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * // { // EnvironmentDescription
 * //   EnvironmentName: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   ApplicationName: "STRING_VALUE",
 * //   VersionLabel: "STRING_VALUE",
 * //   SolutionStackName: "STRING_VALUE",
 * //   PlatformArn: "STRING_VALUE",
 * //   TemplateName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EndpointURL: "STRING_VALUE",
 * //   CNAME: "STRING_VALUE",
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateUpdated: new Date("TIMESTAMP"),
 * //   Status: "Aborting" || "Launching" || "Updating" || "LinkingFrom" || "LinkingTo" || "Ready" || "Terminating" || "Terminated",
 * //   AbortableOperationInProgress: true || false,
 * //   Health: "Green" || "Yellow" || "Red" || "Grey",
 * //   HealthStatus: "NoData" || "Unknown" || "Pending" || "Ok" || "Info" || "Warning" || "Degraded" || "Severe" || "Suspended",
 * //   Resources: { // EnvironmentResourcesDescription
 * //     LoadBalancer: { // LoadBalancerDescription
 * //       LoadBalancerName: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       Listeners: [ // LoadBalancerListenersDescription
 * //         { // Listener
 * //           Protocol: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Tier: { // EnvironmentTier
 * //     Name: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * //   EnvironmentLinks: [ // EnvironmentLinks
 * //     { // EnvironmentLink
 * //       LinkName: "STRING_VALUE",
 * //       EnvironmentName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EnvironmentArn: "STRING_VALUE",
 * //   OperationsRole: "STRING_VALUE",
 * // };
 *
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
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "TerminateEnvironment",
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
  private serialize(input: TerminateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TerminateEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateEnvironmentCommandOutput> {
    return de_TerminateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
