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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  DescribeJobTemplateRequest,
  DescribeJobTemplateResponse,
  DescribeJobTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeJobTemplateCommand, se_DescribeJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandInput extends DescribeJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandOutput extends DescribeJobTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays detailed information about a specified job template. Job template stores values
 *          of StartJobRun API request in a template and can be used to start a job run. Job template
 *          allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
 *          certain values in StartJobRun API request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeJobTemplateCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeJobTemplateCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeJobTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobTemplateResponse
 * //   jobTemplate: { // JobTemplate
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     jobTemplateData: { // JobTemplateData
 * //       executionRoleArn: "STRING_VALUE", // required
 * //       releaseLabel: "STRING_VALUE", // required
 * //       configurationOverrides: { // ParametricConfigurationOverrides
 * //         applicationConfiguration: [ // ConfigurationList
 * //           { // Configuration
 * //             classification: "STRING_VALUE", // required
 * //             properties: { // SensitivePropertiesMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             configurations: [
 * //               {
 * //                 classification: "STRING_VALUE", // required
 * //                 properties: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 configurations: "<ConfigurationList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         monitoringConfiguration: { // ParametricMonitoringConfiguration
 * //           persistentAppUI: "STRING_VALUE",
 * //           cloudWatchMonitoringConfiguration: { // ParametricCloudWatchMonitoringConfiguration
 * //             logGroupName: "STRING_VALUE",
 * //             logStreamNamePrefix: "STRING_VALUE",
 * //           },
 * //           s3MonitoringConfiguration: { // ParametricS3MonitoringConfiguration
 * //             logUri: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       jobDriver: { // JobDriver
 * //         sparkSubmitJobDriver: { // SparkSubmitJobDriver
 * //           entryPoint: "STRING_VALUE", // required
 * //           entryPointArguments: [ // EntryPointArguments
 * //             "STRING_VALUE",
 * //           ],
 * //           sparkSubmitParameters: "STRING_VALUE",
 * //         },
 * //         sparkSqlJobDriver: { // SparkSqlJobDriver
 * //           entryPoint: "STRING_VALUE",
 * //           sparkSqlParameters: "STRING_VALUE",
 * //         },
 * //       },
 * //       parameterConfiguration: { // TemplateParameterConfigurationMap
 * //         "<keys>": { // TemplateParameterConfiguration
 * //           type: "NUMBER" || "STRING",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       jobTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //     decryptionError: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobTemplateCommandInput - {@link DescribeJobTemplateCommandInput}
 * @returns {@link DescribeJobTemplateCommandOutput}
 * @see {@link DescribeJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class DescribeJobTemplateCommand extends $Command<
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: DescribeJobTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobTemplateCommandInput, DescribeJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeJobTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeJobTemplateResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsChicagoWebService",
        operation: "DescribeJobTemplate",
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
  private serialize(input: DescribeJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobTemplateCommandOutput> {
    return de_DescribeJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
