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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeModelPackagingJobRequest, DescribeModelPackagingJobResponse } from "../models/models_0";
import { de_DescribeModelPackagingJobCommand, se_DescribeModelPackagingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeModelPackagingJobCommand}.
 */
export interface DescribeModelPackagingJobCommandInput extends DescribeModelPackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelPackagingJobCommand}.
 */
export interface DescribeModelPackagingJobCommandOutput extends DescribeModelPackagingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Amazon Lookout for Vision model packaging job.
 * </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p>
 *
 *          <p>For more information, see
 *          <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelPackagingJobCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelPackagingJobCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // DescribeModelPackagingJobRequest
 *   ProjectName: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelPackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeModelPackagingJobCommandInput - {@link DescribeModelPackagingJobCommandInput}
 * @returns {@link DescribeModelPackagingJobCommandOutput}
 * @see {@link DescribeModelPackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackagingJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 *
 */
export class DescribeModelPackagingJobCommand extends $Command<
  DescribeModelPackagingJobCommandInput,
  DescribeModelPackagingJobCommandOutput,
  LookoutVisionClientResolvedConfig
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
  constructor(readonly input: DescribeModelPackagingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelPackagingJobCommandInput, DescribeModelPackagingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeModelPackagingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DescribeModelPackagingJobCommand";
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
  private serialize(input: DescribeModelPackagingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelPackagingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeModelPackagingJobCommandOutput> {
    return de_DescribeModelPackagingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
