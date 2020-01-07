import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteProjectInput, DeleteProjectOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProjectCommandInput = DeleteProjectInput;
export declare type DeleteProjectCommandOutput = DeleteProjectOutput & __MetadataBearer;
export declare class DeleteProjectCommand extends $Command<DeleteProjectCommandInput, DeleteProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteProjectCommandInput;
    constructor(input: DeleteProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProjectCommandInput, DeleteProjectCommandOutput>;
    private serialize;
    private deserialize;
}
