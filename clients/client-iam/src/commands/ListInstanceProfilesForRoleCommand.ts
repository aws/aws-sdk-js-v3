import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfilesForRoleRequest, ListInstanceProfilesForRoleResponse } from "../models/models_0";
import {
  deserializeAws_queryListInstanceProfilesForRoleCommand,
  serializeAws_queryListInstanceProfilesForRoleCommand,
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

export interface ListInstanceProfilesForRoleCommandInput extends ListInstanceProfilesForRoleRequest {}
export interface ListInstanceProfilesForRoleCommandOutput
  extends ListInstanceProfilesForRoleResponse,
    __MetadataBearer {}

/**
 * <p>Lists the instance profiles that have the specified associated IAM role. If there
 *             are none, the operation returns an empty list. For more information about instance
 *             profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesForRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesForRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfilesForRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfilesForRoleCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesForRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListInstanceProfilesForRoleCommand extends $Command<
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceProfilesForRoleCommandInput) {
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
  ): Handler<ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListInstanceProfilesForRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceProfilesForRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceProfilesForRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceProfilesForRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListInstanceProfilesForRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInstanceProfilesForRoleCommandOutput> {
    return deserializeAws_queryListInstanceProfilesForRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
