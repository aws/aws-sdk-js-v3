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
} from "@smithy/types";

import {
  AssociateUserAccessLoggingSettingsRequest,
  AssociateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import {
  de_AssociateUserAccessLoggingSettingsCommand,
  se_AssociateUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateUserAccessLoggingSettingsCommand}.
 */
export interface AssociateUserAccessLoggingSettingsCommandInput extends AssociateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserAccessLoggingSettingsCommand}.
 */
export interface AssociateUserAccessLoggingSettingsCommandOutput
  extends AssociateUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a user access logging settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateUserAccessLoggingSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserAccessLoggingSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateUserAccessLoggingSettingsCommandInput - {@link AssociateUserAccessLoggingSettingsCommandInput}
 * @returns {@link AssociateUserAccessLoggingSettingsCommandOutput}
 * @see {@link AssociateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class AssociateUserAccessLoggingSettingsCommand extends $Command<
  AssociateUserAccessLoggingSettingsCommandInput,
  AssociateUserAccessLoggingSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: AssociateUserAccessLoggingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateUserAccessLoggingSettingsCommandInput, AssociateUserAccessLoggingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateUserAccessLoggingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "AssociateUserAccessLoggingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: AssociateUserAccessLoggingSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateUserAccessLoggingSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateUserAccessLoggingSettingsCommandOutput> {
    return de_AssociateUserAccessLoggingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
