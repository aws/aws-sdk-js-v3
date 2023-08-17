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

import { DescribeContextRequest, DescribeContextResponse } from "../models/models_2";
import { de_DescribeContextCommand, se_DescribeContextCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeContextCommand}.
 */
export interface DescribeContextCommandInput extends DescribeContextRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContextCommand}.
 */
export interface DescribeContextCommandOutput extends DescribeContextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeContextRequest
 *   ContextName: "STRING_VALUE", // required
 * };
 * const command = new DescribeContextCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContextResponse
 * //   ContextName: "STRING_VALUE",
 * //   ContextArn: "STRING_VALUE",
 * //   Source: { // ContextSource
 * //     SourceUri: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //     SourceId: "STRING_VALUE",
 * //   },
 * //   ContextType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Properties: { // LineageEntityParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
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
 * //   LineageGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeContextCommandInput - {@link DescribeContextCommandInput}
 * @returns {@link DescribeContextCommandOutput}
 * @see {@link DescribeContextCommandInput} for command's `input` shape.
 * @see {@link DescribeContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeContextCommand extends $Command<
  DescribeContextCommandInput,
  DescribeContextCommandOutput,
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
  constructor(readonly input: DescribeContextCommandInput) {
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
  ): Handler<DescribeContextCommandInput, DescribeContextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContextCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeContextCommand";
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
  private serialize(input: DescribeContextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeContextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeContextCommandOutput> {
    return de_DescribeContextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
