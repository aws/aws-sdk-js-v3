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

import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/models_0";
import {
  de_ListAvailableManagementCidrRangesCommand,
  se_ListAvailableManagementCidrRangesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableManagementCidrRangesCommand}.
 */
export interface ListAvailableManagementCidrRangesCommandInput extends ListAvailableManagementCidrRangesRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableManagementCidrRangesCommand}.
 */
export interface ListAvailableManagementCidrRangesCommandOutput
  extends ListAvailableManagementCidrRangesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *          <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL.
 *          If your account isn't enabled for BYOL, you'll receive an
 *             <code>AccessDeniedException</code> error.</p>
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ListAvailableManagementCidrRangesRequest
 *   ManagementCidrRangeConstraint: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailableManagementCidrRangesCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableManagementCidrRangesResult
 * //   ManagementCidrRanges: [ // DedicatedTenancyCidrRangeList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableManagementCidrRangesCommandInput - {@link ListAvailableManagementCidrRangesCommandInput}
 * @returns {@link ListAvailableManagementCidrRangesCommandOutput}
 * @see {@link ListAvailableManagementCidrRangesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagementCidrRangesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class ListAvailableManagementCidrRangesCommand extends $Command<
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: ListAvailableManagementCidrRangesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableManagementCidrRangesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ListAvailableManagementCidrRangesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "ListAvailableManagementCidrRanges",
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
    input: ListAvailableManagementCidrRangesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAvailableManagementCidrRangesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableManagementCidrRangesCommandOutput> {
    return de_ListAvailableManagementCidrRangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
