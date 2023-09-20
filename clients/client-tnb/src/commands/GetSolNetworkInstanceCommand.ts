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
  GetSolNetworkInstanceInput,
  GetSolNetworkInstanceOutput,
  GetSolNetworkInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSolNetworkInstanceCommand, se_GetSolNetworkInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkInstanceCommand}.
 */
export interface GetSolNetworkInstanceCommandInput extends GetSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetSolNetworkInstanceCommand}.
 */
export interface GetSolNetworkInstanceCommandOutput extends GetSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details of the network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsInstanceName: "STRING_VALUE", // required
 * //   nsInstanceDescription: "STRING_VALUE", // required
 * //   nsdId: "STRING_VALUE", // required
 * //   nsdInfoId: "STRING_VALUE", // required
 * //   nsState: "INSTANTIATED" || "NOT_INSTANTIATED" || "IMPAIRED" || "STOPPED" || "DELETED" || "INSTANTIATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "TERMINATE_IN_PROGRESS",
 * //   lcmOpInfo: { // LcmOperationInfo
 * //     nsLcmOpOccId: "STRING_VALUE", // required
 * //   },
 * //   metadata: { // GetSolNetworkInstanceMetadata
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModified: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolNetworkInstanceCommandInput - {@link GetSolNetworkInstanceCommandInput}
 * @returns {@link GetSolNetworkInstanceCommandOutput}
 * @see {@link GetSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 */
export class GetSolNetworkInstanceCommand extends $Command<
  GetSolNetworkInstanceCommandInput,
  GetSolNetworkInstanceCommandOutput,
  TnbClientResolvedConfig
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
  constructor(readonly input: GetSolNetworkInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSolNetworkInstanceCommandInput, GetSolNetworkInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolNetworkInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolNetworkInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSolNetworkInstanceOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TNB",
        operation: "GetSolNetworkInstance",
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
  private serialize(input: GetSolNetworkInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSolNetworkInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolNetworkInstanceCommandOutput> {
    return de_GetSolNetworkInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
