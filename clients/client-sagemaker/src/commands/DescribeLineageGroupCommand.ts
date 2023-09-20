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

import { DescribeLineageGroupRequest, DescribeLineageGroupResponse } from "../models/models_2";
import { de_DescribeLineageGroupCommand, se_DescribeLineageGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLineageGroupCommand}.
 */
export interface DescribeLineageGroupCommandInput extends DescribeLineageGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLineageGroupCommand}.
 */
export interface DescribeLineageGroupCommandOutput extends DescribeLineageGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of properties for the requested lineage group.
 *          For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html">
 *             Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeLineageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeLineageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeLineageGroupRequest
 *   LineageGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLineageGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLineageGroupResponse
 * //   LineageGroupName: "STRING_VALUE",
 * //   LineageGroupArn: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param DescribeLineageGroupCommandInput - {@link DescribeLineageGroupCommandInput}
 * @returns {@link DescribeLineageGroupCommandOutput}
 * @see {@link DescribeLineageGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeLineageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeLineageGroupCommand extends $Command<
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
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
  constructor(readonly input: DescribeLineageGroupCommandInput) {
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
  ): Handler<DescribeLineageGroupCommandInput, DescribeLineageGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLineageGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeLineageGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeLineageGroup",
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
  private serialize(input: DescribeLineageGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLineageGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLineageGroupCommandOutput> {
    return de_DescribeLineageGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
