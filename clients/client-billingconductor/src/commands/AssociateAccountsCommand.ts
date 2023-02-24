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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  AssociateAccountsInput,
  AssociateAccountsInputFilterSensitiveLog,
  AssociateAccountsOutput,
  AssociateAccountsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAccountsCommand,
  serializeAws_restJson1AssociateAccountsCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateAccountsCommandInput extends AssociateAccountsInput {}
export interface AssociateAccountsCommandOutput extends AssociateAccountsOutput, __MetadataBearer {}

/**
 * <p>Connects an array of account IDs in a consolidated billing family to a predefined
 *       billing group. The account IDs must be a part of the consolidated billing family during the
 *       current month, and not already associated with another billing group. The maximum number of
 *       accounts that can be associated in one call is 30. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, AssociateAccountsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, AssociateAccountsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new AssociateAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAccountsCommandInput} for command's `input` shape.
 * @see {@link AssociateAccountsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class AssociateAccountsCommand extends $Command<
  AssociateAccountsCommandInput,
  AssociateAccountsCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: AssociateAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAccountsCommandInput, AssociateAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "AssociateAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAccountsInputFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateAccountsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAccountsCommandOutput> {
    return deserializeAws_restJson1AssociateAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
