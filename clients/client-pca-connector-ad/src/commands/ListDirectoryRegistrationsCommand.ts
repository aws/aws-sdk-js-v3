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

import { ListDirectoryRegistrationsRequest, ListDirectoryRegistrationsResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { de_ListDirectoryRegistrationsCommand, se_ListDirectoryRegistrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDirectoryRegistrationsCommand}.
 */
export interface ListDirectoryRegistrationsCommandInput extends ListDirectoryRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectoryRegistrationsCommand}.
 */
export interface ListDirectoryRegistrationsCommandOutput extends ListDirectoryRegistrationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the directory registrations that you created by using the <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration">https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration</a>
 *          action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, ListDirectoryRegistrationsCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, ListDirectoryRegistrationsCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // ListDirectoryRegistrationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDirectoryRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectoryRegistrationsResponse
 * //   DirectoryRegistrations: [ // DirectoryRegistrationList
 * //     { // DirectoryRegistrationSummary
 * //       Arn: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_RESOURCE_NOT_FOUND" || "DIRECTORY_NOT_ACTIVE" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_TYPE_NOT_SUPPORTED" || "INTERNAL_FAILURE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDirectoryRegistrationsCommandInput - {@link ListDirectoryRegistrationsCommandInput}
 * @returns {@link ListDirectoryRegistrationsCommandOutput}
 * @see {@link ListDirectoryRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListDirectoryRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
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
export class ListDirectoryRegistrationsCommand extends $Command<
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput,
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
  constructor(readonly input: ListDirectoryRegistrationsCommandInput) {
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
  ): Handler<ListDirectoryRegistrationsCommandInput, ListDirectoryRegistrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDirectoryRegistrationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PcaConnectorAdClient";
    const commandName = "ListDirectoryRegistrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PcaConnectorAd",
        operation: "ListDirectoryRegistrations",
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
  private serialize(input: ListDirectoryRegistrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDirectoryRegistrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDirectoryRegistrationsCommandOutput> {
    return de_ListDirectoryRegistrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
