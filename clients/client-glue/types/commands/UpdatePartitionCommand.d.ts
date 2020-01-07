import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdatePartitionRequest, UpdatePartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePartitionCommandInput = UpdatePartitionRequest;
export declare type UpdatePartitionCommandOutput = UpdatePartitionResponse & __MetadataBearer;
export declare class UpdatePartitionCommand extends $Command<UpdatePartitionCommandInput, UpdatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdatePartitionCommandInput;
    constructor(input: UpdatePartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePartitionCommandInput, UpdatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
