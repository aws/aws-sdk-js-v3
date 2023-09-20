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
  UpdateSolNetworkInstanceInput,
  UpdateSolNetworkInstanceInputFilterSensitiveLog,
  UpdateSolNetworkInstanceOutput,
  UpdateSolNetworkInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateSolNetworkInstanceCommand, se_UpdateSolNetworkInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSolNetworkInstanceCommand}.
 */
export interface UpdateSolNetworkInstanceCommandInput extends UpdateSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link UpdateSolNetworkInstanceCommand}.
 */
export interface UpdateSolNetworkInstanceCommandOutput extends UpdateSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, UpdateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, UpdateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // UpdateSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 *   updateType: "MODIFY_VNF_INFORMATION", // required
 *   modifyVnfInfoData: { // UpdateSolNetworkModify
 *     vnfInstanceId: "STRING_VALUE", // required
 *     vnfConfigurableProperties: "DOCUMENT_VALUE", // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSolNetworkInstanceOutput
 * //   nsLcmOpOccId: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSolNetworkInstanceCommandInput - {@link UpdateSolNetworkInstanceCommandInput}
 * @returns {@link UpdateSolNetworkInstanceCommandOutput}
 * @see {@link UpdateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateSolNetworkInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quotas have been exceeded.</p>
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
export class UpdateSolNetworkInstanceCommand extends $Command<
  UpdateSolNetworkInstanceCommandInput,
  UpdateSolNetworkInstanceCommandOutput,
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
  constructor(readonly input: UpdateSolNetworkInstanceCommandInput) {
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
  ): Handler<UpdateSolNetworkInstanceCommandInput, UpdateSolNetworkInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSolNetworkInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "UpdateSolNetworkInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSolNetworkInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSolNetworkInstanceOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TNB",
        operation: "UpdateSolNetworkInstance",
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
  private serialize(input: UpdateSolNetworkInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSolNetworkInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSolNetworkInstanceCommandOutput> {
    return de_UpdateSolNetworkInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
