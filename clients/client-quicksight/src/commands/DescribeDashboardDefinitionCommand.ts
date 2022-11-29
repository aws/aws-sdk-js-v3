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

import {
  DescribeDashboardDefinitionRequest,
  DescribeDashboardDefinitionRequestFilterSensitiveLog,
  DescribeDashboardDefinitionResponse,
  DescribeDashboardDefinitionResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DescribeDashboardDefinitionCommand,
  serializeAws_restJson1DescribeDashboardDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeDashboardDefinitionCommandInput extends DescribeDashboardDefinitionRequest {}
export interface DescribeDashboardDefinitionCommandOutput
  extends DescribeDashboardDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Provides a detailed description of the definition of a dashboard.</p>
 *          <note>
 *             <p>If you do not need to know details about the content of a dashboard, for instance if you
 *                 are trying to check the status of a recently created or updated dashboard, use the
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html">
 *                   <code>DescribeDashboard</code>
 *                </a> instead.
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardDefinitionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardDefinitionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDashboardDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDashboardDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardDefinitionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DescribeDashboardDefinitionCommand extends $Command<
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: DescribeDashboardDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDashboardDefinitionCommandInput, DescribeDashboardDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDashboardDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDashboardDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDashboardDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDashboardDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDashboardDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDashboardDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDashboardDefinitionCommandOutput> {
    return deserializeAws_restJson1DescribeDashboardDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
