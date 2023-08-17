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
} from "@smithy/types";

import {
  GetBlockRequest,
  GetBlockRequestFilterSensitiveLog,
  GetBlockResponse,
  GetBlockResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBlockCommand, se_GetBlockCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlockCommand}.
 */
export interface GetBlockCommandInput extends GetBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetBlockCommand}.
 */
export interface GetBlockCommandOutput extends GetBlockResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
 *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
 *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
 *             <i>Amazon QLDB Developer Guide</i>.</p>
 *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
 *             <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>If no block exists with the specified address, then throws
 *             <code>InvalidParameterException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetBlockCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetBlockCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // GetBlockRequest
 *   Name: "STRING_VALUE", // required
 *   BlockAddress: { // ValueHolder
 *     IonText: "STRING_VALUE",
 *   },
 *   DigestTipAddress: {
 *     IonText: "STRING_VALUE",
 *   },
 * };
 * const command = new GetBlockCommand(input);
 * const response = await client.send(command);
 * // { // GetBlockResponse
 * //   Block: { // ValueHolder
 * //     IonText: "STRING_VALUE",
 * //   },
 * //   Proof: {
 * //     IonText: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlockCommandInput - {@link GetBlockCommandInput}
 * @returns {@link GetBlockCommandOutput}
 * @see {@link GetBlockCommandInput} for command's `input` shape.
 * @see {@link GetBlockCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 */
export class GetBlockCommand extends $Command<GetBlockCommandInput, GetBlockCommandOutput, QLDBClientResolvedConfig> {
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
  constructor(readonly input: GetBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlockCommandInput, GetBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBlockCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "GetBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBlockResponseFilterSensitiveLog,
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
  private serialize(input: GetBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlockCommandOutput> {
    return de_GetBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
