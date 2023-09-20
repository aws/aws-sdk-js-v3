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

import { ListSolFunctionInstancesInput, ListSolFunctionInstancesOutput } from "../models/models_0";
import { de_ListSolFunctionInstancesCommand, se_ListSolFunctionInstancesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSolFunctionInstancesCommand}.
 */
export interface ListSolFunctionInstancesCommandInput extends ListSolFunctionInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListSolFunctionInstancesCommand}.
 */
export interface ListSolFunctionInstancesCommandOutput extends ListSolFunctionInstancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists network function instances.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ListSolFunctionInstancesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolFunctionInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolFunctionInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   functionInstances: [ // ListSolFunctionInstanceResources
 * //     { // ListSolFunctionInstanceInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsInstanceId: "STRING_VALUE", // required
 * //       vnfPkgId: "STRING_VALUE", // required
 * //       vnfPkgName: "STRING_VALUE",
 * //       instantiationState: "INSTANTIATED" || "NOT_INSTANTIATED", // required
 * //       instantiatedVnfInfo: { // GetSolInstantiatedVnfInfo
 * //         vnfState: "STARTED" || "STOPPED",
 * //       },
 * //       metadata: { // ListSolFunctionInstanceMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolFunctionInstancesCommandInput - {@link ListSolFunctionInstancesCommandInput}
 * @returns {@link ListSolFunctionInstancesCommandOutput}
 * @see {@link ListSolFunctionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionInstancesCommandOutput} for command's `response` shape.
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
export class ListSolFunctionInstancesCommand extends $Command<
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
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
  constructor(readonly input: ListSolFunctionInstancesCommandInput) {
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
  ): Handler<ListSolFunctionInstancesCommandInput, ListSolFunctionInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolFunctionInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolFunctionInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TNB",
        operation: "ListSolFunctionInstances",
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
  private serialize(input: ListSolFunctionInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSolFunctionInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolFunctionInstancesCommandOutput> {
    return de_ListSolFunctionInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
