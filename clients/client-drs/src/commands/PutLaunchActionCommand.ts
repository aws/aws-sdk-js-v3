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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { PutLaunchActionRequest, PutLaunchActionResponse } from "../models/models_0";
import { de_PutLaunchActionCommand, se_PutLaunchActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandInput extends PutLaunchActionRequest {}
/**
 * @public
 *
 * The output of {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandOutput extends PutLaunchActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Puts a resource launch action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, PutLaunchActionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, PutLaunchActionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // PutLaunchActionRequest
 *   resourceId: "STRING_VALUE", // required
 *   actionCode: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionId: "STRING_VALUE", // required
 *   optional: true || false, // required
 *   active: true || false, // required
 *   name: "STRING_VALUE", // required
 *   actionVersion: "STRING_VALUE", // required
 *   category: "STRING_VALUE", // required
 *   parameters: { // LaunchActionParameters
 *     "<keys>": { // LaunchActionParameter
 *       value: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE", // required
 * };
 * const command = new PutLaunchActionCommand(input);
 * const response = await client.send(command);
 * // { // PutLaunchActionResponse
 * //   resourceId: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * //   actionCode: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   active: true || false,
 * //   order: Number("int"),
 * //   actionVersion: "STRING_VALUE",
 * //   optional: true || false,
 * //   parameters: { // LaunchActionParameters
 * //     "<keys>": { // LaunchActionParameter
 * //       value: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLaunchActionCommandInput - {@link PutLaunchActionCommandInput}
 * @returns {@link PutLaunchActionCommandOutput}
 * @see {@link PutLaunchActionCommandInput} for command's `input` shape.
 * @see {@link PutLaunchActionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class PutLaunchActionCommand extends $Command<
  PutLaunchActionCommandInput,
  PutLaunchActionCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: PutLaunchActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLaunchActionCommandInput, PutLaunchActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLaunchActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "PutLaunchActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "PutLaunchAction",
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
  private serialize(input: PutLaunchActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutLaunchActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLaunchActionCommandOutput> {
    return de_PutLaunchActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
