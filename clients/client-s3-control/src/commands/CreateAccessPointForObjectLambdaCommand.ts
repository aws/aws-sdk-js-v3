// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { CreateAccessPointForObjectLambdaRequest, CreateAccessPointForObjectLambdaResult } from "../models/models_0";
import {
  de_CreateAccessPointForObjectLambdaCommand,
  se_CreateAccessPointForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPointForObjectLambdaCommand}.
 */
export interface CreateAccessPointForObjectLambdaCommandInput extends CreateAccessPointForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPointForObjectLambdaCommand}.
 */
export interface CreateAccessPointForObjectLambdaCommandOutput
  extends CreateAccessPointForObjectLambdaResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with
 *             Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>CreateAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessPointForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // ObjectLambdaConfiguration
 *     SupportingAccessPoint: "STRING_VALUE", // required
 *     CloudWatchMetricsEnabled: true || false,
 *     AllowedFeatures: [ // ObjectLambdaAllowedFeaturesList
 *       "GetObject-Range" || "GetObject-PartNumber" || "HeadObject-Range" || "HeadObject-PartNumber",
 *     ],
 *     TransformationConfigurations: [ // ObjectLambdaTransformationConfigurationsList // required
 *       { // ObjectLambdaTransformationConfiguration
 *         Actions: [ // ObjectLambdaTransformationConfigurationActionsList // required
 *           "GetObject" || "HeadObject" || "ListObjects" || "ListObjectsV2",
 *         ],
 *         ContentTransformation: { // ObjectLambdaContentTransformation Union: only one key present
 *           AwsLambda: { // AwsLambdaTransformation
 *             FunctionArn: "STRING_VALUE", // required
 *             FunctionPayload: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateAccessPointForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPointForObjectLambdaResult
 * //   ObjectLambdaAccessPointArn: "STRING_VALUE",
 * //   Alias: { // ObjectLambdaAccessPointAlias
 * //     Value: "STRING_VALUE",
 * //     Status: "PROVISIONING" || "READY",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessPointForObjectLambdaCommandInput - {@link CreateAccessPointForObjectLambdaCommandInput}
 * @returns {@link CreateAccessPointForObjectLambdaCommandOutput}
 * @see {@link CreateAccessPointForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateAccessPointForObjectLambdaCommand extends $Command<
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateAccessPointForObjectLambdaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessPointForObjectLambdaCommandInput, CreateAccessPointForObjectLambdaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessPointForObjectLambdaCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateAccessPointForObjectLambdaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "CreateAccessPointForObjectLambda",
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
  private serialize(
    input: CreateAccessPointForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateAccessPointForObjectLambdaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccessPointForObjectLambdaCommandOutput> {
    return de_CreateAccessPointForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
