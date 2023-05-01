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

import { GetAssignmentRequest, GetAssignmentResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_GetAssignmentCommand, se_GetAssignmentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetAssignmentCommand}.
 */
export interface GetAssignmentCommandInput extends GetAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link GetAssignmentCommand}.
 */
export interface GetAssignmentCommandOutput extends GetAssignmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // GetAssignmentRequest
 *   AssignmentId: "STRING_VALUE", // required
 * };
 * const command = new GetAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetAssignmentCommandInput - {@link GetAssignmentCommandInput}
 * @returns {@link GetAssignmentCommandOutput}
 * @see {@link GetAssignmentCommandInput} for command's `input` shape.
 * @see {@link GetAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 *
 */
export class GetAssignmentCommand extends $Command<
  GetAssignmentCommandInput,
  GetAssignmentCommandOutput,
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
  constructor(readonly input: GetAssignmentCommandInput) {
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
  ): Handler<GetAssignmentCommandInput, GetAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAssignmentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetAssignmentCommand";
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
  private serialize(input: GetAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssignmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssignmentCommandOutput> {
    return de_GetAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
