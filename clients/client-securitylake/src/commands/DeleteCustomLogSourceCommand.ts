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
  DeleteCustomLogSourceRequest,
  DeleteCustomLogSourceRequestFilterSensitiveLog,
  DeleteCustomLogSourceResponse,
  DeleteCustomLogSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCustomLogSourceCommand,
  serializeAws_restJson1DeleteCustomLogSourceCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * The input for {@link DeleteCustomLogSourceCommand}.
 */
export interface DeleteCustomLogSourceCommandInput extends DeleteCustomLogSourceRequest {}
/**
 * The output of {@link DeleteCustomLogSourceCommand}.
 */
export interface DeleteCustomLogSourceCommandOutput extends DeleteCustomLogSourceResponse, __MetadataBearer {}

/**
 * <p>Removes a custom log source from Amazon Security Lake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteCustomLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteCustomLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new DeleteCustomLogSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomLogSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomLogSourceCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link BucketNotFoundException} (client fault)
 *  <p>Amazon Security Lake  generally returns 404 errors if the requested object is missing from the
 *          bucket.</p>
 *
 * @throws {@link ConflictSourceNamesException} (client fault)
 *  <p>There was a conflict when you attempted to modify a Security Lake source name. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 *
 */
export class DeleteCustomLogSourceCommand extends $Command<
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: DeleteCustomLogSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomLogSourceCommandInput, DeleteCustomLogSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomLogSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteCustomLogSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomLogSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCustomLogSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomLogSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteCustomLogSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomLogSourceCommandOutput> {
    return deserializeAws_restJson1DeleteCustomLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
