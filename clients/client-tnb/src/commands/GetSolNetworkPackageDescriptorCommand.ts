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

import { GetSolNetworkPackageDescriptorInput, GetSolNetworkPackageDescriptorOutput } from "../models/models_0";
import {
  de_GetSolNetworkPackageDescriptorCommand,
  se_GetSolNetworkPackageDescriptorCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkPackageDescriptorCommand}.
 */
export interface GetSolNetworkPackageDescriptorCommandInput extends GetSolNetworkPackageDescriptorInput {}
/**
 * @public
 */
export type GetSolNetworkPackageDescriptorCommandOutputType = Omit<GetSolNetworkPackageDescriptorOutput, "nsd"> & {
  nsd?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolNetworkPackageDescriptorCommand}.
 */
export interface GetSolNetworkPackageDescriptorCommandOutput
  extends GetSolNetworkPackageDescriptorCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the content of the network service descriptor.</p>
 *          <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkPackageDescriptorCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkPackageDescriptorCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkPackageDescriptorInput
 *   nsdInfoId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkPackageDescriptorOutput
 * //   contentType: "text/plain",
 * //   nsd: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSolNetworkPackageDescriptorCommandInput - {@link GetSolNetworkPackageDescriptorCommandInput}
 * @returns {@link GetSolNetworkPackageDescriptorCommandOutput}
 * @see {@link GetSolNetworkPackageDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkPackageDescriptorCommandOutput} for command's `response` shape.
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
export class GetSolNetworkPackageDescriptorCommand extends $Command<
  GetSolNetworkPackageDescriptorCommandInput,
  GetSolNetworkPackageDescriptorCommandOutput,
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
  constructor(readonly input: GetSolNetworkPackageDescriptorCommandInput) {
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
  ): Handler<GetSolNetworkPackageDescriptorCommandInput, GetSolNetworkPackageDescriptorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolNetworkPackageDescriptorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolNetworkPackageDescriptorCommand";
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
    input: GetSolNetworkPackageDescriptorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSolNetworkPackageDescriptorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSolNetworkPackageDescriptorCommandOutput> {
    return de_GetSolNetworkPackageDescriptorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
