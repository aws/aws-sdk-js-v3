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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineInput, GetPipelineOutput } from "../models/models_0";
import { de_GetPipelineCommand, se_GetPipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandInput extends GetPipelineInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandOutput extends GetPipelineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 *             return the entire structure of a pipeline in JSON format, which can then be modified and
 *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // GetPipelineInput
 *   name: "STRING_VALUE", // required
 *   version: Number("int"),
 * };
 * const command = new GetPipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineOutput
 * //   pipeline: { // PipelineDeclaration
 * //     name: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     artifactStore: { // ArtifactStore
 * //       type: "S3", // required
 * //       location: "STRING_VALUE", // required
 * //       encryptionKey: { // EncryptionKey
 * //         id: "STRING_VALUE", // required
 * //         type: "KMS", // required
 * //       },
 * //     },
 * //     artifactStores: { // ArtifactStoreMap
 * //       "<keys>": {
 * //         type: "S3", // required
 * //         location: "STRING_VALUE", // required
 * //         encryptionKey: {
 * //           id: "STRING_VALUE", // required
 * //           type: "KMS", // required
 * //         },
 * //       },
 * //     },
 * //     stages: [ // PipelineStageDeclarationList // required
 * //       { // StageDeclaration
 * //         name: "STRING_VALUE", // required
 * //         blockers: [ // StageBlockerDeclarationList
 * //           { // BlockerDeclaration
 * //             name: "STRING_VALUE", // required
 * //             type: "Schedule", // required
 * //           },
 * //         ],
 * //         actions: [ // StageActionDeclarationList // required
 * //           { // ActionDeclaration
 * //             name: "STRING_VALUE", // required
 * //             actionTypeId: { // ActionTypeId
 * //               category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //               owner: "AWS" || "ThirdParty" || "Custom", // required
 * //               provider: "STRING_VALUE", // required
 * //               version: "STRING_VALUE", // required
 * //             },
 * //             runOrder: Number("int"),
 * //             configuration: { // ActionConfigurationMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             outputArtifacts: [ // OutputArtifactList
 * //               { // OutputArtifact
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             inputArtifacts: [ // InputArtifactList
 * //               { // InputArtifact
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             roleArn: "STRING_VALUE",
 * //             region: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     version: Number("int"),
 * //   },
 * //   metadata: { // PipelineMetadata
 * //     pipelineArn: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     updated: new Date("TIMESTAMP"),
 * //     pollingDisabledAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPipelineCommandInput - {@link GetPipelineCommandInput}
 * @returns {@link GetPipelineCommandOutput}
 * @see {@link GetPipelineCommandInput} for command's `input` shape.
 * @see {@link GetPipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link PipelineVersionNotFoundException} (client fault)
 *  <p>The pipeline version was specified in an invalid format or cannot be
 *             found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class GetPipelineCommand extends $Command<
  GetPipelineCommandInput,
  GetPipelineCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: GetPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPipelineCommandInput, GetPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPipelineCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetPipelineCommand";
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
  private serialize(input: GetPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineCommandOutput> {
    return de_GetPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
