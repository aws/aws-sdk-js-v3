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

import { PutResourcePolicyMessage, PutResourcePolicyResult } from "../models/models_1";
import { de_PutResourcePolicyCommand, se_PutResourcePolicyCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyMessage {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the resource policy for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PutResourcePolicyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PutResourcePolicyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // PutResourcePolicyMessage
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResult
 * //   ResourcePolicy: { // ResourcePolicy
 * //     ResourceArn: "STRING_VALUE",
 * //     Policy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ConflictPolicyUpdateFault} (client fault)
 *  <p>There is a conflict while updating the resource policy.</p>
 *
 * @throws {@link InvalidPolicyFault} (client fault)
 *  <p>The resource policy isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class PutResourcePolicyCommand extends $Command<
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: PutResourcePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutResourcePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "PutResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "PutResourcePolicy",
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
  private serialize(input: PutResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutResourcePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourcePolicyCommandOutput> {
    return de_PutResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
