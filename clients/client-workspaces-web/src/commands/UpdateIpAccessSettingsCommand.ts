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
  UpdateIpAccessSettingsRequest,
  UpdateIpAccessSettingsRequestFilterSensitiveLog,
  UpdateIpAccessSettingsResponse,
  UpdateIpAccessSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateIpAccessSettingsCommand, se_UpdateIpAccessSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIpAccessSettingsCommand}.
 */
export interface UpdateIpAccessSettingsCommandInput extends UpdateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIpAccessSettingsCommand}.
 */
export interface UpdateIpAccessSettingsCommandOutput extends UpdateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates IP access settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateIpAccessSettingsRequest
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ipRules: [ // IpRuleList
 *     { // IpRule
 *       ipRange: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIpAccessSettingsResponse
 * //   ipAccessSettings: { // IpAccessSettings
 * //     ipAccessSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     ipRules: [ // IpRuleList
 * //       { // IpRule
 * //         ipRange: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIpAccessSettingsCommandInput - {@link UpdateIpAccessSettingsCommandInput}
 * @returns {@link UpdateIpAccessSettingsCommandOutput}
 * @see {@link UpdateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateIpAccessSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
export class UpdateIpAccessSettingsCommand extends $Command<
  UpdateIpAccessSettingsCommandInput,
  UpdateIpAccessSettingsCommandOutput,
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
  constructor(readonly input: UpdateIpAccessSettingsCommandInput) {
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
  ): Handler<UpdateIpAccessSettingsCommandInput, UpdateIpAccessSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIpAccessSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "UpdateIpAccessSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIpAccessSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateIpAccessSettingsResponseFilterSensitiveLog,
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
  private serialize(input: UpdateIpAccessSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIpAccessSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIpAccessSettingsCommandOutput> {
    return de_UpdateIpAccessSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
