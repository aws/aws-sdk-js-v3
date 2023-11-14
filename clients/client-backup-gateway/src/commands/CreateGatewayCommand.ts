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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { CreateGatewayInput, CreateGatewayOutput } from "../models/models_0";
import { de_CreateGatewayCommand, se_CreateGatewayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandInput extends CreateGatewayInput {}
/**
 * @public
 *
 * The output of {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandOutput extends CreateGatewayOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a backup gateway. After you create a gateway, you can associate it with a server
 *       using the <code>AssociateGatewayToServer</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, CreateGatewayCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, CreateGatewayCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // CreateGatewayInput
 *   ActivationKey: "STRING_VALUE", // required
 *   GatewayDisplayName: "STRING_VALUE", // required
 *   GatewayType: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGatewayCommandInput - {@link CreateGatewayCommandInput}
 * @returns {@link CreateGatewayCommandOutput}
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 */
export class CreateGatewayCommand extends $Command<
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
  BackupGatewayClientResolvedConfig
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
  constructor(readonly input: CreateGatewayCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGatewayCommandInput, CreateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateGatewayCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "CreateGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "CreateGateway",
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
  private serialize(input: CreateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGatewayCommandOutput> {
    return de_CreateGatewayCommand(output, context);
  }
}
