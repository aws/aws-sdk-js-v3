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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteWaveRequest, DeleteWaveResponse } from "../models/models_0";
import { de_DeleteWaveCommand, se_DeleteWaveCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandInput extends DeleteWaveRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandOutput extends DeleteWaveResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DeleteWaveRequest
 *   waveID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteWaveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWaveCommandInput - {@link DeleteWaveCommandInput}
 * @returns {@link DeleteWaveCommandOutput}
 * @see {@link DeleteWaveCommandInput} for command's `input` shape.
 * @see {@link DeleteWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class DeleteWaveCommand extends $Command<
  DeleteWaveCommandInput,
  DeleteWaveCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: DeleteWaveCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWaveCommandInput, DeleteWaveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteWaveCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DeleteWaveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "DeleteWave",
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
  private serialize(input: DeleteWaveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteWaveCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWaveCommandOutput> {
    return de_DeleteWaveCommand(output, context);
  }
}
