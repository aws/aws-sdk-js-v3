import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { TestRepositoryTriggersInput, TestRepositoryTriggersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestRepositoryTriggersCommandInput = TestRepositoryTriggersInput;
export declare type TestRepositoryTriggersCommandOutput = TestRepositoryTriggersOutput & __MetadataBearer;
export declare class TestRepositoryTriggersCommand extends $Command<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: TestRepositoryTriggersCommandInput;
    constructor(input: TestRepositoryTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
