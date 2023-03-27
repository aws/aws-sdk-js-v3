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
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeApplicationVersionsCommand,
  serializeAws_queryDescribeApplicationVersionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandInput extends DescribeApplicationVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandOutput
  extends ApplicationVersionDescriptionsMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationVersionsMessage
 *   ApplicationName: "STRING_VALUE",
 *   VersionLabels: [ // VersionLabelsList
 *     "STRING_VALUE",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeApplicationVersionsCommandInput - {@link DescribeApplicationVersionsCommandInput}
 * @returns {@link DescribeApplicationVersionsCommandOutput}
 * @see {@link DescribeApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 *
 * @example To view information about an application version
 * ```javascript
 * // The following operation retrieves information about an application version labeled v2:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "VersionLabels": [
 *     "v2"
 *   ]
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationVersions": [
 *     {
 *       "ApplicationName": "my-app",
 *       "DateCreated": "2015-07-23T01:32:26.079Z",
 *       "DateUpdated": "2015-07-23T01:32:26.079Z",
 *       "Description": "update cover page",
 *       "SourceBundle": {
 *         "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
 *         "S3Key": "my-app/5026-stage-150723_224258.war"
 *       },
 *       "VersionLabel": "v2"
 *     },
 *     {
 *       "ApplicationName": "my-app",
 *       "DateCreated": "2015-07-23T22:26:10.816Z",
 *       "DateUpdated": "2015-07-23T22:26:10.816Z",
 *       "Description": "initial version",
 *       "SourceBundle": {
 *         "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
 *         "S3Key": "my-app/5026-stage-150723_222618.war"
 *       },
 *       "VersionLabel": "v1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-information-about-an-application-version-1456269947428
 * ```
 *
 */
export class DescribeApplicationVersionsCommand extends $Command<
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
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
  constructor(readonly input: DescribeApplicationVersionsCommandInput) {
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
  ): Handler<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeApplicationVersionsCommand";
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
  private serialize(input: DescribeApplicationVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeApplicationVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationVersionsCommandOutput> {
    return deserializeAws_queryDescribeApplicationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
