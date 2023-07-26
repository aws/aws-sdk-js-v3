// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutSolFunctionPackageContentInput, PutSolFunctionPackageContentOutput } from "../models/models_0";
import {
  de_PutSolFunctionPackageContentCommand,
  se_PutSolFunctionPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type PutSolFunctionPackageContentCommandInputType = Omit<PutSolFunctionPackageContentInput, "file"> & {
  file: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PutSolFunctionPackageContentCommand}.
 */
export interface PutSolFunctionPackageContentCommandInput extends PutSolFunctionPackageContentCommandInputType {}
/**
 * @public
 *
 * The output of {@link PutSolFunctionPackageContentCommand}.
 */
export interface PutSolFunctionPackageContentCommandOutput
  extends PutSolFunctionPackageContentOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Uploads the contents of a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, PutSolFunctionPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, PutSolFunctionPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // PutSolFunctionPackageContentInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   contentType: "application/zip",
 *   file: "BLOB_VALUE", // required
 * };
 * const command = new PutSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // PutSolFunctionPackageContentOutput
 * //   id: "STRING_VALUE", // required
 * //   vnfdId: "STRING_VALUE", // required
 * //   vnfProductName: "STRING_VALUE", // required
 * //   vnfProvider: "STRING_VALUE", // required
 * //   vnfdVersion: "STRING_VALUE", // required
 * //   metadata: { // PutSolFunctionPackageContentMetadata
 * //     vnfd: { // FunctionArtifactMeta
 * //       overrides: [ // OverrideList
 * //         { // ToscaOverride
 * //           name: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutSolFunctionPackageContentCommandInput - {@link PutSolFunctionPackageContentCommandInput}
 * @returns {@link PutSolFunctionPackageContentCommandOutput}
 * @see {@link PutSolFunctionPackageContentCommandInput} for command's `input` shape.
 * @see {@link PutSolFunctionPackageContentCommandOutput} for command's `response` shape.
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
export class PutSolFunctionPackageContentCommand extends $Command<
  PutSolFunctionPackageContentCommandInput,
  PutSolFunctionPackageContentCommandOutput,
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
  constructor(readonly input: PutSolFunctionPackageContentCommandInput) {
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
  ): Handler<PutSolFunctionPackageContentCommandInput, PutSolFunctionPackageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSolFunctionPackageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "PutSolFunctionPackageContentCommand";
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
  private serialize(input: PutSolFunctionPackageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSolFunctionPackageContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutSolFunctionPackageContentCommandOutput> {
    return de_PutSolFunctionPackageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
