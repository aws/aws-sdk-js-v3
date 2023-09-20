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
import { RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage } from "../models/models_0";
import { de_RetrieveEnvironmentInfoCommand, se_RetrieveEnvironmentInfoCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RetrieveEnvironmentInfoCommand}.
 */
export interface RetrieveEnvironmentInfoCommandInput extends RetrieveEnvironmentInfoMessage {}
/**
 * @public
 *
 * The output of {@link RetrieveEnvironmentInfoCommand}.
 */
export interface RetrieveEnvironmentInfoCommandOutput extends RetrieveEnvironmentInfoResultMessage, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
 *       request.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RequestEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // RetrieveEnvironmentInfoMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   InfoType: "tail" || "bundle", // required
 * };
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveEnvironmentInfoResultMessage
 * //   EnvironmentInfo: [ // EnvironmentInfoDescriptionList
 * //     { // EnvironmentInfoDescription
 * //       InfoType: "tail" || "bundle",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       SampleTimestamp: new Date("TIMESTAMP"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RetrieveEnvironmentInfoCommandInput - {@link RetrieveEnvironmentInfoCommandInput}
 * @returns {@link RetrieveEnvironmentInfoCommandOutput}
 * @see {@link RetrieveEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RetrieveEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To retrieve tailed logs
 * ```javascript
 * // The following operation retrieves a link to logs from an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env",
 *   "InfoType": "tail"
 * };
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnvironmentInfo": [
 *     {
 *       "Ec2InstanceId": "i-09c1c867",
 *       "InfoType": "tail",
 *       "Message": "https://elasticbeanstalk-us-west-2-0123456789012.s3.amazonaws.com/resources/environments/logs/tail/e-fyqyju3yjs/i-09c1c867/TailLogs-1440109397703.out?AWSAccessKeyId=AKGPT4J56IAJ2EUBL5CQ&Expires=1440195891&Signature=n%2BEalOV6A2HIOx4Rcfb7LT16bBM%3D",
 *       "SampleTimestamp": "2015-08-20T22:23:17.703Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-tailed-logs-1456277792734
 * ```
 *
 */
export class RetrieveEnvironmentInfoCommand extends $Command<
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
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
  constructor(readonly input: RetrieveEnvironmentInfoCommandInput) {
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
  ): Handler<RetrieveEnvironmentInfoCommandInput, RetrieveEnvironmentInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetrieveEnvironmentInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "RetrieveEnvironmentInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "RetrieveEnvironmentInfo",
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
  private serialize(input: RetrieveEnvironmentInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RetrieveEnvironmentInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveEnvironmentInfoCommandOutput> {
    return de_RetrieveEnvironmentInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
