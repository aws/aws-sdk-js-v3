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

import { UpdateOpsMetadataRequest, UpdateOpsMetadataResult } from "../models/models_2";
import { de_UpdateOpsMetadataCommand, se_UpdateOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOpsMetadataCommand}.
 */
export interface UpdateOpsMetadataCommandInput extends UpdateOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpsMetadataCommand}.
 */
export interface UpdateOpsMetadataCommandOutput extends UpdateOpsMetadataResult, __MetadataBearer {}

/**
 * @public
 * <p>Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 *   MetadataToUpdate: { // MetadataMap
 *     "<keys>": { // MetadataValue
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   KeysToDelete: [ // MetadataKeysToDeleteList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOpsMetadataResult
 * //   OpsMetadataArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateOpsMetadataCommandInput - {@link UpdateOpsMetadataCommandInput}
 * @returns {@link UpdateOpsMetadataCommandOutput}
 * @see {@link UpdateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataKeyLimitExceededException} (client fault)
 *  <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link OpsMetadataTooManyUpdatesException} (client fault)
 *  <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class UpdateOpsMetadataCommand extends $Command<
  UpdateOpsMetadataCommandInput,
  UpdateOpsMetadataCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: UpdateOpsMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOpsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateOpsMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "UpdateOpsMetadata",
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
  private serialize(input: UpdateOpsMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateOpsMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOpsMetadataCommandOutput> {
    return de_UpdateOpsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
