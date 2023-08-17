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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { GetSolFunctionPackageDescriptorInput, GetSolFunctionPackageDescriptorOutput } from "../models/models_0";
import {
  de_GetSolFunctionPackageDescriptorCommand,
  se_GetSolFunctionPackageDescriptorCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionPackageDescriptorCommand}.
 */
export interface GetSolFunctionPackageDescriptorCommandInput extends GetSolFunctionPackageDescriptorInput {}
/**
 * @public
 */
export type GetSolFunctionPackageDescriptorCommandOutputType = Omit<GetSolFunctionPackageDescriptorOutput, "vnfd"> & {
  vnfd?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolFunctionPackageDescriptorCommand}.
 */
export interface GetSolFunctionPackageDescriptorCommandOutput
  extends GetSolFunctionPackageDescriptorCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a function package descriptor in a function package.</p>
 *          <p>A function package descriptor is a .yaml file in a function package that uses the TOSCA standard to describe how the network function in the function package should run on your network.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageDescriptorCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageDescriptorCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionPackageDescriptorInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   accept: "text/plain", // required
 * };
 * const command = new GetSolFunctionPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionPackageDescriptorOutput
 * //   contentType: "text/plain",
 * //   vnfd: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSolFunctionPackageDescriptorCommandInput - {@link GetSolFunctionPackageDescriptorCommandInput}
 * @returns {@link GetSolFunctionPackageDescriptorCommandOutput}
 * @see {@link GetSolFunctionPackageDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageDescriptorCommandOutput} for command's `response` shape.
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
export class GetSolFunctionPackageDescriptorCommand extends $Command<
  GetSolFunctionPackageDescriptorCommandInput,
  GetSolFunctionPackageDescriptorCommandOutput,
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
  constructor(readonly input: GetSolFunctionPackageDescriptorCommandInput) {
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
  ): Handler<GetSolFunctionPackageDescriptorCommandInput, GetSolFunctionPackageDescriptorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolFunctionPackageDescriptorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolFunctionPackageDescriptorCommand";
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
  private serialize(
    input: GetSolFunctionPackageDescriptorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSolFunctionPackageDescriptorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSolFunctionPackageDescriptorCommandOutput> {
    return de_GetSolFunctionPackageDescriptorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
