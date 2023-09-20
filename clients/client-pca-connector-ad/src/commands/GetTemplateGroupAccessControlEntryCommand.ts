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

import {
  GetTemplateGroupAccessControlEntryRequest,
  GetTemplateGroupAccessControlEntryResponse,
} from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import {
  de_GetTemplateGroupAccessControlEntryCommand,
  se_GetTemplateGroupAccessControlEntryCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateGroupAccessControlEntryCommand}.
 */
export interface GetTemplateGroupAccessControlEntryCommandInput extends GetTemplateGroupAccessControlEntryRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateGroupAccessControlEntryCommand}.
 */
export interface GetTemplateGroupAccessControlEntryCommandOutput
  extends GetTemplateGroupAccessControlEntryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the group access control entries for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetTemplateGroupAccessControlEntryCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetTemplateGroupAccessControlEntryCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetTemplateGroupAccessControlEntryRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   GroupSecurityIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateGroupAccessControlEntryCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateGroupAccessControlEntryResponse
 * //   AccessControlEntry: { // AccessControlEntry
 * //     GroupDisplayName: "STRING_VALUE",
 * //     GroupSecurityIdentifier: "STRING_VALUE",
 * //     AccessRights: { // AccessRights
 * //       Enroll: "ALLOW" || "DENY",
 * //       AutoEnroll: "ALLOW" || "DENY",
 * //     },
 * //     TemplateArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateGroupAccessControlEntryCommandInput - {@link GetTemplateGroupAccessControlEntryCommandInput}
 * @returns {@link GetTemplateGroupAccessControlEntryCommandOutput}
 * @see {@link GetTemplateGroupAccessControlEntryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateGroupAccessControlEntryCommandOutput} for command's `response` shape.
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
export class GetTemplateGroupAccessControlEntryCommand extends $Command<
  GetTemplateGroupAccessControlEntryCommandInput,
  GetTemplateGroupAccessControlEntryCommandOutput,
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
  constructor(readonly input: GetTemplateGroupAccessControlEntryCommandInput) {
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
  ): Handler<GetTemplateGroupAccessControlEntryCommandInput, GetTemplateGroupAccessControlEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateGroupAccessControlEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PcaConnectorAdClient";
    const commandName = "GetTemplateGroupAccessControlEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PcaConnectorAd",
        operation: "GetTemplateGroupAccessControlEntry",
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
  private serialize(
    input: GetTemplateGroupAccessControlEntryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTemplateGroupAccessControlEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTemplateGroupAccessControlEntryCommandOutput> {
    return de_GetTemplateGroupAccessControlEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
