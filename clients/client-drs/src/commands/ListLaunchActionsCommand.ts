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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { ListLaunchActionsRequest, ListLaunchActionsResponse } from "../models/models_0";
import { de_ListLaunchActionsCommand, se_ListLaunchActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLaunchActionsCommand}.
 */
export interface ListLaunchActionsCommandInput extends ListLaunchActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLaunchActionsCommand}.
 */
export interface ListLaunchActionsCommandOutput extends ListLaunchActionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists resource launch actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListLaunchActionsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListLaunchActionsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // ListLaunchActionsRequest
 *   resourceId: "STRING_VALUE", // required
 *   filters: { // LaunchActionsRequestFilters
 *     actionIds: [ // LaunchActionIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLaunchActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchActionsResponse
 * //   items: [ // LaunchActions
 * //     { // LaunchAction
 * //       actionId: "STRING_VALUE",
 * //       actionCode: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       active: true || false,
 * //       order: Number("int"),
 * //       actionVersion: "STRING_VALUE",
 * //       optional: true || false,
 * //       parameters: { // LaunchActionParameters
 * //         "<keys>": { // LaunchActionParameter
 * //           value: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLaunchActionsCommandInput - {@link ListLaunchActionsCommandInput}
 * @returns {@link ListLaunchActionsCommandOutput}
 * @see {@link ListLaunchActionsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchActionsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class ListLaunchActionsCommand extends $Command<
  ListLaunchActionsCommandInput,
  ListLaunchActionsCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: ListLaunchActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLaunchActionsCommandInput, ListLaunchActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLaunchActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ListLaunchActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "ListLaunchActions",
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
  private serialize(input: ListLaunchActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLaunchActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchActionsCommandOutput> {
    return de_ListLaunchActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
