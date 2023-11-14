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

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { GetConnectInstanceConfigRequest, GetConnectInstanceConfigResponse } from "../models/models_0";
import { de_GetConnectInstanceConfigCommand, se_GetConnectInstanceConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectInstanceConfigCommand}.
 */
export interface GetConnectInstanceConfigCommandInput extends GetConnectInstanceConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectInstanceConfigCommand}.
 */
export interface GetConnectInstanceConfigCommandOutput extends GetConnectInstanceConfigResponse, __MetadataBearer {}

/**
 * @public
 * Get the specific Connect instance config.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetConnectInstanceConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetConnectInstanceConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // GetConnectInstanceConfigRequest
 *   connectInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectInstanceConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectInstanceConfigResponse
 * //   connectInstanceConfig: { // InstanceConfig
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     serviceLinkedRoleArn: "STRING_VALUE", // required
 * //     encryptionConfig: { // EncryptionConfig
 * //       enabled: true || false, // required
 * //       encryptionType: "STRING_VALUE",
 * //       keyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectInstanceConfigCommandInput - {@link GetConnectInstanceConfigCommandInput}
 * @returns {@link GetConnectInstanceConfigCommandOutput}
 * @see {@link GetConnectInstanceConfigCommandInput} for command's `input` shape.
 * @see {@link GetConnectInstanceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 */
export class GetConnectInstanceConfigCommand extends $Command<
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
  ConnectCampaignsClientResolvedConfig
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
  constructor(readonly input: GetConnectInstanceConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCampaignsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectInstanceConfigCommandInput, GetConnectInstanceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectInstanceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "GetConnectInstanceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCampaignService",
        operation: "GetConnectInstanceConfig",
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
  private serialize(input: GetConnectInstanceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectInstanceConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectInstanceConfigCommandOutput> {
    return de_GetConnectInstanceConfigCommand(output, context);
  }
}
