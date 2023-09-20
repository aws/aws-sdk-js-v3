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

import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_NotifyWorkersCommand, se_NotifyWorkersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyWorkersCommand}.
 */
export interface NotifyWorkersCommandInput extends NotifyWorkersRequest {}
/**
 * @public
 *
 * The output of {@link NotifyWorkersCommand}.
 */
export interface NotifyWorkersCommandOutput extends NotifyWorkersResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>NotifyWorkers</code>
 *             operation sends an email to one or more Workers that you specify with
 *             the Worker ID. You can specify up to 100 Worker IDs to send the same
 *             message with a single call to the NotifyWorkers operation. The
 *             NotifyWorkers operation will send a notification email to a Worker
 *             only if you have previously approved or rejected work from the
 *             Worker.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, NotifyWorkersCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, NotifyWorkersCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // NotifyWorkersRequest
 *   Subject: "STRING_VALUE", // required
 *   MessageText: "STRING_VALUE", // required
 *   WorkerIds: [ // CustomerIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NotifyWorkersCommand(input);
 * const response = await client.send(command);
 * // { // NotifyWorkersResponse
 * //   NotifyWorkersFailureStatuses: [ // NotifyWorkersFailureStatusList
 * //     { // NotifyWorkersFailureStatus
 * //       NotifyWorkersFailureCode: "SoftFailure" || "HardFailure",
 * //       NotifyWorkersFailureMessage: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param NotifyWorkersCommandInput - {@link NotifyWorkersCommandInput}
 * @returns {@link NotifyWorkersCommandOutput}
 * @see {@link NotifyWorkersCommandInput} for command's `input` shape.
 * @see {@link NotifyWorkersCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class NotifyWorkersCommand extends $Command<
  NotifyWorkersCommandInput,
  NotifyWorkersCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: NotifyWorkersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyWorkersCommandInput, NotifyWorkersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, NotifyWorkersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "NotifyWorkersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "NotifyWorkers",
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
  private serialize(input: NotifyWorkersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NotifyWorkersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyWorkersCommandOutput> {
    return de_NotifyWorkersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
