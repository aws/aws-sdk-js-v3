import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetRepositoryTriggersInput, GetRepositoryTriggersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRepositoryTriggersCommandInput = GetRepositoryTriggersInput;
export declare type GetRepositoryTriggersCommandOutput = GetRepositoryTriggersOutput & __MetadataBearer;
export declare class GetRepositoryTriggersCommand extends $Command<GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetRepositoryTriggersCommandInput;
    constructor(input: GetRepositoryTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
