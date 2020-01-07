"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <fullname>Amazon GameLift Service</fullname>
 *         <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server
 *             solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing
 *             resources and deploy your game servers, (2) run game sessions and get players into
 *             games, (3) automatically scale your resources to meet player demand and manage costs,
 *             and (4) track in-depth metrics on game server performance and player usage.</p>
 *
 *         <p>When setting up hosting resources, you can deploy your custom game server or use the
 *             Amazon GameLift Realtime Servers. Realtime Servers gives you the ability to quickly stand up lightweight, efficient
 *             game servers with the core Amazon GameLift infrastructure already built in.</p>
 *
 *         <p>
 *             <b>Get Amazon GameLift Tools and Resources</b>
 *          </p>
 *         <p>This reference guide describes the low-level service API for Amazon GameLift and provides links to
 *             language-specific SDK reference topics. See also
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html">
 *                 Amazon GameLift Tools and Resources</a>.</p>
 *         <p>
 *             <b>API Summary</b>
 *          </p>
 *         <p>The Amazon GameLift service API includes two key sets of actions:</p>
 *         <ul>
 *             <li>
 *                 <p>Manage game sessions and player access --
 *                     Integrate this functionality into game client services in order to create new game
 *                     sessions, retrieve information on existing game sessions; reserve a player slot
 *                     in a game session, request matchmaking, etc.</p>
 *             </li>
 *             <li>
 *                 <p>Configure and manage game server resources --
 *                     Manage your Amazon GameLift hosting resources, including builds, scripts, fleets, queues,
 *                     and aliases. Set up matchmakers, configure auto-scaling, retrieve game logs, and
 *                     get hosting and game metrics.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>
 *                <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">
 *             Task-based list of API actions</a>
 *             </b>
 *          </p>
 */
class GameLiftClient extends smithy_client_1.Client {
    constructor(configuration) {
        let _config_0 = Object.assign(Object.assign({}, runtimeConfig_1.ClientDefaultValues), configuration);
        let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
        let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
        let _config_3 = middleware_signing_1.resolveAwsAuthConfig(_config_2);
        let _config_4 = middleware_retry_1.resolveRetryConfig(_config_3);
        let _config_5 = middleware_user_agent_1.resolveUserAgentConfig(_config_4);
        let _config_6 = middleware_host_header_1.resolveHostHeaderConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
        this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
    }
    destroy() { }
}
exports.GameLiftClient = GameLiftClient;
//# sourceMappingURL=GameLiftClient.js.map