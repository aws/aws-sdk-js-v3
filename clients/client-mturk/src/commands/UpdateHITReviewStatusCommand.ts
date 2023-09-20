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

import { UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_UpdateHITReviewStatusCommand, se_UpdateHITReviewStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateHITReviewStatusCommand}.
 */
export interface UpdateHITReviewStatusCommandInput extends UpdateHITReviewStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHITReviewStatusCommand}.
 */
export interface UpdateHITReviewStatusCommandOutput extends UpdateHITReviewStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
 *             If the status is Reviewable, this operation can update the status to Reviewing,
 *             or it can revert a Reviewing HIT back to the Reviewable status.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITReviewStatusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITReviewStatusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // UpdateHITReviewStatusRequest
 *   HITId: "STRING_VALUE", // required
 *   Revert: true || false,
 * };
 * const command = new UpdateHITReviewStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHITReviewStatusCommandInput - {@link UpdateHITReviewStatusCommandInput}
 * @returns {@link UpdateHITReviewStatusCommandOutput}
 * @see {@link UpdateHITReviewStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateHITReviewStatusCommandOutput} for command's `response` shape.
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
export class UpdateHITReviewStatusCommand extends $Command<
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
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
  constructor(readonly input: UpdateHITReviewStatusCommandInput) {
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
  ): Handler<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHITReviewStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITReviewStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "UpdateHITReviewStatus",
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
  private serialize(input: UpdateHITReviewStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateHITReviewStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITReviewStatusCommandOutput> {
    return de_UpdateHITReviewStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
