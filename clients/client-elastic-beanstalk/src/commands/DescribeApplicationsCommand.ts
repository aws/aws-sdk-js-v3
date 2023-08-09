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
import { ApplicationDescriptionsMessage, DescribeApplicationsMessage } from "../models/models_0";
import { de_DescribeApplicationsCommand, se_DescribeApplicationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends ApplicationDescriptionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns the descriptions of existing applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationsMessage
 *   ApplicationNames: [ // ApplicationNamesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationDescriptionsMessage
 * //   Applications: [ // ApplicationDescriptionList
 * //     { // ApplicationDescription
 * //       ApplicationArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Versions: [ // VersionLabelsList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationTemplates: [ // ConfigurationTemplateNamesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //         ServiceRole: "STRING_VALUE",
 * //         VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //           MaxCountRule: { // MaxCountRule
 * //             Enabled: true || false, // required
 * //             MaxCount: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //           MaxAgeRule: { // MaxAgeRule
 * //             Enabled: true || false, // required
 * //             MaxAgeInDays: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view a list of applications
 * ```javascript
 * // The following operation retrieves information about applications in the current region:
 * const input = {};
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Applications": [
 *     {
 *       "ApplicationName": "ruby",
 *       "ConfigurationTemplates": [],
 *       "DateCreated": "2015-08-13T21:05:44.376Z",
 *       "DateUpdated": "2015-08-13T21:05:44.376Z",
 *       "Versions": [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       "ApplicationName": "pythonsample",
 *       "ConfigurationTemplates": [],
 *       "DateCreated": "2015-08-13T19:05:43.637Z",
 *       "DateUpdated": "2015-08-13T19:05:43.637Z",
 *       "Description": "Application created from the EB CLI using \"eb init\"",
 *       "Versions": [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       "ApplicationName": "nodejs-example",
 *       "ConfigurationTemplates": [],
 *       "DateCreated": "2015-08-06T17:50:02.486Z",
 *       "DateUpdated": "2015-08-06T17:50:02.486Z",
 *       "Versions": [
 *         "add elasticache",
 *         "First Release"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-a-list-of-applications-1456270027373
 * ```
 *
 */
export class DescribeApplicationsCommand extends $Command<
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
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
  constructor(readonly input: DescribeApplicationsCommandInput) {
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
  ): Handler<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeApplicationsCommand";
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
  private serialize(input: DescribeApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationsCommandOutput> {
    return de_DescribeApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
