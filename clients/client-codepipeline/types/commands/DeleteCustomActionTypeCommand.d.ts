import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeleteCustomActionTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCustomActionTypeCommandInput = DeleteCustomActionTypeInput;
export declare type DeleteCustomActionTypeCommandOutput = __MetadataBearer;
export declare class DeleteCustomActionTypeCommand extends $Command<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeleteCustomActionTypeCommandInput;
    constructor(input: DeleteCustomActionTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
