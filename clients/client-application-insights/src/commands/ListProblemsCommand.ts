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
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { ListProblemsRequest, ListProblemsResponse } from "../models/models_0";
import { de_ListProblemsCommand, se_ListProblemsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListProblemsCommand}.
 */
export interface ListProblemsCommandInput extends ListProblemsRequest {}
/**
 * @public
 *
 * The output of {@link ListProblemsCommand}.
 */
export interface ListProblemsCommandOutput extends ListProblemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the problems with your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListProblemsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListProblemsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListProblemsRequest
 *   ResourceGroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ComponentName: "STRING_VALUE",
 * };
 * const command = new ListProblemsCommand(input);
 * const response = await client.send(command);
 * // { // ListProblemsResponse
 * //   ProblemList: [ // ProblemList
 * //     { // Problem
 * //       Id: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Insights: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       AffectedResource: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       SeverityLevel: "STRING_VALUE",
 * //       ResourceGroupName: "STRING_VALUE",
 * //       Feedback: { // Feedback
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RecurringCount: Number("long"),
 * //       LastRecurrenceTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ResourceGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProblemsCommandInput - {@link ListProblemsCommandInput}
 * @returns {@link ListProblemsCommandOutput}
 * @see {@link ListProblemsCommandInput} for command's `input` shape.
 * @see {@link ListProblemsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
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
export class ListProblemsCommand extends $Command<
  ListProblemsCommandInput,
  ListProblemsCommandOutput,
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
  constructor(readonly input: ListProblemsCommandInput) {
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
  ): Handler<ListProblemsCommandInput, ListProblemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListProblemsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "ListProblemsCommand";
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
  private serialize(input: ListProblemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProblemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProblemsCommandOutput> {
    return de_ListProblemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
