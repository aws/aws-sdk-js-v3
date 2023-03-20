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
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { ListUserAssociationsRequest, ListUserAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListUserAssociationsCommand,
  serializeAws_restJson1ListUserAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListUserAssociationsCommand}.
 */
export interface ListUserAssociationsCommandInput extends ListUserAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserAssociationsCommand}.
 */
export interface ListUserAssociationsCommandOutput extends ListUserAssociationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists user associations for an identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListUserAssociationsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListUserAssociationsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const command = new ListUserAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListUserAssociationsCommandInput - {@link ListUserAssociationsCommandInput}
 * @returns {@link ListUserAssociationsCommandOutput}
 * @see {@link ListUserAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListUserAssociationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 *
 */
export class ListUserAssociationsCommand extends $Command<
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
  LicenseManagerUserSubscriptionsClientResolvedConfig
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
  constructor(readonly input: ListUserAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerUserSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserAssociationsCommandInput, ListUserAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUserAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "ListUserAssociationsCommand";
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
  private serialize(input: ListUserAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListUserAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserAssociationsCommandOutput> {
    return deserializeAws_restJson1ListUserAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
