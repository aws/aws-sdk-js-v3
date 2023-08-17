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

import { UpdateServiceSyncBlockerInput, UpdateServiceSyncBlockerOutput } from "../models/models_0";
import { de_UpdateServiceSyncBlockerCommand, se_UpdateServiceSyncBlockerCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandInput extends UpdateServiceSyncBlockerInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandOutput extends UpdateServiceSyncBlockerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update the service sync blocker by resolving it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceSyncBlockerCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceSyncBlockerCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceSyncBlockerInput
 *   id: "STRING_VALUE", // required
 *   resolvedReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceSyncBlockerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceSyncBlockerOutput
 * //   serviceName: "STRING_VALUE", // required
 * //   serviceInstanceName: "STRING_VALUE",
 * //   serviceSyncBlocker: { // SyncBlocker
 * //     id: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdReason: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     contexts: [ // SyncBlockerContexts
 * //       { // SyncBlockerContext
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     resolvedReason: "STRING_VALUE",
 * //     resolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceSyncBlockerCommandInput - {@link UpdateServiceSyncBlockerCommandInput}
 * @returns {@link UpdateServiceSyncBlockerCommandOutput}
 * @see {@link UpdateServiceSyncBlockerCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSyncBlockerCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class UpdateServiceSyncBlockerCommand extends $Command<
  UpdateServiceSyncBlockerCommandInput,
  UpdateServiceSyncBlockerCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: UpdateServiceSyncBlockerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceSyncBlockerCommandInput, UpdateServiceSyncBlockerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceSyncBlockerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServiceSyncBlockerCommand";
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
  private serialize(input: UpdateServiceSyncBlockerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceSyncBlockerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceSyncBlockerCommandOutput> {
    return de_UpdateServiceSyncBlockerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
