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
import { ListAvailableSolutionStacksResultMessage } from "../models/models_0";
import { de_ListAvailableSolutionStacksCommand, se_ListAvailableSolutionStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableSolutionStacksCommand}.
 */
export interface ListAvailableSolutionStacksCommandInput {}
/**
 * @public
 *
 * The output of {@link ListAvailableSolutionStacksCommand}.
 */
export interface ListAvailableSolutionStacksCommandOutput
  extends ListAvailableSolutionStacksResultMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the available solution stack names, with the public version first and
 *       then in reverse chronological order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = {};
 * const command = new ListAvailableSolutionStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableSolutionStacksResultMessage
 * //   SolutionStacks: [ // AvailableSolutionStackNamesList
 * //     "STRING_VALUE",
 * //   ],
 * //   SolutionStackDetails: [ // AvailableSolutionStackDetailsList
 * //     { // SolutionStackDescription
 * //       SolutionStackName: "STRING_VALUE",
 * //       PermittedFileTypes: [ // SolutionStackFileTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableSolutionStacksCommandInput - {@link ListAvailableSolutionStacksCommandInput}
 * @returns {@link ListAvailableSolutionStacksCommandOutput}
 * @see {@link ListAvailableSolutionStacksCommandInput} for command's `input` shape.
 * @see {@link ListAvailableSolutionStacksCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view solution stacks
 * ```javascript
 * // The following operation lists solution stacks for all currently available platform configurations and any that you have used in the past:
 * const input = undefined;
 * const command = new ListAvailableSolutionStacksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SolutionStackDetails": [
 *     {
 *       "PermittedFileTypes": [
 *         "zip"
 *       ],
 *       "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Node.js"
 *     }
 *   ],
 *   "SolutionStacks": [
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Node.js",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.6",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.5",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.4",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Python 3.4",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Python 2.7",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Python",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Puma)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Passenger Standalone)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Puma)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Passenger Standalone)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Puma)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Passenger Standalone)",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 1.9.3",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 7",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 6",
 *     "64bit Windows Server Core 2012 R2 running IIS 8.5",
 *     "64bit Windows Server 2012 R2 running IIS 8.5",
 *     "64bit Windows Server 2012 running IIS 8",
 *     "64bit Windows Server 2008 R2 running IIS 7.5",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Docker 1.6.2",
 *     "64bit Amazon Linux 2015.03 v2.0.0 running Multi-container Docker 1.6.2 (Generic)",
 *     "64bit Debian jessie v2.0.0 running GlassFish 4.1 Java 8 (Preconfigured - Docker)",
 *     "64bit Debian jessie v2.0.0 running GlassFish 4.0 Java 7 (Preconfigured - Docker)",
 *     "64bit Debian jessie v2.0.0 running Go 1.4 (Preconfigured - Docker)",
 *     "64bit Debian jessie v2.0.0 running Go 1.3 (Preconfigured - Docker)",
 *     "64bit Debian jessie v2.0.0 running Python 3.4 (Preconfigured - Docker)"
 *   ]
 * }
 * *\/
 * // example id: to-view-solution-stacks-1456277504811
 * ```
 *
 */
export class ListAvailableSolutionStacksCommand extends $Command<
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
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
  constructor(readonly input: ListAvailableSolutionStacksCommandInput) {
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
  ): Handler<ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableSolutionStacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ListAvailableSolutionStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "ListAvailableSolutionStacks",
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
  private serialize(input: ListAvailableSolutionStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAvailableSolutionStacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableSolutionStacksCommandOutput> {
    return de_ListAvailableSolutionStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
