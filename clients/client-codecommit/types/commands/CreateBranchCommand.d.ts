import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateBranchInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBranchCommandInput = CreateBranchInput;
export declare type CreateBranchCommandOutput = __MetadataBearer;
export declare class CreateBranchCommand extends $Command<CreateBranchCommandInput, CreateBranchCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateBranchCommandInput;
    constructor(input: CreateBranchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBranchCommandInput, CreateBranchCommandOutput>;
    private serialize;
    private deserialize;
}
