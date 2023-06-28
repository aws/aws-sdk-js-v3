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

import { ListSolNetworkInstancesInput, ListSolNetworkInstancesOutput } from "../models/models_0";
import { de_ListSolNetworkInstancesCommand, se_ListSolNetworkInstancesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandInput extends ListSolNetworkInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandOutput extends ListSolNetworkInstancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists your network instances.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkInstancesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkInstances: [ // ListSolNetworkInstanceResources
 * //     { // ListSolNetworkInstanceInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsInstanceName: "STRING_VALUE", // required
 * //       nsInstanceDescription: "STRING_VALUE", // required
 * //       nsdId: "STRING_VALUE", // required
 * //       nsdInfoId: "STRING_VALUE", // required
 * //       nsState: "INSTANTIATED" || "NOT_INSTANTIATED" || "IMPAIRED" || "STOPPED" || "DELETED" || "INSTANTIATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "TERMINATE_IN_PROGRESS", // required
 * //       metadata: { // ListSolNetworkInstanceMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkInstancesCommandInput - {@link ListSolNetworkInstancesCommandInput}
 * @returns {@link ListSolNetworkInstancesCommandOutput}
 * @see {@link ListSolNetworkInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkInstancesCommandOutput} for command's `response` shape.
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
export class ListSolNetworkInstancesCommand extends $Command<
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
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
  constructor(readonly input: ListSolNetworkInstancesCommandInput) {
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
  ): Handler<ListSolNetworkInstancesCommandInput, ListSolNetworkInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolNetworkInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolNetworkInstancesCommand";
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
  private serialize(input: ListSolNetworkInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSolNetworkInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolNetworkInstancesCommandOutput> {
    return de_ListSolNetworkInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
