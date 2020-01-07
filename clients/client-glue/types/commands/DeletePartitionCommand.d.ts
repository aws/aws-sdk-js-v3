import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeletePartitionRequest, DeletePartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePartitionCommandInput = DeletePartitionRequest;
export declare type DeletePartitionCommandOutput = DeletePartitionResponse & __MetadataBearer;
export declare class DeletePartitionCommand extends $Command<DeletePartitionCommandInput, DeletePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeletePartitionCommandInput;
    constructor(input: DeletePartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePartitionCommandInput, DeletePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
