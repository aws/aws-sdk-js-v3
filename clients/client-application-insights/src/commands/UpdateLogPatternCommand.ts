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

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { UpdateLogPatternRequest, UpdateLogPatternResponse } from "../models/models_0";
import { de_UpdateLogPatternCommand, se_UpdateLogPatternCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogPatternCommand}.
 */
export interface UpdateLogPatternCommandInput extends UpdateLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogPatternCommand}.
 */
export interface UpdateLogPatternCommandOutput extends UpdateLogPatternResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 *   Pattern: "STRING_VALUE",
 *   Rank: Number("int"),
 * };
 * const command = new UpdateLogPatternCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLogPatternResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   LogPattern: { // LogPattern
 * //     PatternSetName: "STRING_VALUE",
 * //     PatternName: "STRING_VALUE",
 * //     Pattern: "STRING_VALUE",
 * //     Rank: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLogPatternCommandInput - {@link UpdateLogPatternCommandInput}
 * @returns {@link UpdateLogPatternCommandOutput}
 * @see {@link UpdateLogPatternCommandInput} for command's `input` shape.
 * @see {@link UpdateLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already created or in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 */
export class UpdateLogPatternCommand extends $Command<
  UpdateLogPatternCommandInput,
  UpdateLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
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
  constructor(readonly input: UpdateLogPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLogPatternCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "UpdateLogPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EC2WindowsBarleyService",
        operation: "UpdateLogPattern",
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
  private serialize(input: UpdateLogPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLogPatternCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLogPatternCommandOutput> {
    return de_UpdateLogPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
