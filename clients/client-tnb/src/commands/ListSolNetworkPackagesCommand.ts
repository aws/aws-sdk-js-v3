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

import { ListSolNetworkPackagesInput, ListSolNetworkPackagesOutput } from "../models/models_0";
import { de_ListSolNetworkPackagesCommand, se_ListSolNetworkPackagesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandInput extends ListSolNetworkPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandOutput extends ListSolNetworkPackagesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists network packages.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkPackagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkPackagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkPackages: [ // ListSolNetworkPackageResources // required
 * //     { // ListSolNetworkPackageInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsdOnboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //       nsdOperationalState: "ENABLED" || "DISABLED", // required
 * //       nsdUsageState: "IN_USE" || "NOT_IN_USE", // required
 * //       nsdId: "STRING_VALUE",
 * //       nsdName: "STRING_VALUE",
 * //       nsdVersion: "STRING_VALUE",
 * //       nsdDesigner: "STRING_VALUE",
 * //       nsdInvariantId: "STRING_VALUE",
 * //       vnfPkgIds: [ // VnfPkgIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       metadata: { // ListSolNetworkPackageMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkPackagesCommandInput - {@link ListSolNetworkPackagesCommandInput}
 * @returns {@link ListSolNetworkPackagesCommandOutput}
 * @see {@link ListSolNetworkPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkPackagesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
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
export class ListSolNetworkPackagesCommand extends $Command<
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
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
  constructor(readonly input: ListSolNetworkPackagesCommandInput) {
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
  ): Handler<ListSolNetworkPackagesCommandInput, ListSolNetworkPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolNetworkPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolNetworkPackagesCommand";
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
  private serialize(input: ListSolNetworkPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSolNetworkPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolNetworkPackagesCommandOutput> {
    return de_ListSolNetworkPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
