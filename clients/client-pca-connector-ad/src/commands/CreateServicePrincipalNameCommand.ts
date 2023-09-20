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

import { CreateServicePrincipalNameRequest } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { de_CreateServicePrincipalNameCommand, se_CreateServicePrincipalNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateServicePrincipalNameCommand}.
 */
export interface CreateServicePrincipalNameCommandInput extends CreateServicePrincipalNameRequest {}
/**
 * @public
 *
 * The output of {@link CreateServicePrincipalNameCommand}.
 */
export interface CreateServicePrincipalNameCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a service principal name (SPN) for the service account in Active Directory. Kerberos
 *          authentication uses SPNs to associate a service instance with a service sign-in
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, CreateServicePrincipalNameCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, CreateServicePrincipalNameCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // CreateServicePrincipalNameRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateServicePrincipalNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateServicePrincipalNameCommandInput - {@link CreateServicePrincipalNameCommandInput}
 * @returns {@link CreateServicePrincipalNameCommandOutput}
 * @see {@link CreateServicePrincipalNameCommandInput} for command's `input` shape.
 * @see {@link CreateServicePrincipalNameCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 *
 * @throws {@link PcaConnectorAdServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorAd service.</p>
 *
 */
export class CreateServicePrincipalNameCommand extends $Command<
  CreateServicePrincipalNameCommandInput,
  CreateServicePrincipalNameCommandOutput,
  PcaConnectorAdClientResolvedConfig
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
  constructor(readonly input: CreateServicePrincipalNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PcaConnectorAdClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServicePrincipalNameCommandInput, CreateServicePrincipalNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateServicePrincipalNameCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PcaConnectorAdClient";
    const commandName = "CreateServicePrincipalNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PcaConnectorAd",
        operation: "CreateServicePrincipalName",
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
  private serialize(input: CreateServicePrincipalNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateServicePrincipalNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateServicePrincipalNameCommandOutput> {
    return de_CreateServicePrincipalNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
