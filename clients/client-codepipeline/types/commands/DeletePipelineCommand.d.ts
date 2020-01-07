import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeletePipelineInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePipelineCommandInput = DeletePipelineInput;
export declare type DeletePipelineCommandOutput = __MetadataBearer;
export declare class DeletePipelineCommand extends $Command<DeletePipelineCommandInput, DeletePipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeletePipelineCommandInput;
    constructor(input: DeletePipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePipelineCommandInput, DeletePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
