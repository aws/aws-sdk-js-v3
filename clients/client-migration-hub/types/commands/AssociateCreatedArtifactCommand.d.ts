import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { AssociateCreatedArtifactRequest, AssociateCreatedArtifactResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateCreatedArtifactCommandInput = AssociateCreatedArtifactRequest;
export declare type AssociateCreatedArtifactCommandOutput = AssociateCreatedArtifactResult & __MetadataBearer;
export declare class AssociateCreatedArtifactCommand extends $Command<AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: AssociateCreatedArtifactCommandInput;
    constructor(input: AssociateCreatedArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
