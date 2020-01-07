import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartActivityStreamCommandInput = StartActivityStreamRequest;
export declare type StartActivityStreamCommandOutput = StartActivityStreamResponse & __MetadataBearer;
export declare class StartActivityStreamCommand extends $Command<StartActivityStreamCommandInput, StartActivityStreamCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartActivityStreamCommandInput;
    constructor(input: StartActivityStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartActivityStreamCommandInput, StartActivityStreamCommandOutput>;
    private serialize;
    private deserialize;
}
