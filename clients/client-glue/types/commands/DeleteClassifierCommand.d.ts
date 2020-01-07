import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteClassifierRequest, DeleteClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClassifierCommandInput = DeleteClassifierRequest;
export declare type DeleteClassifierCommandOutput = DeleteClassifierResponse & __MetadataBearer;
export declare class DeleteClassifierCommand extends $Command<DeleteClassifierCommandInput, DeleteClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteClassifierCommandInput;
    constructor(input: DeleteClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClassifierCommandInput, DeleteClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
