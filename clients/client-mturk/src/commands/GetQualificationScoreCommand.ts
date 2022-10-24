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
  GetQualificationScoreRequest,
  GetQualificationScoreRequestFilterSensitiveLog,
  GetQualificationScoreResponse,
  GetQualificationScoreResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1GetQualificationScoreCommand,
  serializeAws_json1_1GetQualificationScoreCommand,
} from "../protocols/Aws_json1_1";

export interface GetQualificationScoreCommandInput extends GetQualificationScoreRequest {}
export interface GetQualificationScoreCommandOutput extends GetQualificationScoreResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationScoreCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationScoreCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetQualificationScoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQualificationScoreCommandInput} for command's `input` shape.
 * @see {@link GetQualificationScoreCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class GetQualificationScoreCommand extends $Command<
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
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

  constructor(readonly input: GetQualificationScoreCommandInput) {
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
  ): Handler<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQualificationScoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetQualificationScoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQualificationScoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetQualificationScoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQualificationScoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQualificationScoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQualificationScoreCommandOutput> {
    return deserializeAws_json1_1GetQualificationScoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
