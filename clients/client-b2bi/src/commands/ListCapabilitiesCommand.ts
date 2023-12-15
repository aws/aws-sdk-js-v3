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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { ListCapabilitiesRequest, ListCapabilitiesResponse } from "../models/models_0";
import { de_ListCapabilitiesCommand, se_ListCapabilitiesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandInput extends ListCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandOutput extends ListCapabilitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListCapabilitiesCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListCapabilitiesCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListCapabilitiesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCapabilitiesResponse
 * //   capabilities: [ // CapabilityList // required
 * //     { // CapabilitySummary
 * //       capabilityId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "edi", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapabilitiesCommandInput - {@link ListCapabilitiesCommandInput}
 * @returns {@link ListCapabilitiesCommandOutput}
 * @see {@link ListCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample ListCapabilities call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo"
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capabilities": [
 *     {
 *       "name": "b2biexample",
 *       "type": "edi",
 *       "capabilityId": "ca-963a8121e4fc4e348",
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "modifiedAt": "2023-11-01T21:51:05.504Z"
 *     }
 *   ],
 *   "nextToken": "foo"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListCapabilitiesCommand extends $Command<
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
  B2biClientResolvedConfig
> {
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
  constructor(readonly input: ListCapabilitiesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCapabilitiesCommandInput, ListCapabilitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCapabilitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "ListCapabilitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "ListCapabilities",
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
  private serialize(input: ListCapabilitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCapabilitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCapabilitiesCommandOutput> {
    return de_ListCapabilitiesCommand(output, context);
  }
}
