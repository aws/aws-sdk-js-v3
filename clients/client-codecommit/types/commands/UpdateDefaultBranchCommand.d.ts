import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateDefaultBranchInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDefaultBranchCommandInput = UpdateDefaultBranchInput;
export declare type UpdateDefaultBranchCommandOutput = __MetadataBearer;
export declare class UpdateDefaultBranchCommand extends $Command<UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateDefaultBranchCommandInput;
    constructor(input: UpdateDefaultBranchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput>;
    private serialize;
    private deserialize;
}
