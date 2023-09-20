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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateTrustRequest, CreateTrustRequestFilterSensitiveLog, CreateTrustResult } from "../models/models_0";
import { de_CreateTrustCommand, se_CreateTrustCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustCommand}.
 */
export interface CreateTrustCommandInput extends CreateTrustRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustCommand}.
 */
export interface CreateTrustCommandOutput extends CreateTrustResult, __MetadataBearer {}

/**
 * @public
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
 *       external trust.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateTrustRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainName: "STRING_VALUE", // required
 *   TrustPassword: "STRING_VALUE", // required
 *   TrustDirection: "One-Way: Outgoing" || "One-Way: Incoming" || "Two-Way", // required
 *   TrustType: "Forest" || "External",
 *   ConditionalForwarderIpAddrs: [ // DnsIpAddrs
 *     "STRING_VALUE",
 *   ],
 *   SelectiveAuth: "Enabled" || "Disabled",
 * };
 * const command = new CreateTrustCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustResult
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrustCommandInput - {@link CreateTrustCommandInput}
 * @returns {@link CreateTrustCommandOutput}
 * @see {@link CreateTrustCommandInput} for command's `input` shape.
 * @see {@link CreateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class CreateTrustCommand extends $Command<
  CreateTrustCommandInput,
  CreateTrustCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: CreateTrustCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrustCommandInput, CreateTrustCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTrustCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateTrustCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrustRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "CreateTrust",
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
  private serialize(input: CreateTrustCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrustCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrustCommandOutput> {
    return de_CreateTrustCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
