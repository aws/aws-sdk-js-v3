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

import {
  GetSolFunctionInstanceInput,
  GetSolFunctionInstanceOutput,
  GetSolFunctionInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSolFunctionInstanceCommand, se_GetSolFunctionInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionInstanceCommand}.
 */
export interface GetSolFunctionInstanceCommandInput extends GetSolFunctionInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetSolFunctionInstanceCommand}.
 */
export interface GetSolFunctionInstanceCommandOutput extends GetSolFunctionInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details of a network function instance, including the instantation state and metadata from the function package descriptor in the network function package.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionInstanceInput
 *   vnfInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetSolFunctionInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsInstanceId: "STRING_VALUE", // required
 * //   vnfPkgId: "STRING_VALUE", // required
 * //   vnfdId: "STRING_VALUE", // required
 * //   vnfProvider: "STRING_VALUE",
 * //   vnfProductName: "STRING_VALUE",
 * //   vnfdVersion: "STRING_VALUE",
 * //   instantiationState: "INSTANTIATED" || "NOT_INSTANTIATED", // required
 * //   instantiatedVnfInfo: { // GetSolVnfInfo
 * //     vnfState: "STARTED" || "STOPPED",
 * //     vnfcResourceInfo: [ // GetSolVnfcResourceInfoList
 * //       { // GetSolVnfcResourceInfo
 * //         metadata: { // GetSolVnfcResourceInfoMetadata
 * //           nodeGroup: "STRING_VALUE",
 * //           cluster: "STRING_VALUE",
 * //           helmChart: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   metadata: { // GetSolFunctionInstanceMetadata
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
 * @param GetSolFunctionInstanceCommandInput - {@link GetSolFunctionInstanceCommandInput}
 * @returns {@link GetSolFunctionInstanceCommandOutput}
 * @see {@link GetSolFunctionInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionInstanceCommandOutput} for command's `response` shape.
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
export class GetSolFunctionInstanceCommand extends $Command<
  GetSolFunctionInstanceCommandInput,
  GetSolFunctionInstanceCommandOutput,
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
  constructor(readonly input: GetSolFunctionInstanceCommandInput) {
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
  ): Handler<GetSolFunctionInstanceCommandInput, GetSolFunctionInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolFunctionInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolFunctionInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSolFunctionInstanceOutputFilterSensitiveLog,
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
  private serialize(input: GetSolFunctionInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSolFunctionInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolFunctionInstanceCommandOutput> {
    return de_GetSolFunctionInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
