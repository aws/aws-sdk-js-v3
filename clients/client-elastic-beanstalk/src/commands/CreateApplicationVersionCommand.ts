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
import { ApplicationVersionDescriptionMessage, CreateApplicationVersionMessage } from "../models/models_0";
import { de_CreateApplicationVersionCommand, se_CreateApplicationVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandInput extends CreateApplicationVersionMessage {}
/**
 * @public
 *
 * The output of {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandOutput extends ApplicationVersionDescriptionMessage, __MetadataBearer {}

/**
 * @public
 * <p>Creates an application version for the specified application. You can create an
 *       application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the
 *       output of an AWS CodeBuild build as follows:</p>
 *          <p>Specify a commit in an AWS CodeCommit repository with
 *         <code>SourceBuildInformation</code>.</p>
 *          <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and
 *         <code>BuildConfiguration</code>.</p>
 *          <p>Specify a source bundle in S3 with <code>SourceBundle</code>
 *          </p>
 *          <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the
 *       default sample application.</p>
 *          <note>
 *             <p>After you create an application version with a specified Amazon S3 bucket and key
 *         location, you can't change that Amazon S3 location. If you change the Amazon S3 location,
 *         you receive an exception when you attempt to launch an environment from the application
 *         version.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CreateApplicationVersionMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   VersionLabel: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SourceBuildInformation: { // SourceBuildInformation
 *     SourceType: "Git" || "Zip", // required
 *     SourceRepository: "CodeCommit" || "S3", // required
 *     SourceLocation: "STRING_VALUE", // required
 *   },
 *   SourceBundle: { // S3Location
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   BuildConfiguration: { // BuildConfiguration
 *     ArtifactName: "STRING_VALUE",
 *     CodeBuildServiceRole: "STRING_VALUE", // required
 *     ComputeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE",
 *     Image: "STRING_VALUE", // required
 *     TimeoutInMinutes: Number("int"),
 *   },
 *   AutoCreateApplication: true || false,
 *   Process: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationVersionDescriptionMessage
 * //   ApplicationVersion: { // ApplicationVersionDescription
 * //     ApplicationVersionArn: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VersionLabel: "STRING_VALUE",
 * //     SourceBuildInformation: { // SourceBuildInformation
 * //       SourceType: "Git" || "Zip", // required
 * //       SourceRepository: "CodeCommit" || "S3", // required
 * //       SourceLocation: "STRING_VALUE", // required
 * //     },
 * //     BuildArn: "STRING_VALUE",
 * //     SourceBundle: { // S3Location
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     Status: "Processed" || "Unprocessed" || "Failed" || "Processing" || "Building",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationVersionCommandInput - {@link CreateApplicationVersionCommandInput}
 * @returns {@link CreateApplicationVersionCommandOutput}
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link CodeBuildNotInServiceRegionException} (client fault)
 *  <p>AWS CodeBuild is not available in the specified region.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link S3LocationNotInServiceRegionException} (client fault)
 *  <p>The specified S3 bucket does not belong to the S3 region in which the service is
 *       running. The following regions are supported:</p>
 *          <ul>
 *             <li>
 *                <p>IAD/us-east-1</p>
 *             </li>
 *             <li>
 *                <p>PDX/us-west-2</p>
 *             </li>
 *             <li>
 *                <p>DUB/eu-west-1</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link TooManyApplicationsException} (client fault)
 *  <p>The specified account has reached its limit of applications.</p>
 *
 * @throws {@link TooManyApplicationVersionsException} (client fault)
 *  <p>The specified account has reached its limit of application versions.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To create a new application
 * ```javascript
 * // The following operation creates a new version (v1) of an application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "AutoCreateApplication": true,
 *   "Description": "my-app-v1",
 *   "Process": true,
 *   "SourceBundle": {
 *     "S3Bucket": "my-bucket",
 *     "S3Key": "sample.war"
 *   },
 *   "VersionLabel": "v1"
 * };
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationVersion": {
 *     "ApplicationName": "my-app",
 *     "DateCreated": "2015-02-03T23:01:25.412Z",
 *     "DateUpdated": "2015-02-03T23:01:25.412Z",
 *     "Description": "my-app-v1",
 *     "SourceBundle": {
 *       "S3Bucket": "my-bucket",
 *       "S3Key": "sample.war"
 *     },
 *     "VersionLabel": "v1"
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-application-1456268895683
 * ```
 *
 */
export class CreateApplicationVersionCommand extends $Command<
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
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
  constructor(readonly input: CreateApplicationVersionCommandInput) {
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
  ): Handler<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "CreateApplicationVersion",
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
  private serialize(input: CreateApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApplicationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationVersionCommandOutput> {
    return de_CreateApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
