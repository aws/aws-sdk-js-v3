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

import { GetFindingsRequest, GetFindingsResponse } from "../models/models_2";
import {
  deserializeAws_restJson1GetFindingsCommand,
  serializeAws_restJson1GetFindingsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandInput extends GetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of findings that match the specified criteria.</p>
 *          <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFindingsCommandInput - {@link GetFindingsCommandInput}
 * @returns {@link GetFindingsCommandOutput}
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 *
 */
export class GetFindingsCommand extends $Command<
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsCommandInput, GetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetFindingsCommand";
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
  private serialize(input: GetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsCommandOutput> {
    return deserializeAws_restJson1GetFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
