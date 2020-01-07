import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordInput, PutRecordOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRecordCommandInput = PutRecordInput;
export declare type PutRecordCommandOutput = PutRecordOutput & __MetadataBearer;
export declare class PutRecordCommand extends $Command<PutRecordCommandInput, PutRecordCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: PutRecordCommandInput;
    constructor(input: PutRecordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRecordCommandInput, PutRecordCommandOutput>;
    private serialize;
    private deserialize;
}
