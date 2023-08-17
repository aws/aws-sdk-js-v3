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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInsightsAnalysisRequest, DeleteNetworkInsightsAnalysisResult } from "../models/models_2";
import { de_DeleteNetworkInsightsAnalysisCommand, se_DeleteNetworkInsightsAnalysisCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAnalysisCommandInput extends DeleteNetworkInsightsAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAnalysisCommandOutput
  extends DeleteNetworkInsightsAnalysisResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified network insights analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAnalysisRequest
 *   DryRun: true || false,
 *   NetworkInsightsAnalysisId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAnalysisResult
 * //   NetworkInsightsAnalysisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAnalysisCommandInput - {@link DeleteNetworkInsightsAnalysisCommandInput}
 * @returns {@link DeleteNetworkInsightsAnalysisCommandOutput}
 * @see {@link DeleteNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteNetworkInsightsAnalysisCommand extends $Command<
  DeleteNetworkInsightsAnalysisCommandInput,
  DeleteNetworkInsightsAnalysisCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DeleteNetworkInsightsAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNetworkInsightsAnalysisCommandInput, DeleteNetworkInsightsAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkInsightsAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsAnalysisCommand";
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
  private serialize(input: DeleteNetworkInsightsAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNetworkInsightsAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsAnalysisCommandOutput> {
    return de_DeleteNetworkInsightsAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
