import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateDiscoveredResourceRequest, DisassociateDiscoveredResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateDiscoveredResourceCommandInput = DisassociateDiscoveredResourceRequest;
export declare type DisassociateDiscoveredResourceCommandOutput = DisassociateDiscoveredResourceResult & __MetadataBearer;
export declare class DisassociateDiscoveredResourceCommand extends $Command<DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DisassociateDiscoveredResourceCommandInput;
    constructor(input: DisassociateDiscoveredResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput>;
    private serialize;
    private deserialize;
}
