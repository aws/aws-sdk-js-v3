import { CodeStarconnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarconnectionsClient";
import { DeleteConnectionInput, DeleteConnectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConnectionCommandInput = DeleteConnectionInput;
export declare type DeleteConnectionCommandOutput = DeleteConnectionOutput & __MetadataBearer;
export declare class DeleteConnectionCommand extends $Command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput, CodeStarconnectionsClientResolvedConfig> {
    readonly input: DeleteConnectionCommandInput;
    constructor(input: DeleteConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarconnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
