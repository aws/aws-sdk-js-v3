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
import { ListProfilesRequest, ListProfilesResponse } from "../models/models_0";
import { de_ListProfilesCommand, se_ListProfilesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandInput extends ListProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandOutput extends ListProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the profiles associated with your Amazon Web Services account for your current or specified region. Profiles contain basic information about you and your business.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListProfilesCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListProfilesCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListProfilesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilesResponse
 * //   profiles: [ // ProfileList // required
 * //     { // ProfileSummary
 * //       profileId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       businessName: "STRING_VALUE", // required
 * //       logging: "ENABLED" || "DISABLED",
 * //       logGroupName: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilesCommandInput - {@link ListProfilesCommandInput}
 * @returns {@link ListProfilesCommandOutput}
 * @see {@link ListProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProfilesCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample ListProfiles call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo"
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "foo",
 *   "profiles": [
 *     {
 *       "name": "Shipping Profile",
 *       "businessName": "John's Trucking",
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "logGroupName": "b2bi/p-60fbc37c87f04fce9-Logs",
 *       "logging": "ENABLED",
 *       "profileId": "p-60fbc37c87f04fce9"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListProfilesCommand extends $Command<
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
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
  constructor(readonly input: ListProfilesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfilesCommandInput, ListProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListProfilesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "ListProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "ListProfiles",
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
  private serialize(input: ListProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfilesCommandOutput> {
    return de_ListProfilesCommand(output, context);
  }
}
