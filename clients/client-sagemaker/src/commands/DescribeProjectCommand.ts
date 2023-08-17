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

import { DescribeProjectInput, DescribeProjectOutput } from "../models/models_2";
import { de_DescribeProjectCommand, se_DescribeProjectCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectInput {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the details of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeProjectCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeProjectCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeProjectInput
 *   ProjectName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectOutput
 * //   ProjectArn: "STRING_VALUE", // required
 * //   ProjectName: "STRING_VALUE", // required
 * //   ProjectId: "STRING_VALUE", // required
 * //   ProjectDescription: "STRING_VALUE",
 * //   ServiceCatalogProvisioningDetails: { // ServiceCatalogProvisioningDetails
 * //     ProductId: "STRING_VALUE", // required
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     ProvisioningParameters: [ // ProvisioningParameters
 * //       { // ProvisioningParameter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ServiceCatalogProvisionedProductDetails: { // ServiceCatalogProvisionedProductDetails
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProvisionedProductStatusMessage: "STRING_VALUE",
 * //   },
 * //   ProjectStatus: "Pending" || "CreateInProgress" || "CreateCompleted" || "CreateFailed" || "DeleteInProgress" || "DeleteFailed" || "DeleteCompleted" || "UpdateInProgress" || "UpdateCompleted" || "UpdateFailed", // required
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
 * //   CreationTime: new Date("TIMESTAMP"), // required
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
 * // };
 *
 * ```
 *
 * @param DescribeProjectCommandInput - {@link DescribeProjectCommandInput}
 * @returns {@link DescribeProjectCommandOutput}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeProjectCommand extends $Command<
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
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
  constructor(readonly input: DescribeProjectCommandInput) {
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
  ): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeProjectCommand";
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
  private serialize(input: DescribeProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectCommandOutput> {
    return de_DescribeProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
