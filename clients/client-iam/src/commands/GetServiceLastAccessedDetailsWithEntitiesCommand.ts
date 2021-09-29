import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
} from "../models/models_0";
import {
  deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand,
  serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetServiceLastAccessedDetailsWithEntitiesCommandInput
  extends GetServiceLastAccessedDetailsWithEntitiesRequest {}
export interface GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  extends GetServiceLastAccessedDetailsWithEntitiesResponse,
    __MetadataBearer {}

/**
 * <p>After you generate a group or policy report using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
 *                 <code>JobId</code> parameter in
 *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
 *             status of your report job and a list of entities that could have used group or policy
 *             permissions to access the specified service.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Group</b> – For a group report, this
 *                     operation returns a list of users in the group that could have used the group’s
 *                     policies in an attempt to access the service.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Policy</b> – For a policy report, this
 *                     operation returns a list of entities (users or roles) that could have used the
 *                     policy in an attempt to access the service.</p>
 *             </li>
 *          </ul>
 *         <p>You can also use this operation for user or role reports to retrieve details about
 *             those entities.</p>
 *         <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
 *             operation returns the reason that it failed.</p>
 *         <p>By default, the list of associated entities is sorted by date, with the most recent
 *             access listed first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServiceLastAccessedDetailsWithEntitiesCommand extends $Command<
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceLastAccessedDetailsWithEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLastAccessedDetailsWithEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> {
    return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
