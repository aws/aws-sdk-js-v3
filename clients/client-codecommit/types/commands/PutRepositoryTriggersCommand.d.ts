import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PutRepositoryTriggersInput, PutRepositoryTriggersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRepositoryTriggersCommandInput = PutRepositoryTriggersInput;
export declare type PutRepositoryTriggersCommandOutput = PutRepositoryTriggersOutput & __MetadataBearer;
export declare class PutRepositoryTriggersCommand extends $Command<PutRepositoryTriggersCommandInput, PutRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PutRepositoryTriggersCommandInput;
    constructor(input: PutRepositoryTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRepositoryTriggersCommandInput, PutRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
