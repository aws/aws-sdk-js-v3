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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetRestoreTestingInferredMetadataInput, GetRestoreTestingInferredMetadataOutput } from "../models/models_0";
import {
  de_GetRestoreTestingInferredMetadataCommand,
  se_GetRestoreTestingInferredMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandInput extends GetRestoreTestingInferredMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandOutput
  extends GetRestoreTestingInferredMetadataOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This request returns the minimal required set of metadata needed to
 *          start a restore job with secure default settings. <code>BackupVaultName</code>
 *          and <code>RecoveryPointArn</code> are required parameters.
 *          <code>BackupVaultAccountId</code> is an optional parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingInferredMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingInferredMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingInferredMetadataInput
 *   BackupVaultAccountId: "STRING_VALUE",
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingInferredMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingInferredMetadataOutput
 * //   InferredMetadata: { // stringMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingInferredMetadataCommandInput - {@link GetRestoreTestingInferredMetadataCommandInput}
 * @returns {@link GetRestoreTestingInferredMetadataCommandOutput}
 * @see {@link GetRestoreTestingInferredMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingInferredMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class GetRestoreTestingInferredMetadataCommand extends $Command<
  GetRestoreTestingInferredMetadataCommandInput,
  GetRestoreTestingInferredMetadataCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: GetRestoreTestingInferredMetadataCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRestoreTestingInferredMetadataCommandInput, GetRestoreTestingInferredMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRestoreTestingInferredMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetRestoreTestingInferredMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetRestoreTestingInferredMetadata",
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
    input: GetRestoreTestingInferredMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRestoreTestingInferredMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRestoreTestingInferredMetadataCommandOutput> {
    return de_GetRestoreTestingInferredMetadataCommand(output, context);
  }
}
