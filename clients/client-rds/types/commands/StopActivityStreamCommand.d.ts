import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopActivityStreamCommandInput = StopActivityStreamRequest;
export declare type StopActivityStreamCommandOutput = StopActivityStreamResponse & __MetadataBearer;
export declare class StopActivityStreamCommand extends $Command<StopActivityStreamCommandInput, StopActivityStreamCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopActivityStreamCommandInput;
    constructor(input: StopActivityStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopActivityStreamCommandInput, StopActivityStreamCommandOutput>;
    private serialize;
    private deserialize;
}
