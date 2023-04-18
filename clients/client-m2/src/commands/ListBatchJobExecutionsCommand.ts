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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListBatchJobExecutionsRequest, ListBatchJobExecutionsResponse } from "../models/models_0";
import { de_ListBatchJobExecutionsCommand, se_ListBatchJobExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListBatchJobExecutionsCommand}.
 */
export interface ListBatchJobExecutionsCommandInput extends ListBatchJobExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchJobExecutionsCommand}.
 */
export interface ListBatchJobExecutionsCommandOutput extends ListBatchJobExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists historical, current, and scheduled batch job executions for a specific
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListBatchJobExecutionsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListBatchJobExecutionsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListBatchJobExecutionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 *   executionIds: [ // IdentifierList
 *     "STRING_VALUE",
 *   ],
 *   jobName: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   startedAfter: new Date("TIMESTAMP"),
 *   startedBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListBatchJobExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListBatchJobExecutionsCommandInput - {@link ListBatchJobExecutionsCommandInput}
 * @returns {@link ListBatchJobExecutionsCommandOutput}
 * @see {@link ListBatchJobExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListBatchJobExecutionsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 *
 */
export class ListBatchJobExecutionsCommand extends $Command<
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: ListBatchJobExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBatchJobExecutionsCommandInput, ListBatchJobExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBatchJobExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "ListBatchJobExecutionsCommand";
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
  private serialize(input: ListBatchJobExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBatchJobExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBatchJobExecutionsCommandOutput> {
    return de_ListBatchJobExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
