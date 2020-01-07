import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateProjectInput, UpdateProjectOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProjectCommandInput = UpdateProjectInput;
export declare type UpdateProjectCommandOutput = UpdateProjectOutput & __MetadataBearer;
export declare class UpdateProjectCommand extends $Command<UpdateProjectCommandInput, UpdateProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: UpdateProjectCommandInput;
    constructor(input: UpdateProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProjectCommandInput, UpdateProjectCommandOutput>;
    private serialize;
    private deserialize;
}
