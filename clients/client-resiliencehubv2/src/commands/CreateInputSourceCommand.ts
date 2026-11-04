// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateInputSourceRequest, CreateInputSourceResponse } from "../models/models_0";
import { CreateInputSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInputSourceCommand}.
 */
export interface CreateInputSourceCommandInput extends CreateInputSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateInputSourceCommand}.
 */
export interface CreateInputSourceCommandOutput extends CreateInputSourceResponse, __MetadataBearer {}

/**
 * Creates an input source for a service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateInputSourceCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateInputSourceCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateInputSourceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   resourceConfiguration: { // ResourceConfiguration Union: only one key present
 *     resourceTags: [ // ResourceTagList
 *       { // ResourceTag
 *         key: "STRING_VALUE", // required
 *         values: [ // TagValueList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     cfnStackArn: "STRING_VALUE",
 *     tfStateFileUrl: "STRING_VALUE",
 *     eks: { // EksSource
 *       clusterArn: "STRING_VALUE", // required
 *       namespaces: [ // EksNamespaceList // required
 *         "STRING_VALUE",
 *       ],
 *       labelSelector: { // EksLabelSelector
 *         matchLabels: { // EksLabelMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         matchExpressions: [ // EksLabelSelectorRequirementList
 *           { // EksLabelSelectorRequirement
 *             key: "STRING_VALUE", // required
 *             operator: "IN" || "NOT_IN" || "EXISTS" || "DOES_NOT_EXIST", // required
 *             values: [ // EksLabelValueList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     designFileS3Url: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateInputSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateInputSourceResponse
 * //   serviceArn: "STRING_VALUE", // required
 * //   inputSourceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInputSourceCommandInput - {@link CreateInputSourceCommandInput}
 * @returns {@link CreateInputSourceCommandOutput}
 * @see {@link CreateInputSourceCommandInput} for command's `input` shape.
 * @see {@link CreateInputSourceCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quota exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class CreateInputSourceCommand extends command<CreateInputSourceCommandInput, CreateInputSourceCommandOutput>(
  _ep0,
  _mw0,
  "CreateInputSource",
  CreateInputSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInputSourceRequest;
      output: CreateInputSourceResponse;
    };
    sdk: {
      input: CreateInputSourceCommandInput;
      output: CreateInputSourceCommandOutput;
    };
  };
}
