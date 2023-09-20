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

import { GetServicePrincipalNameRequest, GetServicePrincipalNameResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { de_GetServicePrincipalNameCommand, se_GetServicePrincipalNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServicePrincipalNameCommand}.
 */
export interface GetServicePrincipalNameCommandInput extends GetServicePrincipalNameRequest {}
/**
 * @public
 *
 * The output of {@link GetServicePrincipalNameCommand}.
 */
export interface GetServicePrincipalNameCommandOutput extends GetServicePrincipalNameResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the service principal name that the connector uses to authenticate with
 *          Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetServicePrincipalNameCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetServicePrincipalNameCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetServicePrincipalNameRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetServicePrincipalNameCommand(input);
 * const response = await client.send(command);
 * // { // GetServicePrincipalNameResponse
 * //   ServicePrincipalName: { // ServicePrincipalName
 * //     DirectoryRegistrationArn: "STRING_VALUE",
 * //     ConnectorArn: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_RESOURCE_NOT_FOUND" || "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServicePrincipalNameCommandInput - {@link GetServicePrincipalNameCommandInput}
 * @returns {@link GetServicePrincipalNameCommandOutput}
 * @see {@link GetServicePrincipalNameCommandInput} for command's `input` shape.
 * @see {@link GetServicePrincipalNameCommandOutput} for command's `response` shape.
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
export class GetServicePrincipalNameCommand extends $Command<
  GetServicePrincipalNameCommandInput,
  GetServicePrincipalNameCommandOutput,
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
  constructor(readonly input: GetServicePrincipalNameCommandInput) {
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
  ): Handler<GetServicePrincipalNameCommandInput, GetServicePrincipalNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServicePrincipalNameCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PcaConnectorAdClient";
    const commandName = "GetServicePrincipalNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PcaConnectorAd",
        operation: "GetServicePrincipalName",
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
  private serialize(input: GetServicePrincipalNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServicePrincipalNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServicePrincipalNameCommandOutput> {
    return de_GetServicePrincipalNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
