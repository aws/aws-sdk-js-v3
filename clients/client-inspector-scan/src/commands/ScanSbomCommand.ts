// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorScanClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorScanClient";
import { ScanSbomRequest, ScanSbomResponse } from "../models/models_0";
import { de_ScanSbomCommand, se_ScanSbomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandInput extends ScanSbomRequest {}
/**
 * @public
 *
 * The output of {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandOutput extends ScanSbomResponse, __MetadataBearer {}

/**
 * <p>Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the <a href="">Amazon Inspector SBOM generator</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorScanClient, ScanSbomCommand } from "@aws-sdk/client-inspector-scan"; // ES Modules import
 * // const { InspectorScanClient, ScanSbomCommand } = require("@aws-sdk/client-inspector-scan"); // CommonJS import
 * // import type { InspectorScanClientConfig } from "@aws-sdk/client-inspector-scan";
 * const config = {}; // type is InspectorScanClientConfig
 * const client = new InspectorScanClient(config);
 * const input = { // ScanSbomRequest
 *   sbom: "DOCUMENT_VALUE", // required
 *   outputFormat: "CYCLONE_DX_1_5" || "INSPECTOR",
 * };
 * const command = new ScanSbomCommand(input);
 * const response = await client.send(command);
 * // { // ScanSbomResponse
 * //   sbom: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param ScanSbomCommandInput - {@link ScanSbomCommandInput}
 * @returns {@link ScanSbomCommandOutput}
 * @see {@link ScanSbomCommandInput} for command's `input` shape.
 * @see {@link ScanSbomCommandOutput} for command's `response` shape.
 * @see {@link InspectorScanClientResolvedConfig | config} for InspectorScanClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *   </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.
 *
 *   </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *
 *   </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link InspectorScanServiceException}
 * <p>Base exception class for all service exceptions from InspectorScan service.</p>
 *
 *
 * @example Sample ScanSbom Call
 * ```javascript
 * //
 * const input = {
 *   outputFormat: "CYCLONE_DX_1_5",
 *   sbom: {
 *     bomFormat: "CycloneDX",
 *     components: [
 *       {
 *         name: "log4j-core",
 *         purl: "pkg:maven/org.apache.logging.log4j/log4j-core@2.17.0",
 *         type: "library"
 *       }
 *     ],
 *     specVersion: "1.5"
 *   }
 * };
 * const command = new ScanSbomCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sbom: {
 *     bomFormat: "CycloneDX",
 *     components: [
 *       {
 *         bom-ref: "comp-1",
 *         name: "log4j-core",
 *         purl: "pkg:maven/org.apache.logging.log4j/log4j-core@2.17.0",
 *         type: "library"
 *       }
 *     ],
 *     metadata: {
 *       properties: [
 *         {
 *           name: "amazon:inspector:sbom_scanner:critical_vulnerabilities",
 *           value: "0"
 *         },
 *         {
 *           name: "amazon:inspector:sbom_scanner:high_vulnerabilities",
 *           value: "0"
 *         },
 *         {
 *           name: "amazon:inspector:sbom_scanner:medium_vulnerabilities",
 *           value: "1"
 *         },
 *         {
 *           name: "amazon:inspector:sbom_scanner:low_vulnerabilities",
 *           value: "0"
 *         }
 *       ],
 *       timestamp: "2023-11-16T02:55:34.355Z",
 *       tools: [
 *         {
 *           name: "CycloneDX SBOM API",
 *           vendor: "Amazon Inspector",
 *           version: "9f8c30ff+20b2305b"
 *         }
 *       ]
 *     },
 *     serialNumber: "urn:uuid:26de5e0a-deb4-4b38-a208-7d19c1832e8c",
 *     specVersion: "1.5",
 *     vulnerabilities: [
 *       {
 *         advisories: [
 *           {
 *             url: "https://www.oracle.com/security-alerts/cpujan2022.html"
 *           },
 *           {
 *             url: "https://lists.debian.org/debian-lts-announce/2021/12/msg00036.html"
 *           },
 *           {
 *             url: "https://cert-portal.siemens.com/productcert/pdf/ssa-784507.pdf"
 *           },
 *           {
 *             url: "https://lists.apache.org/thread/s1o5vlo78ypqxnzn6p8zf6t9shtq5143"
 *           },
 *           {
 *             url: "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/EVV25FXL4FU5X6X5BSL7RLQ7T6F65MRA/"
 *           },
 *           {
 *             url: "https://www.oracle.com/security-alerts/cpuapr2022.html"
 *           },
 *           {
 *             url: "https://www.oracle.com/security-alerts/cpujul2022.html"
 *           },
 *           {
 *             url: "https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-apache-log4j-qRuKNEbd"
 *           },
 *           {
 *             url: "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/T57MPJUW3MA6QGWZRTMCHHMMPQNVKGFC/"
 *           },
 *           {
 *             url: "https://issues.apache.org/jira/browse/LOG4J2-3293"
 *           }
 *         ],
 *         affects: [
 *           {
 *             ref: "comp-1"
 *           }
 *         ],
 *         bom-ref: "vuln-1",
 *         created: "2021-12-28T20:15:08Z",
 *         cwes: [
 *           20,
 *           74
 *         ],
 *         description: "Apache Log4j2 versions 2.0-beta7 through 2.17.0 (excluding security fix releases 2.3.2 and 2.12.4) are vulnerable to a remote code execution (RCE) attack when a configuration uses a JDBC Appender with a JNDI LDAP data source URI when an attacker has control of the target LDAP server. This issue is fixed by limiting JNDI data source names to the java protocol in Log4j2 versions 2.17.1, 2.12.4, and 2.3.2.",
 *         id: "CVE-2021-44832",
 *         properties: [
 *           {
 *             name: "amazon:inspector:sbom_scanner:exploit_available",
 *             value: "true"
 *           },
 *           {
 *             name: "amazon:inspector:sbom_scanner:exploit_last_seen_in_public",
 *             value: "2023-01-02T00:00:00Z"
 *           },
 *           {
 *             name: "amazon:inspector:sbom_scanner:fixed_version:comp-1",
 *             value: "2.17.1"
 *           }
 *         ],
 *         ratings: [
 *           {
 *             method: "CVSSv31",
 *             score: 6.5,
 *             severity: "medium",
 *             source: {
 *               name: "NVD",
 *               url: "https://nvd.nist.gov/vuln/detail/CVE-2021-44832"
 *             },
 *             vector: "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H"
 *           },
 *           {
 *             method: "other",
 *             score: 0.02686,
 *             severity: "none",
 *             source: {
 *               name: "EPSS",
 *               url: "https://www.first.org/epss/"
 *             },
 *             vector: "model:v2023.03.01,date:2023-11-15T00:00:00+0000"
 *           }
 *         ],
 *         references: [
 *           {
 *             id: "GHSA-8489-44mv-ggj8",
 *             source: {
 *               name: "GITHUB_SEC",
 *               url: "https://github.com/advisories"
 *             }
 *           },
 *           {
 *             id: "SNYK-JAVA-ORGAPACHELOGGINGLOG4J-2327339",
 *             source: {
 *               name: "SNYK",
 *               url: "https://security.snyk.io/vuln"
 *             }
 *           }
 *         ],
 *         source: {
 *           name: "NVD",
 *           url: "https://nvd.nist.gov/vuln/detail/CVE-2021-44832"
 *         },
 *         updated: "2023-11-07T03:39:43Z"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ScanSbomCommand extends $Command
  .classBuilder<
    ScanSbomCommandInput,
    ScanSbomCommandOutput,
    InspectorScanClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorScanClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorScan", "ScanSbom", {})
  .n("InspectorScanClient", "ScanSbomCommand")
  .f(void 0, void 0)
  .ser(se_ScanSbomCommand)
  .de(de_ScanSbomCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScanSbomRequest;
      output: ScanSbomResponse;
    };
    sdk: {
      input: ScanSbomCommandInput;
      output: ScanSbomCommandOutput;
    };
  };
}
