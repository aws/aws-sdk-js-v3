import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionRequest, GetPartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPartitionCommandInput = GetPartitionRequest;
export declare type GetPartitionCommandOutput = GetPartitionResponse & __MetadataBearer;
export declare class GetPartitionCommand extends $Command<GetPartitionCommandInput, GetPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetPartitionCommandInput;
    constructor(input: GetPartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartitionCommandInput, GetPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
