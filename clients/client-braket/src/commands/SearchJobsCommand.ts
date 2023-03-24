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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { SearchJobsRequest, SearchJobsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchJobsCommand,
  serializeAws_restJson1SearchJobsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandInput extends SearchJobsRequest {}
/**
 * @public
 *
 * The output of {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandOutput extends SearchJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for Amazon Braket jobs that match the specified filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchJobsCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchJobsCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = {
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // required
 *     {
 *       name: "STRING_VALUE", // required
 *       values: [ // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchJobsCommandInput - {@link SearchJobsCommandInput}
 * @returns {@link SearchJobsCommandOutput}
 * @see {@link SearchJobsCommandInput} for command's `input` shape.
 * @see {@link SearchJobsCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 *
 */
export class SearchJobsCommand extends $Command<
  SearchJobsCommandInput,
  SearchJobsCommandOutput,
  BraketClientResolvedConfig
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
  constructor(readonly input: SearchJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchJobsCommandInput, SearchJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "SearchJobsCommand";
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
  private serialize(input: SearchJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchJobsCommandOutput> {
    return deserializeAws_restJson1SearchJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
