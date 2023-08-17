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

import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_AcceptQualificationRequestCommand, se_AcceptQualificationRequestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptQualificationRequestCommand}.
 */
export interface AcceptQualificationRequestCommandInput extends AcceptQualificationRequestRequest {}
/**
 * @public
 *
 * The output of {@link AcceptQualificationRequestCommand}.
 */
export interface AcceptQualificationRequestCommandOutput extends AcceptQualificationRequestResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, AcceptQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, AcceptQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // AcceptQualificationRequestRequest
 *   QualificationRequestId: "STRING_VALUE", // required
 *   IntegerValue: Number("int"),
 * };
 * const command = new AcceptQualificationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptQualificationRequestCommandInput - {@link AcceptQualificationRequestCommandInput}
 * @returns {@link AcceptQualificationRequestCommandOutput}
 * @see {@link AcceptQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptQualificationRequestCommandOutput} for command's `response` shape.
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
export class AcceptQualificationRequestCommand extends $Command<
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
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
  constructor(readonly input: AcceptQualificationRequestCommandInput) {
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
  ): Handler<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptQualificationRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "AcceptQualificationRequestCommand";
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
  private serialize(input: AcceptQualificationRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptQualificationRequestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptQualificationRequestCommandOutput> {
    return de_AcceptQualificationRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
