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
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { ListTargetsRequest, ListTargetsResult, ListTargetsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListTargetsCommand, se_ListTargetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandInput extends ListTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandOutput extends ListTargetsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the notification rule targets for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListTargetsCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListTargetsCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // ListTargetsRequest
 *   Filters: [ // ListTargetsFilters
 *     { // ListTargetsFilter
 *       Name: "TARGET_TYPE" || "TARGET_ADDRESS" || "TARGET_STATUS", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsResult
 * //   Targets: [ // TargetsBatch
 * //     { // TargetSummary
 * //       TargetAddress: "STRING_VALUE",
 * //       TargetType: "STRING_VALUE",
 * //       TargetStatus: "PENDING" || "ACTIVE" || "UNREACHABLE" || "INACTIVE" || "DEACTIVATED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsCommandInput - {@link ListTargetsCommandInput}
 * @returns {@link ListTargetsCommandOutput}
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 */
export class ListTargetsCommand extends $Command<
  ListTargetsCommandInput,
  ListTargetsCommandOutput,
  CodestarNotificationsClientResolvedConfig
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
  constructor(readonly input: ListTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetsCommandInput, ListTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTargetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "ListTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListTargetsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStarNotifications_20191015",
        operation: "ListTargets",
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
  private serialize(input: ListTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetsCommandOutput> {
    return de_ListTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
