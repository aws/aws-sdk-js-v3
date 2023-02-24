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
  CreateOrganizationalUnitRequest,
  CreateOrganizationalUnitRequestFilterSensitiveLog,
  CreateOrganizationalUnitResponse,
  CreateOrganizationalUnitResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CreateOrganizationalUnitCommand,
  serializeAws_json1_1CreateOrganizationalUnitCommand,
} from "../protocols/Aws_json1_1";

export interface CreateOrganizationalUnitCommandInput extends CreateOrganizationalUnitRequest {}
export interface CreateOrganizationalUnitCommandOutput extends CreateOrganizationalUnitResponse, __MetadataBearer {}

/**
 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 *             for accounts that enables you to organize your accounts to apply policies according to
 *             your business requirements. The number of levels deep that you can nest OUs is dependent
 *             upon the policy types enabled for that root. For service control policies, the limit is
 *             five.</p>
 *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class CreateOrganizationalUnitCommand extends $Command<
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: CreateOrganizationalUnitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOrganizationalUnitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateOrganizationalUnitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrganizationalUnitRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOrganizationalUnitResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOrganizationalUnitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateOrganizationalUnitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrganizationalUnitCommandOutput> {
    return deserializeAws_json1_1CreateOrganizationalUnitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
