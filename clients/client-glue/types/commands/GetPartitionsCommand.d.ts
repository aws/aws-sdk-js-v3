import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionsRequest, GetPartitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPartitionsCommandInput = GetPartitionsRequest;
export declare type GetPartitionsCommandOutput = GetPartitionsResponse & __MetadataBearer;
export declare class GetPartitionsCommand extends $Command<GetPartitionsCommandInput, GetPartitionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetPartitionsCommandInput;
    constructor(input: GetPartitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartitionsCommandInput, GetPartitionsCommandOutput>;
    private serialize;
    private deserialize;
}
