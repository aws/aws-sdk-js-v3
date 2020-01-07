import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateRepositoryNameInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRepositoryNameCommandInput = UpdateRepositoryNameInput;
export declare type UpdateRepositoryNameCommandOutput = __MetadataBearer;
export declare class UpdateRepositoryNameCommand extends $Command<UpdateRepositoryNameCommandInput, UpdateRepositoryNameCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateRepositoryNameCommandInput;
    constructor(input: UpdateRepositoryNameCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRepositoryNameCommandInput, UpdateRepositoryNameCommandOutput>;
    private serialize;
    private deserialize;
}
