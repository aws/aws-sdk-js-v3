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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteNetworkInsightsAccessScopeAnalysisRequest,
  DeleteNetworkInsightsAccessScopeAnalysisResult,
} from "../models/models_2";
import {
  de_DeleteNetworkInsightsAccessScopeAnalysisCommand,
  se_DeleteNetworkInsightsAccessScopeAnalysisCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandInput
  extends DeleteNetworkInsightsAccessScopeAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandOutput
  extends DeleteNetworkInsightsAccessScopeAnalysisResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Network Access Scope analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeAnalysisRequest
 *   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteNetworkInsightsAccessScopeAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAccessScopeAnalysisResult
 * //   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeAnalysisCommandInput - {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteNetworkInsightsAccessScopeAnalysisCommand extends $Command<
  DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
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
  constructor(readonly input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput) {
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
  ): Handler<
    DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    DeleteNetworkInsightsAccessScopeAnalysisCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteNetworkInsightsAccessScopeAnalysisCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsAccessScopeAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteNetworkInsightsAccessScopeAnalysis",
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
    input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteNetworkInsightsAccessScopeAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsAccessScopeAnalysisCommandOutput> {
    return de_DeleteNetworkInsightsAccessScopeAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
