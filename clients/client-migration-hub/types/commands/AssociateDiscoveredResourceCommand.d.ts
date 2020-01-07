import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { AssociateDiscoveredResourceRequest, AssociateDiscoveredResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDiscoveredResourceCommandInput = AssociateDiscoveredResourceRequest;
export declare type AssociateDiscoveredResourceCommandOutput = AssociateDiscoveredResourceResult & __MetadataBearer;
export declare class AssociateDiscoveredResourceCommand extends $Command<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: AssociateDiscoveredResourceCommandInput;
    constructor(input: AssociateDiscoveredResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput>;
    private serialize;
    private deserialize;
}
