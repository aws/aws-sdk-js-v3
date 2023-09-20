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
  GetRevisionRequest,
  GetRevisionRequestFilterSensitiveLog,
  GetRevisionResponse,
  GetRevisionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRevisionCommand, se_GetRevisionCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandInput extends GetRevisionRequest {}
/**
 * @public
 *
 * The output of {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandOutput extends GetRevisionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a revision data object for a specified document ID and block address. Also
 *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
 *          is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetRevisionCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetRevisionCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // GetRevisionRequest
 *   Name: "STRING_VALUE", // required
 *   BlockAddress: { // ValueHolder
 *     IonText: "STRING_VALUE",
 *   },
 *   DocumentId: "STRING_VALUE", // required
 *   DigestTipAddress: {
 *     IonText: "STRING_VALUE",
 *   },
 * };
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetRevisionResponse
 * //   Proof: { // ValueHolder
 * //     IonText: "STRING_VALUE",
 * //   },
 * //   Revision: {
 * //     IonText: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRevisionCommandInput - {@link GetRevisionCommandInput}
 * @returns {@link GetRevisionCommandOutput}
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
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
export class GetRevisionCommand extends $Command<
  GetRevisionCommandInput,
  GetRevisionCommandOutput,
  QLDBClientResolvedConfig
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
  constructor(readonly input: GetRevisionCommandInput) {
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
  ): Handler<GetRevisionCommandInput, GetRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRevisionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "GetRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRevisionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRevisionResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonQLDB",
        operation: "GetRevision",
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
  private serialize(input: GetRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRevisionCommandOutput> {
    return de_GetRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
