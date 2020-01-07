import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateCreatedArtifactCommandInput = DisassociateCreatedArtifactRequest;
export declare type DisassociateCreatedArtifactCommandOutput = DisassociateCreatedArtifactResult & __MetadataBearer;
export declare class DisassociateCreatedArtifactCommand extends $Command<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DisassociateCreatedArtifactCommandInput;
    constructor(input: DisassociateCreatedArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
