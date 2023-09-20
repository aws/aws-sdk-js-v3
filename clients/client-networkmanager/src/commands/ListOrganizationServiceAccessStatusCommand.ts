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
  ListOrganizationServiceAccessStatusRequest,
  ListOrganizationServiceAccessStatusResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_ListOrganizationServiceAccessStatusCommand,
  se_ListOrganizationServiceAccessStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationServiceAccessStatusCommand}.
 */
export interface ListOrganizationServiceAccessStatusCommandInput extends ListOrganizationServiceAccessStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationServiceAccessStatusCommand}.
 */
export interface ListOrganizationServiceAccessStatusCommandOutput
  extends ListOrganizationServiceAccessStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // ListOrganizationServiceAccessStatusRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationServiceAccessStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationServiceAccessStatusResponse
 * //   OrganizationStatus: { // OrganizationStatus
 * //     OrganizationId: "STRING_VALUE",
 * //     OrganizationAwsServiceAccessStatus: "STRING_VALUE",
 * //     SLRDeploymentStatus: "STRING_VALUE",
 * //     AccountStatusList: [ // AccountStatusList
 * //       { // AccountStatus
 * //         AccountId: "STRING_VALUE",
 * //         SLRDeploymentStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationServiceAccessStatusCommandInput - {@link ListOrganizationServiceAccessStatusCommandInput}
 * @returns {@link ListOrganizationServiceAccessStatusCommandOutput}
 * @see {@link ListOrganizationServiceAccessStatusCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationServiceAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class ListOrganizationServiceAccessStatusCommand extends $Command<
  ListOrganizationServiceAccessStatusCommandInput,
  ListOrganizationServiceAccessStatusCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: ListOrganizationServiceAccessStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrganizationServiceAccessStatusCommandInput, ListOrganizationServiceAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationServiceAccessStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "ListOrganizationServiceAccessStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "ListOrganizationServiceAccessStatus",
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
    input: ListOrganizationServiceAccessStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListOrganizationServiceAccessStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput> {
    return de_ListOrganizationServiceAccessStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
