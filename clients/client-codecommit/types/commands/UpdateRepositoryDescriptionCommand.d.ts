import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateRepositoryDescriptionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRepositoryDescriptionCommandInput = UpdateRepositoryDescriptionInput;
export declare type UpdateRepositoryDescriptionCommandOutput = __MetadataBearer;
export declare class UpdateRepositoryDescriptionCommand extends $Command<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateRepositoryDescriptionCommandInput;
    constructor(input: UpdateRepositoryDescriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
