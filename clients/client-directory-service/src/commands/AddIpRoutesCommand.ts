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
import { AddIpRoutesRequest, AddIpRoutesResult } from "../models/models_0";
import { de_AddIpRoutesCommand, se_AddIpRoutesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddIpRoutesCommand}.
 */
export interface AddIpRoutesCommandInput extends AddIpRoutesRequest {}
/**
 * @public
 *
 * The output of {@link AddIpRoutesCommand}.
 */
export interface AddIpRoutesCommandOutput extends AddIpRoutesResult, __MetadataBearer {}

/**
 * @public
 * <p>If the DNS server for your self-managed domain uses a publicly addressable IP address,
 *          you must add a CIDR address block to correctly route traffic to and from your Microsoft AD
 *          on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can
 *          also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP
 *          ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p>
 *          <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required
 *          permissions have been explicitly granted through a policy. For details about what
 *          permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // AddIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   IpRoutes: [ // IpRoutes // required
 *     { // IpRoute
 *       CidrIp: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   UpdateSecurityGroupForDirectoryControllers: true || false,
 * };
 * const command = new AddIpRoutesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddIpRoutesCommandInput - {@link AddIpRoutesCommandInput}
 * @returns {@link AddIpRoutesCommandOutput}
 * @see {@link AddIpRoutesCommandInput} for command's `input` shape.
 * @see {@link AddIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable or could not be found.</p>
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
 * @throws {@link IpRouteLimitExceededException} (client fault)
 *  <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP
 *          address blocks.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class AddIpRoutesCommand extends $Command<
  AddIpRoutesCommandInput,
  AddIpRoutesCommandOutput,
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
  constructor(readonly input: AddIpRoutesCommandInput) {
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
  ): Handler<AddIpRoutesCommandInput, AddIpRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddIpRoutesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "AddIpRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "AddIpRoutes",
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
  private serialize(input: AddIpRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddIpRoutesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddIpRoutesCommandOutput> {
    return de_AddIpRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
