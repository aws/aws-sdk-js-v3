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

import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_UpdateHITTypeOfHITCommand, se_UpdateHITTypeOfHITCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateHITTypeOfHITCommand}.
 */
export interface UpdateHITTypeOfHITCommandInput extends UpdateHITTypeOfHITRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHITTypeOfHITCommand}.
 */
export interface UpdateHITTypeOfHITCommandOutput extends UpdateHITTypeOfHITResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITTypeOfHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITTypeOfHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // UpdateHITTypeOfHITRequest
 *   HITId: "STRING_VALUE", // required
 *   HITTypeId: "STRING_VALUE", // required
 * };
 * const command = new UpdateHITTypeOfHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHITTypeOfHITCommandInput - {@link UpdateHITTypeOfHITCommandInput}
 * @returns {@link UpdateHITTypeOfHITCommandOutput}
 * @see {@link UpdateHITTypeOfHITCommandInput} for command's `input` shape.
 * @see {@link UpdateHITTypeOfHITCommandOutput} for command's `response` shape.
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
export class UpdateHITTypeOfHITCommand extends $Command<
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput,
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
  constructor(readonly input: UpdateHITTypeOfHITCommandInput) {
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
  ): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHITTypeOfHITCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITTypeOfHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "UpdateHITTypeOfHIT",
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
  private serialize(input: UpdateHITTypeOfHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateHITTypeOfHITCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITTypeOfHITCommandOutput> {
    return de_UpdateHITTypeOfHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
