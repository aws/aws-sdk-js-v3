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

import { DescribeTrialComponentRequest, DescribeTrialComponentResponse } from "../models/models_2";
import { de_DescribeTrialComponentCommand, se_DescribeTrialComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrialComponentCommand}.
 */
export interface DescribeTrialComponentCommandInput extends DescribeTrialComponentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrialComponentCommand}.
 */
export interface DescribeTrialComponentCommandOutput extends DescribeTrialComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of a trials component's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTrialComponentRequest
 *   TrialComponentName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrialComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrialComponentResponse
 * //   TrialComponentName: "STRING_VALUE",
 * //   TrialComponentArn: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Source: { // TrialComponentSource
 * //     SourceArn: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //   },
 * //   Status: { // TrialComponentStatus
 * //     PrimaryStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   Parameters: { // TrialComponentParameters
 * //     "<keys>": { // TrialComponentParameterValue Union: only one key present
 * //       StringValue: "STRING_VALUE",
 * //       NumberValue: Number("double"),
 * //     },
 * //   },
 * //   InputArtifacts: { // TrialComponentArtifacts
 * //     "<keys>": { // TrialComponentArtifact
 * //       MediaType: "STRING_VALUE",
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   OutputArtifacts: {
 * //     "<keys>": {
 * //       MediaType: "STRING_VALUE",
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   MetadataProperties: { // MetadataProperties
 * //     CommitId: "STRING_VALUE",
 * //     Repository: "STRING_VALUE",
 * //     GeneratedBy: "STRING_VALUE",
 * //     ProjectId: "STRING_VALUE",
 * //   },
 * //   Metrics: [ // TrialComponentMetricSummaries
 * //     { // TrialComponentMetricSummary
 * //       MetricName: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       TimeStamp: new Date("TIMESTAMP"),
 * //       Max: Number("double"),
 * //       Min: Number("double"),
 * //       Last: Number("double"),
 * //       Count: Number("int"),
 * //       Avg: Number("double"),
 * //       StdDev: Number("double"),
 * //     },
 * //   ],
 * //   LineageGroupArn: "STRING_VALUE",
 * //   Sources: [ // TrialComponentSources
 * //     {
 * //       SourceArn: "STRING_VALUE", // required
 * //       SourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrialComponentCommandInput - {@link DescribeTrialComponentCommandInput}
 * @returns {@link DescribeTrialComponentCommandOutput}
 * @see {@link DescribeTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeTrialComponentCommand extends $Command<
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeTrialComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrialComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeTrialComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeTrialComponent",
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
  private serialize(input: DescribeTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrialComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrialComponentCommandOutput> {
    return de_DescribeTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
