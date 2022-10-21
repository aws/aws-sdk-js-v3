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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleRequestFilterSensitiveLog,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfilesForRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListInstanceProfilesForRoleCommand,
  serializeAws_queryListInstanceProfilesForRoleCommand,
} from "../protocols/Aws_query";

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
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListInstanceProfilesForRoleCommand extends $Command<
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
  IAMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceProfilesForRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListInstanceProfilesForRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceProfilesForRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceProfilesForRoleResponseFilterSensitiveLog,
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
