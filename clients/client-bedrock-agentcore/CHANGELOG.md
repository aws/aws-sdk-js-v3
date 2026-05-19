# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1050.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1049.0...v3.1050.0) (2026-05-19)


### Features

* **client-bedrock-agentcore:** Add RetryableConflictException (HTTP 409) to InvokeAgentRuntime and StopRuntimeSession to prevent orphaned VMs during concurrent session access. The SDK automatically retries this exception with backoff. Enforcement is not yet active and will be enabled in a future service update. ([239af13](https://github.com/aws/aws-sdk-js-v3/commit/239af13eb6799a89d6cf3257d664004a7a4fbfa2))





# [3.1049.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1048.0...v3.1049.0) (2026-05-18)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1048.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1047.0...v3.1048.0) (2026-05-15)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1047.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1046.0...v3.1047.0) (2026-05-14)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1046.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1045.0...v3.1046.0) (2026-05-14)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1045.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1044.0...v3.1045.0) (2026-05-07)


### Features

* **client-bedrock-agentcore:** Launching AgentCore payments - a capability that provides secure, instant microtransaction payments for AI agents to access paid APIs, MCP servers, and content. It handles payment processing for x402 protocol, payment limits, and 3P wallet integrations with Coinbase CDP and Stripe (Privy). ([1e1031a](https://github.com/aws/aws-sdk-js-v3/commit/1e1031a7c070e56c2c781df05af75baf543e65ca))





# [3.1044.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1043.0...v3.1044.0) (2026-05-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1043.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1042.0...v3.1043.0) (2026-05-05)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1042.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1041.0...v3.1042.0) (2026-05-04)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1041.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1040.0...v3.1041.0) (2026-05-01)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1040.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1039.0...v3.1040.0) (2026-04-30)


### Features

* **client-bedrock-agentcore:** AgentCore Identity now supports on-behalf-of token exchange OAuth2. AgentCore Memory now supports metadata for LongTerm Memory Records. ([948fd09](https://github.com/aws/aws-sdk-js-v3/commit/948fd098ee4dfca06475b0f5e9e324f76a7fed90))





# [3.1039.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1038.0...v3.1039.0) (2026-04-29)


### Features

* **client-bedrock-agentcore:** Adds batch evaluation for running evaluators against multiple agent sessions with server-side orchestration, AI-powered recommendations for optimizing system prompts and tool descriptions, and AB testing with controlled traffic splitting and statistical significance reporting ([c9db871](https://github.com/aws/aws-sdk-js-v3/commit/c9db871637ce5b58a88b77d49f98d4c6010b07c7))





# [3.1038.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1037.0...v3.1038.0) (2026-04-27)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1037.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1036.0...v3.1037.0) (2026-04-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1036.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1035.0...v3.1036.0) (2026-04-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1035.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1034.0...v3.1035.0) (2026-04-22)


### Features

* **client-bedrock-agentcore:** Adds support for Amazon Bedrock AgentCore Harness data plane APIs, enabling customers to invoke managed agent loops and execute commands on live agent sessions with streaming responses. ([a465bad](https://github.com/aws/aws-sdk-js-v3/commit/a465bad856440f341eb49f5d6be50d5fc1c0a8b0))





# [3.1034.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1033.0...v3.1034.0) (2026-04-21)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1033.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1032.0...v3.1033.0) (2026-04-20)


### Features

* **clients:** use binary decision diagrams for endpoint resolution ([#7931](https://github.com/aws/aws-sdk-js-v3/issues/7931)) ([ff1b2ba](https://github.com/aws/aws-sdk-js-v3/commit/ff1b2baed919216fa1ddf3d116d500d05f0e436b))





# [3.1032.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1031.0...v3.1032.0) (2026-04-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1031.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1030.0...v3.1031.0) (2026-04-16)


### Features

* **client-bedrock-agentcore:** Introducing NamespacePath in AgentCore Memory to support hierarchical prefix based memory record retrieval. ([91aeaed](https://github.com/aws/aws-sdk-js-v3/commit/91aeaedc493b90f434a359edd6fc349a6ebd4414))





# [3.1030.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1029.0...v3.1030.0) (2026-04-13)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1029.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1028.0...v3.1029.0) (2026-04-10)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1028.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1027.0...v3.1028.0) (2026-04-09)


### Features

* **client-bedrock-agentcore:** Introducing support for SearchRegistryRecords API on AgentCoreRegistry ([6ac1ecc](https://github.com/aws/aws-sdk-js-v3/commit/6ac1ecc5ed727a2c9b92d587dd7b41ac3d5440ee))





# [3.1027.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1026.0...v3.1027.0) (2026-04-08)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1026.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1025.0...v3.1026.0) (2026-04-07)


### Features

* **client-bedrock-agentcore:** This release includes support for 1) InvokeBrowser API, enabling OS-level control of AgentCore Browser Tool sessions through mouse actions, keyboard input, and screenshots. 2) Added documentation noting that empty sessions are automatically deleted after one day in the ListSessions API. ([209baf8](https://github.com/aws/aws-sdk-js-v3/commit/209baf8c3004f6b7d9aa736fcaf896f6bb35ada1))





# [3.1025.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1024.0...v3.1025.0) (2026-04-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1024.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1023.0...v3.1024.0) (2026-04-03)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1023.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1022.0...v3.1023.0) (2026-04-02)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1022.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1021.0...v3.1022.0) (2026-04-01)


### Features

* **client-bedrock-agentcore:** Added the ability to filter out empty sessions when listing sessions. Customers can now retrieve only sessions that still contain events, eliminating the need to check each session individually. No changes required for existing integrations. ([a4d1169](https://github.com/aws/aws-sdk-js-v3/commit/a4d1169cd9611b5ed059e436250a26304de804c5))





# [3.1021.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1020.0...v3.1021.0) (2026-03-31)


### Bug Fixes

* **codegen:** sync for adaptive retry throttling detection fix ([#7905](https://github.com/aws/aws-sdk-js-v3/issues/7905)) ([03f108d](https://github.com/aws/aws-sdk-js-v3/commit/03f108d08c37fcde9de0a62c29887458e980d84e))





# [3.1020.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1019.0...v3.1020.0) (2026-03-30)


### Features

* **client-bedrock-agentcore:** Adds Ground Truth support for AgentCore Evaluations (Evaluate) ([7d2bcbf](https://github.com/aws/aws-sdk-js-v3/commit/7d2bcbf65452c9b6285f9e26b539a9c2b1c74051))





# [3.1019.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1018.0...v3.1019.0) (2026-03-27)


### Features

* **client-bedrock-agentcore:** Adding AgentCore Code Interpreter Node.js Runtime Support with an optional runtime field ([5a5bd74](https://github.com/aws/aws-sdk-js-v3/commit/5a5bd7431d23c50120ab155cc73f0e18dff3db97))





# [3.1018.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1017.0...v3.1018.0) (2026-03-26)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1017.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1016.0...v3.1017.0) (2026-03-25)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1016.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1015.0...v3.1016.0) (2026-03-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1015.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1014.0...v3.1015.0) (2026-03-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1014.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1013.0...v3.1014.0) (2026-03-20)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1013.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1012.0...v3.1013.0) (2026-03-19)


### Features

* **client-bedrock-agentcore:** This release includes SDK support for the following new features on AgentCore Built In Tools.  1. Enterprise Policies for AgentCore Browser Tool. 2. Root CA Configuration Support for AgentCore Browser Tool and Code Interpreter. 3. API changes to AgentCore Browser Profile APIs ([088f058](https://github.com/aws/aws-sdk-js-v3/commit/088f0580ba0fdaca8c1d86daa6317a4c1a9047c1))





# [3.1012.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1011.0...v3.1012.0) (2026-03-18)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1011.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1010.0...v3.1011.0) (2026-03-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1010.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1009.0...v3.1010.0) (2026-03-16)


### Features

* **client-bedrock-agentcore:** Provide support to perform deterministic operations on agent runtime through shell command executions via the new InvokeAgentRuntimeCommand API ([14fb557](https://github.com/aws/aws-sdk-js-v3/commit/14fb5577676ccd1dded7633ce1efe6efcc3b1632))





# [3.1009.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1008.0...v3.1009.0) (2026-03-13)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1008.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1007.0...v3.1008.0) (2026-03-12)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1007.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1006.0...v3.1007.0) (2026-03-11)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1006.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1005.0...v3.1006.0) (2026-03-10)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1005.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1004.0...v3.1005.0) (2026-03-09)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1004.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1003.0...v3.1004.0) (2026-03-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1003.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1002.0...v3.1003.0) (2026-03-05)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1002.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1001.0...v3.1002.0) (2026-03-04)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1001.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1000.0...v3.1001.0) (2026-03-03)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.1000.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.999.0...v3.1000.0) (2026-02-27)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.999.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.998.0...v3.999.0) (2026-02-26)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.998.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.997.0...v3.998.0) (2026-02-25)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.997.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.996.0...v3.997.0) (2026-02-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.996.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.995.0...v3.996.0) (2026-02-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.995.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.994.0...v3.995.0) (2026-02-20)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.994.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.993.0...v3.994.0) (2026-02-19)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.993.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.992.0...v3.993.0) (2026-02-18)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.992.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.991.0...v3.992.0) (2026-02-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.991.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.990.0...v3.991.0) (2026-02-16)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.990.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.989.0...v3.990.0) (2026-02-13)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.989.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.988.0...v3.989.0) (2026-02-12)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.988.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.987.0...v3.988.0) (2026-02-11)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.987.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.986.0...v3.987.0) (2026-02-10)


### Features

* **client-bedrock-agentcore:** Added AgentCore browser proxy configuration support, allowing routing of browser traffic through HTTP and HTTPS proxy servers with authentication and bypass rules. ([9bdc1cf](https://github.com/aws/aws-sdk-js-v3/commit/9bdc1cf81adf5a42bc61e98e48c9449c1732428a))





# [3.986.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.985.0...v3.986.0) (2026-02-09)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.985.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.984.0...v3.985.0) (2026-02-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.984.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.983.0...v3.984.0) (2026-02-05)


### Features

* **client-bedrock-agentcore:** Support Browser profile persistence (cookies and local storage) across sessions for AgentCore Browser. ([ed27353](https://github.com/aws/aws-sdk-js-v3/commit/ed27353946169292c069f2c659dd72333b2eef41))





# [3.983.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.982.0...v3.983.0) (2026-02-04)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.982.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.981.0...v3.982.0) (2026-02-03)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.981.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.980.0...v3.981.0) (2026-02-02)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.980.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.979.0...v3.980.0) (2026-01-30)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.978.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.977.0...v3.978.0) (2026-01-28)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.975.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.974.0...v3.975.0) (2026-01-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.974.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.973.0...v3.974.0) (2026-01-22)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.973.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.972.0...v3.973.0) (2026-01-21)


### Features

* **client-bedrock-agentcore:** Supports custom browser extensions for AgentCore Browser and increased message payloads up to 100KB per message in an Event for AgentCore Memory ([bd22907](https://github.com/aws/aws-sdk-js-v3/commit/bd22907497ec421c8491fecb6782ead52828a1e9))





# [3.972.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.971.0...v3.972.0) (2026-01-20)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.971.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.970.0...v3.971.0) (2026-01-16)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.970.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.969.0...v3.970.0) (2026-01-15)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.969.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.968.0...v3.969.0) (2026-01-14)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.968.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.967.0...v3.968.0) (2026-01-13)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.967.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.966.0...v3.967.0) (2026-01-12)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.966.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.965.0...v3.966.0) (2026-01-09)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.965.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.964.0...v3.965.0) (2026-01-07)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.964.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.963.0...v3.964.0) (2026-01-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.962.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.961.0...v3.962.0) (2026-01-02)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.958.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.957.0...v3.958.0) (2025-12-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.957.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.956.0...v3.957.0) (2025-12-22)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.956.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.955.0...v3.956.0) (2025-12-19)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.955.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.954.0...v3.955.0) (2025-12-18)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.954.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.953.0...v3.954.0) (2025-12-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.953.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.952.0...v3.953.0) (2025-12-16)


### Features

* **clients:** allow protocol selection by class constructor ([#7568](https://github.com/aws/aws-sdk-js-v3/issues/7568)) ([5c5fd2e](https://github.com/aws/aws-sdk-js-v3/commit/5c5fd2e627109cbcdb40ecf0947a5b638d517101))





# [3.952.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.951.0...v3.952.0) (2025-12-15)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.948.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.947.0...v3.948.0) (2025-12-09)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.947.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.946.0...v3.947.0) (2025-12-08)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.946.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.945.0...v3.946.0) (2025-12-05)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.943.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.942.0...v3.943.0) (2025-12-02)


### Features

* **client-bedrock-agentcore:** Support for AgentCore Evaluations and Episodic memory strategy for AgentCore Memory. ([ff3003b](https://github.com/aws/aws-sdk-js-v3/commit/ff3003b7ef9054a894526b766faf78556a41786f))





# [3.940.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.939.0...v3.940.0) (2025-11-25)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.939.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.938.0...v3.939.0) (2025-11-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.937.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.936.0...v3.937.0) (2025-11-20)


### Features

* **client-bedrock-agentcore:** Bedrock AgentCore Memory release for redriving memory extraction jobs (StartMemoryExtractionJob and ListMemoryExtractionJob) ([e5cc06e](https://github.com/aws/aws-sdk-js-v3/commit/e5cc06e3c34d997929b0a7402fccf992a37ae198))





# [3.936.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.935.0...v3.936.0) (2025-11-19)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.935.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.934.0...v3.935.0) (2025-11-19)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.934.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.933.0...v3.934.0) (2025-11-18)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.933.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.932.0...v3.933.0) (2025-11-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.932.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.931.0...v3.932.0) (2025-11-14)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.931.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.930.0...v3.931.0) (2025-11-13)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.930.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.929.0...v3.930.0) (2025-11-12)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.929.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.928.0...v3.929.0) (2025-11-11)


### Features

* **clients:** use schema-serde in AWS REST JSON clients ([#7485](https://github.com/aws/aws-sdk-js-v3/issues/7485)) ([99a3693](https://github.com/aws/aws-sdk-js-v3/commit/99a36932937fa5def2b0371b989c6df4d9358044))





# [3.928.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.927.0...v3.928.0) (2025-11-10)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.927.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.926.0...v3.927.0) (2025-11-07)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.926.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.925.0...v3.926.0) (2025-11-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.925.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.924.0...v3.925.0) (2025-11-05)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.922.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.921.0...v3.922.0) (2025-10-31)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.921.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.920.0...v3.921.0) (2025-10-30)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.920.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.919.0...v3.920.0) (2025-10-29)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.919.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.918.0...v3.919.0) (2025-10-28)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.918.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.917.0...v3.918.0) (2025-10-27)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.917.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.916.0...v3.917.0) (2025-10-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.916.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.915.0...v3.916.0) (2025-10-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.914.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.913.0...v3.914.0) (2025-10-21)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.913.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.912.0...v3.913.0) (2025-10-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.911.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.910.0...v3.911.0) (2025-10-15)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.910.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.909.0...v3.910.0) (2025-10-14)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.909.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.908.0...v3.909.0) (2025-10-13)


### Features

* **client-bedrock-agentcore:** Updated InvokeAgentRuntime API to accept account id optionally and added CompleteResourceTokenAuth API. ([d21a546](https://github.com/aws/aws-sdk-js-v3/commit/d21a546467142617f508d720f8b16a236009a271))





# [3.908.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.907.0...v3.908.0) (2025-10-10)


### Features

* **client-bedrock-agentcore:** Bedrock AgentCore release for Runtime, and Memory. ([9ad809e](https://github.com/aws/aws-sdk-js-v3/commit/9ad809ec1f59ff568791dab2aa410fc27ee6f78e))





# [3.907.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.906.0...v3.907.0) (2025-10-09)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.906.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.905.0...v3.906.0) (2025-10-08)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.904.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.903.0...v3.904.0) (2025-10-06)


### Features

* **client-bedrock-agentcore:** Add support for batch memory management, agent card retrieval and session termination ([8dff96a](https://github.com/aws/aws-sdk-js-v3/commit/8dff96afc6552f72707fca14d17cd9f90083a380))





# [3.901.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.900.0...v3.901.0) (2025-10-01)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.899.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.898.0...v3.899.0) (2025-09-29)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.896.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.895.0...v3.896.0) (2025-09-24)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.895.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.894.0...v3.895.0) (2025-09-23)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.894.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.893.0...v3.894.0) (2025-09-22)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.893.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.892.0...v3.893.0) (2025-09-19)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.891.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.890.0...v3.891.0) (2025-09-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.890.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.889.0...v3.890.0) (2025-09-16)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.888.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.887.0...v3.888.0) (2025-09-12)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.887.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.886.0...v3.887.0) (2025-09-11)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.886.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.885.0...v3.886.0) (2025-09-10)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.883.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.882.0...v3.883.0) (2025-09-05)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.882.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.881.0...v3.882.0) (2025-09-04)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.879.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.878.0...v3.879.0) (2025-08-29)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.876.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.875.0...v3.876.0) (2025-08-26)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.873.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.872.0...v3.873.0) (2025-08-21)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.872.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.871.0...v3.872.0) (2025-08-20)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.864.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.863.0...v3.864.0) (2025-08-08)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.863.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.862.0...v3.863.0) (2025-08-07)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.862.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.861.0...v3.862.0) (2025-08-06)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.860.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.859.0...v3.860.0) (2025-08-04)


### Features

* **client-bedrock-agentcore:** Remove superfluous field from API ([0f75d46](https://github.com/aws/aws-sdk-js-v3/commit/0f75d4615b031a0512cb3b2dd18ee5e21ed2cae1))





# [3.859.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.858.0...v3.859.0) (2025-08-01)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.858.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.857.0...v3.858.0) (2025-07-31)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.857.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.856.0...v3.857.0) (2025-07-30)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.856.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.855.0...v3.856.0) (2025-07-29)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.855.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.854.0...v3.855.0) (2025-07-28)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.848.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.847.0...v3.848.0) (2025-07-17)

**Note:** Version bump only for package @aws-sdk/client-bedrock-agentcore





# [3.847.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.846.0...v3.847.0) (2025-07-16)


### Features

* **client-bedrock-agentcore:** Initial release of Amazon Bedrock AgentCore SDK including Runtime, Built-In Tools, Memory, Gateway and Identity. ([3497fa5](https://github.com/aws/aws-sdk-js-v3/commit/3497fa53ce9ff268bf0081e5e1ceed94fd263ebc))
