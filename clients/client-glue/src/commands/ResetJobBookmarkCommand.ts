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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ResetJobBookmarkCommand,
  serializeAws_json1_1ResetJobBookmarkCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ResetJobBookmarkCommand}.
 */
export interface ResetJobBookmarkCommandInput extends ResetJobBookmarkRequest {}
/**
 * @public
 *
 * The output of {@link ResetJobBookmarkCommand}.
 */
export interface ResetJobBookmarkCommandOutput extends ResetJobBookmarkResponse, __MetadataBearer {}

/**
 * @public
 * <p>Resets a bookmark entry.</p>
 *          <p>For more information about enabling and using job bookmarks, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = {
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE",
 * };
 * const command = new ResetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ResetJobBookmarkCommandInput - {@link ResetJobBookmarkCommandInput}
 * @returns {@link ResetJobBookmarkCommandOutput}
 * @see {@link ResetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link ResetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class ResetJobBookmarkCommand extends $Command<
  ResetJobBookmarkCommandInput,
  ResetJobBookmarkCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: ResetJobBookmarkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetJobBookmarkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ResetJobBookmarkCommand";
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
  private serialize(input: ResetJobBookmarkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResetJobBookmarkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetJobBookmarkCommandOutput> {
    return deserializeAws_json1_1ResetJobBookmarkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
