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
  UpdatePortalRequest,
  UpdatePortalRequestFilterSensitiveLog,
  UpdatePortalResponse,
  UpdatePortalResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePortalCommand, se_UpdatePortalCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandInput extends UpdatePortalRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandOutput extends UpdatePortalResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdatePortalCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdatePortalCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdatePortalRequest
 *   portalArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   authenticationType: "STRING_VALUE",
 * };
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortalResponse
 * //   portal: { // Portal
 * //     portalArn: "STRING_VALUE", // required
 * //     rendererType: "STRING_VALUE",
 * //     browserType: "STRING_VALUE",
 * //     portalStatus: "STRING_VALUE",
 * //     portalEndpoint: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     browserSettingsArn: "STRING_VALUE",
 * //     userSettingsArn: "STRING_VALUE",
 * //     networkSettingsArn: "STRING_VALUE",
 * //     trustStoreArn: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     userAccessLoggingSettingsArn: "STRING_VALUE",
 * //     authenticationType: "STRING_VALUE",
 * //     ipAccessSettingsArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePortalCommandInput - {@link UpdatePortalCommandInput}
 * @returns {@link UpdatePortalCommandOutput}
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
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
export class UpdatePortalCommand extends $Command<
  UpdatePortalCommandInput,
  UpdatePortalCommandOutput,
  WorkSpacesWebClientResolvedConfig
> {
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
  constructor(readonly input: UpdatePortalCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePortalCommandInput, UpdatePortalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdatePortalCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "UpdatePortalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePortalRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePortalResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "UpdatePortal",
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
  private serialize(input: UpdatePortalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePortalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePortalCommandOutput> {
    return de_UpdatePortalCommand(output, context);
  }
}
