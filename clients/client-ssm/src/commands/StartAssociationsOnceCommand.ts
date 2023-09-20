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

import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { de_StartAssociationsOnceCommand, se_StartAssociationsOnceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandInput extends StartAssociationsOnceRequest {}
/**
 * @public
 *
 * The output of {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandOutput extends StartAssociationsOnceResult, __MetadataBearer {}

/**
 * @public
 * <p>Runs an association immediately and only one time. This operation can be helpful when
 *    troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartAssociationsOnceRequest
 *   AssociationIds: [ // AssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAssociationsOnceCommandInput - {@link StartAssociationsOnceCommandInput}
 * @returns {@link StartAssociationsOnceCommandOutput}
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InvalidAssociation} (client fault)
 *  <p>The association isn't valid or doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class StartAssociationsOnceCommand extends $Command<
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
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
  constructor(readonly input: StartAssociationsOnceCommandInput) {
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
  ): Handler<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssociationsOnceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartAssociationsOnceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "StartAssociationsOnce",
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
  private serialize(input: StartAssociationsOnceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAssociationsOnceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAssociationsOnceCommandOutput> {
    return de_StartAssociationsOnceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
